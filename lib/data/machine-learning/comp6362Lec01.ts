import {Question} from "../../types";

export const questions: (n: number) => Question[] = (n: number) => {
    return [
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is NOT a type of machine learning?",
            options: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "Prescriptive Learning"],
            correctAnswer: "Prescriptive Learning",
        }, // citation slide "What is Machine Learning?"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "Decision trees are immune to overfitting.",
            correctAnswer: false,
        }, // citation slide "Difference to traditional algorithms"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following best describes Machine Learning?",
            options: [
                "Programming computers to learn from data",
                "Explicitly programming computers to perform tasks",
                "Analyzing data without learning from it",
                "Creating static rules for decision-making"
            ],
            correctAnswer: "Programming computers to learn from data",
            explanation: "Machine Learning involves enabling computers to learn from data without being explicitly programmed.",
        }, // citation slide "What is Machine Learning?"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "Machine Learning is a subset of Artificial Intelligence.",
            correctAnswer: true,
            explanation: "Machine Learning is indeed a subset of Artificial Intelligence, as shown in the Venn diagram.",
        }, // citation slide Venn diagram
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is NOT a part of the ML pipeline?",
            options: ["Data preparation", "Model training", "Heuristic programming", "Evaluation"],
            correctAnswer: "Heuristic programming",
            explanation: "Heuristic programming is not part of the ML pipeline; it is more aligned with traditional algorithms.",
        }, // citation slide "Difference to traditional algorithms"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "Traditional SPAM filters rely on human-defined rules to identify SPAM emails.",
            correctAnswer: true,
            explanation: "Traditional SPAM filters use heuristics and rules defined by humans to identify SPAM emails.",
        }, // citation slide "Difference to traditional algorithms"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is a key advantage of Machine Learning over traditional algorithms?",
            options: [
                "It relies on human analysis to identify patterns",
                "It can learn patterns that may not be easy for humans to identify",
                "It requires regular updates of heuristics",
                "It is less prone to errors"
            ],
            correctAnswer: "It can learn patterns that may not be easy for humans to identify",
            explanation: "Machine Learning can identify complex patterns in data that humans might miss.",
        }, // citation slide "Difference to traditional algorithms"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is NOT an application of Machine Learning in healthcare?",
            options: [
                "Medical diagnosis using X-rays",
                "Predictive analytics for diabetes risk",
                "Manual data entry for patient records",
                "Drug discovery through chemical simulations"
            ],
            correctAnswer: "Manual data entry for patient records",
            explanation: "Manual data entry is not an application of Machine Learning; it is a manual process.",
        }, // citation slide "Applications of Machine Learning - Healthcare"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "Deep Learning is a subset of Machine Learning that has revolutionized fields like computer vision and natural language processing.",
            correctAnswer: true,
            explanation: "Deep Learning, powered by neural networks and large datasets, has significantly advanced fields like computer vision and NLP.",
        }, // citation slide "History of Machine Learning - Modern Era"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is a key tool used in practical Machine Learning work?",
            options: ["Python", "Excel", "SQL", "MATLAB"],
            correctAnswer: "Python",
            explanation: "Python is the most popular programming language for Machine Learning due to its extensive libraries and community support.",
        }, // citation slide "Tools"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "In Machine Learning, unseen data refers to data that was not part of the training set.",
            correctAnswer: true,
            explanation: "Unseen data is data that the model has not been trained on and is used to evaluate its performance.",
        }, // citation slide "Making predictions/inferences"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is a supervised learning model?",
            options: ["Decision Trees", "K-Means", "PCA", "Naive Bayes"],
            correctAnswer: "Decision Trees",
            explanation: "Decision Trees are a type of supervised learning model used for classification and regression tasks.",
        }, // citation slide "Module Structure - First part"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is an unsupervised learning model?",
            options: ["k-NN", "SVM", "K-Means", "Linear Regression"],
            correctAnswer: "K-Means",
            explanation: "K-Means is an unsupervised learning model used for clustering data.",
        }, // citation slide "Module Structure - First part"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "Support Vector Machines (SVM) can be used for both classification and regression tasks.",
            correctAnswer: true,
            explanation: "SVM is a versatile model that can be applied to both classification and regression problems.",
        }, // citation slide "Module Structure - Second part"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is a dimensionality reduction technique?",
            options: ["PCA", "k-NN", "Random Forest", "Naive Bayes"],
            correctAnswer: "PCA",
            explanation: "PCA (Principal Component Analysis) is a dimensionality reduction technique used to reduce the number of features in a dataset.",
        }, // citation slide "Module Structure - Second part"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "Neural Networks use backpropagation for training.",
            correctAnswer: true,
            explanation: "Backpropagation is a key algorithm used to train neural networks by adjusting weights to minimize errors.",
        }, // citation slide "Module Structure - Second part"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is a generative AI model?",
            options: ["DALL-E", "AlphaGo", "k-NN", "SVM"],
            correctAnswer: "DALL-E",
            explanation: "DALL-E is a generative AI model that can create images from textual descriptions.",
        }, // citation slide "History of Machine Learning - Current Trends"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "Reinforcement Learning is used in training models like AlphaGo.",
            correctAnswer: true,
            explanation: "AlphaGo is an example of a model trained using Reinforcement Learning to master the game of Go.",
        }, // citation slide "History of Machine Learning - Current Trends"
    ];
};
