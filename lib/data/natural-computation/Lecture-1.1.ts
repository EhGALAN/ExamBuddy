import {Question} from "../../types";

export const questions: (n: number) => Question[] = (n: number) => {
    return [
        {
            id: `nc-${++n}`,
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is NOT a type of evolutionary algorithm?",
            options: ["Genetic Algorithms", "Particle Swarm Optimization", "Artificial Bee Colony", "Prescriptive Algorithms"],
            correctAnswer: "Prescriptive Algorithms",
        }, // citation slide: "Four types of evolutionary algorithms"
        {
            id: `nc-${++n}`,
            type: "true-false",
            subject: "Natural Computation",
            text: "Evolutionary algorithms are inspired by Darwin's theory of evolution.",
            correctAnswer: true,
        }, // citation slide: "Darwin's theory of evolution"
        {
            id: `nc-${++n}`,
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "What is the primary goal of the selection operator in evolutionary algorithms?",
            options: ["To introduce randomness", "To create diversity", "To push quality improvement", "To reduce population size"],
            correctAnswer: "To push quality improvement",
        }, // citation slide: "Selection operators"
        {
            id: `nc-${++n}`,
            type: "true-false",
            subject: "Natural Computation",
            text: "Mutation operators in evolutionary algorithms always result in better offspring than their parents.",
            correctAnswer: false,
        }, // citation slide: "Mutation operators"
        {
            id: `nc-${++n}`,
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is a component of evolutionary algorithms?",
            options: ["Representation", "Evaluation function", "Population", "All of the above"],
            correctAnswer: "All of the above",
        }, // citation slide: "Components of EAs"
        {
            id: `nc-${++n}`,
            type: "true-false",
            subject: "Natural Computation",
            text: "In evolutionary algorithms, the population size remains constant over generations.",
            correctAnswer: true,
        }, // citation slide: "Population"
        {
            id: `nc-${++n}`,
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "What is the role of the evaluation function in evolutionary algorithms?",
            options: ["To measure the quality of individuals", "To create diversity", "To select parents", "To mutate genes"],
            correctAnswer: "To measure the quality of individuals",
        }, // citation slide: "Evaluation function"
        {
            id: `nc-${++n}`,
            type: "true-false",
            subject: "Natural Computation",
            text: "Recombination operators in evolutionary algorithms always produce offspring that are better than their parents.",
            correctAnswer: false,
        }, // citation slide: "Recombination operators"
        {
            id: `nc-${++n}`,
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is a type of swarm intelligence algorithm?",
            options: ["Genetic Algorithms", "Particle Swarm Optimization", "Evolutionary Strategies", "Evolutionary Programming"],
            correctAnswer: "Particle Swarm Optimization",
        }, // citation slide: "Swarm Intelligence Algorithms"
        {
            id: `nc-${++n}`,
            type: "true-false",
            subject: "Natural Computation",
            text: "Evolutionary algorithms are deterministic in nature.",
            correctAnswer: false,
        }, // citation slide: "General properties of how EAs work"
        {
            id: `nc-${++n}`,
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "What is the primary goal of evolutionary algorithms?",
            options: ["To solve optimization tasks", "To model human behavior", "To simulate weather patterns", "To analyze financial markets"],
            correctAnswer: "To solve optimization tasks",
        }, // citation slide: "Motivation for evolutionary algorithms"
        {
            id: `nc-${++n}`,
            type: "true-false",
            subject: "Natural Computation",
            text: "In evolutionary algorithms, exploration refers to concentrating the search around known good regions.",
            correctAnswer: false,
        }, // citation slide: "Trade-off between exploration and exploitation"
        {
            id: `nc-${++n}`,
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is NOT a component of evolutionary algorithms?",
            options: ["Representation", "Evaluation function", "Population", "Deterministic rules"],
            correctAnswer: "Deterministic rules",
        }, // citation slide: "Components of EAs"
        {
            id: `nc-${++n}`,
            type: "true-false",
            subject: "Natural Computation",
            text: "Evolutionary algorithms can get stuck in local optima if there is too much exploitation.",
            correctAnswer: true,
        }, // citation slide: "Trade-off between exploration and exploitation"
        {
            id: `nc-${++n}`,
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "What is the role of variation operators in evolutionary algorithms?",
            options: ["To create diversity", "To measure quality", "To select parents", "To reduce population size"],
            correctAnswer: "To create diversity",
        }, // citation slide: "Variation operators"
        {
            id: `nc-${++n}`,
            type: "true-false",
            subject: "Natural Computation",
            text: "In evolutionary algorithms, the genotype space is the same as the phenotype space.",
            correctAnswer: false,
        }, // citation slide: "Genotype space and phenotype space"
        {
            id: `nc-${++n}`,
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is a correct statement about evolutionary algorithms?",
            options: ["Low-fitness individuals are never selected", "Crossover and mutation can create new genotypes", "Selection operators create diversity", "Mutation is deterministic"],
            correctAnswer: "Crossover and mutation can create new genotypes",
        }, // citation slide: "Exercise"
        {
            id: `nc-${++n}`,
            type: "true-false",
            subject: "Natural Computation",
            text: "Evolutionary algorithms are only used for optimization tasks.",
            correctAnswer: false,
        }, // citation slide: "Motivation for evolutionary algorithms"
        {
            id: `nc-${++n}`,
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "What is the role of the fitness function in evolutionary algorithms?",
            options: ["To evaluate the quality of individuals", "To create diversity", "To select parents", "To mutate genes"],
            correctAnswer: "To evaluate the quality of individuals",
        }, // citation slide: "Evaluation function"
        {
            id: `nc-${++n}`,
            type: "true-false",
            subject: "Natural Computation",
            text: "In evolutionary algorithms, recombination and mutation are deterministic processes.",
            correctAnswer: false,
        }, // citation slide: "Recombination and mutation operators"
        {
            id: `nc-${++n}`,
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is a type of genetic representation in evolutionary algorithms?",
            options: ["Strings over a finite set of symbols", "Real-valued vectors", "Trees", "All of the above"],
            correctAnswer: "All of the above",
        }, // citation slide: "Four types of EAs"
    ];
};
