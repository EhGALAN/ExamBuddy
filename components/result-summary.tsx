import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {Button} from "@/components/ui/button"
import type {Subject, Question} from "@/lib/types"
import {checkAnswer} from "@/lib/utils.ts";
import MardownRender from "@/components/ui/MardownRender.tsx";

interface ResultSummaryProps {
    subject: Subject
    score: number
    totalQuestions: number
    questions: Question[]
    userAnswers: Record<number, string | number>
    onRestart: () => void
    onNewSubject: () => void
    onViewHistory: () => void
}

export default function ResultSummary({
                                          subject,
                                          score,
                                          totalQuestions,
                                          questions,
                                          userAnswers,
                                          onRestart,
                                          onNewSubject,
                                          onViewHistory,
                                      }: ResultSummaryProps) {
    const percentage = Math.round((score / totalQuestions) * 100)
    return (
        <Card className="w-full max-w-3xl mx-auto">
            <CardHeader>
                <CardTitle className="text-center">Quiz Completed!</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="text-center space-y-2">
                    <h3 className="text-xl font-medium">{subject}</h3>
                    <div className="text-4xl font-bold">
                        {score} / {totalQuestions}
                    </div>
                    <div className="text-2xl">{percentage}%</div>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Performance Summary</h4>
                    <ul className="space-y-1">
                        <li>Correct answers: {score}</li>
                        <li>Incorrect answers: {totalQuestions - score}</li>
                        <li>Completion time: {new Date().toLocaleTimeString()}</li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h4 className="font-medium mb-2">Question Review</h4>
                    {questions.map((question, index) => {
                        const isCorrect = checkAnswer(question, userAnswers[index]);
                        return (
                            <Card
                                key={index}
                                className={`p-4 rounded-lg ${
                                    isCorrect ? "bg-green-400" : "bg-red-400"
                                }`}
                            >
                                <CardHeader>
                                    <CardTitle><MardownRender content={`Q${index + 1} : ${question.text}`}/></CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <MardownRender
                                        content={`Your Answer: ${userAnswers[index]?.toString?.() || "No Answer"}`}/>
                                    <MardownRender content={`Correct Answer: ${question.correctAnswer}`}/>
                                    {question.variables && (
                                        <div className="bg-muted p-4 rounded-md space-y-2">
                                            <div className="font-medium">Given:</div>
                                            <ul className="list-disc list-inside">
                                                {Object.entries(question.variables).map(([key, value]) => (
                                                    <li key={key}>
                                                        {key}: {typeof value === "object" ? JSON.stringify(value) : value}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    <Button variant="outline" onClick={() => window.open(question.report, "_blank")}>
                                        Report question
                                    </Button>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2 justify-between">
                <Button onClick={onRestart}>Restart Quiz</Button>
                <Button variant="outline" onClick={onViewHistory}>
                    View History
                </Button>
                <Button variant="outline" onClick={onNewSubject}>
                    Try Another Subject
                </Button>
            </CardFooter>
        </Card>
    )
}