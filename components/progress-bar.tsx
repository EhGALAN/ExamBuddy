import { Progress } from "@/components/ui/progress"

interface ProgressBarProps {
  current: number
  total: number
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = (current / total) * 100

  return (
    <div className="w-full space-y-2">
      <div className="flex justify-between text-sm">
        <span>
          Question {current} of {total}
        </span>
        <span>{Math.round(percentage)}% Complete</span>
      </div>
      <Progress value={percentage} className="h-2" />
    </div>
  )
}
