import {Question} from "../../types";

export const questions: (n: number) => Question[] = (n: number) => {
    return [
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What is the primary distinction between supervised and unsupervised learning?",
            options: ["Supervised learning uses labeled data, while unsupervised learning does not.", "Supervised learning is used for clustering, while unsupervised learning is used for classification.", "Supervised learning is always faster than unsupervised learning.", "Unsupervised learning requires human supervision."],
            correctAnswer: "Supervised learning uses labeled data, while unsupervised learning does not.",
            explanation: "Supervised learning involves training with labeled data, whereas unsupervised learning works with unlabeled data to extract underlying structures.",
        }, // citation slide "Types of Machine Learning"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "In supervised learning, the training set includes the desired solutions, called labels.",
            correctAnswer: true,
        }, // citation slide "Supervised Learning"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is an example of a supervised learning task?",
            options: ["Clustering", "Classification", "Dimensionality reduction", "Anomaly detection"],
            correctAnswer: "Classification",
            explanation: "Classification is a supervised learning task where the model predicts a class or category for input data.",
        }, // citation slide "Supervised Learning Tasks"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What is the goal of regression in supervised learning?",
            options: ["To predict a continuous numerical value", "To classify data into predefined categories", "To cluster data into groups", "To detect anomalies in data"],
            correctAnswer: "To predict a continuous numerical value",
            explanation: "Regression aims to predict a continuous output, such as house prices or life satisfaction scores.",
        }, // citation slide "Supervised Learning Tasks"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "Unsupervised learning involves training a model with labeled data.",
            correctAnswer: false,
        }, // citation slide "Unsupervised Learning"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is an example of an unsupervised learning algorithm?",
            options: ["k-Nearest Neighbors", "Linear Regression", "K-Means", "Support Vector Machines"],
            correctAnswer: "K-Means",
            explanation: "K-Means is a clustering algorithm used in unsupervised learning to group similar data points.",
        }, // citation slide "Unsupervised Learning Algorithms"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What is the primary goal of semi-supervised learning?",
            options: ["To work with fully labeled data", "To work with fully unlabeled data", "To work with a combination of labeled and unlabeled data", "To work with synthetic data only"],
            correctAnswer: "To work with a combination of labeled and unlabeled data",
            explanation: "Semi-supervised learning leverages both labeled and unlabeled data to improve model performance.",
        }, // citation slide "Semi-supervised Learning"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "Reinforcement learning involves learning through trial-and-error in a dynamic environment.",
            correctAnswer: true,
        }, // citation slide "Reinforcement Learning"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is a key component of reinforcement learning?",
            options: ["State", "Labels", "Clusters", "Features"],
            correctAnswer: "State",
            explanation: "In reinforcement learning, the state represents the current situation or observation of the environment.",
        }, // citation slide "Reinforcement Learning"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What is the goal of the Q-Learning algorithm in reinforcement learning?",
            options: ["To minimize the reward", "To maximize future rewards", "To cluster data points", "To classify data into categories"],
            correctAnswer: "To maximize future rewards",
            explanation: "Q-Learning aims to estimate the reward function to choose actions that maximize future rewards.",
        }, // citation slide "Reinforcement Learning Algorithms"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "Deep Q-Networks use neural networks to learn the Q function in reinforcement learning.",
            correctAnswer: true,
        }, // citation slide "Reinforcement Learning Algorithms"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is a challenge in machine learning when the training data is not representative?",
            options: ["Overfitting", "Underfitting", "Nonrepresentative Training Data", "Data sparsity"],
            correctAnswer: "Nonrepresentative Training Data",
            explanation: "Nonrepresentative training data can lead to poor generalization of the model to new, unseen data.",
        }, // citation slide "Main Challenges of Machine Learning"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "Feature engineering involves selecting the most useful features for a machine learning model.",
            correctAnswer: true,
        }, // citation slide "Main Challenges of Machine Learning"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What is overfitting in machine learning?",
            options: ["When the model performs poorly on the training set but well on unseen data", "When the model performs well on the training set but poorly on unseen data", "When the model is too simple to capture the data patterns", "When the model is trained with unlabeled data"],
            correctAnswer: "When the model performs well on the training set but poorly on unseen data",
            explanation: "Overfitting occurs when a model is too complex and fits the training data too closely, leading to poor performance on new data.",
        }, // citation slide "Main Challenges of Machine Learning"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "In the IRIS dataset, the target variable represents the species of the iris flowers.",
            correctAnswer: true,
        }, // citation slide "Supervised Learning"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is NOT a supervised learning algorithm?",
            options: ["k-Nearest Neighbors", "K-Means", "Decision Trees", "Linear Regression"],
            correctAnswer: "K-Means",
            explanation: "K-Means is an unsupervised learning algorithm used for clustering.",
        }, // citation slide "Supervised Learning Algorithms"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "Dimensionality reduction is a technique used in unsupervised learning to reduce the number of features in a dataset.",
            correctAnswer: true,
        }, // citation slide "Unsupervised Learning Algorithms"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is a common application of unsupervised learning?",
            options: ["Customer segmentation", "Spam filtering", "House price prediction", "Object detection in images"],
            correctAnswer: "Customer segmentation",
            explanation: "Customer segmentation is an application of unsupervised learning where customers are grouped based on common traits.",
        }, // citation slide "Unsupervised Learning Examples"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "In semi-supervised learning, label propagation is a technique used to assign labels to unlabeled data based on proximity to labeled data.",
            correctAnswer: true,
        }, // citation slide "Semi-supervised Learning Techniques"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "Deep Learning is particularly demanding in terms of the size of the training data.",
            correctAnswer: true,
        }, // citation slide "Main Challenges of Machine Learning"
    ];
}
