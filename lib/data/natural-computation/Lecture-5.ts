import {Question} from "../../types";

export const questions: (n: number) => Question[] = (n: number) => {
    return [
        {
            id: `nc-${++n}`,
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is an example of swarm intelligence?",
            options: ["Particle Swarm Optimization (PSO)", "Ant Colony Optimization (ACO)", "Artificial Bee Colony (ABC)", "All of the above"],
            correctAnswer: "All of the above",
            explanation: "Swarm intelligence includes algorithms like PSO, ACO, and ABC, which are inspired by the behavior of natural swarms.",
        }, // citation slide Swarm Intelligence
        {
            id: `nc-${++n}`,
            type: "true-false",
            subject: "Natural Computation",
            text: "In bird flocking, each bird knows the global patterns of the whole flock.",
            correctAnswer: false,
            explanation: "Each bird in a flock does not know the global patterns; instead, it follows simple rules based on local interactions.",
        }, // citation slide Bird Flocking
        {
            id: `nc-${++n}`,
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is NOT a rule in the Boids Model for bird flocking?",
            options: ["Separation", "Alignment", "Cohesion", "Leadership"],
            correctAnswer: "Leadership",
            explanation: "The Boids Model includes separation, alignment, and cohesion as rules, but not leadership.",
        }, // citation slide Boids Model
        {
            id: `nc-${++n}`,
            type: "true-false",
            subject: "Natural Computation",
            text: "Swarm intelligence algorithms are more likely to find a global optimal solution than local search methods.",
            correctAnswer: true,
            explanation: "Swarm algorithms perform a global search in the search space, making them more likely to find a global optimal solution.",
        }, // citation slide Swarm Intelligence
        {
            id: `nc-${++n}`,
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is a component of a particle's velocity update in PSO?",
            options: ["Inertia", "Cognitive component", "Social component", "All of the above"],
            correctAnswer: "All of the above",
            explanation: "A particle's velocity update in PSO includes inertia, cognitive component, and social component.",
        }, // citation slide Particle Moves to a New Position
        {
            id: `nc-${++n}`,
            type: "true-false",
            subject: "Natural Computation",
            text: "In PSO, each particle knows the position and fitness of each of its neighbors.",
            correctAnswer: true,
            explanation: "Each particle in PSO interacts with its neighbors and knows their positions and fitness.",
        }, // citation slide Particle Swarm Optimization (PSO)
        {
            id: `nc-${++n}`,
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "What does the cognitive component in PSO represent?",
            options: ["Attraction to the particle's best position so far", "Attraction to the global best position", "Inertia", "Random movement"],
            correctAnswer: "Attraction to the particle's best position so far",
            explanation: "The cognitive component in PSO represents the attraction to the particle's best position so far.",
        }, // citation slide Particle Moves to a New Position
        {
            id: `nc-${++n}`,
            type: "true-false",
            subject: "Natural Computation",
            text: "In PSO, the global best position is the best position found by any particle in the swarm.",
            correctAnswer: true,
            explanation: "The global best position in PSO is the best position found by any particle in the swarm.",
        }, // citation slide Particle Swarm Optimization (PSO)
        {
            id: `nc-${++n}`,
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is NOT a stage in the PSO process?",
            options: ["Initialization", "Fitness evaluation", "Selection", "Velocity update"],
            correctAnswer: "Selection",
            explanation: "PSO does not include a selection stage like genetic algorithms; instead, it uses velocity updates.",
        }, // citation slide Flowchart and Pseudo Code of Particle Swarm Optimization
        {
            id: `nc-${++n}`,
            type: "true-false",
            subject: "Natural Computation",
            text: "In PSO, particles improve their fitness by being partially attracted to their personal best and global best positions.",
            correctAnswer: true,
            explanation: "Particles in PSO improve their fitness by being partially attracted to their personal best and global best positions.",
        }, // citation slide Comparison between PSO and GA
        {
            id: `nc-${++n}`,
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is a similarity between PSO and genetic algorithms (GA)?",
            options: ["Both are population-based algorithms", "Both use selection", "Both use crossover", "Both use mutation"],
            correctAnswer: "Both are population-based algorithms",
            explanation: "Both PSO and GA are population-based algorithms, but PSO does not use selection, crossover, or mutation.",
        }, // citation slide Comparison between PSO and GA
        {
            id: `nc-${++n}`,
            type: "true-false",
            subject: "Natural Computation",
            text: "In PSO, every particle goes to the next iteration, regardless of its fitness.",
            correctAnswer: true,
            explanation: "In PSO, there is no selection process, so every particle goes to the next iteration.",
        }, // citation slide Comparison between PSO and GA
        {
            id: `nc-${++n}`,
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "What does the social component in PSO represent?",
            options: ["Attraction to the particle's best position so far", "Attraction to the global best position", "Inertia", "Random movement"],
            correctAnswer: "Attraction to the global best position",
            explanation: "The social component in PSO represents the attraction to the global best position found by the swarm.",
        }, // citation slide Particle Moves to a New Position
        {
            id: `nc-${++n}`,
            type: "true-false",
            subject: "Natural Computation",
            text: "In PSO, the inertia component helps the particle maintain its current direction.",
            correctAnswer: true,
            explanation: "The inertia component in PSO helps the particle maintain its current direction.",
        }, // citation slide Particle Moves to a New Position
        {
            id: `nc-${++n}`,
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is a difference between PSO and GA?",
            options: ["PSO uses selection", "PSO uses crossover", "PSO uses mutation", "PSO does not use selection"],
            correctAnswer: "PSO does not use selection",
            explanation: "PSO does not use selection, unlike GA, which relies on selection to generate better populations.",
        }, // citation slide Comparison between PSO and GA
        {
            id: `nc-${++n}`,
            type: "true-false",
            subject: "Natural Computation",
            text: "In PSO, particles are partially attracted to their past best positions and the global best position found by the swarm.",
            correctAnswer: true,
            explanation: "Particles in PSO are partially attracted to their past best positions and the global best position found by the swarm.",
        }, // citation slide Particle Swarm Optimization (PSO)
        {
            id: `nc-${++n}`,
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is a key feature of swarm intelligence?",
            options: ["Emergent complex behavior from simple individual behavior", "Centralized control", "Predefined global patterns", "Random movement"],
            correctAnswer: "Emergent complex behavior from simple individual behavior",
            explanation: "Swarm intelligence produces emergent complex behavior from the simple behavior of individuals.",
        }, // citation slide Swarm Intelligence
        {
            id: `nc-${++n}`,
            type: "true-false",
            subject: "Natural Computation",
            text: "In the Boids Model, each bird adjusts its position based on separation, alignment, and cohesion.",
            correctAnswer: true,
            explanation: "In the Boids Model, each bird adjusts its position based on separation, alignment, and cohesion.",
        }, // citation slide Boids Model
        {
            id: `nc-${++n}`,
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is NOT a type of swarm intelligence algorithm?",
            options: ["Particle Swarm Optimization (PSO)", "Genetic Algorithm (GA)", "Ant Colony Optimization (ACO)", "Artificial Bee Colony (ABC)"],
            correctAnswer: "Genetic Algorithm (GA)",
            explanation: "Genetic Algorithm (GA) is not a type of swarm intelligence algorithm; it is inspired by Darwinian evolution.",
        }, // citation slide Swarm Intelligence
        {
            id: `nc-${++n}`,
            type: "true-false",
            subject: "Natural Computation",
            text: "In PSO, the velocity of a particle is updated based on its inertia, cognitive component, and social component.",
            correctAnswer: true,
            explanation: "The velocity of a particle in PSO is updated based on its inertia, cognitive component, and social component.",
        }, // citation slide Particle Moves to a New Position
        {
            id: `nc-${++n}`,
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "What is the goal of swarm intelligence algorithms?",
            options: ["To find the global optimal solution", "To perform local search", "To mimic human behavior", "To create random patterns"],
            correctAnswer: "To find the global optimal solution",
            explanation: "The goal of swarm intelligence algorithms is to find the global optimal solution to complex problems.",
        }, // citation slide Swarm Intelligence
    ];
};
