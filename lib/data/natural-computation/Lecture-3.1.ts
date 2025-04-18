import {factorialize} from "../../utils";
import {Question} from "../../types";
import {generateGitHubUrlAuto} from "@/lib/utils.ts";

export const questions: (n: number) => Question[] = (n: number) => {
    return [
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is a common representation used in genetic algorithms for optimizing the order of events?",
            options: ["Binary strings", "Real-valued vectors", "Permutation representation", "Graphical models"],
            correctAnswer: "Permutation representation",
            explanation: "Permutation representation is often used to optimize the order of a sequence of events, such as in job scheduling or the traveling salesman problem.",
        }, // citation slide "Permutation representation"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "Ordinary crossover operators can generate valid genotypes in permutation representation without modification.",
            correctAnswer: false,
            explanation: "Ordinary crossover operators would generate invalid genotypes because each integer must appear exactly once in the genotype.",
        }, // citation slide "Ordinary variation operators fail in permutation representation"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is a commonly used mutation operator in permutation representation?",
            options: ["Bit-flip mutation", "Swap mutation", "Gaussian mutation", "Uniform mutation"],
            correctAnswer: "Swap mutation",
            explanation: "Swap mutation is commonly used in permutation representation, where two numbers in the genotype are randomly picked and swapped.",
        }, // citation slide "Variation operators for permutation representation"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "What is the size of the search space for the Travelling Salesman Problem (TSP) with 9 cities and symmetric distances?",
            options: ["9!", "8!", "(9-1)!/2", "2^9"],
            correctAnswer: "(9-1)!/2",
            explanation: "The size of the search space for symmetric TSP is (n-1)!/2, where n is the number of cities.",
        }, // citation slide "Travelling salesman problem (TSP)"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "In the 8-queens problem, using permutation representation reduces the search space to 8! possible solutions.",
            correctAnswer: true,
            explanation: "Permutation representation ensures that no two queens are in the same row or column, reducing the search space to 8!.",
        }, // citation slide "Eight-queens problem"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is NOT a selection operator used in genetic algorithms?",
            options: ["Fitness proportional selection", "Ranking selection", "Tournament selection", "Elitism selection"],
            correctAnswer: "Elitism selection",
            explanation: "Elitism is a strategy used with selection operators, but it is not a selection operator itself.",
        }, // citation slide "Design a genetic algorithm to solve TSP"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "generated",
            subject: "Natural Computation",
            text: "Calculate the size of the search space for the 5-queens problem using permutation representation.",
            variables: {
                "Number of queens": 5,
            },
            correctAnswer: 5 * 4 * 3 * 2 * 1,
            explanation: "The size of the search space is 5!, which is 120.",
        }, // citation slide "Exercise 2"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is a fitness function for the N-queens problem?",
            options: ["Total distance of a route", "Number of diagonal checking queen pairs", "Sum of squared errors", "Entropy of the solution"],
            correctAnswer: "Number of diagonal checking queen pairs",
            explanation: "The fitness function for the N-queens problem is the number of diagonal checking queen pairs, which should be minimized.",
        }, // citation slide "Design a genetic algorithm to solve N-queens problem"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "Genetic algorithms have been used to evolve virtual creatures with creative and unexpected solutions.",
            correctAnswer: true,
            explanation: "GAs have been used to evolve virtual creatures that can perform tasks like swimming, walking, and competing for resources.",
        }, // citation slide "Creativity and novelty in GAs"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is a recombination operator used in permutation representation?",
            options: ["Order crossover", "Uniform crossover", "Single-point crossover", "Multi-point crossover"],
            correctAnswer: "Order crossover",
            explanation: "Order crossover is specifically designed for permutation representation to ensure valid offspring.",
        }, // citation slide "Variation operators for permutation representation"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "In the N-queens problem, the fitness value of 0 indicates a valid solution.",
            correctAnswer: true,
            explanation: "A fitness value of 0 means there are no diagonal checking queen pairs, indicating a valid solution.",
        }, // citation slide "Design a genetic algorithm to solve N-queens problem"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is a task performed by virtual creatures evolved using genetic algorithms?",
            options: ["Swimming", "Playing chess", "Solving Sudoku", "Driving a car"],
            correctAnswer: "Swimming",
            explanation: "Virtual creatures evolved using GAs have been shown to perform tasks like swimming, walking, and jumping.",
        }, // citation slide "Evolving virtual creatures with GAs"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "generated",
            subject: "Natural Computation",
            text: "Given a TSP with 7 cities and symmetric distances, calculate the size of the search space.",
            variables: {
                "Number of cities": 7,
            },
            correctAnswer: 360, //(7 - 1)! / 2,
            explanation: "The size of the search space for symmetric TSP is (n-1)!/2, where n is the number of cities.",
        }, // citation slide "Travelling salesman problem (TSP)"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "In permutation representation, swap mutation ensures that the genotype remains valid after mutation.",
            correctAnswer: true,
            explanation: "Swap mutation preserves the validity of the genotype by swapping two elements without introducing duplicates or omissions.",
        }, // citation slide "Variation operators for permutation representation"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is a key advantage of using genetic algorithms for optimization problems?",
            options: ["Guaranteed global optimum", "Fast convergence", "Ability to find creative solutions", "Deterministic results"],
            correctAnswer: "Ability to find creative solutions",
            explanation: "GAs are known for their ability to find creative and unexpected solutions to complex problems.",
        }, // citation slide "Creativity and novelty in GAs"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "In the 8-queens problem, the fitness function is the total distance of a route.",
            correctAnswer: false,
            explanation: "The fitness function for the 8-queens problem is the number of diagonal checking queen pairs, not the total distance of a route.",
        }, // citation slide "Design a genetic algorithm to solve N-queens problem"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is a task performed by virtual creatures evolved using genetic algorithms?",
            options: ["Competing for a green cube", "Solving a Rubik's cube", "Playing poker", "Writing poetry"],
            correctAnswer: "Competing for a green cube",
            explanation: "Virtual creatures evolved using GAs have been shown to compete for resources like a green cube.",
        }, // citation slide "Evolving virtual creatures with GAs"

        // Generated question for Swap Mutation
        (() => {
            const genotypeLength = Math.floor(Math.random() * 10) + 3; // Random length of genotype (3 to 12)
            const genotype = Array.from({length: genotypeLength}, (_, i) => i + 1); // Random genotype
            const swapIndices = [
                Math.floor(Math.random() * genotypeLength),
                Math.floor(Math.random() * genotypeLength),
            ];
            const swappedGenotype = [...genotype];
            [swappedGenotype[swapIndices[0]], swappedGenotype[swapIndices[1]]] = [
                swappedGenotype[swapIndices[1]],
                swappedGenotype[swapIndices[0]],
            ];
            return {
                id: `nc-${++n}`,
                report: generateGitHubUrlAuto(),
                type: "generated",
                subject: "Natural Computation",
                text: `Swap mutation is a technique where two elements in a genotype are swapped. Given the genotype [${genotype.join(", ")}], swap the elements at indices ${swapIndices[0]} and ${swapIndices[1]}. What is the resulting genotype?`,
                variables: {
                    "Genotype": genotype,
                    "Swap indices": swapIndices,
                },
                correctAnswer: swappedGenotype.join(", "),
                explanation: `The elements at indices ${swapIndices[0]} and ${swapIndices[1]} are swapped, resulting in the genotype [${swappedGenotype.join(", ")}].`,
            };
        })(), // citation slide "Variation operators for permutation representation"

        // Generated question for TSP Search Space
        (() => {
            const numCities = Math.floor(Math.random() * 10) + 3; // Random number of cities (3 to 12)
            const searchSpaceSize = factorialize(numCities - 1) / 2;
            return {
                id: `nc-${++n}`,
                report: generateGitHubUrlAuto(),
                type: "generated",
                subject: "Natural Computation",
                text: `The Travelling Salesman Problem (TSP) involves finding the shortest route to visit a set number of cities and return to the starting point. The size of the search space for symmetric TSP with ${numCities} cities. What is the size of the search space for ${numCities} cities?`,
                variables: {
                    "Number of cities": numCities,
                },
                correctAnswer: searchSpaceSize,
                explanation: "The size of the search space for symmetric TSP is (n-1)!/2, where n is the number of cities.",
            };
        })(), // citation slide "Travelling salesman problem (TSP)"

        // Generated question for 5-Queens Search Space
        (() => {
            const numQueens = 5; // Fixed for 5-queens problem
            const searchSpaceSize = 5 * 4 * 3 * 2 * 1;
            return {
                id: `nc-${++n}`,
                report: generateGitHubUrlAuto(),
                type: "generated",
                subject: "Natural Computation",
                text: `The 5-queens problem involves placing 5 queens on a 5x5 chessboard such that no two queens threaten each other. What is the size of the search space?`,
                variables: {
                    "Number of queens": numQueens,
                },
                correctAnswer: searchSpaceSize.toString(),
                explanation: "The size of the search space is 5!, which is 120.",
            };
        })(), // citation slide "Exercise 2"

        // Generated question for TSP Search Space (7 cities)
        (() => {
            const numCities = 7; // Fixed for 7 cities
            const searchSpaceSize = factorialize(numCities - 1) / 2;
            return {
                id: `nc-${++n}`,
                report: generateGitHubUrlAuto(),
                type: "generated",
                subject: "Natural Computation",
                text: `The size of the search space for the Travelling Salesman Problem (TSP). What is the size of the search space for 7 cities?`,
                variables: {
                    "Number of cities": numCities,
                },
                correctAnswer: searchSpaceSize,
                explanation: "The size of the search space for symmetric TSP is (n-1)!/2, where n is the number of cities.",
            };
        })(), // citation slide "Travelling salesman problem (TSP)"
    ];
};
