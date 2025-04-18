import {Question} from "../../types";
import {generateGitHubUrlAuto} from "@/lib/utils.ts";

export const questions: (n: number) => Question[] = (n: number) => {
    return [
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "What is the primary goal of Ant Colony Optimisation (ACO) algorithms?",
            options: [
                "To maximize the amount of pheromone deposited on paths",
                "To minimize the cost associated with candidate solutions",
                "To randomly explore all possible paths",
                "To ensure all ants follow the same path"
            ],
            correctAnswer: "To minimize the cost associated with candidate solutions",
            explanation: "ACO algorithms aim to find the optimal solution by minimizing the cost, such as distance or time, associated with the paths constructed by ants.",
        }, // citation slide Recap - basic ideas of Ant Colony Optimisation (ACO) algorithms
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "In ACO, the probability of an ant choosing a path is directly proportional to the amount of pheromone on that path.",
            correctAnswer: true,
            explanation: "The larger the amount of pheromone on a path, the higher the probability that an ant will choose that path.",
        }, // citation slide Recap - basic ideas of Ant Colony Optimisation (ACO) algorithms
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "What is the goal of using ACO in hospital layout planning?",
            options: [
                "To maximize the distance between clinics",
                "To minimize the traffic of people between clinics",
                "To increase the number of buildings in the hospital",
                "To reduce the number of clinics"
            ],
            correctAnswer: "To minimize the traffic of people between clinics",
            explanation: "The goal is to allocate clinics to buildings in a way that minimizes the traffic of patients and staff between clinics to avoid delays and congestion.",
        }, // citation slide An Application of ACO in Hospital Layout (1)
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "In the hospital layout problem, each clinic is allocated to exactly one building.",
            correctAnswer: true,
            explanation: "Each clinic is uniquely assigned to one building, and each building hosts exactly one clinic.",
        }, // citation slide An Application of ACO in Hospital Layout (1)
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is NOT a step in the ACO algorithm for hospital layout planning?",
            options: [
                "Fixing the order of buildings and finding the optimal permutation of clinics",
                "Fixing the order of clinics and finding the optimal permutation of buildings",
                "Randomly assigning clinics to buildings without any optimization",
                "Updating pheromone levels based on the quality of solutions"
            ],
            correctAnswer: "Randomly assigning clinics to buildings without any optimization",
            explanation: "ACO involves systematic optimization, not random assignment.",
        }, // citation slide An Application of ACO in Hospital Layout (4)
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "In the solution-construction graph for ACO, each node represents a component of a candidate solution.",
            correctAnswer: true,
            explanation: "Each node in the graph represents a component, such as a building or clinic, that is part of the candidate solution.",
        }, // citation slide An Application of ACO in Hospital Layout (5)
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "What does an ant do when constructing a path in the ACO algorithm?",
            options: [
                "It randomly selects any node to visit",
                "It adds one <clinic, building> pair at a time to the path",
                "It visits all nodes simultaneously",
                "It only visits nodes with the highest pheromone levels"
            ],
            correctAnswer: "It adds one <clinic, building> pair at a time to the path",
            explanation: "An ant incrementally constructs a path by adding one pair at a time.",
        }, // citation slide An Application of ACO in Hospital Layout (6)
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "Pheromone levels in ACO are updated only after all ants have constructed their paths.",
            correctAnswer: true,
            explanation: "Pheromone levels are updated after all ants have completed their paths to reflect the quality of the solutions.",
        }, // citation slide An Application of ACO in Hospital Layout (7)
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "What is the primary challenge in data network routing that makes ACO suitable?",
            options: [
                "Static network topology",
                "Predictable traffic load",
                "Variable traffic load and network topology",
                "Centralized coordination"
            ],
            correctAnswer: "Variable traffic load and network topology",
            explanation: "ACO is suitable for data network routing due to its ability to adapt to variable traffic loads and changing network topologies.",
        }, // citation slide Applying Ant Colony Optimisation (ACO) to Data Network Routing: AntNet
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "In AntNet, forward ants and backward ants share the same queues as data packets.",
            correctAnswer: false,
            explanation: "Forward ants share the same queues as data packets, but backward ants use higher-priority queues to speed up pheromone updates.",
        }, // citation slide The AntNet Algorithm for Data Network Routing (2)
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "What is the role of the pheromone matrix in AntNet?",
            options: [
                "To store the distance between nodes",
                "To indicate the desirability of moving to a neighboring node",
                "To track the number of ants in the network",
                "To record the total traffic in the network"
            ],
            correctAnswer: "To indicate the desirability of moving to a neighboring node",
            explanation: "The pheromone matrix indicates the desirability of moving from one node to another based on past and current network conditions.",
        }, // citation slide AntNet's main data structure
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "AntNet has been shown to perform competitively with traditional routing algorithms in real-world network simulations.",
            correctAnswer: true,
            explanation: "AntNet's performance has been extensively evaluated and found to be competitive with traditional routing algorithms.",
        }, // citation slide The AntNet Algorithm for Data Network Routing (3)
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is a key difference between ACO and Evolutionary Algorithms (EAs)?",
            options: [
                "ACO is primarily used for real-valued problems",
                "EAs are mainly used for combinatorial optimization problems",
                "ACO uses a solution-construction graph, while EAs do not",
                "EAs are deterministic, while ACO is stochastic"
            ],
            correctAnswer: "ACO uses a solution-construction graph, while EAs do not",
            explanation: "ACO relies on a discrete solution-construction graph, whereas EAs can be applied to both real-valued and discrete problems.",
        }, // citation slide Comparing ACO and EAs
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "ACO algorithms are only applicable to problems with discrete variables.",
            correctAnswer: false,
            explanation: "While ACO is primarily used for combinatorial optimization problems, there are modified versions of ACO that can handle real-valued data.",
        }, // citation slide Comparing ACO and EAs
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "What is the purpose of the heuristic function (η) in ACO?",
            options: [
                "To randomly select paths",
                "To represent the instantaneous state of the network",
                "To increase pheromone levels",
                "To reduce the number of ants"
            ],
            correctAnswer: "To represent the instantaneous state of the network",
            explanation: "The heuristic function (η) represents the current state of the network, such as queue lengths, to guide ants in their path selection.",
        }, // citation slide The AntNet Algorithm for Data Network Routing (1)
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "Backward ants in AntNet update the pheromone matrix based on the trip time of forward ants.",
            correctAnswer: true,
            explanation: "Backward ants use the information collected by forward ants to update the pheromone matrix, reflecting the quality of the paths taken.",
        }, // citation slide The AntNet Algorithm for Data Network Routing (2)
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "Which of the following is a key advantage of using ACO for data network routing?",
            options: [
                "It requires a central coordinator",
                "It is immune to changes in network topology",
                "It adapts to variable traffic loads and network topologies",
                "It always finds the globally optimal solution"
            ],
            correctAnswer: "It adapts to variable traffic loads and network topologies",
            explanation: "ACO's adaptability to changing conditions makes it well-suited for data network routing.",
        }, // citation slide Applying Ant Colony Optimisation (ACO) to Data Network Routing: AntNet
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Natural Computation",
            text: "In ACO, the amount of pheromone deposited on a path is inversely proportional to the quality of the solution.",
            correctAnswer: false,
            explanation: "The amount of pheromone deposited is directly proportional to the quality of the solution, as better solutions reinforce the pheromone trails.",
        }, // citation slide Recap - basic ideas of Ant Colony Optimisation (ACO) algorithms
        {
            id: `nc-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Natural Computation",
            text: "What is the role of pheromone evaporation in ACO?",
            options: [
                "To increase pheromone levels over time",
                "To prevent ants from exploring new paths",
                "To avoid stagnation and encourage exploration",
                "To reduce the number of ants in the colony"
            ],
            correctAnswer: "To avoid stagnation and encourage exploration",
            explanation: "Pheromone evaporation helps prevent the algorithm from converging too quickly to suboptimal solutions by reducing pheromone levels over time.",
        }, // citation slide An Application of ACO in Hospital Layout (8)
        // Generated question for flow and distance product
        (() => {
            const flow = Math.floor(Math.random() * 1000) + 1; // Random flow (1 to 1000)
            const distance = Math.floor(Math.random() * 50) + 1; // Random distance (1 to 50)
            const product = flow * distance;
            return {
                id: `nc-${++n}`,
                report: generateGitHubUrlAuto(),
                type: "generated",
                subject: "Natural Computation",
                text: `If the yearly flow between two clinics is ${flow} and the distance between their allocated buildings is ${distance} units, calculate the product of flow and distance.`,
                variables: {
                    "Flow": flow,
                    "Distance": distance,
                },
                correctAnswer: product,
                explanation: `The product of flow and distance is calculated as ${flow} * ${distance} = ${product}.`,
            };
        })(), // citation slide An Application of ACO in Hospital Layout (3)

        // Generated question for pheromone evaporation
        (() => {
            const evaporationRate = (Math.random() * 0.9) + 0.1; // Random evaporation rate (0.1 to 1)
            const currentPheromoneLevel = (Math.random() * 0.9) + 0.1; // Random current pheromone level (0.1 to 1)
            const updatedPheromoneLevel = (1 - evaporationRate) * currentPheromoneLevel;
            return {
                id: `nc-${++n}`,
                report: generateGitHubUrlAuto(),
                type: "generated",
                subject: "Natural Computation",
                text: `If the pheromone evaporation rate (ρ) is ${evaporationRate.toFixed(2)} and the current pheromone level (τ) on a path is ${currentPheromoneLevel.toFixed(2)}, calculate the updated pheromone level after evaporation. (Answer rounded to 2 decimal places)`,
                variables: {
                    "Pheromone evaporation rate (ρ)": evaporationRate,
                    "Current pheromone level (τ)": currentPheromoneLevel,
                },
                correctAnswer: updatedPheromoneLevel.toFixed(2),
                explanation: `The updated pheromone level is calculated as τ = (1 - ρ) * τ = (1 - ${evaporationRate.toFixed(2)}) * ${currentPheromoneLevel.toFixed(2)} = ${updatedPheromoneLevel.toFixed(2)}.`,
            };
        })(), // citation slide An Application of ACO in Hospital Layout (8)

        // Generated question for path selection probability
        (() => {
            const pheromoneLevel = (Math.random() * 0.9) + 0.1; // Random pheromone level (0.1 to 1)
            const heuristicValue = (Math.random() * 0.9) + 0.1; // Random heuristic value (0.1 to 1)
            const alpha = (Math.random() * 0.9) + 0.1; // Random alpha value (0.1 to 1)
            const probability = pheromoneLevel + (alpha * heuristicValue);
            return {
                id: `nc-${++n}`,
                report: generateGitHubUrlAuto(),
                type: "generated",
                subject: "Natural Computation",
                text: `If the pheromone level (τ) for a path is ${pheromoneLevel.toFixed(2)}, the heuristic value (η) is ${heuristicValue.toFixed(2)}, and α is ${alpha.toFixed(2)}, calculate the probability of an ant choosing this path. (Answer rounded to 2 decimal places)`,
                variables: {
                    "Pheromone level (τ)": pheromoneLevel,
                    "Heuristic value (η)": heuristicValue,
                    "α": alpha,
                },
                correctAnswer: probability.toFixed(2),
                explanation: `The probability is calculated as P = τ + αη = ${pheromoneLevel.toFixed(2)} + ${alpha.toFixed(2)} * ${heuristicValue.toFixed(2)} = ${probability.toFixed(2)}.`,
            };
        })(), // citation slide The AntNet Algorithm for Data Network Routing (1)

        // Generated question for pheromone deposition
        (() => {
            const totalCost = Math.floor(Math.random() * 1000) + 1; // Random total cost (1 to 1000)
            const pheromoneDepositRate = (Math.random() * 0.9) + 0.1; // Random pheromone deposit rate (0.1 to 1)
            const pheromoneDeposited = pheromoneDepositRate / totalCost;
            return {
                id: `nc-${++n}`,
                report: generateGitHubUrlAuto(),
                type: "generated",
                subject: "Natural Computation",
                text: `If the total cost of a solution constructed by an ant is ${totalCost} units and the pheromone deposit rate is ${pheromoneDepositRate.toFixed(2)}, calculate the amount of pheromone deposited on the path. (Answer rounded to 4 decimal places)`,
                variables: {
                    "Total cost of solution": totalCost,
                    "Pheromone deposit rate": pheromoneDepositRate,
                },
                correctAnswer: pheromoneDeposited.toFixed(4),
                explanation: `The amount of pheromone deposited is calculated as Δτ = pheromone deposit rate / cost = ${pheromoneDepositRate.toFixed(2)} / ${totalCost} = ${pheromoneDeposited.toFixed(4)}.`,
            };
        })(), // citation slide An Application of ACO in Hospital Layout (8)
    ];
};
