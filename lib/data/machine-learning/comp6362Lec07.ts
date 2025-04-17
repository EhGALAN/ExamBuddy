import {Question} from "../../types";


export const questions: (n: number) => Question[] = (n: number) => {
    return [
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What is the primary structure of a decision tree?",
            options: ["Linear structure", "Flow-like structure", "Circular structure", "Matrix structure"],
            correctAnswer: "Flow-like structure",
        }, // citation slide "Decision Trees"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "Decision trees learn a hierarchy of if/else questions that lead to a decision.",
            correctAnswer: true,
        }, // citation slide "Decision Trees"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which concept is similar to the structure of a decision tree?",
            options: ["20 Questions game", "Chess", "Tic-tac-toe", "Sudoku"],
            correctAnswer: "20 Questions game",
        }, // citation slide "Decision Trees - Concept"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "The `DecisionTreeClassifier` in scikit-learn requires the `max_depth` parameter to be explicitly set.",
            correctAnswer: false,
        }, // citation slide "Train a Decision Tree Classifier"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which package can be used to visualize the structure of a decision tree?",
            options: ["Matplotlib", "Graphviz", "Pandas", "NumPy"],
            correctAnswer: "Graphviz",
        }, // citation slide "Decision Tree structure"
        {
            id: `ml-${++n}`,
            type: "generated",
            subject: "Machine Learning",
            text: "Calculate the Gini impurity for a node with the following class distribution: [10 instances of class A, 5 instances of class B, 3 instances of class C]. (Answer is rounded to 2 decimal places)",
            variables: {
                "Class A instances": 10,
                "Class B instances": 5,
                "Class C instances": 3,
            },
            correctAnswer: Math.round((1 - (Math.pow(10 / 18, 2) + Math.pow(5 / 18, 2) + Math.pow(3 / 18, 2))) * 100) / 100,
        }, // citation slide "Gini Impurity"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What does the CART algorithm aim to minimize during training?",
            options: ["Gini impurity", "Entropy", "Mean Square Error", "Both Gini impurity and Entropy"],
            correctAnswer: "Both Gini impurity and Entropy",
        }, // citation slide "The CART training algorithm"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "Entropy is a measure of disorder in a system, and lower entropy indicates more information.",
            correctAnswer: true,
        }, // citation slide "Using Entropy for impurity estimation"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is a regularization parameter for decision trees?",
            options: ["max_depth", "learning_rate", "momentum", "batch_size"],
            correctAnswer: "max_depth",
        }, // citation slide "Regularisation parameters"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "Grid Search tests all combinations of hyperparameters to find the best model.",
            correctAnswer: true,
        }, // citation slide "Grid Search"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "Decision trees can be used for both classification and regression tasks.",
            correctAnswer: true,
        }, // citation slide "Decision Tree Regression"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What is the cost function used in CART for regression tasks?",
            options: ["Gini impurity", "Entropy", "Mean Square Error", "Cross-Entropy"],
            correctAnswer: "Mean Square Error",
        }, // citation slide "CART Cost Function"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "Decision trees are prone to overfitting if not properly regularized.",
            correctAnswer: true,
        }, // citation slide "Regularisation"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is an advantage of decision trees?",
            options: ["Explainability", "Immunity to overfitting", "High computational efficiency", "Automatic feature scaling"],
            correctAnswer: "Explainability",
        }, // citation slide "Important points"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "Decision trees do not require scaling of features.",
            correctAnswer: true,
        }, // citation slide "Important points"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is NOT a hyperparameter for decision trees?",
            options: ["max_depth", "learning_rate", "min_samples_leaf", "max_leaf_nodes"],
            correctAnswer: "learning_rate",
        }, // citation slide "Regularisation parameters"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "Gini impurity tends to isolate the most frequent class in its own branch.",
            correctAnswer: true,
        }, // citation slide "Gini Impurity vs Entropy"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What is one of the key advantages of decision trees?",
            options: ["They are immune to overfitting", "They require feature scaling", "They are highly explainable", "They always produce balanced trees"],
            correctAnswer: "They are highly explainable",
        }, // citation slide "Important points"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is NOT a reason why decision trees are popular?",
            options: ["They are easy to interpret", "They require feature scaling", "They can be used for both classification and regression", "They are explainable"],
            correctAnswer: "They require feature scaling",
        }, // citation slide "Important points"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "Decision trees do not need scaling of features because they do not rely on comparisons across features.",
            correctAnswer: true,
        }, // citation slide "Important points"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What is a common issue with decision trees if they are not properly regularized?",
            options: ["Underfitting", "Overfitting", "High computational efficiency", "Lack of explainability"],
            correctAnswer: "Overfitting",
        }, // citation slide "Important points"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "Decision trees are widely used for both classification and regression tasks.",
            correctAnswer: true,
        }, // citation slide "Important points"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is a key advantage of decision trees in terms of interpretability?",
            options: ["They always produce balanced trees", "They are immune to overfitting", "They can explain how the model reaches its decision", "They require feature scaling"],
            correctAnswer: "They can explain how the model reaches its decision",
        }, // citation slide "Important points"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "Decision trees are often preferred for their ability to explain the decision-making process.",
            correctAnswer: true,
        }, // citation slide "Important points"
    ];
};
