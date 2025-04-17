import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getQuizHistory, getAccuracyBySubject, getScoreProgressBySubject, clearHistory } from "@/lib/storage-utils"
import type { QuizAttempt, Subject } from "@/lib/types"
import QuizHistoryList from "./quiz-history-list"
import SubjectScoreChart from "./subject-score-chart"

interface HistoryProps {
  onBack: () => void
}

export default function History({ onBack }: HistoryProps) {
  const [history, setHistory] = useState<QuizAttempt[]>([])
  const [accuracyData, setAccuracyData] = useState<Record<Subject, { accuracy: number; attempts: number }>>({} as any)
  const [scoreProgress, setScoreProgress] = useState<
    Record<Subject, { dates: string[]; scores: number[]; accuracies: number[] }>
  >({} as any)
  const [activeTab, setActiveTab] = useState("overview")

  useEffect(() => {
    // Load data from localStorage
    const quizHistory = getQuizHistory()
    const accuracy = getAccuracyBySubject()
    const progress = getScoreProgressBySubject()

    setHistory(quizHistory)
    setAccuracyData(accuracy)
    setScoreProgress(progress)
  }, [])

  const handleClearHistory = () => {
    if (confirm("Are you sure you want to clear all quiz history? This cannot be undone.")) {
      clearHistory()
      setHistory([])
      setAccuracyData({} as any)
      setScoreProgress({} as any)
    }
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Quiz History</h1>
        <Button onClick={onBack} variant="outline">
          Back to Quizzes
        </Button>
      </div>

      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="history">Quiz History</TabsTrigger>
          <TabsTrigger value="charts">Performance Charts</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid gap-4 md:grid-cols-2">
            {Object.entries(accuracyData).map(([subject, data]) => (
              <Card key={subject}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{subject}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-2xl font-bold">{data.accuracy}%</div>
                      <div className="text-sm text-muted-foreground">Average Accuracy</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{data.attempts}</div>
                      <div className="text-sm text-muted-foreground">Total Attempts</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-6">
            <Button onClick={() => setActiveTab("charts")} variant="outline">
              View Performance Charts
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="history">
          <QuizHistoryList history={history} />

          {history.length > 0 && (
            <div className="mt-6 flex justify-end">
              <Button onClick={handleClearHistory} variant="destructive">
                Clear History
              </Button>
            </div>
          )}

          {history.length === 0 && (
            <Card className="mt-6">
              <CardContent className="py-8 text-center">
                <p className="text-muted-foreground">No quiz history found. Take some quizzes to see your progress!</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="charts">
          <div className="space-y-8">
            {Object.entries(scoreProgress).map(([subject, data]) =>
              data.dates.length > 0 ? (
                <Card key={subject} className="overflow-hidden">
                  <CardHeader>
                    <CardTitle>{subject} Performance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <SubjectScoreChart dates={data.dates} scores={data.accuracies} />
                    </div>
                  </CardContent>
                </Card>
              ) : null,
            )}

            {Object.values(scoreProgress).every((data) => data.dates.length === 0) && (
              <Card>
                <CardContent className="py-8 text-center">
                  <p className="text-muted-foreground">
                    No performance data available yet. Take some quizzes to see your progress!
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
