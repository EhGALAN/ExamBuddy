import { Button } from "@/components/ui/button"
import type { Question } from "@/lib/types"

import MarkdownRender from "@/components/ui/MardownRender.tsx";

interface TrueFalseQuestionProps {
  question: Question
  selectedAnswer: boolean | null
  onSelectAnswer: (answer: boolean) => void
  onSubmit: () => void
  isSubmitting: boolean
}

export default function TrueFalseQuestion({
  question,
  selectedAnswer,
  onSelectAnswer,
  onSubmit,
  isSubmitting,
}: TrueFalseQuestionProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-2">
        <div className="text-sm font-medium text-muted-foreground">Subject: {question.subject}</div>
      </div>

        <div className="text-xl font-medium">
            <MarkdownRender content={question.text} />
        </div>

      <div className="grid grid-cols-2 gap-4">
        <Button
          variant={selectedAnswer === true ? "default" : "outline"}
          onClick={() => onSelectAnswer(true)}
          className="h-16 text-lg"
        >
          True
        </Button>
        <Button
          variant={selectedAnswer === false ? "default" : "outline"}
          onClick={() => onSelectAnswer(false)}
          className="h-16 text-lg"
        >
          False
        </Button>
      </div>

      <Button onClick={onSubmit} disabled={selectedAnswer === null || isSubmitting} className="w-full">
        {isSubmitting ? "Submitting..." : "Submit Answer"}
      </Button>
    </div>
  )
}
