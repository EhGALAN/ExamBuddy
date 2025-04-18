import {Question} from "../../types";
import {generateGitHubUrlAuto} from "@/lib/utils.ts";

export const questions: (n: number) => Question[] = (n: number) => {
    return [
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which type of optimisation is Ant Colony Optimisation (ACO) more suitable for?",
            options: ["Function optimisation", "Combinatorial optimisation", "Linear optimisation", "Quadratic optimisation"],
            correctAnswer: "Combinatorial optimisation",
            explanation: "ACO algorithms are generally more suitable for combinatorial optimisation as ants walk on discrete structures like graphs.",
        }, // citation slide "Function Optimisation vs. Combinatorial Optimisation"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "In ACO, ants initially choose paths randomly.",
            correctAnswer: true,
            explanation: "At first, each ant decides which path to take at random.",
        }, // citation slide "The 'intelligent' foraging behaviour of natural ant colonies (1)"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "What is the term for the indirect communication system used by ants in ACO?",
            options: ["Stigmergy", "Pheromone trail", "Swarm intelligence", "Heuristic communication"],
            correctAnswer: "Stigmergy",
            explanation: "Stigmergy is the indirect communication system based on pheromone deposition.",
        }, // citation slide "Main characteristics of natural ants used as an inspiration for artificial ants"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "In ACO, the amount of pheromone deposited by an ant is proportional to the quality of the solution.",
            correctAnswer: true,
            explanation: "The amount of pheromone deposited is proportional to the quality of the candidate solution.",
        }, // citation slide "Basic ideas of Ant Colony Optimisation (ACO) algorithms"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is NOT a characteristic of natural ants used in ACO?",
            options: ["Probabilistic preference for paths with more pheromone", "Direct communication with other ants", "Indirect communication via stigmergy", "Deposition of pheromone on paths"],
            correctAnswer: "Direct communication with other ants",
            explanation: "Natural ants in ACO use indirect communication (stigmergy) rather than direct communication.",
        }, // citation slide "Main characteristics of natural ants used as an inspiration for artificial ants"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "ACO is an exact method for finding the optimal solution.",
            correctAnswer: false,
            explanation: "ACO is an approximate method that tries to find near-optimal solutions.",
        }, // citation slide "Exact vs. Approximate methods"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "What type of method is ACO?",
            options: ["Exact", "Approximate", "Deterministic", "Single solution-based"],
            correctAnswer: "Approximate",
            explanation: "ACO is an approximate method that aims for near-optimal solutions.",
        }, // citation slide "Exact vs. Approximate methods"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "In ACO, ants construct a candidate solution incrementally by adding one component at a time.",
            correctAnswer: true,
            explanation: "ACO incrementally constructs a candidate solution by adding one component at a time.",
        }, // citation slide "Very simple taxonomy of methods for optimisation"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "What is the goal of the Travelling Salesman Problem (TSP)?",
            options: ["Find the longest tour", "Find the shortest tour", "Visit all cities without returning to the start", "Minimize the number of edges"],
            correctAnswer: "Find the shortest tour",
            explanation: "The goal of TSP is to find the shortest tour that visits all cities and returns to the start.",
        }, // citation slide "Recap - the Travelling Salesman Problem"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "In ACO for TSP, pheromone values are updated globally after all ants construct their tours.",
            correctAnswer: true,
            explanation: "Pheromone values are updated globally after all ants have constructed their tours.",
        }, // citation slide "Pheromone updating in the Ant System for the TSP"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is a heuristic value used in ACO for TSP?",
            options: ["1 / d_ij", "d_ij", "τ_ij", "η_ij"],
            correctAnswer: "1 / d_ij",
            explanation: "The heuristic value η_ij is often computed as 1 / d_ij in TSP.",
        }, // citation slide "ACO for the Travelling Salesman Problem"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "In ACO, the probability of moving from city i to city j is influenced by both pheromone and heuristic values.",
            correctAnswer: true,
            explanation: "The probability is proportional to both pheromone (τ_ij) and heuristic (η_ij) values.",
        }, // citation slide "ACO for the Travelling Salesman Problem"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "What is the purpose of pheromone evaporation in ACO?",
            options: ["To increase pheromone levels", "To decrease pheromone levels", "To randomize pheromone levels", "To stabilize pheromone levels"],
            correctAnswer: "To decrease pheromone levels",
            explanation: "Pheromone evaporation lowers pheromone levels to prevent stagnation.",
        }, // citation slide "Pheromone updating in the Ant System for the TSP"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "In the Ant Colony System for TSP, the parameter q_0 influences the balance between exploration and exploitation.",
            correctAnswer: true,
            explanation: "The parameter q_0 determines the probability of exploiting known good solutions versus exploring new ones.",
        }, // citation slide "Another variation of Ant System: Ant Colony System for the TSP"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "What is the role of the heuristic function (η) in ACO?",
            options: ["To evaluate the entire solution", "To evaluate a solution's component", "To update pheromone levels", "To randomize path selection"],
            correctAnswer: "To evaluate a solution's component",
            explanation: "The heuristic function evaluates the quality of individual components of a solution.",
        }, // citation slide "Main elements in the design of an ACO algorithm (1)"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "In ACO, the pheromone update rule is based on the global evaluation of the entire candidate solution.",
            correctAnswer: true,
            explanation: "Pheromone updates are based on the global cost of the entire tour.",
        }, // citation slide "Main elements in the design of an ACO algorithm (2)"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is a key property of ACO algorithms?",
            options: ["Centralized control", "Distributed decisions", "Deterministic path selection", "Static pheromone levels"],
            correctAnswer: "Distributed decisions",
            explanation: "ACO algorithms rely on distributed decisions made by individual ants.",
        }, // citation slide "The 'intelligent' foraging behaviour of natural ant colonies (2)"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "In ACO, the amount of pheromone deposited on a path increases with the quality of the solution.",
            correctAnswer: true,
            explanation: "Better solutions lead to higher pheromone deposition on the corresponding paths.",
        }, // citation slide "Summary"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "What is the primary goal of combinatorial optimisation?",
            options: ["Optimise real-valued functions", "Optimise discrete variables", "Minimize computational time", "Maximize randomness"],
            correctAnswer: "Optimise discrete variables",
            explanation: "Combinatorial optimisation focuses on optimising discrete or nominal variables.",
        }, // citation slide "Function Optimisation vs. Combinatorial Optimisation"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "In ACO, ants use a probabilistic transition rule to choose the next path.",
            correctAnswer: true,
            explanation: "The transition rule is based on the product of pheromone (τ) and heuristic (η) values.",
        }, // citation slide "Main elements in the design of an ACO algorithm (2)"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "What is the role of the evaporation rate (ρ) in ACO?",
            options: ["To increase pheromone levels", "To decrease pheromone levels", "To stabilize pheromone levels", "To randomize pheromone levels"],
            correctAnswer: "To decrease pheromone levels",
            explanation: "The evaporation rate (ρ) reduces pheromone levels to avoid stagnation.",
        }, // citation slide "Pheromone updating in the Ant System for the TSP"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "In ACO, the heuristic value (η) is computed locally based on the cost of edges.",
            correctAnswer: true,
            explanation: "The heuristic value is computed locally and is often inversely proportional to the edge cost.",
        }, // citation slide "ACO for the Travelling Salesman Problem"
    ];
};
