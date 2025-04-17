import {Question} from "../../types";

export const questions: (n: number) => Question[] = (n: number) => {
    return [
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the primary criterion used to evaluate classification models?",
            options: ["Simplicity", "Surprisingness", "Predictive accuracy", "Novelty"],
            correctAnswer: "Predictive accuracy",
            explanation: "Predictive accuracy is the most used criterion for evaluating classification models.",
        }, // citation slide "Evaluating Classification Models"
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Maximizing classification accuracy on the training set is considered trivial.",
            correctAnswer: true,
            explanation: "It is trivial because the model can simply memorize the training data.",
        }, // citation slide "Measuring Predictive Accuracy (1)"
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What does the term 'TP' stand for in the context of a confusion matrix?",
            options: ["True Positive", "True Negative", "False Positive", "False Negative"],
            correctAnswer: "True Positive",
            explanation: "TP stands for True Positive, which represents the number of correctly classified positive examples.",
        }, // citation slide "Measuring Predictive Accuracy (2)"
        (() => {
            const TP = Math.floor(Math.random() * 100); // Random TP value (0 to 99)
            const FP = Math.floor(Math.random() * 50); // Random FP value (0 to 49)
            const precision = Math.round((TP / (TP + FP)) * 100) / 100; // Rounded to 2 decimal places
            return {
                id: `dm-${++n}`,
                type: "generated",
                subject: "Data Mining & Knowledge Discovery",
                text: `Calculate the precision if TP=${TP} and FP=${FP}. (Answer rounded to 2 decimal places)`,
                variables: {
                    "TP": TP,
                    "FP": FP,
                },
                correctAnswer: precision,
            };
        })(), // citation slide "Measuring Predictive Accuracy (2)"
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the formula for the F1 score?",
            options: [
                "2 * (precision * recall) / (precision + recall)",
                "precision + recall",
                "precision / recall",
                "recall / precision",
            ],
            correctAnswer: "2 * (precision * recall) / (precision + recall)",
            explanation: "The F1 score is the harmonic mean of precision and recall.",
        }, // citation slide "Measuring Predictive Accuracy (2)"
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Cross-validation is a method used to measure the predictive accuracy of a model.",
            correctAnswer: true,
            explanation: "Cross-validation involves splitting the data into training and testing sets multiple times to evaluate model performance.",
        }, // citation slide "Cross-validation"
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the purpose of the test set in cross-validation?",
            options: [
                "To build the model",
                "To measure predictive accuracy",
                "To increase model complexity",
                "To reduce overfitting",
            ],
            correctAnswer: "To measure predictive accuracy",
            explanation: "The test set is used to evaluate the model's performance on unseen data.",
        }, // citation slide "Cross-validation"
        (() => {
            const round1 = Math.floor(Math.random() * 10) + 90; // Random accuracy for Round 1 (90 to 99)
            const round2 = Math.floor(Math.random() * 10) + 85; // Random accuracy for Round 2 (85 to 94)
            const round3 = Math.floor(Math.random() * 10) + 88; // Random accuracy for Round 3 (88 to 97)
            const finalAccuracy = Math.round(((round1 + round2 + round3) / 3) * 100) / 100; // Rounded to 2 decimal places
            return {
                id: `dm-${++n}`,
                type: "generated",
                subject: "Data Mining & Knowledge Discovery",
                text: `If a model achieves accuracies of ${round1}%, ${round2}%, and ${round3}% in three rounds of cross-validation, what is the final accuracy? (Answer rounded to 2 decimal places)`,
                variables: {
                    "Round 1 Accuracy": round1,
                    "Round 2 Accuracy": round2,
                    "Round 3 Accuracy": round3,
                },
                correctAnswer: finalAccuracy,
            };
        })(), // citation slide "Cross-validation"
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the main advantage of K-fold cross-validation?",
            options: [
                "It is computationally inexpensive",
                "It is statistically more reliable",
                "It reduces model complexity",
                "It eliminates the need for a test set",
            ],
            correctAnswer: "It is statistically more reliable",
            explanation: "K-fold cross-validation provides a more reliable estimate of model performance.",
        }, // citation slide "Measuring Predictive Accuracy (3)"
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "K-fold cross-validation is computationally expensive.",
            correctAnswer: true,
            explanation: "It requires running the classification algorithm multiple times, which is computationally intensive.",
        }, // citation slide "Measuring Predictive Accuracy (3)"
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "How is simplicity measured in decision trees?",
            options: [
                "By counting the number of internal and leaf nodes",
                "By measuring the depth of the tree",
                "By evaluating the number of rules",
                "By calculating the number of conditions",
            ],
            correctAnswer: "By counting the number of internal and leaf nodes",
            explanation: "Simplicity in decision trees is measured by the number of internal and leaf nodes.",
        }, // citation slide "Measuring Simplicity of Tree/Rules"
        (() => {
            const internalNodes = Math.floor(Math.random() * 10) + 1; // Random internal nodes (1 to 10)
            const leafNodes = Math.floor(Math.random() * 10) + 1; // Random leaf nodes (1 to 10)
            const totalSize = internalNodes + leafNodes;
            return {
                id: `dm-${++n}`,
                type: "generated",
                subject: "Data Mining & Knowledge Discovery",
                text: `If a decision tree has ${internalNodes} internal nodes and ${leafNodes} leaf nodes, what is its total size?`,
                variables: {
                    "Internal nodes": internalNodes,
                    "Leaf nodes": leafNodes,
                },
                correctAnswer: totalSize,
            };
        })(), // citation slide "Measuring Simplicity of Tree/Rules"
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is NOT a subjective measure of model quality?",
            options: ["Simplicity", "Surprisingness", "Novelty", "Predictive accuracy"],
            correctAnswer: "Predictive accuracy",
            explanation: "Predictive accuracy is an objective measure, unlike simplicity, surprisingness, and novelty.",
        }, // citation slide "Measuring Simplicity of Tree/Rules"
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "The smaller the size of a decision tree, the simpler it is.",
            correctAnswer: true,
            explanation: "A smaller decision tree is considered simpler and more interpretable.",
        }, // citation slide "Measuring Simplicity of Tree/Rules"
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the purpose of the training set in model evaluation?",
            options: [
                "To build the model",
                "To measure predictive accuracy",
                "To reduce overfitting",
                "To increase model complexity",
            ],
            correctAnswer: "To build the model",
            explanation: "The training set is used to train the model and learn patterns from the data.",
        }, // citation slide "Measuring Predictive Accuracy (1)"
        (() => {
            const totalExamples = Math.floor(Math.random() * 1000) + 100; // Random total examples (100 to 1099)
            const correctExamples = Math.floor(Math.random() * totalExamples); // Random correctly classified examples (0 to totalExamples)
            const accuracy = Math.round((correctExamples / totalExamples) * 100) / 100; // Rounded to 2 decimal places
            return {
                id: `dm-${++n}`,
                type: "generated",
                subject: "Data Mining & Knowledge Discovery",
                text: `If a model correctly classifies ${correctExamples} out of ${totalExamples} examples, what is its accuracy? (Answer rounded to 2 decimal places)`,
                variables: {
                    "Correctly classified examples": correctExamples,
                    "Total examples": totalExamples,
                },
                correctAnswer: accuracy,
            };
        })(), // citation slide "Evaluating Classification Models"
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the formula for recall?",
            options: [
                "TP / (TP + FP)",
                "TP / (TP + FN)",
                "FN / (TP + FN)",
                "FP / (FP + TN)",
            ],
            correctAnswer: "TP / (TP + FN)",
            explanation: "Recall is calculated as TP / (TP + FN).",
        }, // citation slide "Measuring Predictive Accuracy (2)"
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "A confusion matrix is used to evaluate the performance of a classification model.",
            correctAnswer: true,
            explanation: "A confusion matrix provides a detailed breakdown of true positives, false positives, true negatives, and false negatives.",
        }, // citation slide "Measuring Predictive Accuracy (2)"
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the purpose of measuring surprisingness in data mining?",
            options: [
                "To evaluate model simplicity",
                "To assess model accuracy",
                "To identify novel patterns",
                "To reduce computational cost",
            ],
            correctAnswer: "To identify novel patterns",
            explanation: "Measuring surprisingness helps identify novel and useful patterns in the data.",
        }, // citation slide "Measuring Simplicity of Tree/Rules"
        (() => {
            const rules = Math.floor(Math.random() * 20) + 1; // Random rules (1 to 20)
            const conditions = Math.floor(Math.random() * 30) + 1; // Random conditions (1 to 30)
            const totalSize = rules + conditions;
            return {
                id: `dm-${++n}`,
                type: "generated",
                subject: "Data Mining & Knowledge Discovery",
                text: `If a rule set has ${rules} rules and ${conditions} conditions, what is its total size?`,
                variables: {
                    "Rules": rules,
                    "Conditions": conditions,
                },
                correctAnswer: totalSize,
            };
        })(), // citation slide "Measuring Simplicity of Tree/Rules"
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "In K-fold cross-validation, each partition is used once as the test set.",
            correctAnswer: true,
            explanation: "Each partition is used exactly once as the test set in K-fold cross-validation.",
        }, // citation slide "Measuring Predictive Accuracy (3)"
    ];
};
