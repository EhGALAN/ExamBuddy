import type React from "react"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import type { Question } from "@/lib/types"

import MarkdownRender from "@/components/ui/MardownRender.tsx";

interface GeneratedQuestionProps {
  question: Question
  answer: string | null
  onAnswerChange: (answer: string) => void
  onSubmit: () => void
  isSubmitting: boolean
}

export default function GeneratedQuestion({
  question,
  answer,
  onAnswerChange,
  onSubmit,
  isSubmitting,
}: GeneratedQuestionProps) {
  const [inputValue, setInputValue] = useState(answer || "")

  // Update local state when parent state changes
  useEffect(() => {
    setInputValue(answer || "")
  }, [answer])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleBlur = () => {
    onAnswerChange(inputValue)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      onAnswerChange(inputValue)
      onSubmit()
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-2">
        <div className="text-sm font-medium text-muted-foreground">Subject: {question.subject}</div>
      </div>

        <div className="text-xl font-medium">
            <MarkdownRender content={question.text} />
        </div>

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

      <div className="space-y-2">
        <label htmlFor="answer" className="text-sm font-medium">
          Your Answer:
        </label>
        <Input
          id="answer"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          placeholder="Enter your answer..."
        />
      </div>

      <Button
        onClick={() => {
          onAnswerChange(inputValue)
          onSubmit()
        }}
        disabled={!inputValue || isSubmitting}
        className="w-full"
      >
        {isSubmitting ? "Submitting..." : "Submit Answer"}
      </Button>
    </div>
  )
}
