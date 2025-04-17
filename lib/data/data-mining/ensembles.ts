import {Question} from "../../types";

export const questions: (n: number) => Question[] = (n: number) => {
    return [
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the main goal of an ensemble of classifiers?",
            options: [
                "To reduce computational complexity",
                "To improve predictive accuracy by aggregating predictions",
                "To decrease the number of classifiers",
                "To eliminate the need for training data"
            ],
            correctAnswer: "To improve predictive accuracy by aggregating predictions",
        }, // citation: Introduction
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "In an ensemble, it is crucial that each classifier has a high predictive accuracy.",
            correctAnswer: false,
        }, // citation: The Need for Diverse Classifiers
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "If 3 classifiers each have an error rate of 0.4 and make entirely correlated errors, what is the error rate of the ensemble?",
            options: ["0.2", "0.3", "0.4", "0.5"],
            correctAnswer: "0.4",
        }, // citation: Example of the importance of diversity of classifiers (1)
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "If 3 classifiers each have an error rate of 0.4 and make entirely uncorrelated errors, what is the error rate of the ensemble?",
            options: ["0.2", "0.3", "0.35", "0.4"],
            correctAnswer: "0.35",
        }, // citation: Example of the importance of diversity of classifiers (3)
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is a variance reduction method for ensembles?",
            options: ["Bagging", "Boosting", "Pruning", "Regularization"],
            correctAnswer: "Bagging",
        }, // citation: Variance reduction methods: bagging
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Bagging is particularly useful when the base classification algorithm is stable.",
            correctAnswer: false,
        }, // citation: Bagging (2)
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What does the term 'bagging' stand for in the context of ensembles?",
            options: [
                "Bootstrap Aggregating",
                "Binary Aggregating",
                "Bayesian Aggregating",
                "Bias Aggregating"
            ],
            correctAnswer: "Bootstrap Aggregating",
        }, // citation: Bagging (1)
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is a bias reduction method for ensembles?",
            options: ["Bagging", "Boosting", "Random Forests", "Pruning"],
            correctAnswer: "Boosting",
        }, // citation: Bias reduction methods: boosting (AdaBoost)
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "In boosting, base classifiers can be very simple as long as they are better than random guessing.",
            correctAnswer: true,
        }, // citation: Boosting
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the primary goal of gradient boosting?",
            options: [
                "To reduce variance",
                "To minimize an arbitrary loss function",
                "To increase bias",
                "To eliminate the need for bootstrap samples"
            ],
            correctAnswer: "To minimize an arbitrary loss function",
        }, // citation: Gradient Boosting
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is NOT a type of gradient boosting algorithm?",
            options: ["XGBoost", "LightGBM", "CatBoost", "AdaBoost"],
            correctAnswer: "AdaBoost",
        }, // citation: Gradient Boosting
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "In gradient boosting, the base predictors are averaged using weights alpha.",
            correctAnswer: true,
        }, // citation: Gradient Boosting
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the derivative of the Mean Squared Error (MSE) with respect to the prediction?",
            options: [
                "$-2(y_i - \\hat{y}_i)$",
                "$2(y_i - \\hat{y}_i)$",
                "$(y_i - \\hat{y}_i)^2$",
                "$y_i - \\hat{y}_i$"
            ],
            correctAnswer: "$-2(y_i - \\hat{y}_i)$",
        }, // citation: Gradient Boosting - Example
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Random forests are tailored for decision tree classifiers.",
            correctAnswer: true,
        }, // citation: Random Forests (1)
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is a random decision in random forests?",
            options: [
                "Randomly selecting F attributes at each internal tree node",
                "Randomly selecting the best attribute at each node",
                "Randomly pruning the tree",
                "Randomly selecting the training data"
            ],
            correctAnswer: "Randomly selecting F attributes at each internal tree node",
        }, // citation: Random Forests (2)
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "In boosting, overfitting is possible when more trees are added.",
            correctAnswer: true,
        }, // citation: Boosting
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is a benefit of ensembles?",
            options: [
                "Improved predictive accuracy",
                "Reduced computational complexity",
                "Increased interpretability",
                "Elimination of the need for training data"
            ],
            correctAnswer: "Improved predictive accuracy",
        }, // citation: Summary / Conclusions
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Ensembles are easier for users to interpret than single classification models.",
            correctAnswer: false,
        }, // citation: Summary / Conclusions
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is a drawback of ensembles?",
            options: [
                "Loss of comprehensibility",
                "Increased predictive accuracy",
                "Reduced variance",
                "Improved stability"
            ],
            correctAnswer: "Loss of comprehensibility",
        }, // citation: Summary / Conclusions
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "In boosting, examples that are harder to classify are assigned larger weights.",
            correctAnswer: true,
        }, // citation: Boosting
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is a stable classification algorithm?",
            options: ["Decision Tree", "Rule Induction", "Naive Bayes", "K-Nearest Neighbors"],
            correctAnswer: "Naive Bayes",
        }, // citation: Bagging (2)
    ];
};
