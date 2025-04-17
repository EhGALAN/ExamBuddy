import {Question} from "../../types";

export const questions: (n: number) => Question[] = (n: number) => {
    return [
        {
            id: `nc-${++n}`,
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is a selection operator in genetic algorithms?",
            options: ["Fitness proportional selection", "Ranking selection", "Tournament selection", "Elitism"],
            correctAnswer: "Fitness proportional selection",
            explanation: "Fitness proportional selection, ranking selection, and tournament selection are all selection operators in genetic algorithms.",
        }, // citation slide Selection
        {
            id: `nc-${++n}`,
            type: "true-false",
            subject: "Natural Computation",
            text: "In fitness proportional selection, the selection probability depends on the absolute fitness values of individuals.",
            correctAnswer: true,
            explanation: "Fitness proportional selection relies on the absolute fitness values to determine selection probabilities.",
        }, // citation slide Selection
        {
            id: `nc-${++n}`,
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "What is a potential issue with fitness proportional selection?",
            options: ["Premature convergence", "Weak selection pressure", "Both A and B", "Neither A nor B"],
            correctAnswer: "Both A and B",
            explanation: "Fitness proportional selection can lead to premature convergence and weak selection pressure when fitness values are similar.",
        }, // citation slide Selection
        {
            id: `nc-${++n}`,
            type: "true-false",
            subject: "Natural Computation",
            text: "Ranking selection prevents premature convergence by using relative fitness values.",
            correctAnswer: true,
            explanation: "Ranking selection assigns selection probabilities based on the rank of individuals, reducing the risk of premature convergence.",
        }, // citation slide Selection
        {
            id: `nc-${++n}`,
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which selection operator is most widely used in modern genetic algorithms?",
            options: ["Fitness proportional selection", "Ranking selection", "Tournament selection", "Elitism"],
            correctAnswer: "Tournament selection",
            explanation: "Tournament selection is widely used due to its simplicity, controllable selection pressure, and support for parallel implementation.",
        }, // citation slide Selection
        {
            id: `nc-${++n}`,
            type: "true-false",
            subject: "Natural Computation",
            text: "Elitism ensures that the best individual in the current generation is always preserved in the next generation.",
            correctAnswer: true,
            explanation: "Elitism guarantees that the best individual is carried forward to the next generation.",
        }, // citation slide Elitism
        {
            id: `nc-${++n}`,
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "What is the primary function of selection operators in genetic algorithms?",
            options: ["To create new individuals", "To evaluate fitness", "To select fitter individuals for reproduction", "To mutate individuals"],
            correctAnswer: "To select fitter individuals for reproduction",
            explanation: "Selection operators are used to choose individuals with better fitness values for reproduction.",
        }, // citation slide Selection
        {
            id: `nc-${++n}`,
            type: "true-false",
            subject: "Natural Computation",
            text: "In tournament selection, the tournament size (k) controls the selection pressure.",
            correctAnswer: true,
            explanation: "A larger tournament size increases selection pressure, reducing the chance for low-fitness individuals to be selected.",
        }, // citation slide Selection
        {
            id: `nc-${++n}`,
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is NOT a property of tournament selection?",
            options: ["Requires global knowledge of the population", "Supports parallel implementation", "Prevents premature convergence", "Prevents loss of selection pressure"],
            correctAnswer: "Requires global knowledge of the population",
            explanation: "Tournament selection does not require global knowledge of the population, making it suitable for parallel implementation.",
        }, // citation slide Selection
        {
            id: `nc-${++n}`,
            type: "true-false",
            subject: "Natural Computation",
            text: "Ranking selection is effective in handling minimization problems.",
            correctAnswer: true,
            explanation: "Ranking selection can easily handle minimization problems by sorting individuals based on their fitness values.",
        }, // citation slide Selection
        {
            id: `nc-${++n}`,
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "What happens if the tournament size (k) in tournament selection is equal to the population size (N)?",
            options: ["Selection becomes deterministic", "Selection becomes random", "Selection pressure decreases", "Selection pressure increases"],
            correctAnswer: "Selection becomes deterministic",
            explanation: "When k=N, the best individual is always selected, making the selection deterministic.",
        }, // citation slide Selection
        {
            id: `nc-${++n}`,
            type: "true-false",
            subject: "Natural Computation",
            text: "In genetic algorithms, selection is independent of the genotype and phenotype of individuals once their fitness values are known.",
            correctAnswer: true,
            explanation: "Selection is based solely on fitness values, regardless of the genotype or phenotype.",
        }, // citation slide Selection
        {
            id: `nc-${++n}`,
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is a benefit of elitism in genetic algorithms?",
            options: ["Increases diversity", "Prevents loss of the best solution", "Reduces selection pressure", "Speeds up convergence"],
            correctAnswer: "Prevents loss of the best solution",
            explanation: "Elitism ensures that the best solution is not lost during the evolutionary process.",
        }, // citation slide Elitism
        {
            id: `nc-${++n}`,
            type: "true-false",
            subject: "Natural Computation",
            text: "Tournament selection is simpler to implement compared to ranking selection.",
            correctAnswer: true,
            explanation: "Tournament selection is straightforward and requires only local comparisons, making it easier to implement.",
        }, // citation slide Selection
        {
            id: `nc-${++n}`,
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "What is the role of mutation in genetic algorithms?",
            options: ["To introduce new genetic material", "To select fitter individuals", "To evaluate fitness", "To preserve the best individual"],
            correctAnswer: "To introduce new genetic material",
            explanation: "Mutation introduces new genetic material into the population, promoting diversity.",
        }, // citation slide Components in the design of genetic algorithms
        {
            id: `nc-${++n}`,
            type: "true-false",
            subject: "Natural Computation",
            text: "Permutation representation is a type of individual representation in genetic algorithms.",
            correctAnswer: true,
            explanation: "Permutation representation is one of the ways to encode individuals in genetic algorithms.",
        }, // citation slide Components in the design of genetic algorithms
        {
            id: `nc-${++n}`,
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is NOT a step in the genetic algorithm process?",
            options: ["Selection", "Crossover", "Evaluation", "Normalization"],
            correctAnswer: "Normalization",
            explanation: "Normalization is not a standard step in the genetic algorithm process.",
        }, // citation slide Components in the design of genetic algorithms
        {
            id: `nc-${++n}`,
            type: "true-false",
            subject: "Natural Computation",
            text: "In genetic algorithms, the fitness function evaluates the quality of a solution.",
            correctAnswer: true,
            explanation: "The fitness function measures how good a solution is relative to others.",
        }, // citation slide Components in the design of genetic algorithms
        {
            id: `nc-${++n}`,
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "What is the purpose of crossover in genetic algorithms?",
            options: ["To create offspring by combining parts of two parents", "To introduce random changes", "To select the best individuals", "To evaluate fitness"],
            correctAnswer: "To create offspring by combining parts of two parents",
            explanation: "Crossover combines parts of two parent individuals to produce offspring.",
        }, // citation slide Components in the design of genetic algorithms
        (() => {
            const fitnessA = Math.floor(Math.random() * 2000) + 1; // Random fitness for A
            const fitnessB = Math.floor(Math.random() * 2000) + 1; // Random fitness for B
            const fitnessC = Math.floor(Math.random() * 2000) + 1; // Random fitness for C
            const fitnessD = Math.floor(Math.random() * 2000) + 1; // Random fitness for D
            const fitnessValues = [fitnessA, fitnessB, fitnessC, fitnessD];
            fitnessValues.sort((a, b) => b - a); // Sort in descending order
            const rankingScoreC = fitnessValues.indexOf(fitnessC) + 1; // Rank of C
            const selectionProbabilityC = rankingScoreC / 4; // Total individuals = 4
            return {
                id: `nc-${++n}`,
                type: "generated",
                subject: "Natural Computation",
                text: `Calculate the selection probability for Individual C in a ranking selection scenario with the following fitness values: A=${fitnessA}, B=${fitnessB}, C=${fitnessC}, D=${fitnessD}. (Answer as a decimal)`,
                variables: {
                    "Individual A fitness": fitnessA,
                    "Individual B fitness": fitnessB,
                    "Individual C fitness": fitnessC,
                    "Individual D fitness": fitnessD,
                },
                correctAnswer: selectionProbabilityC.toFixed(2),
                explanation: `Individual C has a ranking score of ${rankingScoreC} out of 4, resulting in a selection probability of ${selectionProbabilityC.toFixed(2)}.`,
            };
        })(), // citation slide Exercise 1
              // Generated question for tournament selection
        (() => {
            const fitnessA = Math.floor(Math.random() * 2000) + 1; // Random fitness for A
            const fitnessB = Math.floor(Math.random() * 2000) + 1; // Random fitness for B
            const fitnessC = Math.floor(Math.random() * 2000) + 1; // Random fitness for C
            const fitnessD = Math.floor(Math.random() * 2000) + 1; // Random fitness for D
            const tournamentSize = 3;
            const fitnessValues = [fitnessA, fitnessB, fitnessC, fitnessD];
            const selectedIndividuals = [];

            // Deterministically select the best individuals
            for (let i = 0; i < 4; i++) {
                const tournament = fitnessValues.slice().sort((a, b) => b - a).slice(0, tournamentSize); // Select top k individuals
                const bestInTournament = Math.max(...tournament);
                selectedIndividuals.push(fitnessValues.indexOf(bestInTournament));
            }

            const selectedIndividualsString = selectedIndividuals
                .map((index) => String.fromCharCode(65 + index)) // Convert index to A, B, C, D
                .join(", ");

            return {
                id: `nc-${++n}`,
                type: "generated",
                subject: "Natural Computation",
                text: `Determine the selected individuals in a tournament selection with k=${tournamentSize} for the following fitness values: A=${fitnessA}, B=${fitnessB}, C=${fitnessC}, D=${fitnessD}. (Provide the answer as a comma-separated string like this 'A, B, C')`,
                variables: {
                    "Individual A fitness": fitnessA,
                    "Individual B fitness": fitnessB,
                    "Individual C fitness": fitnessC,
                    "Individual D fitness": fitnessD,
                },
                correctAnswer: selectedIndividualsString,
                explanation: `The selected individuals are ${selectedIndividualsString} based on the tournament selection process.`,
            };
        })(), // citation slide Exercise 2
    ];
};
