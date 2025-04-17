import { Card, CardContent } from "@/components/ui/card"
import type { QuizAttempt } from "@/lib/types"

interface QuizHistoryListProps {
  history: QuizAttempt[]
}

export default function QuizHistoryList({ history }: QuizHistoryListProps) {
  if (history.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">No quiz history found</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {history.map((attempt) => {
        const date = new Date(attempt.timestamp)
        const formattedDate = `${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`

        return (
          <Card key={attempt.id}>
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                <div>
                  <h3 className="font-medium">{attempt.subject}</h3>
                  <p className="text-sm text-muted-foreground">{formattedDate}</p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-lg font-medium">
                      {attempt.score}/{attempt.totalQuestions}
                    </div>
                    <div className="text-xs text-muted-foreground">Score</div>
                  </div>

                  <div className="text-center">
                    <div className="text-lg font-medium">{Math.round(attempt.accuracy)}%</div>
                    <div className="text-xs text-muted-foreground">Accuracy</div>
                  </div>

                  {attempt.duration && (
                    <div className="text-center">
                      <div className="text-lg font-medium">{formatDuration(attempt.duration)}</div>
                      <div className="text-xs text-muted-foreground">Time</div>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}

function formatDuration(seconds: number): string {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60

  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
}
