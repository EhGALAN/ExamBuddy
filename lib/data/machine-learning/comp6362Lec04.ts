import {Question} from "../../types";

export const questions: (n: number) => Question[] = (n: number) => {
    return [
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is a common technique to handle missing values in data?",
            options: ["Imputation", "Normalization", "Standardization", "Binning"],
            correctAnswer: "Imputation",
            explanation: "Imputation is a technique used to replace missing values in a dataset.",
        }, // citation slide Data Cleaning
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "Feature scaling is important because some machine learning algorithms do not perform well with input values of very different scales.",
            correctAnswer: true,
            explanation: "Feature scaling helps in making comparisons across features easier and speeds up convergence of optimization algorithms.",
        }, // citation slide Feature Scaling
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is a method to map categorical data to numerical values?",
            options: ["One-hot encoding", "Min-Max scaling", "Z-score normalization", "Binning"],
            correctAnswer: "One-hot encoding",
            explanation: "One-hot encoding is a method to convert categorical data into a numerical format.",
        }, // citation slide Data Cleaning
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "Normalization scales the values to a range of 0 to 1.",
            correctAnswer: true,
            explanation: "Normalization (Min-Max scaling) shifts and scales values to a range of 0 to 1.",
        }, // citation slide Normalization
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is NOT a benefit of standardization over normalization?",
            options: ["Less affected by outliers", "Values are bounded to a specific range", "Mean is set to zero", "Standard deviation is 1"],
            correctAnswer: "Values are bounded to a specific range",
            explanation: "Standardization does not bound values to a specific range but centers them around the mean with unit variance.",
        }, // citation slide Standardization
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "Standardization is less affected by outliers compared to normalization.",
            correctAnswer: true,
            explanation: "Standardization is less affected by outliers because it centers values around the mean with unit variance.",
        }, // citation slide Standardization
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is a common cause of noise in data?",
            options: ["Faulty data collection", "High-quality equipment", "Perfect data transmission", "Error-free human judgment"],
            correctAnswer: "Faulty data collection",
            explanation: "Faulty data collection, such as wrong equipment calibration or errors in transmission, can cause noise in data.",
        }, // citation slide Noisy data
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "Binning is a technique to smooth noisy data by distributing values into bins and replacing them with a representative value.",
            correctAnswer: true,
            explanation: "Binning involves sorting values, distributing them into bins, and replacing them with a more representative value.",
        }, // citation slide Binning
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is a common evaluation metric for regression models?",
            options: ["Mean Absolute Error (MAE)", "Accuracy", "Precision", "Recall"],
            correctAnswer: "Mean Absolute Error (MAE)",
            explanation: "Mean Absolute Error (MAE) is a common metric used to evaluate regression models.",
        }, // citation slide Performance metric
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "RMSE (Root Mean Square Error) is more sensitive to outliers compared to MAE (Mean Absolute Error).",
            correctAnswer: true,
            explanation: "RMSE is more sensitive to outliers because it squares the errors before averaging them.",
        }, // citation slide Performance metrics
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is a common issue with complex models like neural networks?",
            options: ["Overfitting", "Underfitting", "Perfect generalization", "No noise in data"],
            correctAnswer: "Overfitting",
            explanation: "Complex models like neural networks can overfit, detecting patterns in the data but failing to generalize to unseen data.",
        }, // citation slide Overfitting
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "Regularization is a set of methods used to reduce overfitting in machine learning models.",
            correctAnswer: true,
            explanation: "Regularization helps in reducing overfitting by trading model accuracy for increased generalizability.",
        }, // citation slide Overfitting
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is a technique to evaluate the generalizability of a model?",
            options: ["k-fold Cross Validation", "Single test set evaluation", "No evaluation", "Random guessing"],
            correctAnswer: "k-fold Cross Validation",
            explanation: "k-fold Cross Validation is a technique to evaluate the generalizability of a model by splitting the data into k subsets and training/testing the model k times.",
        }, // citation slide k-fold Cross Validation
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "In k-fold Cross Validation, all data points are used for both training and testing.",
            correctAnswer: true,
            explanation: "In k-fold Cross Validation, each data point is used for training and testing in different folds.",
        }, // citation slide k-fold Cross Validation
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is a common issue with using a single test set for evaluation?",
            options: ["Overestimation of model performance", "Underestimation of model performance", "Perfect evaluation", "No issues"],
            correctAnswer: "Overestimation of model performance",
            explanation: "Using a single test set may lead to overestimation of model performance if the test set is not representative of the entire dataset.",
        }, // citation slide Cross-Validation
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "Stratified sampling is a technique to ensure that the test set is representative of the entire dataset.",
            correctAnswer: true,
            explanation: "Stratified sampling involves dividing the dataset into strata and sampling from each stratum to ensure representativeness.",
        }, // citation slide Stratified sampling
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is a common performance metric for classification models?",
            options: ["Accuracy", "MAE", "RMSE", "F1 Score"],
            correctAnswer: "Accuracy",
            explanation: "Accuracy is a common performance metric for classification models.",
        }, // citation slide Performance metric
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "A simpler model can sometimes generalize better than a complex model.",
            correctAnswer: true,
            explanation: "A simpler model may generalize better because it is less likely to overfit the training data.",
        }, // citation slide Overfitting vs Underfitting
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is a common issue with using a small dataset for training?",
            options: ["Overfitting", "Underfitting", "Perfect generalization", "No noise in data"],
            correctAnswer: "Overfitting",
            explanation: "Using a small dataset for training can lead to overfitting because the model may learn the noise in the data.",
        }, // citation slide Overfitting
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "Cross-validation helps in evaluating the model's performance on different subsets of the data.",
            correctAnswer: true,
            explanation: "Cross-validation involves splitting the data into subsets and evaluating the model's performance on each subset.",
        }, // citation slide Cross-Validation
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is a common technique to handle imbalanced datasets?",
            options: ["Stratified sampling", "Random sampling", "Single test set evaluation", "No sampling"],
            correctAnswer: "Stratified sampling",
            explanation: "Stratified sampling helps in handling imbalanced datasets by ensuring that each stratum is represented in the test set.",
        }, // citation slide Stratified sampling
    ];
};
