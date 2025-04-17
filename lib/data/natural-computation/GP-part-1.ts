import {Question} from "../../types";

export const questions: (n: number) => Question[] = (n: number) => {
    return [
        {
            id: `nc-${++n}`,
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "What is the primary goal of Genetic Programming (GP)?",
            options: [
                "To optimize a predefined function",
                "To evolve computer programs automatically",
                "To approximate a function given a dataset",
                "To find the optimal weights in a given formula"
            ],
            correctAnswer: "To evolve computer programs automatically",
            explanation: "Genetic Programming aims to evolve computer programs or executable structures automatically.",
        }, // citation slide "Genetic Programming Overview"
        {
            id: `nc-${++n}`,
            type: "true-false",
            subject: "Natural Computation",
            text: "In Genetic Programming, an individual typically represents a solution for a specific problem instance.",
            correctAnswer: false,
            explanation: "An individual in GP represents a 'recipe' for solving a type of problem, not a solution for a specific instance.",
        }, // citation slide "Main Characteristics of GP"
        {
            id: `nc-${++n}`,
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is NOT a common representation of individuals in Genetic Programming?",
            options: ["Linear representation", "Tree representation", "Graph representation", "Matrix representation"],
            correctAnswer: "Matrix representation",
            explanation: "The document mentions linear, tree, and graph representations, but not matrix representation.",
        }, // citation slide "Genetic Programming Elements (1)"
        {
            id: `nc-${++n}`,
            type: "true-false",
            subject: "Natural Computation",
            text: "In a tree representation of GP, leaf nodes can only be variables.",
            correctAnswer: false,
            explanation: "Leaf nodes in a tree representation can be variables or constants.",
        }, // citation slide "Genetic Programming Elements (2)"
        {
            id: `nc-${++n}`,
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "What is the role of the terminal set in Genetic Programming?",
            options: [
                "To define the functions used in the program",
                "To define the variables and constants used in the program",
                "To define the fitness function",
                "To define the crossover operator"
            ],
            correctAnswer: "To define the variables and constants used in the program",
            explanation: "The terminal set consists of variables and constants used in the program.",
        }, // citation slide "Genetic Programming Elements (1)"
        {
            id: `nc-${++n}`,
            type: "true-false",
            subject: "Natural Computation",
            text: "Crossover in Genetic Programming involves swapping subtrees between two individuals.",
            correctAnswer: true,
            explanation: "Crossover in GP swaps subtrees between individuals to create offspring.",
        }, // citation slide "Variation Operators (1)"
        {
            id: `nc-${++n}`,
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is a variation operator in Genetic Programming?",
            options: ["Point Mutation", "Collapse Mutation", "Expansion Mutation", "All of the above"],
            correctAnswer: "All of the above",
            explanation: "Point Mutation, Collapse Mutation, and Expansion Mutation are all variation operators in GP.",
        }, // citation slide "Variation Operators (1-4)"
        {
            id: `nc-${++n}`,
            type: "true-false",
            subject: "Natural Computation",
            text: "In Genetic Programming, the function set must always satisfy the closure property.",
            correctAnswer: true,
            explanation: "The closure property ensures that functions can accept any output produced by the function set and terminal set.",
        }, // citation slide "Function Set (1)"
        {
            id: `nc-${++n}`,
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "What is the purpose of 'protected division' in Genetic Programming?",
            options: [
                "To prevent division by zero",
                "To ensure all divisions result in integers",
                "To speed up the division operation",
                "To handle negative numbers"
            ],
            correctAnswer: "To prevent division by zero",
            explanation: "Protected division returns a standard value if the denominator is zero to avoid undefined behavior.",
        }, // citation slide "Function Set (2)"
        {
            id: `nc-${++n}`,
            type: "true-false",
            subject: "Natural Computation",
            text: "Constrained-Syntax GP modifies crossover and mutation to respect data type restrictions.",
            correctAnswer: true,
            explanation: "Constrained-Syntax GP ensures that operations respect the data types of inputs and outputs.",
        }, // citation slide "Constrained-Syntax GP (1)"
        {
            id: `nc-${++n}`,
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "In symbolic regression using GP, what is the fitness function typically based on?",
            options: [
                "The number of nodes in the tree",
                "The mean squared error (MSE) between the program output and desired output",
                "The height of the tree",
                "The number of functions used"
            ],
            correctAnswer: "The mean squared error (MSE) between the program output and desired output",
            explanation: "The fitness function in symbolic regression is often based on the MSE.",
        }, // citation slide "Example of GP for symbolic regression (1)"
        {
            id: `nc-${++n}`,
            type: "true-false",
            subject: "Natural Computation",
            text: "In symbolic regression, the target solution is known to the GP algorithm.",
            correctAnswer: false,
            explanation: "The target solution is unknown to the GP algorithm; it evolves a program to match the desired output.",
        }, // citation slide "Example of GP for symbolic regression (2)"
        {
            id: `nc-${++n}`,
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "What is the bias of expansion mutation in Genetic Programming?",
            options: [
                "It tends to increase the size of the tree",
                "It tends to decrease the size of the tree",
                "It has no effect on the size of the tree",
                "It always removes a subtree"
            ],
            correctAnswer: "It tends to increase the size of the tree",
            explanation: "Expansion mutation adds complexity to the tree by expanding it.",
        }, // citation slide "Variation Operators (3)"
        {
            id: `nc-${++n}`,
            type: "true-false",
            subject: "Natural Computation",
            text: "Collapse mutation in Genetic Programming tends to simplify the tree structure.",
            correctAnswer: true,
            explanation: "Collapse mutation reduces the complexity of the tree by collapsing a subtree.",
        }, // citation slide "Variation Operators (4)"
        {
            id: `nc-${++n}`,
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is a desirable property of a function set in Genetic Programming?",
            options: [
                "Sufficiency",
                "Redundancy",
                "Complexity",
                "Inconsistency"
            ],
            correctAnswer: "Sufficiency",
            explanation: "Sufficiency ensures the function set has enough expressive power to represent a solution.",
        }, // citation slide "Function Set (1)"
        {
            id: `nc-${++n}`,
            type: "true-false",
            subject: "Natural Computation",
            text: "In Constrained-Syntax GP, each terminal is assigned a data type.",
            correctAnswer: true,
            explanation: "Terminals and functions in Constrained-Syntax GP are assigned data types to enforce restrictions.",
        }, // citation slide "Constrained-Syntax GP (2)"
        {
            id: `nc-${++n}`,
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "What is the role of the function set in Genetic Programming?",
            options: [
                "To define the variables and constants used in the program",
                "To define the functions appropriate for solving the problem",
                "To define the fitness function",
                "To define the crossover operator"
            ],
            correctAnswer: "To define the functions appropriate for solving the problem",
            explanation: "The function set includes functions that are suitable for solving the target problem.",
        }, // citation slide "Genetic Programming Elements (1)"
        {
            id: `nc-${++n}`,
            type: "true-false",
            subject: "Natural Computation",
            text: "In Genetic Programming, individuals typically have a fixed size and shape.",
            correctAnswer: false,
            explanation: "Individuals in GP typically have variable size and shape.",
        }, // citation slide "Main Characteristics of GP"
        {
            id: `nc-${++n}`,
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "What is the purpose of the fitness function in Genetic Programming?",
            options: [
                "To measure the complexity of the tree",
                "To evaluate how well an individual solves the problem",
                "To define the crossover points",
                "To randomize the population"
            ],
            correctAnswer: "To evaluate how well an individual solves the problem",
            explanation: "The fitness function evaluates the performance of individuals in solving the problem.",
        }, // citation slide "Example of GP for symbolic regression (1)"
        {
            id: `nc-${++n}`,
            type: "true-false",
            subject: "Natural Computation",
            text: "In symbolic regression using GP, the maximal height of each tree is always unlimited.",
            correctAnswer: false,
            explanation: "The maximal height of each tree is often limited to control complexity.",
        }, // citation slide "Example of GP for symbolic regression (1)"
        {
            id: `nc-${++n}`,
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is a common issue with the closure property in Genetic Programming?",
            options: [
                "Division by zero",
                "Inconsistent data types",
                "Redundant functions",
                "Both A and B"
            ],
            correctAnswer: "Both A and B",
            explanation: "Both division by zero and inconsistent data types are issues related to the closure property.",
        }, // citation slide "Function Set (2)"
        {
            id: `nc-${++n}`,
            type: "true-false",
            subject: "Natural Computation",
            text: "In Genetic Programming, the terminal set can include both variables and constants.",
            correctAnswer: true,
            explanation: "The terminal set consists of variables and constants used in the program.",
        }, // citation slide "Genetic Programming Elements (1)"
    ];
}
