import { useState, useEffect } from "react"
import ProgressBar from "./progress-bar"
import QuestionRenderer from "./question-renderer"
import SubjectSelector from "./subject-selector"
import ResultSummary from "./result-summary"
import History from "./history"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { getQuizQuestions } from "@/lib/quiz-data"
import { saveQuizProgress, saveQuizAttempt } from "@/lib/storage-utils"
import type { Question, QuizProgress, Subject, QuizAttempt } from "@/lib/types"
import {checkAnswer} from "@/lib/utils.ts";

type View = "quiz" | "history"

export default function QuizMasterHub() {
  const [currentView, setCurrentView] = useState<View>("quiz")
  const [subject, setSubject] = useState<Subject | null>(null)
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState<Record<number, string | number>>({});
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [quizStarted, setQuizStarted] = useState(false)
  const [startTime, setStartTime] = useState<Date | null>(null)

  // Load questions when subject changes - always start a fresh quiz
  useEffect(() => {
    if (subject) {
      const loadedQuestions = getQuizQuestions(subject)
      setQuestions(loadedQuestions)

      // Always reset state for a new quiz when subject is selected
      setCurrentQuestionIndex(0)
      setUserAnswers({})
      setScore(0)
      setQuizCompleted(false)
      setStartTime(new Date())
      setQuizStarted(true)
    }
  }, [subject])

  // Save progress whenever relevant state changes
  useEffect(() => {
    if (subject && quizStarted && questions.length > 0) {
      const progress: QuizProgress = {
        subject,
        currentQuestionIndex,
        userAnswers,
        score,
        completed: quizCompleted,
        timestamp: new Date().toISOString(),
        totalQuestions: questions.length,
      }
      saveQuizProgress(subject, progress)

      // If quiz is completed, save the attempt to history
      if (quizCompleted && !Object.keys(userAnswers).some((key) => userAnswers[Number(key)] === null)) {
        const endTime = new Date()
        const duration = startTime ? Math.floor((endTime.getTime() - startTime.getTime()) / 1000) : 0

        const attempt: QuizAttempt = {
          id: `${subject}-${Date.now()}`,
          subject,
          score,
          totalQuestions: questions.length,
          accuracy: questions.length > 0 ? (score / questions.length) * 100 : 0,
          timestamp: new Date().toISOString(),
          duration,
        }

        saveQuizAttempt(attempt)
      }
    }
  }, [currentQuestionIndex, userAnswers, score, quizCompleted, subject, quizStarted, questions, startTime])

  const handleAnswerSubmit = (answer: any) => {
    const currentQuestion = questions[currentQuestionIndex]
    const isCorrect = checkAnswer(currentQuestion, answer)

    // Update user answers
    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: answer,
    }))

    // Update score if answer is correct
    if (isCorrect) {
      setScore((prev) => prev + 1)
    }

    // Move to next question or complete quiz
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1)
    } else {
      setQuizCompleted(true)
    }
  }

  const restartQuiz = () => {
    setCurrentQuestionIndex(0)
    setUserAnswers({})
    setScore(0)
    setQuizCompleted(false)
    setStartTime(new Date())
  }

  const selectNewSubject = () => {
    setSubject(null)
    setQuizStarted(false)
    setQuizCompleted(false)
  }

  const viewHistory = () => {
    setCurrentView("history")
  }

  const backToQuiz = () => {
    setCurrentView("quiz")
  }

  // Show history view if selected
  if (currentView === "history") {
    return <History onBack={backToQuiz} />
  }

  // Quiz view logic
  if (!subject) {
    return (
      <div className="space-y-4">
        <SubjectSelector onSelectSubject={setSubject} />
        <div className="flex justify-center">
          <Button onClick={viewHistory} variant="outline">
            View Quiz History
          </Button>
        </div>
      </div>
    )
  }

  if (quizCompleted) {
    return (
        <ResultSummary
            subject={subject}
            score={score}
            totalQuestions={questions.length}
            questions={questions}
            userAnswers={userAnswers}
            onRestart={restartQuiz}
            onNewSubject={selectNewSubject}
            onViewHistory={viewHistory}
        />
    )
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-center">{subject === "Random" ? "Random Quiz" : `${subject} Quiz`}</CardTitle>
        <ProgressBar current={currentQuestionIndex + 1} total={questions.length} />
      </CardHeader>
      <CardContent>
        {questions.length > 0 && (
          <QuestionRenderer question={questions[currentQuestionIndex]} onSubmitAnswer={handleAnswerSubmit} />
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={selectNewSubject}>
          Change Subject
        </Button>
        <div className="text-sm">
          Score: {score}/{currentQuestionIndex}
        </div>
        <Button variant="outline" onClick={() => window.open(questions[currentQuestionIndex].report, "_blank")}>
            Report question
        </Button>
      </CardFooter>
    </Card>
  )
}
