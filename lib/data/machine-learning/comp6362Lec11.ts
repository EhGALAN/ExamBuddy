import {Question} from "../../types";

export const questions: (n: number) => Question[] = (n: number) => {
    return [
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What is the primary goal of clustering in unsupervised learning?",
            options: ["To classify data into predefined categories", "To extract information from unlabelled datasets", "To predict future outcomes based on historical data", "To reduce the dimensionality of data"],
            correctAnswer: "To extract information from unlabelled datasets",
            explanation: "Clustering aims to group samples based on the similarity of their feature values without predefined class labels.",
        }, // citation slide "Clustering"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "K-Means clustering requires labeled data to function.",
            correctAnswer: false,
            explanation: "K-Means is an unsupervised learning algorithm and does not require labeled data.",
        }, // citation slide "K-Means"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is a key output of the K-Means algorithm?",
            options: ["Centroids for each cluster", "Class labels for each instance", "Probability distributions for each cluster", "Feature importance scores"],
            correctAnswer: "Centroids for each cluster",
            explanation: "K-Means outputs the centroids, which are the central points of each cluster.",
        }, // citation slide "K-Means"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "The K-Means algorithm is guaranteed to converge to the optimal solution.",
            correctAnswer: false,
            explanation: "While K-Means is guaranteed to converge, it may not always converge to the optimal solution.",
        }, // citation slide "How does K-Means work?"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What is the purpose of the 'inertia' metric in K-Means clustering?",
            options: ["To measure the distance between clusters", "To evaluate the quality of clustering", "To determine the number of clusters", "To scale the features of the dataset"],
            correctAnswer: "To evaluate the quality of clustering",
            explanation: "Inertia measures the mean square distance between each point and its centroid, indicating clustering quality.",
        }, // citation slide "Performance depends on starting points"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "A lower inertia value in K-Means indicates a better clustering model.",
            correctAnswer: true,
            explanation: "Lower inertia means that the points are closer to their centroids, indicating a better clustering model.",
        }, // citation slide "Performance depends on starting points"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What is the default behavior of the sklearn K-Means implementation regarding the number of repetitions?",
            options: ["It runs the algorithm once", "It runs the algorithm 5 times", "It runs the algorithm 10 times", "It runs the algorithm until convergence"],
            correctAnswer: "It runs the algorithm 10 times",
            explanation: "The default value for the `n_init` parameter in sklearn is 10, meaning it runs the algorithm 10 times and picks the best result.",
        }, // citation slide "Solving the variability issue"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "The Mini-Batch K-Means algorithm processes all instances in each round.",
            correctAnswer: false,
            explanation: "Mini-Batch K-Means processes only a small batch of instances in each round, making it faster but potentially less accurate.",
        }, // citation slide "Speed optimisation"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is a limitation of the K-Means algorithm?",
            options: ["It always produces the optimal clustering", "It requires scaling of features", "It does not require specifying the number of clusters", "It is immune to the curse of dimensionality"],
            correctAnswer: "It requires scaling of features",
            explanation: "K-Means performance can be significantly affected by the scaling of features.",
        }, // citation slide "K-Means limits"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "The Silhouette Score is used to evaluate the quality of clustering in K-Means.",
            correctAnswer: true,
            explanation: "The Silhouette Score measures how similar an instance is to its own cluster compared to other clusters.",
        }, // citation slide "Silhouette Score"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What does the Silhouette Coefficient measure in clustering?",
            options: ["The distance between clusters", "The density of clusters", "The similarity of an instance to its own cluster compared to others", "The number of clusters"],
            correctAnswer: "The similarity of an instance to its own cluster compared to others",
            explanation: "The Silhouette Coefficient evaluates how well an instance fits within its cluster compared to other clusters.",
        }, // citation slide "Silhouette Score"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "DBSCAN is a density-based clustering algorithm.",
            correctAnswer: true,
            explanation: "DBSCAN clusters data based on the density of points in a region.",
        }, // citation slide "DBSCAN"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What is a core instance in DBSCAN?",
            options: ["An instance with the highest density", "An instance with more than min_samples in its ε-neighbourhood", "An instance that is an outlier", "An instance that is the centroid of a cluster"],
            correctAnswer: "An instance with more than min_samples in its ε-neighbourhood",
            explanation: "A core instance in DBSCAN is an instance with a sufficient number of neighbors within a specified distance.",
        }, // citation slide "DBSCAN"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "DBSCAN can handle clusters of varying shapes and sizes.",
            correctAnswer: true,
            explanation: "DBSCAN is effective for clusters that are dense and separated by areas of low density, regardless of their shape.",
        }, // citation slide "DBSCAN"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is NOT a step in the DBSCAN algorithm?",
            options: ["Calculate the distance between all pairs of instances", "Identify core instances based on ε-neighbourhood", "Chain core instances to form clusters", "Label instances as anomalies if they do not belong to any cluster"],
            correctAnswer: "Calculate the distance between all pairs of instances",
            explanation: "DBSCAN does not require calculating distances between all pairs of instances; it focuses on ε-neighbourhoods.",
        }, // citation slide "DBSCAN"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "DBSCAN does not have a 'predict' function for new instances.",
            correctAnswer: true,
            explanation: "DBSCAN does not directly support predicting the cluster of new instances, but this functionality can be implemented.",
        }, // citation slide "DBSCAN - Sklearn"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is a probabilistic clustering algorithm?",
            options: ["K-Means", "DBSCAN", "Gaussian Mixture Model", "Hierarchical Clustering"],
            correctAnswer: "Gaussian Mixture Model",
            explanation: "A Gaussian Mixture Model assumes that instances are generated from a mixture of Gaussian distributions.",
        }, // citation slide "Other clustering algorithms"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "Hierarchical Clustering builds nested clusters by merging or splitting them successively.",
            correctAnswer: true,
            explanation: "Hierarchical Clustering creates a tree of clusters by iteratively merging or splitting clusters.",
        }, // citation slide "Other clustering algorithms"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What is the Rand Index used for in clustering?",
            options: ["To measure the distance between clusters", "To compare the similarity between two cluster assignments", "To evaluate the density of clusters", "To determine the number of clusters"],
            correctAnswer: "To compare the similarity between two cluster assignments",
            explanation: "The Rand Index measures the similarity between two cluster assignments.",
        }, // citation slide "Clustering performance"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "The Fowlkes-Mallows Index (FMI) is the geometric mean of precision and recall.",
            correctAnswer: true,
            explanation: "FMI evaluates the similarity between two cluster assignments by considering precision and recall.",
        }, // citation slide "Clustering performance"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is a key challenge in K-Means clustering?",
            options: ["Choosing the right number of clusters (K)", "Scaling the features", "Handling missing data", "Selecting the optimal random seed"],
            correctAnswer: "Choosing the right number of clusters (K)",
            explanation: "Selecting the appropriate number of clusters (K) is crucial for the performance of K-Means.",
        }, // citation slide "Choosing the right K"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "Inertia naturally decreases as the number of clusters (K) increases in K-Means.",
            correctAnswer: true,
            explanation: "As K increases, the inertia (mean square distance) tends to decrease because points are closer to their centroids.",
        }, // citation slide "Choosing the right K"
        (() => {
            const silhouetteCoefficients = Array.from({ length: 5 }, () => Math.random().toFixed(2));
            const correctSilhouetteScore = (silhouetteCoefficients.reduce((a, b) => a + parseFloat(b), 0)) / silhouetteCoefficients.length;
            return {
                id: `ml-${++n}`,
                type: "generated",
                subject: "Machine Learning",
                text: `Calculate the Silhouette Score given the following silhouette coefficients: [${silhouetteCoefficients.join(", ")}]. (Answer is rounded to 2 decimal places)`,
                variables: {
                    "Silhouette Coefficients": silhouetteCoefficients,
                },
                correctAnswer: Math.round(correctSilhouetteScore * 100) / 100,
                explanation: "The Silhouette Score is the mean of the silhouette coefficients.",
            };
        })(), // citation slide "Silhouette Score"
        (() => {
            const tp = Math.floor(Math.random() * 100);
            const fp = Math.floor(Math.random() * 50);
            const fn = Math.floor(Math.random() * 50);
            const fmi = tp / Math.sqrt((tp + fp) * (tp + fn));
            return {
                id: `ml-${++n}`,
                type: "generated",
                subject: "Machine Learning",
                text: `Calculate the Fowlkes-Mallows Index (FMI) given TP=${tp}, FP=${fp}, and FN=${fn}. (Answer is rounded to 2 decimal places)`,
                variables: {
                    "True Positives (TP)": tp,
                    "False Positives (FP)": fp,
                    "False Negatives (FN)": fn,
                },
                correctAnswer: Math.round(fmi * 100) / 100,
                explanation: "FMI is the geometric mean of precision and recall, calculated as TP / sqrt((TP + FP) * (TP + FN)).",
            };
        })(), // citation slide "Clustering performance"
    ];
};
