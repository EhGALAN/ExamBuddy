import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Subject } from "@/lib/types"

interface ResultSummaryProps {
  subject: Subject
  score: number
  totalQuestions: number
  onRestart: () => void
  onNewSubject: () => void
  onViewHistory: () => void
}

export default function ResultSummary({
  subject,
  score,
  totalQuestions,
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
