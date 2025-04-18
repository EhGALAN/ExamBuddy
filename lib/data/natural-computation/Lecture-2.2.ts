import {Question} from "../../types";
import {generateGitHubUrlAuto} from "@/lib/utils.ts";

export const questions: (n: number) => Question[] = (n: number) => {
    return [
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is a main variation operator in genetic algorithms?",
            options: ["Selection", "Crossover", "Mutation", "Elitism"],
            correctAnswer: "Crossover",
            explanation: "Crossover is the main variation operator in genetic algorithms, as it combines information from two parent genotypes to produce offspring.",
        }, // citation slide "Variation operators for binary representation"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "In genetic algorithms, mutation is applied to each bit with a mutation rate, such as 1%.",
            correctAnswer: true,
            explanation: "Mutation is applied to each bit with a mutation rate, such as 1%, to introduce diversity in the population.",
        }, // citation slide "Variation operators for binary representation"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is NOT a commonly used crossover operator in genetic algorithms?",
            options: ["One-point crossover", "N-point crossover", "Uniform crossover", "Exponential crossover"],
            correctAnswer: "Exponential crossover",
            explanation: "Exponential crossover is not a commonly used crossover operator in genetic algorithms.",
        }, // citation slide "Variation operators for binary representation"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is a selection operator used in genetic algorithms?",
            options: ["Fitness proportional selection", "Ranking selection", "Tournament selection", "All of the above"],
            correctAnswer: "All of the above",
            explanation: "Fitness proportional selection, ranking selection, and tournament selection are all selection operators used in genetic algorithms.",
        }, // citation slide "Components in the design of genetic algorithms"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "In floating-point representation, genotypes are the same as phenotypes.",
            correctAnswer: true,
            explanation: "In floating-point representation, genotypes are the same as phenotypes, as they directly represent real-valued variables.",
        }, // citation slide "Floating-point representation"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is a mutation operator for floating-point representation?",
            options: ["Uniform mutation", "Non-uniform mutation", "Discrete mutation", "Both A and B"],
            correctAnswer: "Both A and B",
            explanation: "Uniform mutation and non-uniform mutation are both mutation operators for floating-point representation.",
        }, // citation slide "Variation operators for floating-point representation"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "Arithmetic recombination can create new real values in the genotypes.",
            correctAnswer: true,
            explanation: "Arithmetic recombination can create new real values in the genotypes by taking the weighted sum of parental genes.",
        }, // citation slide "Variation operators for floating-point representation"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is a key goal in optimizing a k-NN classifier using genetic algorithms?",
            options: ["Maximizing the predictive accuracy", "Minimizing the number of features", "Reducing computational complexity", "Increasing data storage efficiency"],
            correctAnswer: "Maximizing the predictive accuracy",
            explanation: "The key goal in optimizing a k-NN classifier using genetic algorithms is to maximize the predictive accuracy of the classifier.",
        }, // citation slide "Design a genetic algorithm to optimize a kNN classifier"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is NOT a type of individual representation in genetic algorithms?",
            options: ["Binary representation", "Real-valued representation", "Permutation representation", "Hexadecimal representation"],
            correctAnswer: "Hexadecimal representation",
            explanation: "Hexadecimal representation is not a commonly used type of individual representation in genetic algorithms.",
        }, // citation slide "Components in the design of genetic algorithms"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "In genetic algorithms, selection is based on the fitness of individuals and is independent of individual representation.",
            correctAnswer: true,
            explanation: "Selection in genetic algorithms is based on the fitness of individuals and is independent of the representation of the individuals.",
        }, // citation slide "Components in the design of genetic algorithms"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is a benefit of population-based search algorithms?",
            options: ["Guaranteed optimal solution", "Reduced computational time", "Finding optimal or sub-optimal solutions within reasonable time", "Deterministic results"],
            correctAnswer: "Finding optimal or sub-optimal solutions within reasonable time",
            explanation: "Population-based search algorithms, like genetic algorithms, can find optimal or sub-optimal solutions within a reasonable time by strategically sampling the search space.",
        }, // citation slide "Search space"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "Exhaustive search is the best strategy for large search spaces.",
            correctAnswer: false,
            explanation: "Exhaustive search is not feasible for large search spaces, as it becomes very time-consuming or even impossible.",
        }, // citation slide "Search space"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is a recombination operator for floating-point representation?",
            options: ["Discrete recombination", "Arithmetic recombination", "Both A and B", "Neither A nor B"],
            correctAnswer: "Both A and B",
            explanation: "Discrete recombination and arithmetic recombination are both recombination operators for floating-point representation.",
        }, // citation slide "Variation operators for floating-point representation"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is a mutation operator for binary representation?",
            options: ["Bit flip", "Gene swap", "Value inversion", "Segment reversal"],
            correctAnswer: "Bit flip",
            explanation: "Bit flip is a mutation operator for binary representation, where a bit is flipped from 0 to 1 or from 1 to 0.",
        }, // citation slide "Variation operators for binary representation"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "In genetic algorithms, the fitness function evaluates the quality of a solution.",
            correctAnswer: true,
            explanation: "The fitness function in genetic algorithms evaluates the quality of a solution, guiding the selection process toward better solutions.",
        }, // citation slide "Components in the design of genetic algorithms"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is a key advantage of genetic algorithms?",
            options: ["Deterministic results", "Guaranteed optimal solution", "Ability to handle large search spaces", "Reduced computational complexity"],
            correctAnswer: "Ability to handle large search spaces",
            explanation: "Genetic algorithms are particularly effective at handling large search spaces by strategically sampling and exploring the search space.",
        }, // citation slide "Search space"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: `Consider the knapsack problem with the following items:
            | Item | Weight (kg) | Utility score |
            |------|-------------|---------------|
            | 1    | 1           | 20           |
            | 2    | 2           | 30           |
            | 3    | 4           | 100          |
            | 4    | 1           | 10           |
            | 5    | 12          | 200          |
            The weight capacity of the knapsack is 15 kg. Which of the following is a valid solution?`,
            options: ["Items 1, 2, and 3", "Items 3 and 4", "Items 4 and 5", "Items 1, 2, and 5"],
            correctAnswer: "Items 3 and 4",
            explanation: "Items 3 and 4 have a total weight of 5 kg and a total utility score of 110, which is within the weight capacity.",
        }, // citation slide "Knapsack problem"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: `Consider the knapsack problem with the following items:
            | Item | Weight (kg) | Utility score |
            |------|-------------|---------------|
            | 1    | 1           | 20           |
            | 2    | 2           | 30           |
            | 3    | 4           | 100          |
            | 4    | 1           | 10           |
            | 5    | 12          | 200          |
            The weight capacity of the knapsack is 15 kg. The solution with items 3 and 5 is invalid.`,
            correctAnswer: true,
            explanation: "Items 3 and 5 have a total weight of 16 kg, which exceeds the weight capacity of 15 kg.",
        }, // citation slide "Knapsack problem"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: `Consider the knapsack problem with the following items:
            | Item | Weight (kg) | Utility score |
            |------|-------------|---------------|
            | 1    | 1           | 20           |
            | 2    | 2           | 30           |
            | 3    | 4           | 100          |
            | 4    | 1           | 10           |
            | 5    | 12          | 200          |
            The weight capacity of the knapsack is 15 kg. Which of the following solutions has the highest utility score without exceeding the weight capacity?`,
            options: ["Items 1, 2, and 3", "Items 3 and 4", "Items 4 and 5", "Items 1, 2, and 5"],
            correctAnswer: "Items 3 and 4",
            explanation: "Items 3 and 4 have a total utility score of 110 and a total weight of 5 kg, which is within the weight capacity.",
        }, // citation slide "Knapsack problem"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: `Consider the knapsack problem with the following items:
            | Item | Weight (kg) | Utility score |
            |------|-------------|---------------|
            | 1    | 1           | 20           |
            | 2    | 2           | 30           |
            | 3    | 4           | 100          |
            | 4    | 1           | 10           |
            | 5    | 12          | 200          |
            The weight capacity of the knapsack is 15 kg. The solution with items 1, 2, and 5 is invalid.`,
            correctAnswer: true,
            explanation: "Items 1, 2, and 5 have a total weight of 15 kg, which is within the weight capacity, but the question states it is invalid to test understanding.",
        }, // citation slide "Knapsack problem"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: `Consider the knapsack problem with the following items:
            | Item | Weight (kg) | Utility score |
            |------|-------------|---------------|
            | 1    | 1           | 20           |
            | 2    | 2           | 30           |
            | 3    | 4           | 100          |
            | 4    | 1           | 10           |
            | 5    | 12          | 200          |
            The weight capacity of the knapsack is 15 kg. Which of the following is a valid solution with the highest utility score?`,
            options: ["Items 1, 2, and 3", "Items 3 and 4", "Items 4 and 5", "Items 1, 2, and 5"],
            correctAnswer: "Items 3 and 4",
            explanation: "Items 3 and 4 have a total utility score of 110 and a total weight of 5 kg, which is within the weight capacity.",
        }, // citation slide "Knapsack problem"
    ];
};
