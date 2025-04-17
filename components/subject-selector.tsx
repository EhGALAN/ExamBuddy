"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Subject } from "@/lib/types"

interface SubjectSelectorProps {
  onSelectSubject: (subject: Subject) => void
}

export default function SubjectSelector({ onSelectSubject }: SubjectSelectorProps) {
  const subjects: Subject[] = ["Machine Learning", "Data Mining & Knowledge Discovery", "Natural Computation", "Random"]

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-center">ExamBuddy</CardTitle>
        <CardDescription className="text-center">Select a subject to start your quiz</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {subjects.map((subject) => (
          <Button key={subject} onClick={() => onSelectSubject(subject)} className="h-16 text-lg" variant="outline">
            {subject}
          </Button>
        ))}
      </CardContent>
    </Card>
  )
}
