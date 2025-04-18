import {Question} from "../../types";
import {generateGitHubUrlAuto} from "@/lib/utils.ts";

export const questions: (n: number) => Question[] = (n: number) => {
    return [
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the expected value of a fair six-sided die roll?",
            options: ["3.0", "3.5", "4.0", "4.5"],
            correctAnswer: "3.5",
            explanation: "The expected value is calculated as the sum of all outcomes multiplied by their probabilities.",
        }, // citation slide Expectation / Mean
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "The sample variance formula with unknown mean uses the denominator \(N-1\).",
            correctAnswer: true,
        }, // citation slide Variance
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is NOT a component of the Mean Squared Error (MSE) decomposition?",
            options: ["Bias squared", "Variance", "Noise in data", "Covariance"],
            correctAnswer: "Covariance",
        }, // citation slide Bias-Variance Decomposition
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "A model with low bias and high variance tends to overfit the training data.",
            correctAnswer: true,
        }, // citation slide Bias-Variance Trade-off
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What does the term 'inductive bias' refer to in machine learning?",
            options: ["The assumption that data is always noise-free", "A preference for specific types of generalizations", "The process of reducing variance", "The use of cross-validation"],
            correctAnswer: "A preference for specific types of generalizations",
        }, // citation slide Inductive Bias
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "The No-Free Lunch Theorem states that there is no single algorithm that works best for all problems.",
            correctAnswer: true,
        }, // citation slide No-Free Lunch Theorem
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the formula for the sample mean $\\bar{x}$?",
            options: [
                "$\\bar{x} = \\frac{1}{N} \\sum_{i=1}^{N} x_{i}$",
                "$\\bar{x} = \\frac{1}{N-1} \\sum_{i=1}^{N} x_{i}$",
                "$\\bar{x} = \\sum_{i=1}^{N} \\frac{1}{N} x_{i}$",
                "$\\bar{x} = \\frac{1}{N} \\sum_{i=1}^{N-1} x_{i}$"
            ],
            correctAnswer: "$\\bar{x} = \\frac{1}{N} \\sum_{i=1}^{N} x_{i}$",
        }, // citation slide Sample mean
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "The expected value of a function $f(X)$ is calculated as $E[f(X)] = \\sum_{i=1}^{O} p(x_{i}) f(x_{i})$.",
            correctAnswer: true,
        }, // citation slide Expectation / Mean (cont.)
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the population variance formula?",
            options: [
                "$\\sigma^2(X) = E[(E[X] - X)^2]$",
                "$\\sigma^2(X) = \\frac{1}{N} \\sum_{i=1}^{N} (E[X] - x_{i})^2$",
                "$\\sigma^2(X) = \\frac{1}{N-1} \\sum_{i=1}^{N} (E[X] - x_{i})^2$",
                "$\\sigma^2(X) = E[(X - E[X])^2]$"
            ],
            correctAnswer: "$\\sigma^2(X) = E[(E[X] - X)^2]$",
        }, // citation slide Population variance
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "In regression, the goal is to predict quantitative variables like Salary.",
            correctAnswer: true,
        }, // citation slide Regression
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What does the notation $f_S(x)$ represent in the context of machine learning?",
            options: [
                "$f(x)$: The true function",
                "$f_S(x)$: The function learned from the training set $S$",
                "$E[f(x)]$: The expected value of $f(x)$",
                "$\\text{Var}(f(x))$: The variance of $f(x)$"
            ],
            correctAnswer: "$f_S(x)$: The function learned from the training set $S$",
        }, // citation slide Notation
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "The Mean Squared Error (MSE) is minimized by averaging the squared differences between true and predicted values.",
            correctAnswer: true,
        }, // citation slide Mean Squared Error
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the formula for the Mean Squared Error (MSE) averaged over all training sets $S$?",
            options: [
                "$MSE_{AVG} = E_{x, y}[(y - f_S(x))^2]$",
                "$MSE_{AVG} = E_{x, y, S}[(y - f_S(x))^2]$",
                "$MSE_{AVG} = \\frac{1}{K} \\sum_{i=1}^{K} (y_i - f_S(x_i))^2$",
                "$MSE_{AVG} = E_{x, y, S}[(y - \\bar{y}_x)^2]$"
            ],
            correctAnswer: "$MSE_{AVG} = E_{x, y, S}[(y - f_S(x))^2]$",
        }, // citation slide Mean Squared Error-Averaged over $S$
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "The bias-variance decomposition helps in understanding the sources of error in a machine learning model.",
            correctAnswer: true,
        }, // citation slide Bias-Variance Decomposition
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What does the term $\\bar{y}_x$ represent in the bias-variance decomposition?",
            options: [
                "The expected value of $y$ for a given $x$",
                "The predicted value $f_S(x)$",
                "The variance of $y$",
                "The bias of the model"
            ],
            correctAnswer: "The expected value of $y$ for a given $x$",
        }, // citation slide Bias-Variance Decomposition
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Noise in data cannot be reduced by machine learning algorithms.",
            correctAnswer: true,
        }, // citation slide Bias-Variance Decomposition (2)
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the formula for the expected prediction of the models at point $x$?",
            options: [
                "$\\tilde{f}(x) = E_S[f_S(x)]$",
                "$\\tilde{f}(x) = \\bar{y}_x$",
                "$\\tilde{f}(x) = E_S[(y - f_S(x))^2]$",
                "$\\tilde{f}(x) = E_S[y]$"
            ],
            correctAnswer: "$\\tilde{f}(x) = E_S[f_S(x)]$",
        }, // citation slide Bias-Variance Decomposition (3)
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "A model with high bias and low variance tends to underfit the data.",
            correctAnswer: true,
        }, // citation slide Bias-Variance Trade-off
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is a source of inductive bias?",
            options: ["Representation bias", "Search bias", "Noise in data", "Random sampling"],
            correctAnswer: "Representation bias",
        }, // citation slide Sources of Inductive Bias
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Inductive bias is necessary for machine learning algorithms to generalize to new data.",
            correctAnswer: true,
        }, // citation slide Definition of Inductive Bias
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is an example of representation bias in rule induction algorithms?",
            options: ["Comparing two different attributes", "Using a constant function", "Pruning decision trees", "Random sampling"],
            correctAnswer: "Comparing two different attributes",
        }, // citation slide Example of Representation Bias
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "The No-Free Lunch Theorem implies that no algorithm can succeed on all tasks.",
            correctAnswer: true,
        }, // citation slide One of the No-Free Lunch Theorems
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the main conclusion of the No-Free Lunch Theorem?",
            options: ["There is no single best algorithm for all problems", "All algorithms perform equally well on all problems", "Noise in data can be eliminated", "Inductive bias is not necessary"],
            correctAnswer: "There is no single best algorithm for all problems",
        }, // citation slide No-Free Lunch Theorem
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "The approximation error in the bias-variance decomposition cannot be reduced by more data.",
            correctAnswer: true,
        }, // citation slide Bias-Variance Trade-off → Inductive Bias
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the definition of inductive bias?",
            options: ["A preference for specific types of generalizations", "The process of reducing variance", "The assumption that data is noise-free", "The use of cross-validation"],
            correctAnswer: "A preference for specific types of generalizations",
        }, // citation slide Definition of Inductive Bias (1)
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Inductive bias is necessary for any induction algorithm to generalize to new data.",
            correctAnswer: true,
        }, // citation slide Definition of Inductive Bias (2)
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is an example of search bias in decision trees?",
            options: ["Pruning decision trees", "Comparing two different attributes", "Using a constant function", "Random sampling"],
            correctAnswer: "Pruning decision trees",
        }, // citation slide Example of bias in a simple statistical experiment
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "A bias favoring one outcome in a statistical experiment can be good or bad depending on the context.",
            correctAnswer: true,
        }, // citation slide Example of bias in a simple statistical experiment
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What does the No-Free Lunch Theorem state about learning algorithms?",
            options: ["There is no single best algorithm for all tasks", "All algorithms perform equally well on all tasks", "Noise in data can be eliminated", "Inductive bias is not necessary"],
            correctAnswer: "There is no single best algorithm for all tasks",
        }, // citation slide No-Free Lunch Theorem (NFLT)
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "The No-Free Lunch Theorem implies that prior knowledge is necessary to avoid failures in learning tasks.",
            correctAnswer: true,
        }, // citation slide Implications of NFLT
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the approximation error in the error decomposition?",
            options: ["The error due to limited training data", "The error due to the model's bias", "The error due to noise in data", "The error due to variance"],
            correctAnswer: "The error due to the model's bias",
        }, // citation slide Error Decomposition
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "The estimation error in the error decomposition is related to the sample size and variance.",
            correctAnswer: true,
        }, // citation slide Error Decomposition
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the purpose of decision tree pruning?",
            options: ["To increase the complexity of the tree", "To avoid overfitting", "To reduce bias", "To increase variance"],
            correctAnswer: "To avoid overfitting",
        }, // citation slide Decision tree pruning as a bias (1)
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "A sophisticated pruning strategy in decision trees can help discover the correct tree more often than a naïve strategy.",
            correctAnswer: true,
        }, // citation slide Decision tree pruning as a bias (3)
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is a possible reason for decision tree algorithms obtaining high classification accuracy in credit data sets?",
            options: ["Decision trees are immune to overfitting", "Credit data is generated by analyzing one-attribute-at-a-time", "Credit data is always noise-free", "Credit data requires complex models"],
            correctAnswer: "Credit data is generated by analyzing one-attribute-at-a-time",
        }, // citation slide Statlog Project
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Every classification algorithm has an inductive bias.",
            correctAnswer: true,
        }, // citation slide Summary / Conclusions
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is a good approach to select the best classification algorithm for a given data set?",
            options: ["Use the same algorithm for all data sets", "Try several classification algorithms and use the best result", "Avoid using any inductive bias", "Use the most complex model available"],
            correctAnswer: "Try several classification algorithms and use the best result",
        }, // citation slide Summary / Conclusions
    ];
};
