import type { Subject, QuizProgress, QuizAttempt } from "./types"

const STORAGE_KEY_PREFIX = "exambuddy_quiz_"
const HISTORY_KEY = "exambuddy_history"

export function saveQuizProgress(subject: Subject, progress: QuizProgress): void {
  const key = `${STORAGE_KEY_PREFIX}${subject.replace(/\s+/g, "_").toLowerCase()}`
  localStorage.setItem(key, JSON.stringify(progress))

  // Also update the overall progress summary
  updateProgressSummary(subject, progress)
}

export function getQuizProgress(subject: Subject): QuizProgress | null {
  const key = `${STORAGE_KEY_PREFIX}${subject.replace(/\s+/g, "_").toLowerCase()}`
  const stored = localStorage.getItem(key)

  if (stored) {
    return JSON.parse(stored) as QuizProgress
  }

  return null
}

export function getAllQuizProgress(): Record<Subject, QuizProgress | null> {
  const subjects: Subject[] = ["Machine Learning", "Data Mining & Knowledge Discovery", "Natural Computation", "Random"]

  const allProgress: Record<Subject, QuizProgress | null> = {} as Record<Subject, QuizProgress | null>

  subjects.forEach((subject) => {
    allProgress[subject] = getQuizProgress(subject)
  })

  return allProgress
}

function updateProgressSummary(subject: Subject, progress: QuizProgress): void {
  const summaryKey = `${STORAGE_KEY_PREFIX}summary`
  let summary: Partial<Record<
    Subject,
    {
      lastAttempt: string
      bestScore: number
      totalAttempts: number
    }
  >> = {}

  const stored = localStorage.getItem(summaryKey)
  if (stored) {
    summary = JSON.parse(stored)
  }

  if (!summary[subject]) {
    summary[subject] = {
      lastAttempt: progress.timestamp,
      bestScore: progress.score,
      totalAttempts: 1,
    }
  } else {
    summary[subject].lastAttempt = progress.timestamp
    summary[subject].bestScore = Math.max(summary[subject].bestScore, progress.score)
    summary[subject].totalAttempts += 1
  }

  localStorage.setItem(summaryKey, JSON.stringify(summary))
}

// New functions for quiz history

export function saveQuizAttempt(attempt: QuizAttempt): void {
  const history = getQuizHistory()
  history.push(attempt)

  // Sort by timestamp descending (newest first)
  history.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())

  localStorage.setItem(HISTORY_KEY, JSON.stringify(history))
}

export function getQuizHistory(): QuizAttempt[] {
  const stored = localStorage.getItem(HISTORY_KEY)
  if (stored) {
    return JSON.parse(stored) as QuizAttempt[]
  }
  return []
}

export function getSubjectHistory(subject: Subject): QuizAttempt[] {
  const history = getQuizHistory()
  return history.filter((attempt) => attempt.subject === subject)
}

export function getAccuracyBySubject(): Record<Subject, { accuracy: number; attempts: number }> {
  const history = getQuizHistory()
  const subjects: Subject[] = ["Machine Learning", "Data Mining & Knowledge Discovery", "Natural Computation", "Random"]

  const result: Record<Subject, { accuracy: number; attempts: number }> = {} as Record<
    Subject,
    { accuracy: number; attempts: number }
  >

  subjects.forEach((subject) => {
    const subjectAttempts = history.filter((attempt) => attempt.subject === subject)

    if (subjectAttempts.length === 0) {
      result[subject] = { accuracy: 0, attempts: 0 }
    } else {
      const totalQuestions = subjectAttempts.reduce((sum, attempt) => sum + attempt.totalQuestions, 0)
      const totalCorrect = subjectAttempts.reduce((sum, attempt) => sum + attempt.score, 0)
      const accuracy = totalQuestions > 0 ? (totalCorrect / totalQuestions) * 100 : 0

      result[subject] = {
        accuracy: Math.round(accuracy * 10) / 10, // Round to 1 decimal place
        attempts: subjectAttempts.length,
      }
    }
  })

  return result
}

export function getScoreProgressBySubject(): Record<
  Subject,
  { dates: string[]; scores: number[]; accuracies: number[] }
> {
  const history = getQuizHistory()
  const subjects: Subject[] = ["Machine Learning", "Data Mining & Knowledge Discovery", "Natural Computation", "Random"]

  const result: Record<Subject, { dates: string[]; scores: number[]; accuracies: number[] }> = {} as Record<
    Subject,
    { dates: string[]; scores: number[]; accuracies: number[] }
  >

  subjects.forEach((subject) => {
    const subjectAttempts = history
      .filter((attempt) => attempt.subject === subject)
      .sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()) // Sort by date ascending

    const dates = subjectAttempts.map((attempt) => {
      const date = new Date(attempt.timestamp)
      return `${date.getMonth() + 1}/${date.getDate()}`
    })

    const scores = subjectAttempts.map((attempt) => attempt.score)

    const accuracies = subjectAttempts.map((attempt) => Math.round((attempt.score / attempt.totalQuestions) * 100))

    result[subject] = { dates, scores, accuracies }
  })

  return result
}

export function clearAllProgress(): void {
  const subjects: Subject[] = ["Machine Learning", "Data Mining & Knowledge Discovery", "Natural Computation", "Random"]

  subjects.forEach((subject) => {
    const key = `${STORAGE_KEY_PREFIX}${subject.replace(/\s+/g, "_").toLowerCase()}`
    localStorage.removeItem(key)
  })

  localStorage.removeItem(`${STORAGE_KEY_PREFIX}summary`)
  // Don't clear history by default
}

export function clearHistory(): void {
  localStorage.removeItem(HISTORY_KEY)
}
