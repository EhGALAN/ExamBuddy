import {Question} from "../../types";

export const questions: (n: number) => Question[] = (n: number) => {
    return [
        {
            id: `nc-${++n}`,
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is a key advantage of evolutionary algorithms in multi-objective optimization?",
            options: [
                "They always converge to a single optimal solution.",
                "They can handle multiple trade-offs between objectives.",
                "They require fewer computational resources than traditional methods.",
                "They are only suitable for single-objective problems."
            ],
            correctAnswer: "They can handle multiple trade-offs between objectives.",
            explanation: "Evolutionary algorithms are well-suited for multi-objective optimization because they work with a population of individuals, allowing different individuals to represent different trade-offs between objectives.",
        }, // citation slide Motivation for Multi-Objective Optimisation
        {
            id: `nc-${++n}`,
            type: "true-false",
            subject: "Natural Computation",
            text: "In the weighted-sum approach for multi-objective optimization, the weights for each objective are always predefined and fixed.",
            correctAnswer: true,
            explanation: "The weights in the weighted-sum approach are often arbitrary and ad-hoc but have a significant impact on the search for solutions.",
        }, // citation slide Weighted-Sum Approach
        {
            id: `nc-${++n}`,
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "What is the primary goal of minimizing the size of an individual in a genetic programming algorithm?",
            options: [
                "To increase the prediction error.",
                "To mitigate the problem of bloating.",
                "To reduce computational efficiency.",
                "To ensure all individuals have the same size."
            ],
            correctAnswer: "To mitigate the problem of bloating.",
            explanation: "Minimizing the size of an individual helps to mitigate the problem of bloating and makes the model easier to understand.",
        }, // citation slide The two objectives to be optimised by the GP algorithm for predicting CO2 emission in China
        {
            id: `nc-${++n}`,
            type: "true-false",
            subject: "Natural Computation",
            text: "In Pareto dominance, a solution S1 dominates solution S2 if S1 is strictly better than S2 in at least one objective and not worse in all objectives.",
            correctAnswer: true,
            explanation: "This is the definition of Pareto dominance, where a solution is considered better if it is not worse in all objectives and strictly better in at least one.",
        }, // citation slide Pareto Dominance (2)
        {
            id: `nc-${++n}`,
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is NOT a drawback of the weighted-sum approach in multi-objective optimization?",
            options: [
                "The weights are often arbitrary and ad-hoc.",
                "The weights define just one trade-off between objectives.",
                "The approach always converges to a single optimal solution.",
                "The user might want to consider other trade-offs."
            ],
            correctAnswer: "The approach always converges to a single optimal solution.",
            explanation: "The weighted-sum approach does not guarantee convergence to a single optimal solution; it defines one trade-off between objectives.",
        }, // citation slide Weighted-Sum Approach
        {
            id: `nc-${++n}`,
            type: "true-false",
            subject: "Natural Computation",
            text: "In lexicographic optimization, the user defines a priority ordering for the objectives.",
            correctAnswer: true,
            explanation: "Lexicographic optimization allows the user to define a priority ordering for the objectives, making it easier to specify preferences.",
        }, // citation slide Lexicographic Optimisation (1)
        {
            id: `nc-${++n}`,
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "What is the primary goal of the crowded-comparison operator in NSGA-II?",
            options: [
                "To increase the diversity of the population.",
                "To reduce the computational complexity.",
                "To ensure all individuals have the same fitness.",
                "To prioritize individuals with the smallest rank."
            ],
            correctAnswer: "To increase the diversity of the population.",
            explanation: "The crowded-comparison operator in NSGA-II aims to maintain diversity in the population by selecting individuals based on their rank and distance to nearest neighbors.",
        }, // citation slide Non-Dominated Sorting GA (NSGA-II) (3)
        {
            id: `nc-${++n}`,
            type: "true-false",
            subject: "Natural Computation",
            text: "The hypervolume indicator measures the size of the objective space covered by the non-dominated solutions.",
            correctAnswer: true,
            explanation: "The hypervolume indicator is a measure of the size of the objective space covered by the non-dominated solutions, providing insight into the quality of the solutions.",
        }, // citation slide Evaluating the set of non-dominated solutions produced by a multi-objective GA
        {
            id: `nc-${++n}`,
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is a key idea in the Non-Dominated Sorting GA (NSGA-II)?",
            options: [
                "Sorting the population into layers of non-dominated individuals.",
                "Using a single objective to evaluate fitness.",
                "Randomly selecting individuals for the next generation.",
                "Prioritizing individuals with the highest fitness."
            ],
            correctAnswer: "Sorting the population into layers of non-dominated individuals.",
            explanation: "NSGA-II sorts the population into layers of non-dominated individuals based on Pareto dominance, assigning ranks to each individual.",
        }, // citation slide Non-Dominated Sorting GA (NSGA-II) (1)
        {
            id: `nc-${++n}`,
            type: "true-false",
            subject: "Natural Computation",
            text: "In adaptive crossover, the probability of each crossover type is adjusted based on its success in improving fitness.",
            correctAnswer: true,
            explanation: "Adaptive crossover adjusts the probability of each crossover type based on its success in improving the fitness of the offspring.",
        }, // citation slide Adaptive Crossover
        {
            id: `nc-${++n}`,
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "What is a potential drawback of self-adaptive mutation?",
            options: [
                "It reduces the size of an individual.",
                "It increases the computational complexity.",
                "It requires fewer parameters than deterministic approaches.",
                "It always converges to the optimal solution."
            ],
            correctAnswer: "It increases the computational complexity.",
            explanation: "Self-adaptive mutation increases the size of an individual, requiring more time for the evolutionary search to find a near-optimal solution.",
        }, // citation slide Issues with Self-Adaptive Approaches
        {
            id: `nc-${++n}`,
            type: "true-false",
            subject: "Natural Computation",
            text: "In a meta-level evolutionary algorithm, each individual represents a set of parameter settings for a base-level EA.",
            correctAnswer: true,
            explanation: "A meta-level EA searches in the space of parameter settings for the base-level EA, with each individual representing a set of parameter values.",
        }, // citation slide Example of the use of a meta-level EA to optimise parameters of a base-level EA (1)
        {
            id: `nc-${++n}`,
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is a key advantage of dynamic parameter optimization in evolutionary algorithms?",
            options: [
                "It keeps parameter settings fixed during the run.",
                "It adapts parameter settings on the fly.",
                "It requires fewer computational resources.",
                "It always converges to a single optimal solution."
            ],
            correctAnswer: "It adapts parameter settings on the fly.",
            explanation: "Dynamic parameter optimization adapts parameter settings during the run of the EA, potentially making it more effective.",
        }, // citation slide Two broad approaches for EAs' parameter optimization
        {
            id: `nc-${++n}`,
            type: "true-false",
            subject: "Natural Computation",
            text: "In self-adaptive mutation, the mutation probability is dynamically adapted for each gene in an individual.",
            correctAnswer: true,
            explanation: "Self-adaptive mutation allows the mutation probability to be dynamically adapted at the gene level, evolving alongside the solution.",
        }, // citation slide Self-adaptive mutation (1)
        {
            id: `nc-${++n}`,
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "What is the primary goal of the adaptive approach for optimizing selective pressure?",
            options: [
                "To keep selective pressure constant throughout the run.",
                "To increase selective pressure as diversity decreases.",
                "To decrease selective pressure as diversity increases.",
                "To randomly adjust selective pressure."
            ],
            correctAnswer: "To increase selective pressure as diversity decreases.",
            explanation: "The adaptive approach adjusts selective pressure based on the diversity of the population, increasing it when diversity decreases.",
        }, // citation slide Optimizing Selective Pressure (2)
        {
            id: `nc-${++n}`,
            type: "true-false",
            subject: "Natural Computation",
            text: "In the deterministic approach for optimizing tournament size, the value of K is increased with time.",
            correctAnswer: true,
            explanation: "The deterministic approach increases the value of K over time to strengthen selective pressure as the EA progresses.",
        }, // citation slide Optimizing Selective Pressure (1)
        {
            id: `nc-${++n}`,
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is a drawback of using a meta-level EA to optimize parameters of a base-level EA?",
            options: [
                "It is computationally inexpensive.",
                "It requires running the base-level EA multiple times.",
                "It always converges to a single optimal solution.",
                "It reduces the size of the search space."
            ],
            correctAnswer: "It requires running the base-level EA multiple times.",
            explanation: "Using a meta-level EA is computationally expensive because it involves running the base-level EA multiple times.",
        }, // citation slide Example of the use of a meta-level EA to optimise parameters of a base-level EA (2)
        {
            id: `nc-${++n}`,
            type: "true-false",
            subject: "Natural Computation",
            text: "In Pareto dominance, a solution is considered bad if it is dominated by at least one other solution.",
            correctAnswer: true,
            explanation: "A solution is considered bad in Pareto dominance if it is dominated by at least one other solution in the population.",
        }, // citation slide Pareto Dominance (1)
        {
            id: `nc-${++n}`,
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "What is the primary goal of the lexicographic optimization approach?",
            options: [
                "To combine multiple objectives into a single weighted objective.",
                "To prioritize objectives based on user-defined preferences.",
                "To randomly select individuals for the next generation.",
                "To ensure all individuals have the same fitness."
            ],
            correctAnswer: "To prioritize objectives based on user-defined preferences.",
            explanation: "Lexicographic optimization allows the user to define a priority ordering for the objectives, making it easier to specify preferences.",
        }, // citation slide Lexicographic Optimisation (1)
        {
            id: `nc-${++n}`,
            type: "true-false",
            subject: "Natural Computation",
            text: "The crowded-comparison operator in NSGA-II selects individuals based on their rank and distance to nearest neighbors.",
            correctAnswer: true,
            explanation: "The crowded-comparison operator in NSGA-II selects individuals based on their non-dominated rank and the distance to their nearest neighbors to maintain diversity.",
        }, // citation slide Non-Dominated Sorting GA (NSGA-II) (3)
        {
            id: `nc-${++n}`,
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is a key advantage of using evolutionary algorithms for parameter optimization?",
            options: [
                "They require fewer computational resources.",
                "They can adapt parameters dynamically during the run.",
                "They always converge to a single optimal solution.",
                "They are only suitable for single-objective problems."
            ],
            correctAnswer: "They can adapt parameters dynamically during the run.",
            explanation: "Evolutionary algorithms can adapt parameters dynamically during the run, making them more flexible and potentially more effective.",
        }, // citation slide Two broad approaches for EAs' parameter optimization
        {
            id: `nc-${++n}`,
            type: "true-false",
            subject: "Natural Computation",
            text: "In self-adaptive mutation, the mutation probability is encoded in the individuals and evolves alongside the solution.",
            correctAnswer: true,
            explanation: "Self-adaptive mutation encodes the mutation probability in the individuals, allowing it to evolve alongside the solution.",
        }, // citation slide Self-adaptive mutation (2)
    ];
};
