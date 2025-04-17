import {Question} from "../../types";

export const questions: (n: number) => Question[] = (n: number) => {
    return [
        {
            id: `nc-${++n}`,
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Who created genetic algorithms?",
            options: ["John Holland", "Alan Turing", "Charles Darwin", "Ada Lovelace"],
            correctAnswer: "John Holland",
        }, // citation slide Genetic Algorithms
        {
            id: `nc-${++n}`,
            type: "true-false",
            subject: "Natural Computation",
            text: "Genetic algorithms are a type of evolutionary algorithms.",
            correctAnswer: true,
        }, // citation slide Genetic Algorithms
        {
            id: `nc-${++n}`,
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "What does the genotype represent in genetic algorithms?",
            options: ["A fixed-length string encoding a solution", "A floating-point number", "A permutation of numbers", "A binary tree"],
            correctAnswer: "A fixed-length string encoding a solution",
        }, // citation slide Genetic Algorithms
        {
            id: `nc-${++n}`,
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is NOT a step in the flowchart of genetic algorithms?",
            options: ["Initialize population", "Evaluate individuals", "Select individuals", "Terminate algorithm"],
            correctAnswer: "Terminate algorithm",
        }, // citation slide Flowchart of genetic algorithms
        {
            id: `nc-${++n}`,
            type: "true-false",
            subject: "Natural Computation",
            text: "In genetic algorithms, mutation is applied to the offspring after recombination.",
            correctAnswer: true,
        }, // citation slide Flowchart of genetic algorithms
        {
            id: `nc-${++n}`,
            type: "true-false",
            subject: "Natural Computation",
            text: "In fitness proportional selection, individuals with higher fitness have a higher chance of being selected.",
            correctAnswer: true,
        }, // citation slide Selection of good individuals for reproduction
        {
            id: `nc-${++n}`,
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "What is the crossover probability typically used in genetic algorithms?",
            options: ["50%", "80%", "90%", "100%"],
            correctAnswer: "80%",
        }, // citation slide Selected individuals (parents) are paired at random
        {
            id: `nc-${++n}`,
            type: "true-false",
            subject: "Natural Computation",
            text: "Mutation in genetic algorithms is usually applied with a bitwise probability of 1%.",
            correctAnswer: true,
        }, // citation slide Children can also undergo mutation
        {
            id: `nc-${++n}`,
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is NOT a type of selection in genetic algorithms?",
            options: ["Fitness proportional selection", "Ranking selection", "Tournament selection", "Elitism selection"],
            correctAnswer: "Elitism selection",
        }, // citation slide Components in the design of genetic algorithms
        {
            id: `nc-${++n}`,
            type: "true-false",
            subject: "Natural Computation",
            text: "In genetic algorithms, selection is based on the fitness of individuals and independent of their representation.",
            correctAnswer: true,
        }, // citation slide Components in the design of genetic algorithms
        {
            id: `nc-${++n}`,
            type: "true-false",
            subject: "Natural Computation",
            text: "The fitness of the population improves over generations in genetic algorithms.",
            correctAnswer: true,
        }, // citation slide Design a genetic algorithm to solve this problem
        {
            id: `nc-${++n}`,
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is a type of representation in genetic algorithms?",
            options: ["Binary representation", "Floating-point representation", "Permutation representation", "All of the above"],
            correctAnswer: "All of the above",
        }, // citation slide Components in the design of genetic algorithms
        {
            id: `nc-${++n}`,
            type: "true-false",
            subject: "Natural Computation",
            text: "In genetic algorithms, the selection process is independent of the individual's representation.",
            correctAnswer: true,
        }, // citation slide Components in the design of genetic algorithms
        {
            id: `nc-${++n}`,
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "What is the mutation probability typically used in genetic algorithms?",
            options: ["0.1%", "1%", "5%", "10%"],
            correctAnswer: "1%",
        }, // citation slide Children can also undergo mutation
        {
            id: `nc-${++n}`,
            type: "true-false",
            subject: "Natural Computation",
            text: "In genetic algorithms, the fitness function is used to evaluate the quality of individuals.",
            correctAnswer: true,
        }, // citation slide Fitness function
        // Generated question for calculating fitness value of an individual
        (() => {
            const individualGenotype = Math.floor(Math.random() * 32).toString(2).padStart(5, '0'); // Random 5-bit binary string
            const daysWorked = parseInt(individualGenotype, 2); // Convert binary to decimal
            let fitness;
            if (daysWorked >= 0 && daysWorked <= 20) {
                fitness = 100 * daysWorked;
            } else if (daysWorked >= 21 && daysWorked <= 31) {
                fitness = 100 * daysWorked - 5 * Math.pow(daysWorked - 20, 2);
            } else {
                fitness = 0;
            }
            return {
                id: `nc-${++n}`,
                type: "generated",
                subject: "Natural Computation",
                text: `Calculate the fitness value of an individual with the genotype '${individualGenotype}' using the payment function:
                      payment(x) = { 100x if 0 ≤ x ≤ 20; 100x - 5(x - 20)^2 if 21 ≤ x ≤ 31; 0 otherwise }`,
                variables: {
                    "Genotype": individualGenotype,
                },
                correctAnswer: fitness,
            };
        })(), // Citation: Design a genetic algorithm to solve this problem

        // Generated question for calculating percentage of fitness of an individual in a group
        (() => {
            const totalFitness = Math.floor(Math.random() * 10000) + 1000; // Random total fitness (1000 to 11000)
            const individualFitness = Math.floor(Math.random() * totalFitness) + 1; // Random individual fitness (1 to totalFitness)
            const percentageFitness = Math.round((individualFitness / totalFitness) * 10000) / 100; // Rounded to 2 decimal places
            return {
                id: `nc-${++n}`,
                type: "generated",
                subject: "Natural Computation",
                text: `Calculate the percentage of total fitness for an individual with a fitness value of ${individualFitness} in a population with a total fitness of ${totalFitness}. (Answer rounded to 2 decimal places)`,
                variables: {
                    "Individual fitness": individualFitness,
                    "Total population fitness": totalFitness,
                },
                correctAnswer: percentageFitness,
            };
        })(), // Citation: Design a genetic algorithm to solve this problem
    ];
};
