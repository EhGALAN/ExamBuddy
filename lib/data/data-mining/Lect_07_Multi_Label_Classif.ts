import {Question} from "../../types";
import {generateGitHubUrlAuto} from "@/lib/utils.ts";

export const questions: (n: number) => Question[] = (n: number) => {
    return [
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is a key difference between single-label and multi-label classification?",
            options: [
                "Single-label classification assigns multiple labels to each instance.",
                "Multi-label classification assigns exactly one label to each instance.",
                "Single-label classification can handle overlapping class labels.",
                "Multi-label classification allows an instance to belong to multiple classes."
            ],
            correctAnswer: "Multi-label classification allows an instance to belong to multiple classes.",
            explanation: "Multi-label classification allows each instance to be assigned one or more class labels, unlike single-label classification.",
        }, // citation slide: Basic idea of Multi-Label Classification
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "The Instance Deletion method in multi-label classification is acceptable if a large number of examples are deleted.",
            correctAnswer: false,
            explanation: "The Instance Deletion method is only acceptable if few examples are deleted.",
        }, // citation slide: Instance Deletion method
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the main disadvantage of the Binary Relevance method in multi-label classification?",
            options: [
                "It requires only one run of a classification algorithm.",
                "It ignores interactions among class labels.",
                "It creates a single new class variable.",
                "It leads to datasets with very few examples for many compound class labels."
            ],
            correctAnswer: "It ignores interactions among class labels.",
            explanation: "The Binary Relevance method ignores interactions among class labels and requires many runs of a classification algorithm.",
        }, // citation slide: Binary Relevance method (3)
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "The Power Set method in multi-label classification creates a single new class variable for each combination of labels in the original dataset.",
            correctAnswer: true,
            explanation: "The Power Set method creates a compound label for each combination of labels in the original dataset.",
        }, // citation slide: Power Set method (3)
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is NOT a step in the Classifier Chain method?",
            options: [
                "Create one dataset for each label.",
                "Specify an ordered list (chain) of class labels.",
                "Delete examples with multiple labels.",
                "Extend each dataset to contain predicted labels from previous classifiers in the chain."
            ],
            correctAnswer: "Delete examples with multiple labels.",
            explanation: "The Classifier Chain method does not involve deleting examples with multiple labels.",
        }, // citation slide: Classifier Chain method (1)
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "generated",
            subject: "Data Mining & Knowledge Discovery",
            text: "If a multi-label dataset has 3 class labels (A, B, C), how many possible compound class labels can be generated using the Power Set method?",
            variables: {
                "Number of class labels": 3,
            },
            correctAnswer: 8,
            explanation: "The Power Set of 3 labels (A, B, C) has 2^3 = 8 elements.",
        }, // citation slide: Power Set method (1)
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the main advantage of the Power Set method in multi-label classification?",
            options: [
                "It requires many runs of a classification algorithm.",
                "It ignores interactions among class labels.",
                "It creates a single new class variable.",
                "It leads to datasets with very few examples for many compound class labels."
            ],
            correctAnswer: "It creates a single new class variable.",
            explanation: "The Power Set method creates a single new class variable, allowing a single run of a multi-class algorithm.",
        }, // citation slide: Power Set method (4)
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "In the Classifier Chain method, the order of labels in the chain does not affect the performance of the model.",
            correctAnswer: false,
            explanation: "The order of labels in the Classifier Chain method can significantly affect performance, and heuristic or optimization methods are often used to determine the best order.",
        }, // citation slide: Classifier Chain method (3)
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is a real-world application of multi-label classification?",
            options: [
                "Assigning a single disease to a patient.",
                "Classifying documents into multiple subject categories.",
                "Predicting a single object in an image.",
                "Detecting a single type of fraud in a transaction."
            ],
            correctAnswer: "Classifying documents into multiple subject categories.",
            explanation: "Multi-label classification is used in applications where an instance can belong to multiple classes, such as classifying documents into multiple subject categories.",
        }, // citation slide: Basic idea of Multi-Label Classification
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "The Binary Relevance method is the most used problem transformation method in multi-label classification.",
            correctAnswer: true,
            explanation: "The Binary Relevance method is widely used due to its simplicity, despite its drawbacks.",
        }, // citation slide: Binary Relevance method (2)
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "generated",
            subject: "Data Mining & Knowledge Discovery",
            text: "If a multi-label dataset has 4 class labels, what is the maximum number of possible compound class labels in the Power Set method?",
            variables: {
                "Number of class labels": 4,
            },
            correctAnswer: 16,
            explanation: "The Power Set of 4 labels has 2^4 = 16 elements.",
        }, // citation slide: Power Set method (1)
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the main disadvantage of the Instance Deletion method in multi-label classification?",
            options: [
                "It requires many runs of a classification algorithm.",
                "It ignores interactions among class labels.",
                "It deletes examples with multiple labels, which can lead to data loss.",
                "It creates a single new class variable."
            ],
            correctAnswer: "It deletes examples with multiple labels, which can lead to data loss.",
            explanation: "The Instance Deletion method deletes examples with multiple labels, which can result in significant data loss.",
        }, // citation slide: Instance Deletion method
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "The Classifier Chain method always uses a random ordering of labels.",
            correctAnswer: false,
            explanation: "The Classifier Chain method can use heuristic or optimization methods to determine the best label order, rather than relying solely on random ordering.",
        }, // citation slide: Classifier Chain method (3)
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is a drawback of the Binary Relevance method?",
            options: [
                "It requires only one run of a classification algorithm.",
                "It ignores interactions among class labels.",
                "It creates a single new class variable.",
                "It leads to datasets with very few examples for many compound class labels."
            ],
            correctAnswer: "It ignores interactions among class labels.",
            explanation: "The Binary Relevance method ignores interactions among class labels, which can limit its effectiveness.",
        }, // citation slide: Binary Relevance method (3)
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "The Power Set method in multi-label classification always results in a dataset with 2^n compound class labels, where n is the number of original class labels.",
            correctAnswer: false,
            explanation: "In practice, only the label combinations occurring in the dataset are used, so the number of compound class labels may be less than 2^n.",
        }, // citation slide: Power Set method (2)
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "generated",
            subject: "Data Mining & Knowledge Discovery",
            text: "If a multi-label dataset has 5 class labels, what is the maximum number of possible compound class labels in the Power Set method?",
            variables: {
                "Number of class labels": 5,
            },
            correctAnswer: 32,
            explanation: "The Power Set of 5 labels has 2^5 = 32 elements.",
        }, // citation slide: Power Set method (1)
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the main advantage of the Classifier Chain method?",
            options: [
                "It requires only one run of a classification algorithm.",
                "It ignores interactions among class labels.",
                "It creates a single new class variable.",
                "It propagates predicted labels along the chain to improve accuracy."
            ],
            correctAnswer: "It propagates predicted labels along the chain to improve accuracy.",
            explanation: "The Classifier Chain method improves accuracy by propagating predicted labels along the chain.",
        }, // citation slide: Classifier Chain method (2)
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "The dominance of single-label classification is solely due to its superior performance over multi-label classification.",
            correctAnswer: false,
            explanation: "The dominance of single-label classification is partly due to historical reasons, not solely due to performance.",
        }, // citation slide: Summary of multi-label classification
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is NOT a problem transformation method in multi-label classification?",
            options: [
                "Instance Deletion method",
                "Binary Relevance method",
                "Power Set method",
                "Algorithm-adaptation method"
            ],
            correctAnswer: "Algorithm-adaptation method",
            explanation: "Algorithm-adaptation methods adapt single-label algorithms for multi-label problems, unlike problem transformation methods.",
        }, // citation slide: Summary of multi-label classification
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "In the Binary Relevance method, each dataset shares the same features but has different class labels.",
            correctAnswer: true,
            explanation: "The Binary Relevance method creates separate datasets for each label, sharing the same features but with different class labels.",
        }, // citation slide: Binary Relevance method (1)
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the main drawback of the Power Set method?",
            options: [
                "It requires only one run of a classification algorithm.",
                "It ignores interactions among class labels.",
                "It creates a single new class variable.",
                "It leads to datasets with many compound class labels, with very few examples for many of those labels."
            ],
            correctAnswer: "It leads to datasets with many compound class labels, with very few examples for many of those labels.",
            explanation: "The Power Set method can result in datasets with many compound class labels, with very few examples for many of those labels.",
        }, // citation slide: Power Set method (4)
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "The Classifier Chain method is always more effective than the Binary Relevance method.",
            correctAnswer: false,
            explanation: "The effectiveness of the Classifier Chain method depends on the label order and can vary compared to the Binary Relevance method.",
        }, // citation slide: Classifier Chain method (3)
    ];
};
