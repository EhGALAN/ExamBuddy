import {Question} from "../../types";
import {generateGitHubUrlAuto} from "@/lib/utils.ts";

export const questions: (n: number) => Question[] = (n: number) => {
    return [
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is a key assumption in Naive Bayes Classifiers?",
            options: ["Features are conditionally dependent", "Features are conditionally independent", "Features are always normally distributed", "Features are always binary"],
            correctAnswer: "Features are conditionally independent",
            explanation: "Naive Bayes Classifiers assume that features are conditionally independent given the class variable.",
        }, // citation slide "What is Naive Bayes Classifier"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Machine Learning",
            text: "k-NN is a model-based learning algorithm.",
            correctAnswer: false,
            explanation: "k-NN is an instance-based learning algorithm, not model-based.",
        }, // citation slide "Model based vs Instance based Learning"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What does the parameter 'k' represent in k-Nearest Neighbors (k-NN)?",
            options: ["The number of features", "The number of nearest neighbors", "The distance metric used", "The total number of samples"],
            correctAnswer: "The number of nearest neighbors",
            explanation: "The parameter 'k' in k-NN represents the number of nearest neighbors considered for prediction.",
        }, // citation slide "k-Nearest Neighbours - (k-NN)"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which distance metric is used by default in sklearn's k-NN implementation?",
            options: ["Manhattan Distance", "Euclidean Distance", "Minkowski Distance", "Cosine Similarity"],
            correctAnswer: "Minkowski Distance",
            explanation: "The default distance metric in sklearn's k-NN implementation is Minkowski Distance with p=2 (Euclidean Distance).",
        }, // citation slide "Distance Metrics"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Machine Learning",
            text: "In k-NN, scaling features is important to ensure that features with higher values do not dominate the distance calculation.",
            correctAnswer: true,
            explanation: "Scaling features is crucial in k-NN to prevent features with larger ranges from dominating the distance calculation.",
        }, // citation slide "Scaling is important"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What is the formula for the Euclidean Distance between two points $x$ and $y$?",
            options: ["$d = \\sum|x_i - y_i|$", "$d = \\sqrt{\\sum(x_i - y_i)^2}$", "$d = (\\sum|x_i - y_i|^p)^{1/p}$", "$d = \\max(|x_i - y_i|)$"],
            correctAnswer: "$d = \\sqrt{\\sum(x_i - y_i)^2}$",
            explanation: "The Euclidean Distance formula is $d = \\sqrt{\\sum(x_i - y_i)^2}$.",
        }, // citation slide "Distance Metrics"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Machine Learning",
            text: "Naive Bayes Classifiers are only suitable for binary classification problems.",
            correctAnswer: false,
            explanation: "Naive Bayes Classifiers can be used for both binary and multiclass classification problems.",
        }, // citation slide "What is Naive Bayes Classifier"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which type of Naive Bayes Classifier is suitable for discrete count data, such as word counts in text classification?",
            options: ["Gaussian Naive Bayes", "Multinomial Naive Bayes", "Bernoulli Naive Bayes", "Poisson Naive Bayes"],
            correctAnswer: "Multinomial Naive Bayes",
            explanation: "Multinomial Naive Bayes is suitable for discrete count data, such as word counts in text classification.",
        }, // citation slide "Multinomial naive Bayes"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Machine Learning",
            text: "In k-NN regression, the predicted value is the weighted average of the values from the k nearest neighbors.",
            correctAnswer: true,
            explanation: "In k-NN regression, the predicted value is computed as the weighted average of the values from the k nearest neighbors.",
        }, // citation slide "k-NN Regression"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What is the formula for the Manhattan Distance between two points $x$ and $y$?",
            options: ["$d = \\sum|x_i - y_i|$", "$d = \\sqrt{\\sum(x_i - y_i)^2}$", "$d = (\\sum|x_i - y_i|^p)^{1/p}$", "$d = \\max(|x_i - y_i|)$"],
            correctAnswer: "$d = \\sum|x_i - y_i|$",
            explanation: "The Manhattan Distance formula is $d = \\sum|x_i - y_i|$.",
        }, // citation slide "Distance Metrics"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Machine Learning",
            text: "In Bayes' Theorem, the posterior probability is calculated as P(A|B) = P(B|A) * P(A) / P(B).",
            correctAnswer: true,
            explanation: "This is the correct formula for Bayes' Theorem.",
        }, // citation slide "Bayes Theorem"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is a common application of Naive Bayes Classifiers?",
            options: ["Image segmentation", "Text classification", "Clustering", "Dimensionality reduction"],
            correctAnswer: "Text classification",
            explanation: "Naive Bayes Classifiers are commonly used for text classification problems.",
        }, // citation slide "What is Naive Bayes Classifier"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Machine Learning",
            text: "In k-NN, reducing the number of features through feature selection or dimensionality reduction can improve performance.",
            correctAnswer: true,
            explanation: "Reducing the number of features can help mitigate the curse of dimensionality and improve k-NN performance.",
        }, // citation slide "Reducing number of features is useful"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What is the Minkowski Distance formula when p=1?",
            options: ["Manhattan Distance", "Euclidean Distance", "Cosine Distance", "Hamming Distance"],
            correctAnswer: "Manhattan Distance",
            explanation: "When p=1, the Minkowski Distance formula simplifies to the Manhattan Distance.",
        }, // citation slide "Distance Metrics"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Machine Learning",
            text: "Gaussian Naive Bayes assumes that features follow a normal distribution.",
            correctAnswer: true,
            explanation: "Gaussian Naive Bayes is used when features are assumed to follow a Gaussian (normal) distribution.",
        }, // citation slide "Gaussian naive Bayes"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is NOT a type of Naive Bayes Classifier?",
            options: ["Gaussian Naive Bayes", "Multinomial Naive Bayes", "Bernoulli Naive Bayes", "Poisson Naive Bayes"],
            correctAnswer: "Poisson Naive Bayes",
            explanation: "Poisson Naive Bayes is not mentioned in the provided document.",
        }, // citation slide "Which one to use"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Machine Learning",
            text: "In k-NN, the value of 'k' is always an odd number to avoid ties in classification.",
            correctAnswer: false,
            explanation: "The value of 'k' in k-NN can be any positive integer, not necessarily odd.",
        }, // citation slide "k-Nearest Neighbours - (k-NN)"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What is the primary goal of hyperparameter optimization in k-NN?",
            options: ["To reduce the number of features", "To select the best value for 'k'", "To scale the features", "To improve the distance metric"],
            correctAnswer: "To select the best value for 'k'",
            explanation: "Hyperparameter optimization in k-NN aims to find the optimal value for 'k'.",
        }, // citation slide "Working with k-NN"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Machine Learning",
            text: "Bernoulli Naive Bayes is suitable for features that represent Boolean values (true/false).",
            correctAnswer: true,
            explanation: "Bernoulli Naive Bayes is used when features are Boolean values.",
        }, // citation slide "Bernoulli naive Bayes"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is a key advantage of Naive Bayes Classifiers?",
            options: ["They always outperform other classifiers", "They are computationally expensive", "They work well with small datasets", "They require no feature scaling"],
            correctAnswer: "They work well with small datasets",
            explanation: "Naive Bayes Classifiers are known to perform well even with small datasets.",
        }, // citation slide "What is Naive Bayes Classifier"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Machine Learning",
            text: "In k-NN, the choice of distance metric can significantly impact the performance of the algorithm.",
            correctAnswer: true,
            explanation: "The choice of distance metric in k-NN can affect how similarities between data points are measured, impacting performance.",
        }, // citation slide "Distance Metrics"
        // Generated question for Manhattan Distance
        (() => {
            const point1 = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
            const point2 = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
            const manhattanDistance = point1.reduce((sum, x, i) => sum + Math.abs(x - point2[i]), 0);
            return {
                id: `ml-${++n}`,
                report: generateGitHubUrlAuto(),
                type: "generated",
                subject: "Machine Learning",
                text: `Calculate the Manhattan Distance between the points ${JSON.stringify(point1)} and ${JSON.stringify(point2)}. (Answer is rounded to 2 decimal places)`,
                variables: {
                    "Point 1": point1,
                    "Point 2": point2,
                },
                correctAnswer: Math.round(manhattanDistance * 100) / 100,
                explanation: `The Manhattan Distance is calculated as the sum of the absolute differences between corresponding elements of the two points.`,
            };
        })(), // citation slide "Distance Metrics"

        // Generated question for Euclidean Distance
        (() => {
            const point1 = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
            const point2 = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
            const euclideanDistance = Math.sqrt(point1.reduce((sum, x, i) => sum + Math.pow(x - point2[i], 2), 0));
            return {
                id: `ml-${++n}`,
                report: generateGitHubUrlAuto(),
                type: "generated",
                subject: "Machine Learning",
                text: `Calculate the Euclidean Distance between the points ${JSON.stringify(point1)} and ${JSON.stringify(point2)}. (Answer is rounded to 2 decimal places)`,
                variables: {
                    "Point 1": point1,
                    "Point 2": point2,
                },
                correctAnswer: Math.round(euclideanDistance * 100) / 100,
                explanation: `The Euclidean Distance is calculated as the square root of the sum of the squared differences between corresponding elements of the two points.`,
            };
        })(), // citation slide "Distance Metrics"

        // Generated question for P(A|B) with Bayes Theorem
        (() => {
            const P_B_given_A = Math.random(); // P(positive | cancer)
            const P_A = Math.random(); // P(cancer)
            const P_B_given_not_A = Math.random(); // P(positive | not cancer)
            const P_not_A = 1 - P_A; // P(not cancer)
            const P_B = P_B_given_A * P_A + P_B_given_not_A * P_not_A; // P(positive)
            const P_A_given_B = (P_B_given_A * P_A) / P_B;
            return {
                id: `ml-${++n}`,
                report: generateGitHubUrlAuto(),
                type: "generated",
                subject: "Machine Learning",
                text: `Given P(positive | cancer) = ${P_B_given_A.toFixed(2)}, P(cancer) = ${P_A.toFixed(2)}, P(positive | not cancer) = ${P_B_given_not_A.toFixed(2)}, and P(not cancer) = ${P_not_A.toFixed(2)}, calculate P(cancer | positive) using Bayes' Theorem. (Answer is rounded to 2 decimal places)`,
                variables: {
                    "P(positive | cancer)": P_B_given_A,
                    "P(cancer)": P_A,
                    "P(positive | not cancer)": P_B_given_not_A,
                    "P(not cancer)": P_not_A,
                },
                correctAnswer: Math.round(P_A_given_B * 100) / 100,
                explanation: `Bayes' Theorem is used to calculate the posterior probability P(A|B) as P(B|A) * P(A) / P(B).`,
            };
        })(), // citation slide "Bayes Theorem - example"
    ];
};
