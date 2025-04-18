import {Question} from "../../types";
import {generateGitHubUrlAuto} from "@/lib/utils.ts";

export const questions: (n: number) => Question[] = (n: number) => {
    return [
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What is the probability that 2 out of 3 experts will misidentify the same scan if each expert has a 10% false negative rate?",
            options: ["0.37%", "3.72%", "10%", "20%"],
            correctAnswer: "3.72%",
            explanation: "The probability that 2 out of 3 experts misidentify the same scan is approximately 3.72%.",
        }, // citation slide Ensemble Learning
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Machine Learning",
            text: "Ensemble learning involves training a single model on a dataset.",
            correctAnswer: false,
            explanation: "Ensemble learning involves training multiple models and combining their predictions.",
        }, // citation slide Ensemble Learning
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is NOT a technique used in ensemble learning?",
            options: ["Bagging", "Boosting", "Stacking", "Principal Component Analysis"],
            correctAnswer: "Principal Component Analysis",
            explanation: "Principal Component Analysis (PCA) is a dimensionality reduction technique, not an ensemble learning method.",
        }, // citation slide Ensemble Learning
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Machine Learning",
            text: "Hard voting in ensemble learning uses the predicted class probabilities from each model.",
            correctAnswer: false,
            explanation: "Hard voting uses the predicted class labels, not probabilities.",
        }, // citation slide VotingClassifier
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What is the primary difference between hard voting and soft voting in ensemble learning?",
            options: ["Hard voting uses class labels, while soft voting uses probabilities.", "Hard voting is faster than soft voting.", "Soft voting is more accurate than hard voting.", "Hard voting requires more computational resources."],
            correctAnswer: "Hard voting uses class labels, while soft voting uses probabilities.",
            explanation: "Hard voting uses the majority class label, while soft voting uses the average probabilities.",
        }, // citation slide VotingClassifier
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Machine Learning",
            text: "Bagging (Bootstrap Aggregating) involves training multiple models on the same dataset.",
            correctAnswer: false,
            explanation: "Bagging involves training multiple models on different subsets of the dataset created through bootstrapping.",
        }, // citation slide Bagging
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What is the purpose of Out-of-Bag (OOB) evaluation in bagging?",
            options: ["To evaluate the model on the training set.", "To evaluate the model on unseen data.", "To reduce overfitting.", "To increase model complexity."],
            correctAnswer: "To evaluate the model on unseen data.",
            explanation: "OOB evaluation uses samples not included in the training set to evaluate the model.",
        }, // citation slide Out-of-Bag Evaluation
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Machine Learning",
            text: "Random Forests are a type of ensemble learning that combines multiple Decision Trees.",
            correctAnswer: true,
            explanation: "Random Forests use multiple Decision Trees trained on random subsets of data and features.",
        }, // citation slide Random Forest
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is NOT a hyperparameter of a Random Forest?",
            options: ["n_estimators", "max_depth", "learning_rate", "max_features"],
            correctAnswer: "learning_rate",
            explanation: "Learning rate is a hyperparameter for boosting algorithms, not Random Forests.",
        }, // citation slide Random Forest
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Machine Learning",
            text: "Extra-Trees (Extremely Randomised Trees) introduce randomness in both feature selection and threshold selection.",
            correctAnswer: true,
            explanation: "Extra-Trees add randomness in feature selection and threshold selection to increase diversity.",
        }, // citation slide Extra-Trees
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What is the primary goal of feature importance in Random Forests?",
            options: ["To reduce overfitting.", "To identify the most influential features.", "To improve model accuracy.", "To increase training speed."],
            correctAnswer: "To identify the most influential features.",
            explanation: "Feature importance helps identify which features contribute most to the model's predictions.",
        }, // citation slide Feature Importance
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Machine Learning",
            text: "AdaBoost is a boosting algorithm that assigns higher weights to correctly classified samples in subsequent iterations.",
            correctAnswer: false,
            explanation: "AdaBoost assigns higher weights to misclassified samples to focus on them in subsequent iterations.",
        }, // citation slide AdaBoost
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is a key difference between AdaBoost and Gradient Boosting?",
            options: ["AdaBoost uses a weighted sum of predictors, while Gradient Boosting uses residual errors.", "AdaBoost is faster than Gradient Boosting.", "Gradient Boosting is more prone to overfitting.", "AdaBoost is more interpretable than Gradient Boosting."],
            correctAnswer: "AdaBoost uses a weighted sum of predictors, while Gradient Boosting uses residual errors.",
            explanation: "AdaBoost adjusts weights of misclassified samples, while Gradient Boosting trains on residual errors.",
        }, // citation slide Gradient Boosting
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Machine Learning",
            text: "XGBoost is a gradient boosting algorithm that is particularly effective for handling sparse data.",
            correctAnswer: true,
            explanation: "XGBoost includes features like regularization and handling of sparse data, making it highly effective.",
        }, // citation slide XGBoost
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What is the primary advantage of using stacking in ensemble learning?",
            options: ["It reduces overfitting.", "It combines the outputs of multiple models using a meta-learner.", "It is faster than bagging.", "It requires less computational resources."],
            correctAnswer: "It combines the outputs of multiple models using a meta-learner.",
            explanation: "Stacking uses a meta-learner to combine the predictions of multiple base models.",
        }, // citation slide Stacking
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Machine Learning",
            text: "In Random Forests, each tree is trained on a random subset of both samples and features.",
            correctAnswer: true,
            explanation: "Random Forests use random subsets of data (bagging) and features (random subspaces).",
        }, // citation slide Random Forest
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is NOT a benefit of using ensemble learning?",
            options: ["Reduced variance.", "Increased bias.", "Improved generalization.", "Better handling of overfitting."],
            correctAnswer: "Increased bias.",
            explanation: "Ensemble learning typically reduces variance and improves generalization, but it may introduce bias.",
        }, // citation slide Ensemble Learning
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Machine Learning",
            text: "In bagging, the training sets are created by sampling with replacement from the original dataset.",
            correctAnswer: true,
            explanation: "Bagging uses bootstrapping, which involves sampling with replacement.",
        }, // citation slide Bagging
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What is the purpose of the learning rate in Gradient Boosting?",
            options: ["To control the contribution of each tree.", "To reduce overfitting.", "To increase model complexity.", "To speed up training."],
            correctAnswer: "To control the contribution of each tree.",
            explanation: "The learning rate determines the weight of each tree's contribution to the final model.",
        }, // citation slide Gradient Boosting
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Machine Learning",
            text: "In AdaBoost, the weights of correctly classified samples are increased in subsequent iterations.",
            correctAnswer: false,
            explanation: "The weights of misclassified samples are increased to focus on them in subsequent iterations.",
        }, // citation slide AdaBoost
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is a key feature of XGBoost?",
            options: ["Regularization to prevent overfitting.", "Handling of sparse data.", "Parallel learning for faster training.", "All of the above."],
            correctAnswer: "All of the above.",
            explanation: "XGBoost includes regularization, handling of sparse data, and parallel learning.",
        }, // citation slide XGBoost
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Machine Learning",
            text: "Stacking involves training a meta-learner on the predictions of base models.",
            correctAnswer: true,
            explanation: "Stacking uses a meta-learner to combine the outputs of base models.",
        }, // citation slide Stacking
    ];
};
