import {Question} from "../../types";
import {generateGitHubUrlAuto} from "@/lib/utils.ts";

export const questions: (n: number) => Question[] = (n: number) => {
    return [
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What is the key assumption of the Naive Bayes Classifier?",
            options: [
                "Features are conditionally dependent.",
                "Features are conditionally independent.",
                "Features are always correlated.",
                "Features are unrelated to the class variable."
            ],
            correctAnswer: "Features are conditionally independent.",
            explanation: "The Naive Bayes Classifier assumes that features are conditionally independent given the class variable.",
        }, // citation slide "What is Naive Bayes Classifier"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Machine Learning",
            text: "Bayes' Theorem is used to calculate the probability of an event given the probability of another event.",
            correctAnswer: true,
            explanation: "Bayes' Theorem helps calculate conditional probabilities based on the probabilities of individual events.",
        }, // citation slide "Bayes Theorem"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is NOT a component of Bayes' Theorem?",
            options: [
                "Posterior probability",
                "Likelihood",
                "Prior probability",
                "Total probability of B"
            ],
            correctAnswer: "Total probability of B",
            explanation: "The total probability of B is part of the denominator in Bayes' Theorem but is not a standalone component.",
        }, // citation slide "Bayes Theorem"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "generated",
            subject: "Machine Learning",
            text: "If a cancer test has a true positive rate of 95% and a false positive rate of 5%, and the cancer prevalence is 0.1%, what is the probability that a person who tests positive actually has cancer? (Answer rounded to 2 decimal places)",
            variables: {
                "True Positive Rate": 0.95,
                "False Positive Rate": 0.05,
                "Cancer Prevalence": 0.001
            },
            correctAnswer: 0.0186,
            explanation: "Using Bayes' Theorem, the probability is calculated as (0.95 * 0.001) / (0.95 * 0.001 + 0.05 * 0.999) = 0.0186 or 1.86%.",
        }, // citation slide "Bayes Theorem - example"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which type of Naive Bayes Classifier is suitable for continuous data?",
            options: [
                "Gaussian Naive Bayes",
                "Multinomial Naive Bayes",
                "Bernoulli Naive Bayes",
                "None of the above"
            ],
            correctAnswer: "Gaussian Naive Bayes",
            explanation: "Gaussian Naive Bayes is used for continuous data, assuming a normal distribution.",
        }, // citation slide "Gaussian Naive Bayes"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Machine Learning",
            text: "Multinomial Naive Bayes is commonly used for text classification problems.",
            correctAnswer: true,
            explanation: "Multinomial Naive Bayes is suitable for discrete count data, such as word counts in text classification.",
        }, // citation slide "Multinomial Naive Bayes"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is a technique to avoid zero probability in Naive Bayes?",
            options: [
                "Laplace Smoothing",
                "Gaussian Smoothing",
                "Multinomial Smoothing",
                "Bernoulli Smoothing"
            ],
            correctAnswer: "Laplace Smoothing",
            explanation: "Laplace Smoothing adds a small pseudo-count to avoid zero probabilities.",
        }, // citation slide "Laplace Smoothing"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Machine Learning",
            text: "K-Means is a supervised learning algorithm.",
            correctAnswer: false,
            explanation: "K-Means is an unsupervised learning algorithm used for clustering.",
        }, // citation slide "K-Means"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What is the primary goal of clustering in unsupervised learning?",
            options: [
                "To classify data into predefined categories.",
                "To identify groups of similar samples within the dataset.",
                "To predict future outcomes based on historical data.",
                "To reduce the dimensionality of the data."
            ],
            correctAnswer: "To identify groups of similar samples within the dataset.",
            explanation: "Clustering aims to group similar samples without predefined labels.",
        }, // citation slide "Clustering"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Machine Learning",
            text: "In K-Means, the algorithm is guaranteed to converge to the global optimum.",
            correctAnswer: false,
            explanation: "K-Means is guaranteed to converge, but it may converge to a local optimum depending on the initial centroids.",
        }, // citation slide "How does K-Means work?"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is a common application of unsupervised learning?",
            options: [
                "Customer segmentation",
                "Image classification",
                "Speech recognition",
                "Sentiment analysis"
            ],
            correctAnswer: "Customer segmentation",
            explanation: "Customer segmentation is a common application of unsupervised learning, specifically clustering.",
        }, // citation slide "Types of Unsupervised Learning"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Machine Learning",
            text: "Naive Bayes Classifiers are considered good estimators of probabilities.",
            correctAnswer: false,
            explanation: "Naive Bayes Classifiers are considered 'bad estimators' and their probability estimates should not be taken at face value.",
        }, // citation slide "Naive Bayes Classifier Notes"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is a limitation of the Naive Bayes Classifier?",
            options: [
                "It assumes features are conditionally dependent.",
                "It performs poorly with categorical data.",
                "It is computationally expensive.",
                "It is sensitive to the order of features."
            ],
            correctAnswer: "It assumes features are conditionally dependent.",
            explanation: "The Naive Bayes Classifier assumes features are conditionally independent, which is often not true in real-world data.",
        }, // citation slide "Naive Bayes Classifier Notes"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Machine Learning",
            text: "In K-Means clustering, the centroids are always initialized randomly.",
            correctAnswer: true,
            explanation: "K-Means starts with random centroids and iteratively updates them.",
        }, // citation slide "How does K-Means work?"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What is the purpose of Laplace Smoothing in Naive Bayes?",
            options: [
                "To increase the computational efficiency.",
                "To avoid zero probabilities.",
                "To improve the accuracy of the classifier.",
                "To reduce overfitting."
            ],
            correctAnswer: "To avoid zero probabilities.",
            explanation: "Laplace Smoothing adds a small pseudo-count to ensure no feature has a zero probability.",
        }, // citation slide "Laplace Smoothing"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Machine Learning",
            text: "K-Means clustering can be used for both hard and soft clustering.",
            correctAnswer: true,
            explanation: "K-Means can perform hard clustering (assigning instances to specific clusters) and soft clustering (providing similarity scores to clusters).",
        }, // citation slide "K-Means - soft clustering"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is NOT a type of unsupervised learning?",
            options: [
                "Clustering",
                "Anomaly detection",
                "Density estimation",
                "Regression"
            ],
            correctAnswer: "Regression",
            explanation: "Regression is a supervised learning technique, not unsupervised.",
        }, // citation slide "Types of Unsupervised Learning"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Machine Learning",
            text: "Naive Bayes Classifiers perform well when the independence assumption holds.",
            correctAnswer: true,
            explanation: "When the independence assumption is valid, Naive Bayes Classifiers perform very well.",
        }, // citation slide "Naive Bayes Classifier Notes"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is a common issue with Naive Bayes Classifiers?",
            options: [
                "Overfitting",
                "Underfitting",
                "Zero probability problem",
                "High computational cost"
            ],
            correctAnswer: "Zero probability problem",
            explanation: "The zero probability problem occurs when a feature has zero probability in the training set, which can be mitigated using Laplace Smoothing.",
        }, // citation slide "Laplace Smoothing"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Machine Learning",
            text: "K-Means clustering requires the number of clusters (k) to be specified in advance.",
            correctAnswer: true,
            explanation: "K-Means requires the user to specify the number of clusters (k) before training the model.",
        }, // citation slide "K-Means"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is a key advantage of Naive Bayes Classifiers?",
            options: [
                "They are always accurate.",
                "They are easy and fast to predict.",
                "They handle missing data well.",
                "They are robust to outliers."
            ],
            correctAnswer: "They are easy and fast to predict.",
            explanation: "Naive Bayes Classifiers are known for their simplicity and speed in making predictions.",
        }, // citation slide "Naive Bayes Classifier Notes"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Machine Learning",
            text: "In K-Means, the centroids are updated iteratively until the algorithm converges.",
            correctAnswer: true,
            explanation: "K-Means iteratively updates the centroids and reassigns instances to clusters until convergence.",
        }, // citation slide "How does K-Means work?"
    ];
};
