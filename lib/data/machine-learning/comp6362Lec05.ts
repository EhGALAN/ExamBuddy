import {Question} from "../../types";
import {generateGitHubUrlAuto} from "@/lib/utils.ts";
import {generateGitHubUrlAuto} from "@/lib/utils.ts";

export const questions: (n: number) => Question[] = (n: number) => {
    return [
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is a method to scale features in machine learning?",
            options: ["Normalization", "Standardization", "Binning", "All of the above"],
            correctAnswer: "All of the above",
        }, // citation slide what we have covered
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Machine Learning",
            text: "Stratified sampling ensures that the test set has the same distribution of classes as the original dataset.",
            correctAnswer: true,
        }, // citation slide what we have covered
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which metric is used to evaluate the performance of a regression model?",
            options: ["Mean Absolute Error (MAE)", "Root Mean Square Error (RMSE)", "F1-score", "Both MAE and RMSE"],
            correctAnswer: "Both MAE and RMSE",
        }, // citation slide what we have covered
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Machine Learning",
            text: "A Decision Tree Regressor can achieve zero error on the training data.",
            correctAnswer: true,
        }, // citation slide trying a different model
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What is overfitting in machine learning?",
            options: ["When a model performs well on training data but poorly on unseen data", "When a model performs poorly on both training and unseen data", "When a model performs well on both training and unseen data", "None of the above"],
            correctAnswer: "When a model performs well on training data but poorly on unseen data",
        }, // citation slide overfitting
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Machine Learning",
            text: "Regularization is a method to reduce overfitting in complex models.",
            correctAnswer: true,
        }, // citation slide overfitting
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is a benefit of k-fold cross-validation?",
            options: ["It uses all data points for testing", "It reduces the size of the training set", "It increases the risk of overfitting", "It is computationally inexpensive"],
            correctAnswer: "It uses all data points for testing",
        }, // citation slide k-fold cross validation
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Machine Learning",
            text: "In k-fold cross-validation, the choice of k is usually 5 or 10.",
            correctAnswer: true,
        }, // citation slide k-fold cross validation
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is a common dataset for classification tasks?",
            options: ["MNIST Dataset", "Housing Dataset", "GDP Dataset", "Life Satisfaction Dataset"],
            correctAnswer: "MNIST Dataset",
        }, // citation slide dataset
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Machine Learning",
            text: "The MNIST Dataset contains images of handwritten digits.",
            correctAnswer: true,
        }, // citation slide dataset
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What is the objective of a binary classifier in the context of the MNIST Dataset?",
            options: ["To identify if a picture shows the number '5'", "To predict housing prices", "To classify GDP per capita", "To measure life satisfaction"],
            correctAnswer: "To identify if a picture shows the number '5'",
        }, // citation slide binary classifier
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Machine Learning",
            text: "A confusion matrix compares the predicted classes with the actual classes.",
            correctAnswer: true,
        }, // citation slide confusion matrix
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is a performance metric for classification models?",
            options: ["Precision", "Recall", "F1-score", "All of the above"],
            correctAnswer: "All of the above",
        }, // citation slide performance metrics
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Machine Learning",
            text: "Precision measures the ability of the model to identify only the relevant class.",
            correctAnswer: true,
        }, // citation slide performance metrics
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What does the F1-score represent in classification models?",
            options: ["The harmonic mean of precision and recall", "The arithmetic mean of precision and recall", "The geometric mean of precision and recall", "The sum of precision and recall"],
            correctAnswer: "The harmonic mean of precision and recall",
        }, // citation slide f1-score
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Machine Learning",
            text: "In a heart disease screening test, recall is more important than precision.",
            correctAnswer: true,
        }, // citation slide precision-recall
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is a method to adjust the precision-recall trade-off in a classifier?",
            options: ["Adjusting the threshold value", "Increasing the dataset size", "Reducing the number of features", "Changing the learning rate"],
            correctAnswer: "Adjusting the threshold value",
        }, // citation slide precision-recall trade-off
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Machine Learning",
            text: "A high F1-score indicates that both precision and recall are high.",
            correctAnswer: true,
        }, // citation slide f1-score
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is a common activation function in neural networks?",
            options: ["ReLU", "JPEG", "HTTP", "SQL"],
            correctAnswer: "ReLU",
        }, // citation slide what is an activation function
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Machine Learning",
            text: "Decision trees are immune to overfitting.",
            correctAnswer: false,
        }, // citation slide how overfitting work
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What is the primary goal of feature scaling in machine learning?",
            options: ["To improve model performance", "To reduce computational cost", "To increase data complexity", "To enhance data visualization"],
            correctAnswer: "To improve model performance",
        }, // citation slide what we have covered
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Machine Learning",
            text: "Stratified sampling is used to ensure that the test set is representative of the entire dataset.",
            correctAnswer: true,
        }, // citation slide what we have covered
        (() => {
            const tp = Math.floor(Math.random() * 100); // True Positives
            const fp = Math.floor(Math.random() * 50); // False Positives
            const precision = tp / (tp + fp);

            return {
                id: `ml-${++n}`,
                report: generateGitHubUrlAuto(),
                type: "generated",
                subject: "Machine Learning",
                text: `Calculate the precision given the following values: True Positives (TP) = ${tp}, False Positives (FP) = ${fp}. (Answer rounded to 2 decimal places)`,
                variables: {
                    "True Positives (TP)": tp,
                    "False Positives (FP)": fp,
                },
                correctAnswer: precision.toFixed(2),
            };
        })(), // citation slide performance metrics
        (() => {
            const tp = Math.floor(Math.random() * 100); // True Positives
            const fn = Math.floor(Math.random() * 50); // False Negatives
            const recall = tp / (tp + fn);

            return {
                id: `ml-${++n}`,
                report: generateGitHubUrlAuto(),
                type: "generated",
                subject: "Machine Learning",
                text: `Calculate the recall given the following values: True Positives (TP) = ${tp}, False Negatives (FN) = ${fn}. (Answer rounded to 2 decimal places)`,
                variables: {
                    "True Positives (TP)": tp,
                    "False Negatives (FN)": fn,
                },
                correctAnswer: recall.toFixed(2),
            };
        })(), // citation slide performance metrics
        (() => {
            const precision = parseFloat(Math.random().toFixed(2)); // Precision
            const recall = parseFloat(Math.random().toFixed(2)); // Recall
            const f1Score = 2 * (precision * recall) / (precision + recall);

            return {
                id: `ml-${++n}`,
                report: generateGitHubUrlAuto(),
                type: "generated",
                subject: "Machine Learning",
                text: `Calculate the F1-score given the following values: Precision = ${precision}, Recall = ${recall}. (Answer rounded to 2 decimal places)`,
                variables: {
                    "Precision": precision,
                    "Recall": recall,
                },
                correctAnswer: f1Score.toFixed(2),
            };
        })(), // citation slide f1-score
    ];
};
