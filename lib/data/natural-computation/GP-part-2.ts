import {Question} from "../../types";
import {generateGitHubUrlAuto} from "@/lib/utils.ts";

export const questions: (n: number) => Question[] = (n: number) => {
    return [
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "What is the primary goal of using Genetic Programming (GP) in predicting CO₂ emissions?",
            options: [
                "To maximize model complexity",
                "To minimize prediction error",
                "To reduce computational time",
                "To increase the number of input variables"
            ],
            correctAnswer: "To minimize prediction error",
            explanation: "The primary goal of GP in predicting CO₂ emissions is to minimize prediction error while considering the size of the model.",
        }, // citation slide "The objective of the GP (the target problem)"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "In Genetic Programming, the fitness function for predicting CO₂ emissions is typically based on Mean Absolute Error (MAE).",
            correctAnswer: true,
            explanation: "The fitness function used in GP for predicting CO₂ emissions is often based on Mean Absolute Error (MAE).",
        }, // citation slide "Main components of the GP algorithm"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is NOT a common predictive variable in models for predicting CO₂ emissions?",
            options: ["GDP", "Population", "Temperature", "Energy consumption"],
            correctAnswer: "Temperature",
            explanation: "Common predictive variables for CO₂ emissions include GDP, Population, and Energy consumption, but not Temperature.",
        }, // citation slide "The objective of the GP (the target problem)"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "Introns in Genetic Programming are parts of the code that contribute to the fitness of an individual.",
            correctAnswer: false,
            explanation: "Introns are useless parts of the code that do not contribute to the fitness of an individual.",
        }, // citation slide "Introns"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "What is a primary disadvantage of code bloat in Genetic Programming?",
            options: [
                "Increased computational speed",
                "Reduced memory usage",
                "Increased memory usage",
                "Improved fitness of individuals"
            ],
            correctAnswer: "Increased memory usage",
            explanation: "Code bloat leads to increased memory usage and slower GP runs.",
        }, // citation slide "Code 'Bloat'"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "The 'neutral code is protective' hypothesis suggests that introns protect against the destructive effects of crossover in Genetic Programming.",
            correctAnswer: true,
            explanation: "This hypothesis argues that introns offer protection against the destructive effects of crossover by increasing the probability of swapping introns rather than useful code.",
        }, // citation slide "Neutral code is protective" hypothesis
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is a method to limit code bloat in Genetic Programming?",
            options: [
                "Increasing the maximum tree depth",
                "Encouraging larger trees",
                "Using a weighted fitness function",
                "Removing all introns manually"
            ],
            correctAnswer: "Using a weighted fitness function",
            explanation: "A weighted fitness function can be used to consider both the quality and size of individuals, helping to limit code bloat.",
        }, // citation slide "What to do about introns and bloat (2)"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "In Genetic Programming, the notion of 'building blocks' is less problematic compared to Genetic Algorithms (GAs).",
            correctAnswer: false,
            explanation: "In GP, the notion of 'building blocks' is more problematic because the meaning of a subtree depends on its context in the entire tree.",
        }, // citation slide "Meaning of 'building blocks' in GP (?)"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "What is the primary difference between Genetic Algorithms (GAs) and Genetic Programming (GP)?",
            options: [
                "GAs use trees as individual representations",
                "GP aims to evolve a program/algorithm",
                "GAs use more complex crossover and mutation operators",
                "GP only evolves solutions for specific problem instances"
            ],
            correctAnswer: "GP aims to evolve a program/algorithm",
            explanation: "GP aims to evolve a program/algorithm that can compute solutions for all instances of a problem type, while GAs evolve solutions for specific problem instances.",
        }, // citation slide "Summary: differences between GA and GP"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "Genetic Programming algorithms for predicting CO₂ emissions typically use a fixed size limit for individuals.",
            correctAnswer: false,
            explanation: "GP algorithms can use a dynamic size limit, which allows the size to grow when necessary to accept a new 'best-of-run-so-far' individual.",
        }, // citation slide "What to do about introns and bloat (1)"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is a common function in the function set of Genetic Programming algorithms for predicting CO₂ emissions?",
            options: ["Exponential", "Sine", "Cosine", "Logarithm"],
            correctAnswer: "Exponential",
            explanation: "The function set often includes arithmetic operations, exponential, natural log, power, and square root.",
        }, // citation slide "Main components of the GP algorithm"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "Genetic Programming models for predicting CO₂ emissions are typically tested on historical data.",
            correctAnswer: true,
            explanation: "GP models are often tested on historical data to evaluate their generalization ability.",
        }, // citation slide "The Testing Phase"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "What is a common measure of prediction error in Genetic Programming models for CO₂ emissions?",
            options: ["Mean Absolute Error (MAE)", "Root Mean Square Error (RMSE)", "Mean Squared Error (MSE)", "Standard Deviation"],
            correctAnswer: "Mean Absolute Error (MAE)",
            explanation: "Mean Absolute Error (MAE) is a common measure of prediction error in GP models for CO₂ emissions.",
        }, // citation slide "Main components of the GP algorithm"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "In Genetic Programming, crossover is always more effective than mutation in producing better individuals.",
            correctAnswer: false,
            explanation: "Crossover in GP is often destructive and can produce children worse than their parents.",
        }, // citation slide "Neutral code is protective" hypothesis
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is NOT a method to address introns and bloat in Genetic Programming?",
            options: [
                "Using a dynamic size limit",
                "Encouraging larger trees",
                "Implementing an operator to remove introns",
                "Using a lexicographic-optimization approach"
            ],
            correctAnswer: "Encouraging larger trees",
            explanation: "Encouraging larger trees is not a method to address introns and bloat; instead, methods like using a dynamic size limit or implementing intron-removal operators are used.",
        }, // citation slide "What to do about introns and bloat (1)"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "Genetic Programming algorithms for predicting CO₂ emissions often use a lexicographic-optimization approach to compare individuals.",
            correctAnswer: true,
            explanation: "The lexicographic-optimization approach is used to first compare individuals based on quality and then on size.",
        }, // citation slide "What to do about introns and bloat (2)"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "What is the primary role of introns in the evolutionary process of Genetic Programming?",
            options: [
                "To increase the fitness of individuals",
                "To protect against destructive crossover",
                "To reduce the size of individuals",
                "To speed up the GP algorithm"
            ],
            correctAnswer: "To protect against destructive crossover",
            explanation: "Introns protect against the destructive effects of crossover by increasing the probability of swapping introns rather than useful code.",
        }, // citation slide "Back to 'neutral code is protective' hypothesis"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "The fitness function in Genetic Programming favors larger trees because there are more ways to represent a solution with large trees.",
            correctAnswer: true,
            explanation: "The fitness function introduces a bias favoring larger trees because there are more ways to represent a solution with large trees.",
        }, // citation slide "Fitness causes bloat" hypothesis
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is a common example of an intron in Genetic Programming?",
            options: [
                "X + X",
                "X * X",
                "X / X",
                "X - X"
            ],
            correctAnswer: "X - X",
            explanation: "An example of an intron is redundant code like 'X - X', which has no effect on the output.",
        }, // citation slide "Examples of introns"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "In Genetic Programming, the meaning of a subtree depends on its context in the entire tree.",
            correctAnswer: true,
            explanation: "The meaning of a subtree in GP depends on its context, making the notion of 'building blocks' more problematic compared to GAs.",
        }, // citation slide "Meaning of 'building blocks' in GP (?)"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "What is the primary goal of modifying crossover and mutation in Genetic Programming to favor shorter solutions?",
            options: [
                "To increase the size of individuals",
                "To reduce memory usage",
                "To improve the search for good solutions",
                "To slow down the GP algorithm"
            ],
            correctAnswer: "To improve the search for good solutions",
            explanation: "Modifying crossover and mutation to favor shorter solutions aims to improve the search for good solutions, though it may hinder the discovery of large but effective solutions.",
        }, // citation slide "What to do about introns and bloat (3)"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "Genetic Programming algorithms for predicting CO₂ emissions use a fixed set of input variables.",
            correctAnswer: true,
            explanation: "GP algorithms use a fixed set of input variables, such as GDP, Population, and Energy consumption, to predict CO₂ emissions.",
        }, // citation slide "The objective of the GP (the target problem)"
    ];
};
