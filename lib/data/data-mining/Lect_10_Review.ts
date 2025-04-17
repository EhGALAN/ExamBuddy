import {Question} from "../../types";

export const questions: (n: number) => Question[] = (n: number) => {
    return [
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is a data mining task involving the prediction of a class attribute?",
            options: ["Discovery of Association Rules", "Classification", "Clustering", "Data Preparation"],
            correctAnswer: "Classification",
            explanation: "Classification involves predicting the value of a class attribute based on other attributes.",
        }, // citation slide "Classification"
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "In the discovery of association rules, an item can appear in both the antecedent (IF part) and the consequent (THEN part) of a rule.",
            correctAnswer: true,
            explanation: "Unlike classification rules, association rules allow items to appear in both parts of the rule.",
        }, // citation slide "Discovery of Association Rules vs. Classification"
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is NOT a limitation of the K-means clustering algorithm?",
            options: ["Requires the user to specify the number of clusters", "Different initial centroids can lead to different results", "It always converges to the global optimum", "It is sensitive to outliers"],
            correctAnswer: "It always converges to the global optimum",
            explanation: "K-means does not guarantee convergence to the global optimum; it can converge to a local optimum.",
        }, // citation slide "Clustering: the K-means Algorithm"
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Decision trees are easily interpretable by users because they refer to a subset of relevant attributes selected by the algorithm.",
            correctAnswer: true,
            explanation: "Decision trees and IF-THEN rules are generally interpretable as they focus on relevant attributes.",
        }, // citation slide "Which classification algorithm is more effective?"
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is a white-box predictive model?",
            options: ["Decision Trees", "Neural Networks", "Ensembles", "Support Vector Machines"],
            correctAnswer: "Decision Trees",
            explanation: "White-box models like decision trees can be directly interpreted by users.",
        }, // citation slide "Interpretability of predictive models"
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "In clustering, each cluster is a set of examples with similar attribute values with respect to all attributes.",
            correctAnswer: true,
            explanation: "Clustering groups examples based on similarity across all attributes, without a special class attribute.",
        }, // citation slide "Clustering"
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is a technique to improve fairness in classification?",
            options: ["Pre-processing", "In-processing", "Post-processing", "Cross-processing"],
            correctAnswer: "Pre-processing",
            explanation: "Pre-processing modifies class labels or weights of examples to improve fairness.",
        }, // citation slide "Fairness in classification"
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "The K-means algorithm requires the user to specify the number of clusters.",
            correctAnswer: true,
            explanation: "The user must specify the number of clusters (K) in the K-means algorithm.",
        }, // citation slide "Clustering: the K-means Algorithm"
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is a data quality issue in data preparation?",
            options: ["Noise", "Incompleteness", "Redundancy", "All of the above"],
            correctAnswer: "All of the above",
            explanation: "Noise, incompleteness, and redundancy are all data quality issues.",
        }, // citation slide "Data preparation and preprocessing"
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Attribute construction can create attributes with more predictive power than original attributes.",
            correctAnswer: true,
            explanation: "Attribute construction can enhance predictive power and reduce dimensionality.",
        }, // citation slide "Attribute Construction"
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is a filter approach in attribute selection?",
            options: ["Considers the data mining algorithm", "Does not consider the data mining algorithm", "Always selects all attributes", "None of the above"],
            correctAnswer: "Does not consider the data mining algorithm",
            explanation: "The filter approach does not take the data mining algorithm into account.",
        }, // citation slide "Attribute Selection"
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "In multi-label classification, each example can have multiple class labels.",
            correctAnswer: true,
            explanation: "Multi-label classification allows examples to have more than one class label.",
        }, // citation slide "Multi-Label Classification"
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is a phase in the Knowledge Discovery process?",
            options: ["Business Understanding", "Data Mining", "Model Deployment", "All of the above"],
            correctAnswer: "All of the above",
            explanation: "All listed options are phases in the Knowledge Discovery process.",
        }, // citation slide "The Knowledge Discovery process"
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Instance-based learning does not build a general model of the data.",
            correctAnswer: true,
            explanation: "Instance-based learning relies on similarities between examples without building a general model.",
        }, // citation slide "Several kinds of classification algorithms"
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is a limitation of the Naïve Bayes classifier?",
            options: ["It uses all attributes for classification", "It outputs a set of probabilities", "It is always less accurate than decision trees", "None of the above"],
            correctAnswer: "It uses all attributes for classification",
            explanation: "Naïve Bayes uses all attributes without selecting relevant ones, which can be a limitation.",
        }, // citation slide "Which classification algorithm is more effective?"
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "PCA (Principal Component Analysis) is an unsupervised learning technique.",
            correctAnswer: true,
            explanation: "PCA reduces dimensionality by creating new attributes as linear combinations of original attributes.",
        }, // citation slide "Attribute Construction"
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is a data-transformation method in multi-label classification?",
            options: ["Binary Relevance", "Algorithm Adaptation", "Decision Trees", "K-means"],
            correctAnswer: "Binary Relevance",
            explanation: "Binary Relevance is a data-transformation method for multi-label classification.",
        }, // citation slide "Multi-Label Classification"
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "The wrapper approach in attribute selection is usually more effective but slower than the filter approach.",
            correctAnswer: true,
            explanation: "The wrapper approach considers the data mining algorithm, making it more effective but slower.",
        }, // citation slide "Attribute Selection"
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is a fairness measure in classification?",
            options: ["Discrimination Score", "Accuracy Score", "Precision Score", "Recall Score"],
            correctAnswer: "Discrimination Score",
            explanation: "Discrimination Score is a measure of fairness in classification.",
        }, // citation slide "Fairness in classification"
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "In the K-means algorithm, the centroids are recalculated in each iteration until no point changes cluster.",
            correctAnswer: true,
            explanation: "The K-means algorithm iteratively assigns points to clusters and recalculates centroids.",
        }, // citation slide "Clustering: the K-means Algorithm"
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is a black-box predictive model?",
            options: ["Decision Trees", "Neural Networks", "Rule Sets", "Ensembles"],
            correctAnswer: "Neural Networks",
            explanation: "Black-box models like neural networks are not directly interpretable.",
        }, // citation slide "Interpretability of predictive models"
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Interpretability of predictive models is important for improving user trust and providing insights about the data.",
            correctAnswer: true,
            explanation: "Interpretability helps users trust the model and gain insights from the data.",
        }, // citation slide "Evaluating classification models: beyond predictive accuracy"
    ];
};
