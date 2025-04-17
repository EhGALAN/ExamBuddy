import type {Question, Subject} from "./types"
import {machineLearning} from "@/lib/data/machine-learning.ts";
import {dataMining} from "@/lib/data/data-mining.ts";
import {naturalComputation} from "@/lib/data/natural-computation.ts";

// Function to get questions by subject
export function getQuizQuestions(subject: Subject): Question[] {
    switch (subject) {
        case "Machine Learning":
            return shuffleArray(machineLearning()).slice(0, 20);
        case "Data Mining & Knowledge Discovery":
            return shuffleArray(dataMining()).slice(0, 20);
        case "Natural Computation":
            return shuffleArray(naturalComputation()).slice(0, 20);
        case "Random":
            return shuffleArray(getAllQuizQuestions()).slice(0, 20)
        default:
            return []
    }
}

// Function to get all questions
export function getAllQuizQuestions(): Question[] {
    return [...machineLearning(), ...dataMining(), ...naturalComputation()]
}

// Add a helper function to shuffle an array
function shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
}
