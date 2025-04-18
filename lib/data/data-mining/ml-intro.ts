import {Question} from "../../types";
import {generateGitHubUrlAuto} from "@/lib/utils.ts";

export const questions: (n: number) => Question[] = (n: number) => {
    return [
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is a key premise of machine learning?",
            options: [
                "A pattern/relationship exists and we have data to uncover it.",
                "We can always pin down the relationship mathematically.",
                "Machine learning does not require data.",
                "Machine learning only works with predefined mathematical models."
            ],
            correctAnswer: "A pattern/relationship exists and we have data to uncover it.",
        }, // citation slide The Essence of Machine Learning
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "The goal of supervised learning is to predict the label of an example given its input features.",
            correctAnswer: true,
        }, // citation slide Components of Supervised Learning
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is NOT a type of machine learning?",
            options: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "Prescriptive Learning"],
            correctAnswer: "Prescriptive Learning",
        }, // citation slide Types of Machine Learning
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the target function in supervised learning?",
            options: [
                "A function that maps input features to output labels.",
                "A function that generates random data.",
                "A function that only works with unsupervised learning.",
                "A function that does not require data."
            ],
            correctAnswer: "A function that maps input features to output labels.",
        }, // citation slide Components of Supervised Learning
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Generalisation in machine learning means the model can perform well on new, unseen data.",
            correctAnswer: true,
        }, // citation slide The Need for Generalisation
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is an example of induction in machine learning?",
            options: [
                "Learning algebra from specific examples.",
                "Memorizing all training data without generalisation.",
                "Using only deductive reasoning.",
                "Ignoring the need for new data to evaluate performance."
            ],
            correctAnswer: "Learning algebra from specific examples.",
        }, // citation slide The Need for Generalisation
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the purpose of a hypothesis in supervised learning?",
            options: [
                "To discover a relationship that predicts labels from input features.",
                "To generate random data.",
                "To work only with unsupervised learning.",
                "To ignore the need for data."
            ],
            correctAnswer: "To discover a relationship that predicts labels from input features.",
        }, // citation slide Components of Supervised Learning
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Reinforcement learning is a type of machine learning where an agent learns to make decisions by taking actions in an environment.",
            correctAnswer: true,
        }, // citation slide Types of Machine Learning
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "In machine learning, the process of using specific examples to uncover the underlying process is called induction.",
            correctAnswer: true,
        }, // citation slide The Need for Generalisation
    ];
};
