import {Question} from "../../types";
import {generateGitHubUrlAuto} from "@/lib/utils.ts";

export const questions: (n: number) => Question[] = (n: number) => {
    return [
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following algorithms is inspired by the foraging behaviour of honey bees?",
            options: ["Particle Swarm Optimization (PSO)", "Ant Colony Optimization (ACO)", "Artificial Bee Colony (ABC)", "Genetic Algorithm (GA)"],
            correctAnswer: "Artificial Bee Colony (ABC)",
        }, // citation slide Swarm Intelligence
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "In the Artificial Bee Colony (ABC) algorithm, scout bees search for new unknown food sources.",
            correctAnswer: true,
        }, // citation slide Foraging Behaviour of Honey Bees
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "What is the role of employed bees in the ABC algorithm?",
            options: ["They wait in the hive and choose food sources based on dances.", "They exploit known food sources and recruit other bees.", "They search for new unknown food sources.", "They abandon exhausted food sources."],
            correctAnswer: "They exploit known food sources and recruit other bees.",
        }, // citation slide Foraging Behaviour of Honey Bees
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "The ABC algorithm was developed by D. Karaboga in 2005.",
            correctAnswer: true,
        }, // citation slide Artificial Bee Colony (ABC) Algorithm
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which phase in the ABC algorithm involves generating a new solution in the neighbourhood of a current solution?",
            options: ["Employed bee phase", "Onlooker bee phase", "Scout bee phase", "Initialization phase"],
            correctAnswer: "Employed bee phase",
        }, // citation slide Artificial Bee Colony (ABC) Algorithm
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "In the ABC algorithm, the trial counter measures the number of times a food source cannot be improved.",
            correctAnswer: true,
        }, // citation slide Artificial Bee Colony (ABC) Algorithm
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "What is the purpose of the onlooker bee phase in the ABC algorithm?",
            options: ["To randomly search for new food sources.", "To select a current solution with a probability related to its fitness.", "To abandon exhausted food sources.", "To initialize the population of food sources."],
            correctAnswer: "To select a current solution with a probability related to its fitness.",
        }, // citation slide Onlooker bee phase
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "In the ABC algorithm, the scout bee phase occurs in every iteration.",
            correctAnswer: false,
        }, // citation slide Scout bee phase
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "What happens when the trial counter of a food source exceeds the limit in the ABC algorithm?",
            options: ["The food source is abandoned and replaced with a new random food source.", "The food source is kept, and its trial counter is reset.", "The food source is abandoned, but no new food source is generated.", "The food source is kept, and its fitness is recalculated."],
            correctAnswer: "The food source is abandoned and replaced with a new random food source.",
        }, // citation slide Scout bee phase
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "The ABC algorithm maintains a balance between exploitation and exploration when searching for the global optimal solution.",
            correctAnswer: true,
        }, // citation slide Search process in ABC algorithm
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is NOT a step in the main loop of the ABC algorithm?",
            options: ["Employed bee phase", "Onlooker bee phase", "Scout bee phase", "Mutation phase"],
            correctAnswer: "Mutation phase",
        }, // citation slide Pseudocode of ABC algorithm
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "In the ABC algorithm, the limit parameter controls the production rate of scout bees.",
            correctAnswer: true,
        }, // citation slide Scout bee phase
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "What is the role of the dancing area in the foraging behaviour of honey bees?",
            options: ["It is where employed bees recruit other bees by dancing.", "It is where scout bees search for new food sources.", "It is where onlooker bees wait for dances.", "It is where nectar is stored."],
            correctAnswer: "It is where employed bees recruit other bees by dancing.",
        }, // citation slide Foraging Behaviour of Honey Bees
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "In the ABC algorithm, the best food source found so far is recorded before performing the scout bee phase.",
            correctAnswer: true,
        }, // citation slide Scout bee phase
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is used to evaluate the profitability of a food source in the ABC algorithm?",
            options: ["Fitness function", "Trial counter", "Probability function", "Random number"],
            correctAnswer: "Fitness function",
        }, // citation slide Artificial Bee Colony (ABC) Algorithm
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "In the ABC algorithm, the employed bee phase involves applying greedy selection between the current solution and its newly generated neighbour solution.",
            correctAnswer: true,
        }, // citation slide Employed bee phase
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "What is the purpose of the probability calculation in the onlooker bee phase of the ABC algorithm?",
            options: ["To determine which food source is most likely to be visited.", "To generate new random food sources.", "To abandon exhausted food sources.", "To initialize the population of food sources."],
            correctAnswer: "To determine which food source is most likely to be visited.",
        }, // citation slide Onlooker bee phase
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "In the ABC algorithm, the scout bee phase can remove the best food source from the population.",
            correctAnswer: true,
        }, // citation slide Scout bee phase
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is a user-specified parameter in the ABC algorithm?",
            options: ["Limit", "Fitness function", "Probability", "Trial counter"],
            correctAnswer: "Limit",
        }, // citation slide Scout bee phase
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "The ABC algorithm starts with a random initial population of candidate solutions.",
            correctAnswer: true,
        }, // citation slide Search process in ABC algorithm
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "What is the role of the nectar area in the foraging behaviour of honey bees?",
            options: ["It is where nectar is collected.", "It is where employed bees dance.", "It is where onlooker bees wait.", "It is where scout bees search for new food sources."],
            correctAnswer: "It is where nectar is collected.",
        }, // citation slide Foraging Behaviour of Honey Bees
    ];
};
