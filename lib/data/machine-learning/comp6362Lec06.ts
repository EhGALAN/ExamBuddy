import {Question} from "../../types";

export const questions: (n: number) => Question[] = (n: number) => {
    return [
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What is the total number of images in the MNIST dataset?",
            options: ["50,000", "60,000", "70,000", "80,000"],
            correctAnswer: "70,000",
            explanation: "The MNIST dataset contains 70,000 images of handwritten digits.",
        }, // citation slide Dataset
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "The MNIST dataset is already cleaned, shuffled, and split into training and testing sets.",
            correctAnswer: true,
            explanation: "The MNIST dataset is preprocessed and split into 60,000 training and 10,000 testing images.",
        }, // citation slide Dataset
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What does the term 'True Positive (TP)' refer to in a confusion matrix?",
            options: ["Correctly predicted positive class", "Incorrectly predicted positive class", "Correctly predicted negative class", "Incorrectly predicted negative class"],
            correctAnswer: "Correctly predicted positive class",
            explanation: "True Positive (TP) refers to instances where the model correctly predicts the positive class.",
        }, // citation slide Confusion Matrix
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following metrics measures the ability of a model to identify only the relevant class?",
            options: ["Precision", "Recall", "F1-score", "Accuracy"],
            correctAnswer: "Precision",
            explanation: "Precision measures the ability of the model to identify only the relevant class.",
        }, // citation slide Precision
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "Recall is also known as Sensitivity.",
            correctAnswer: true,
            explanation: "Recall and Sensitivity are interchangeable terms that measure the ability to identify all relevant instances.",
        }, // citation slide Recall (Sensitivity)
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What is the formula for the F1-score?",
            options: ["2 * (Precision * Recall) / (Precision + Recall)", "Precision + Recall", "Precision / Recall", "Recall / Precision"],
            correctAnswer: "2 * (Precision * Recall) / (Precision + Recall)",
            explanation: "The F1-score is the harmonic mean of Precision and Recall.",
        }, // citation slide F1-score
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "A high F1-score indicates that both Precision and Recall are high.",
            correctAnswer: true,
            explanation: "A high F1-score means that both Precision and Recall are high, indicating good model performance.",
        }, // citation slide F1-score
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is a tool to visualize the trade-off between Precision and Recall?",
            options: ["ROC Curve", "Confusion Matrix", "Precision-Recall Curve", "F1-score"],
            correctAnswer: "Precision-Recall Curve",
            explanation: "The Precision-Recall Curve is used to visualize the trade-off between Precision and Recall.",
        }, // citation slide Precision / Recall Trade-off
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "Adjusting the threshold value in a classifier can influence the balance between Precision and Recall.",
            correctAnswer: true,
            explanation: "By adjusting the threshold, the number of False Positives (FP) and False Negatives (FN) can be influenced, affecting Precision and Recall.",
        }, // citation slide Precision / Recall Trade-off
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What does the ROC curve plot?",
            options: ["True Positive Rate vs False Positive Rate", "Precision vs Recall", "Accuracy vs Loss", "F1-score vs Threshold"],
            correctAnswer: "True Positive Rate vs False Positive Rate",
            explanation: "The ROC curve plots the True Positive Rate (Recall) against the False Positive Rate.",
        }, // citation slide The ROC curve
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "A perfect model has an ROC AUC score of 1.",
            correctAnswer: true,
            explanation: "An ROC AUC score of 1 indicates a perfect model, while a score of 0.5 indicates a random model.",
        }, // citation slide ROC AUC
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following classifiers can handle multiclass classification natively?",
            options: ["SGD", "Random Forest", "Support Vector Machine (SVM)", "Logistic Regression"],
            correctAnswer: "SGD",
            explanation: "SGD and Random Forest can handle multiclass classification natively, while SVM and Logistic Regression require strategies like OvR or OvO.",
        }, // citation slide Multiclass classification
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "In the One versus One (OvO) strategy, the total number of classifiers required for N classes is N(N-1)/2.",
            correctAnswer: true,
            explanation: "The OvO strategy builds N(N-1)/2 classifiers, each trained on data from two classes.",
        }, // citation slide Multiclass classification with Binary classifiers
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What is the purpose of error analysis in machine learning?",
            options: ["To identify the best model", "To understand model performance and improve it", "To reduce training time", "To increase dataset size"],
            correctAnswer: "To understand model performance and improve it",
            explanation: "Error analysis helps identify weaknesses in the model and suggests strategies for improvement.",
        }, // citation slide Error Analysis
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "In multilabel classification, each instance can belong to multiple classes simultaneously.",
            correctAnswer: true,
            explanation: "Multilabel classification allows instances to belong to multiple classes, unlike multiclass classification where each instance belongs to exactly one class.",
        }, // citation slide Multilabel Classification
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is a strategy to handle multilabel classification?",
            options: ["Binary Relevance", "Classifier Chain", "One versus Rest (OvR)", "One versus One (OvO)"],
            correctAnswer: "Binary Relevance",
            explanation: "Binary Relevance and Classifier Chain are strategies for multilabel classification.",
        }, // citation slide Multilabel Classification
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "In multioutput classification, the model predicts multiple outputs for each instance.",
            correctAnswer: true,
            explanation: "Multioutput classification involves predicting multiple outputs, such as both the type and color of a fruit.",
        }, // citation slide Multioutput Classification
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What is a common approach to evaluate multioutput classification models?",
            options: ["Use a single metric for all outputs", "Use different metrics for each output", "Combine all outputs into a single metric", "Ignore evaluation for multioutput models"],
            correctAnswer: "Use different metrics for each output",
            explanation: "Evaluation of multioutput classification models often requires different metrics for each output due to their complexity.",
        }, // citation slide Multioutput Classification
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "The MNIST dataset contains images of size 28x28 pixels.",
            correctAnswer: true,
            explanation: "The MNIST dataset consists of 28x28 pixel images of handwritten digits.",
        }, // citation slide Dataset
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is NOT a performance metric for classification models?",
            options: ["Precision", "Recall", "F1-score", "Confusion Matrix"],
            correctAnswer: "Confusion Matrix",
            explanation: "A Confusion Matrix is a tool to visualize performance, not a metric itself.",
        }, // citation slide Performance metrics
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "A Random Forest Classifier can estimate the probability for a sample to belong to a class.",
            correctAnswer: true,
            explanation: "Random Forest Classifiers can output probabilities for class membership.",
        }, // citation slide Compare models
        (() => {
            const numberOfClasses = Math.floor(Math.random() * 10) + 1; // Random number of classes between 1 and 10
            return {
                id: `ml-${++n}`,
                type: "generated",
                subject: "Machine Learning",
                text: "Calculate the total number of classifiers required for a dataset with N classes using the One versus One (OvO) strategy. (Answer is rounded to 2 decimal places)",
                variables: {
                    "Number of classes (N)": numberOfClasses,
                },
                correctAnswer: ((numberOfClasses * (numberOfClasses - 1)) / 2).toFixed(2),
            }
        })()
    ];
}
