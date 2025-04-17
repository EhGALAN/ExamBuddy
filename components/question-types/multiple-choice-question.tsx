import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import type { Question } from "@/lib/types"

import MarkdownRender from "@/components/ui/MardownRender.tsx";

interface MultipleChoiceQuestionProps {
  question: Question
  selectedAnswer: string | null
  onSelectAnswer: (answer: string) => void
  onSubmit: () => void
  isSubmitting: boolean
}

export default function MultipleChoiceQuestion({
  question,
  selectedAnswer,
  onSelectAnswer,
  onSubmit,
  isSubmitting,
}: MultipleChoiceQuestionProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-2">
        <div className="text-sm font-medium text-muted-foreground">Subject: {question.subject}</div>
      </div>


        <div className="text-xl font-medium">
            <MarkdownRender content={question.text} />
        </div>

        <RadioGroup value={selectedAnswer || ""} onValueChange={onSelectAnswer}>
            {question.options?.map((option, index) => (
          <div
            key={index}
            className="flex items-center space-x-2 border p-4 rounded-md hover:bg-muted/50 cursor-pointer"
            onClick={() => onSelectAnswer(option)}
          >
            <RadioGroupItem value={option} id={`option-${index}`} />
            <Label htmlFor={`option-${index}`} className="flex-grow cursor-pointer">
                <MarkdownRender content={option} />
            </Label>
          </div>
        ))}
      </RadioGroup>

      <Button onClick={onSubmit} disabled={selectedAnswer === null || isSubmitting} className="w-full">
        {isSubmitting ? "Submitting..." : "Submit Answer"}
      </Button>
    </div>
  )
}
