export type Subject = "Machine Learning" | "Data Mining & Knowledge Discovery" | "Natural Computation" | "Random"

export type QuestionType = "multiple-choice" | "true-false" | "generated"

export interface Question {
  id: string
  type: QuestionType
  subject: Subject
  text: string
  options?: string[]
  correctAnswer: string | boolean | number
  explanation?: string
  variables?: Record<string, any> // For generated questions
}

export interface QuizProgress {
  subject: Subject
  currentQuestionIndex: number
  userAnswers: Record<number, any>
  score: number
  completed: boolean
  timestamp: string
  totalQuestions: number
}

export interface QuizAttempt {
  id: string
  subject: Subject
  score: number
  totalQuestions: number
  accuracy: number
  timestamp: string
  duration?: number // in seconds
}
