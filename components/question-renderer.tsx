import { useState } from "react"
import MultipleChoiceQuestion from "./question-types/multiple-choice-question"
import TrueFalseQuestion from "./question-types/true-false-question"
import GeneratedQuestion from "./question-types/generated-question"
import type { Question } from "@/lib/types"

interface QuestionRendererProps {
  question: Question
  onSubmitAnswer: (answer: any) => void
}

export default function QuestionRenderer({ question, onSubmitAnswer }: QuestionRendererProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<any>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      setIsSubmitting(true)
      // Simulate a small delay for better UX
      setTimeout(() => {
        onSubmitAnswer(selectedAnswer)
        setSelectedAnswer(null)
        setIsSubmitting(false)
      }, 300)
    }
  }

  const renderQuestionByType = () => {
    switch (question.type) {
      case "multiple-choice":
        return (
          <MultipleChoiceQuestion
            question={question}
            selectedAnswer={selectedAnswer}
            onSelectAnswer={setSelectedAnswer}
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
          />
        )
      case "true-false":
        return (
          <TrueFalseQuestion
            question={question}
            selectedAnswer={selectedAnswer}
            onSelectAnswer={setSelectedAnswer}
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
          />
        )
      case "generated":
        return (
          <GeneratedQuestion
            question={question}
            answer={selectedAnswer}
            onAnswerChange={setSelectedAnswer}
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
          />
        )
      default:
        return <div>Unsupported question type</div>
    }
  }

  return <div className="space-y-6">{renderQuestionByType()}</div>
}
