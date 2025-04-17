import { Line, LineChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

interface SubjectScoreChartProps {
  dates: string[]
  scores: number[]
}

export default function SubjectScoreChart({ dates, scores }: SubjectScoreChartProps) {
  // Combine dates and scores into chart data
  const chartData = dates.map((date, index) => ({
    date,
    score: scores[index],
  }))

  return (
    <ChartContainer
      config={{
        score: {
          label: "Accuracy (%)",
          color: "hsl(200, 70%, 50%)"
        },
      }}
      className="h-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" label={{ value: "Date", position: "insideBottom", offset: -5 }} />
          <YAxis domain={[0, 100]} label={{ value: "Accuracy (%)", angle: -90, position: "insideLeft" }} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Line
            type="monotone"
            dataKey="score"
            stroke="#000"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
