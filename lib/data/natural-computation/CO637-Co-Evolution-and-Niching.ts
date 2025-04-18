import {Question} from "../../types";
import {generateGitHubUrlAuto} from "@/lib/utils.ts";

export const questions: (n: number) => Question[] = (n: number) => {
    return [
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "What is the primary difference between cooperative and competitive coevolution?",
            options: [
                "Cooperative coevolution involves individuals working together to solve a problem, while competitive coevolution involves individuals competing against each other.",
                "Cooperative coevolution focuses on optimizing a single objective, while competitive coevolution optimizes multiple objectives.",
                "Cooperative coevolution is used for data clustering, while competitive coevolution is used for game playing.",
                "Cooperative coevolution is faster than competitive coevolution."
            ],
            correctAnswer: "Cooperative coevolution involves individuals working together to solve a problem, while competitive coevolution involves individuals competing against each other.",
            explanation: "Cooperative coevolution involves different populations cooperating to solve parts of a problem, while competitive coevolution involves individuals competing to outperform each other.",
        }, // citation slide "Cooperative Coevolution"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "In cooperative coevolution, each population represents a different part of a candidate solution.",
            correctAnswer: true,
            explanation: "In cooperative coevolution, different populations represent different parts of a candidate solution, and they cooperate to solve the problem.",
        }, // citation slide "Cooperative Coevolution"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is a main issue in cooperative coevolution for data clustering?",
            options: [
                "Determining how to pair individuals from different populations to compute their fitness values.",
                "Ensuring that all individuals in a population are identical.",
                "Minimizing the number of clusters in the data.",
                "Maximizing the distance between all data points."
            ],
            correctAnswer: "Determining how to pair individuals from different populations to compute their fitness values.",
            explanation: "A main issue in cooperative coevolution is how to pair individuals from different populations to compute their fitness values.",
        }, // citation slide "Cooperative Coevolution"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "In competitive coevolution, the fitness of an individual depends on its ability to outperform other individuals.",
            correctAnswer: true,
            explanation: "In competitive coevolution, the fitness of an individual is determined by its ability to outperform other individuals in the population.",
        }, // citation slide "Competitive Coevolution"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "What is the goal of fitness sharing in niching methods?",
            options: [
                "To increase the convergence speed of the algorithm.",
                "To maintain diversity in the population by allocating individuals proportional to peak fitness.",
                "To reduce the number of individuals in the population.",
                "To maximize the fitness of a single individual."
            ],
            correctAnswer: "To maintain diversity in the population by allocating individuals proportional to peak fitness.",
            explanation: "Fitness sharing modifies the fitness assignment to individuals to maintain diversity and allocate individuals proportional to peak fitness.",
        }, // citation slide "Fitness Sharing (1)"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "In fitness sharing, the niche count of an individual is the sum of the sharing function values between the individual and all other individuals in the population.",
            correctAnswer: true,
            explanation: "The niche count of an individual is calculated as the sum of the sharing function values between the individual and all other individuals in the population.",
        }, // citation slide "Fitness Sharing (2)"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "What does the sharing function in fitness sharing measure?",
            options: [
                "The distance between two individuals.",
                "The similarity between two individuals.",
                "The fitness of an individual.",
                "The number of individuals in the population."
            ],
            correctAnswer: "The similarity between two individuals.",
            explanation: "The sharing function measures the similarity between two individuals, which is inversely proportional to the distance between them.",
        }, // citation slide "Fitness Sharing (3)"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "In fitness sharing, if the distance between two individuals is greater than or equal to the distance threshold, the sharing function value is 0.",
            correctAnswer: true,
            explanation: "If the distance between two individuals is greater than or equal to the distance threshold, the sharing function value is 0, indicating that the individuals are in different niches.",
        }, // citation slide "Fitness Sharing (3)"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is a disadvantage of fitness sharing?",
            options: [
                "It is computationally expensive to measure the distance between each pair of individuals.",
                "It is difficult to adjust the value of the distance threshold.",
                "It does not maintain diversity in the population.",
                "It increases the convergence speed of the algorithm."
            ],
            correctAnswer: "It is computationally expensive to measure the distance between each pair of individuals.",
            explanation: "Fitness sharing can be computationally expensive because it requires measuring the distance between each pair of individuals in the population.",
        }, // citation slide "Fitness Sharing (7)"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "In deterministic crowding, a parent is replaced only if the competing child has better fitness.",
            correctAnswer: true,
            explanation: "In deterministic crowding, a parent is replaced only if the competing child has better fitness, ensuring that the population maintains diversity.",
        }, // citation slide "Crowding"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "What is the primary goal of niching methods in evolutionary algorithms?",
            options: [
                "To speed up the convergence of the algorithm.",
                "To find and return a set of optimal or near-optimal solutions.",
                "To reduce the number of individuals in the population.",
                "To maximize the fitness of a single individual."
            ],
            correctAnswer: "To find and return a set of optimal or near-optimal solutions.",
            explanation: "Niching methods aim to find and return a set of optimal or near-optimal solutions, rather than just one optimal solution.",
        }, // citation slide "Motivation for Niching Methods"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "In competitive coevolution for game playing, the fitness of an individual depends on the number of wins, draws, and losses obtained in games.",
            correctAnswer: true,
            explanation: "In competitive coevolution for game playing, the fitness of an individual is determined by the number of wins, draws, and losses obtained in games against other individuals.",
        }, // citation slide "Coevolution for learning a good strategy in game playing (4)"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is a potential problem with crossover in evolutionary algorithms?",
            options: [
                "Crossover may swap genes of individuals in different peaks, producing bad solutions.",
                "Crossover always produces optimal solutions.",
                "Crossover is not necessary for maintaining diversity in the population.",
                "Crossover is only used in competitive coevolution."
            ],
            correctAnswer: "Crossover may swap genes of individuals in different peaks, producing bad solutions.",
            explanation: "Crossover may swap genes of individuals in different peaks, producing bad solutions that are not associated with any peak.",
        }, // citation slide "Speciation"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "Speciation methods restrict crossover to similar individuals, ensuring that mating occurs within the same niche or peak.",
            correctAnswer: true,
            explanation: "Speciation methods restrict crossover to similar individuals, ensuring that mating occurs within the same niche or peak to avoid producing bad solutions.",
        }, // citation slide "Speciation"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "What is the main issue in a GA with cooperative evolution for data clustering?",
            options: [
                "Determining how to concatenate individuals from different populations to form a complete clustering solution.",
                "Ensuring that all individuals in a population are identical.",
                "Minimizing the number of clusters in the data.",
                "Maximizing the distance between all data points."
            ],
            correctAnswer: "Determining how to concatenate individuals from different populations to form a complete clustering solution.",
            explanation: "The main issue in a GA with cooperative evolution for data clustering is determining how to concatenate individuals from different populations to form a complete clustering solution.",
        }, // citation slide "A GA with cooperative evolution for data clustering"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "In a GA with cooperative evolution for data clustering, each GA evolves in parallel to find the best centroid for a single cluster.",
            correctAnswer: true,
            explanation: "In a GA with cooperative evolution for data clustering, each GA evolves in parallel to find the best centroid for a single cluster, and the populations cooperate to form a complete clustering solution.",
        }, // citation slide "A GA with cooperative evolution for data clustering"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "What is the purpose of the sharing function in fitness sharing?",
            options: [
                "To measure the distance between two individuals.",
                "To measure the similarity between two individuals.",
                "To measure the fitness of an individual.",
                "To measure the number of individuals in the population."
            ],
            correctAnswer: "To measure the similarity between two individuals.",
            explanation: "The sharing function in fitness sharing measures the similarity between two individuals, which is inversely proportional to the distance between them.",
        }, // citation slide "Fitness Sharing (3)"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "In fitness sharing, if the distance between two individuals is 0, the sharing function value is 1.",
            correctAnswer: true,
            explanation: "If the distance between two individuals is 0, the sharing function value is 1, indicating that the individuals are identical.",
        }, // citation slide "Fitness Sharing (3)"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is an advantage of fitness sharing?",
            options: [
                "It is conceptually simple and a good metaphor for natural niching.",
                "It is computationally inexpensive.",
                "It does not require adjusting the distance threshold.",
                "It always finds the global optimum."
            ],
            correctAnswer: "It is conceptually simple and a good metaphor for natural niching.",
            explanation: "Fitness sharing is conceptually simple and provides a good metaphor for natural niching, as it allocates individuals proportional to peak fitness.",
        }, // citation slide "Fitness Sharing (7)"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "In deterministic crowding, a parent and its children compete for survival, and a parent is replaced only if the competing child has better fitness.",
            correctAnswer: true,
            explanation: "In deterministic crowding, a parent and its children compete for survival, and a parent is replaced only if the competing child has better fitness, ensuring diversity in the population.",
        }, // citation slide "Crowding"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "What is the goal of niching methods in evolutionary algorithms?",
            options: [
                "To speed up the convergence of the algorithm.",
                "To find and return a set of optimal or near-optimal solutions.",
                "To reduce the number of individuals in the population.",
                "To maximize the fitness of a single individual."
            ],
            correctAnswer: "To find and return a set of optimal or near-optimal solutions.",
            explanation: "Niching methods aim to find and return a set of optimal or near-optimal solutions, rather than just one optimal solution.",
        }, // citation slide "Motivation for Niching Methods"
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "In competitive coevolution for game playing, the fitness of an individual is determined by the number of wins, draws, and losses obtained in games against other individuals.",
            correctAnswer: true,
            explanation: "In competitive coevolution for game playing, the fitness of an individual is determined by the number of wins, draws, and losses obtained in games against other individuals.",
        }, // citation slide "Coevolution for learning a good strategy in game playing (4)"
    ];
};
