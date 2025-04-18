import {Question} from "../../types";
import {generateGitHubUrlAuto} from "@/lib/utils.ts";


export const questions: (n: number) => Question[] = (n: number) => {
    return [
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the main goal of data mining?",
            options: ["Extracting interesting patterns from data", "Creating databases", "Visualizing data", "Cleaning data"],
            correctAnswer: "Extracting interesting patterns from data",
            explanation: "Data mining aims to extract interesting patterns from data.", // Introduction to Data Mining (1)
        },
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Knowledge Discovery in Databases (KDD) involves identifying valid, novel, and potentially useful patterns in data.",
            correctAnswer: true,
            explanation: "KDD is the process of identifying valid, novel, potentially useful, and understandable patterns in data.", // A couple of data mining and knowledge discovery definitions
        },
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is a major data mining task?",
            options: ["Classification", "Data cleaning", "Data visualization", "Database management"],
            correctAnswer: "Classification",
            explanation: "Classification is one of the major data mining tasks.", // Data mining tasks
        },
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Association rules always imply causation.",
            correctAnswer: false,
            explanation: "Association does not imply cause or predictive power.", // On the usefulness of association rules
        },
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the confidence of an association rule?",
            options: ["The number of transactions having X and Y", "The number of transactions having X", "The ratio of transactions having X and Y to transactions having X", "The ratio of transactions having Y to transactions having X"],
            correctAnswer: "The ratio of transactions having X and Y to transactions having X",
            explanation: "Confidence is the ratio of transactions having X and Y to transactions having X.", // Problem definition
        },
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "In the knowledge discovery process, data preparation is a crucial step.",
            correctAnswer: true,
            explanation: "Data preparation is a key step in the knowledge discovery process.", // The Knowledge Discovery Process
        },
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is an example of a classification problem?",
            options: ["Predicting whether a customer will buy a product", "Identifying groups of similar customers", "Discovering association rules", "Cleaning data"],
            correctAnswer: "Predicting whether a customer will buy a product",
            explanation: "Classification involves predicting outcomes based on input data.", // Applications
        },
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "A single minimum support is always sufficient for discovering association rules.",
            correctAnswer: false,
            explanation: "Using multiple minimum supports can be more flexible and realistic.", // Multiple minimum supports
        },
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the support of an association rule?",
            options: ["The number of transactions having X", "The number of transactions having Y", "The ratio of transactions having X and Y to the total number of transactions", "The ratio of transactions having X to the total number of transactions"],
            correctAnswer: "The ratio of transactions having X and Y to the total number of transactions",
            explanation: "Support is the ratio of transactions having X and Y to the total number of transactions.", // Problem definition
        },
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Clustering is a type of supervised learning.",
            correctAnswer: false,
            explanation: "Clustering is a type of unsupervised learning.", // Data mining tasks
        },
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is an example of clustering?",
            options: ["Identifying groups of similar customers", "Predicting stock prices", "Discovering association rules", "Cleaning data"],
            correctAnswer: "Identifying groups of similar customers",
            explanation: "Clustering involves grouping similar data points together.", // Applications
        },
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "The Baltimore stockbroker scam is a legitimate way to evaluate prediction accuracy.",
            correctAnswer: false,
            explanation: "The Baltimore stockbroker scam is a deceptive practice to falsely demonstrate prediction accuracy.", // Evaluating predictions: a tricky issue (2)
        },
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the main difference between information extraction and knowledge discovery?",
            options: ["Information extraction is used for daily activities, while knowledge discovery is used for strategic decisions", "Information extraction is more complex than knowledge discovery", "Knowledge discovery is used for daily activities, while information extraction is used for strategic decisions", "Both are used for strategic decisions"],
            correctAnswer: "Information extraction is used for daily activities, while knowledge discovery is used for strategic decisions",
            explanation: "Information extraction is used for low-level administration, while knowledge discovery is used for high-level strategic decisions.", // Information vs. knowledge (1) and (2)
        },
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Machine learning is a subset of data mining.",
            correctAnswer: true,
            explanation: "Machine learning is a part of data mining and involves writing programs that improve with experience.", // Data Mining ~ Machine Learning, Statistics
        },
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is NOT a phase in the association rule algorithm?",
            options: ["Data preparation", "Finding all frequent item sets", "Discovering rules with high confidence", "Visualizing results"],
            correctAnswer: "Visualizing results",
            explanation: "The phases in the association rule algorithm are data preparation, finding frequent item sets, and discovering rules with high confidence.", // Association Rule Algorithm
        },
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "A hierarchy of items can help in pruning non-interesting association rules.",
            correctAnswer: true,
            explanation: "A hierarchy of items can be used to prune non-interesting rules and discover rules in lower levels that may not have minimum support.", // Considering a hierarchy of items
        },
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the main goal of clustering?",
            options: ["Predicting outcomes", "Grouping similar data points", "Discovering association rules", "Cleaning data"],
            correctAnswer: "Grouping similar data points",
            explanation: "Clustering aims to group similar data points together.", // Clustering
        },
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "In the knowledge discovery process, knowledge validation is unnecessary.",
            correctAnswer: false,
            explanation: "Knowledge validation is a crucial step in the knowledge discovery process.", // The Knowledge Discovery Process
        },
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is an example of a prediction problem?",
            options: ["Predicting whether a patient will get a disease", "Identifying groups of similar customers", "Discovering association rules", "Cleaning data"],
            correctAnswer: "Predicting whether a patient will get a disease",
            explanation: "Prediction problems involve forecasting outcomes based on input data.", // Applications
        },
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "The support of an association rule is always greater than its confidence.",
            correctAnswer: false,
            explanation: "Support and confidence are different metrics; support is not necessarily greater than confidence.", // Problem definition
        },
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the main goal of data preparation in the knowledge discovery process?",
            options: ["Cleaning data", "Visualizing data", "Extracting interesting patterns", "Predicting outcomes"],
            correctAnswer: "Cleaning data",
            explanation: "Data preparation involves cleaning and organizing data for analysis.", // The Knowledge Discovery Process
        },
        (() => {
            const totalTransactions = Math.floor(Math.random() * 1000) + 1; // Random total transactions (1 to 1000)
            const transactionsWithXY = Math.floor(Math.random() * totalTransactions) + 1; // Random transactions with X and Y (1 to totalTransactions)
            const support = Math.round((transactionsWithXY / totalTransactions) * 100) / 100; // Rounded to 2 decimal places
            return {
                id: `dm-${++n}`,
                report: generateGitHubUrlAuto(),
                type: "generated",
                subject: "Data Mining & Knowledge Discovery",
                text: `Calculate the support for an association rule where the total number of transactions is ${totalTransactions} and the number of transactions containing both X and Y is ${transactionsWithXY}. (Answer rounded to 2 decimal places)`,
                variables: {
                    "Total transactions": totalTransactions,
                    "Transactions with X and Y": transactionsWithXY,
                },
                correctAnswer: support,
            };
        })(), // Citation: Problem definition

        // Generated question for Confidence
        (() => {
            const transactionsWithX = Math.floor(Math.random() * 1000) + 1; // Random transactions with X (1 to 1000)
            const transactionsWithXY = Math.floor(Math.random() * transactionsWithX) + 1; // Random transactions with X and Y (1 to transactionsWithX)
            const confidence = Math.round((transactionsWithXY / transactionsWithX) * 100) / 100; // Rounded to 2 decimal places
            return {
                id: `dm-${++n}`,
                report: generateGitHubUrlAuto(),
                type: "generated",
                subject: "Data Mining & Knowledge Discovery",
                text: `Calculate the confidence for an association rule where the number of transactions containing X is ${transactionsWithX} and the number of transactions containing both X and Y is ${transactionsWithXY}. (Answer rounded to 2 decimal places)`,
                variables: {
                    "Transactions with X": transactionsWithX,
                    "Transactions with X and Y": transactionsWithXY,
                },
                correctAnswer: confidence,
            };
        })(), // Citation: Problem definition
    ];
};
