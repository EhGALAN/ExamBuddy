import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type {Question} from "@/lib/types.ts";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function randomBetween(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}

export function factorialize(num: number): number {
    if (num === 0 || num === 1)
        return 1;
    for (var i = num - 1; i >= 1; i--) {
        num *= i;
    }
    return num;
}

export const checkAnswer = (question: Question, answer: any): boolean => {
    switch (question.type) {
        case "multiple-choice":
            return answer === question.correctAnswer
        case "true-false":
            return answer === question.correctAnswer
        case "generated":
            // For generated questions, we might need custom validation logic
            return Math.abs(Number(answer) - Number(question.correctAnswer)) < 0.01
        default:
            return false
    }
}