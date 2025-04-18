import {Question} from "../../types";
import {generateGitHubUrlAuto} from "@/lib/utils.ts";

export const questions: (n: number) => Question[] = (n: number) => {
    return [
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is a type of unsupervised learning?",
            options: ["Classification", "Regression", "Clustering", "Reinforcement Learning"],
            correctAnswer: "Clustering",
            explanation: "Clustering is a type of unsupervised learning where examples are not assigned pre-defined class labels.",
        }, // citation slide Introduction to Clustering
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "In clustering, each example is assigned a pre-defined class label.",
            correctAnswer: false,
            explanation: "Clustering is unsupervised learning, so examples do not have pre-defined class labels.",
        }, // citation slide Introduction to Clustering
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What does the K-means algorithm aim to minimize?",
            options: ["The total summation of distances between each cluster centroid and its associated examples", "The number of clusters", "The distance between cluster centroids", "The variance within each cluster"],
            correctAnswer: "The total summation of distances between each cluster centroid and its associated examples",
            explanation: "K-means aims to minimize the total summation of distances between each cluster centroid and its associated examples.",
        }, // citation slide The K-means algorithm
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "K-means always finds the global minimum of the distance function.",
            correctAnswer: false,
            explanation: "K-means may find a local minimum, not necessarily the global minimum.",
        }, // citation slide Limitations of K-means
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is a limitation of K-means?",
            options: ["It tends to discover only clusters of spherical shape", "It is not sensitive to outliers", "It does not require a predefined number of clusters", "It always finds the global minimum"],
            correctAnswer: "It tends to discover only clusters of spherical shape",
            explanation: "K-means tends to discover clusters of spherical shape and is sensitive to outliers.",
        }, // citation slide Limitations of K-means
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "In K-means, different initial centroids can lead to different clustering results.",
            correctAnswer: true,
            explanation: "Different initial centroids in K-means can lead to different clustering results.",
        }, // citation slide Limitations of K-means
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the first step in the K-means algorithm?",
            options: ["Assign each example to the nearest centroid", "Calculate the centroid of each cluster", "Choose K points at random as initial centroids", "Evaluate the clustering solution"],
            correctAnswer: "Choose K points at random as initial centroids",
            explanation: "The first step in K-means is to choose K points at random as initial centroids.",
        }, // citation slide The K-means algorithm
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "In K-means, the centroid of a cluster is calculated as the mean value of all attributes over all examples in the cluster.",
            correctAnswer: true,
            explanation: "The centroid of a cluster in K-means is calculated as the mean value of all attributes over all examples in the cluster.",
        }, // citation slide K-means in more detail (3)
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is NOT a step in the K-means algorithm?",
            options: ["Assign each example to the cluster with the nearest centroid", "Calculate the centroid of each cluster", "Merge clusters based on minimum spanning trees", "Repeat until no example changes cluster"],
            correctAnswer: "Merge clusters based on minimum spanning trees",
            explanation: "Merging clusters based on minimum spanning trees is not a step in the K-means algorithm.",
        }, // citation slide The K-means algorithm
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "In K-means, the Euclidean distance is used to assign examples to the nearest centroid.",
            correctAnswer: true,
            explanation: "K-means uses the Euclidean distance to assign examples to the nearest centroid.",
        }, // citation slide K-means in more detail (2)
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the formula for the Euclidean distance between an example and a centroid in two dimensions?",
            options: [
                "$\\text{Dist}(e_i, c_j) = (e_{i,1} - c_{j,1})^2 + (e_{i,2} - c_{j,2})^2$",
                "$\\text{Dist}(e_i, c_j) = \\sqrt{(e_{i,1} - c_{j,1})^2 + (e_{i,2} - c_{j,2})^2}$",
                "$\\text{Dist}(e_i, c_j) = \\lvert e_{i,1} - c_{j,1} \\rvert + \\lvert e_{i,2} - c_{j,2} \\rvert$",
                "$\\text{Dist}(e_i, c_j) = \\max(e_{i,1} - c_{j,1}, e_{i,2} - c_{j,2})$"
            ],
            correctAnswer: "$\\text{Dist}(e_i, c_j) = \\sqrt{(e_{i,1} - c_{j,1})^2 + (e_{i,2} - c_{j,2})^2}$",
            explanation: "The Euclidean distance formula in two dimensions is $\\text{Dist}(e_i, c_j) = \\sqrt{(e_{i,1} - c_{j,1})^2 + (e_{i,2} - c_{j,2})^2}$.",
        }, // citation slide K-means in more detail (2)
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "In graph-based clustering, each example is associated with a node in a graph.",
            correctAnswer: true,
            explanation: "In graph-based clustering, each example is associated with a node in a graph.",
        }, // citation slide Partitional Clustering based on Minimum Spanning Trees (1)
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is a minimum spanning tree (MST)?",
            options: ["A tree with the maximum weight", "A tree with the minimum weight", "A tree with no edges", "A tree with all possible edges"],
            correctAnswer: "A tree with the minimum weight",
            explanation: "A minimum spanning tree (MST) is a tree with the minimum weight out of all spanning trees.",
        }, // citation slide Partitional Clustering based on Minimum Spanning Trees (1)
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "In graph-based clustering, inconsistent edges are removed to form clusters.",
            correctAnswer: true,
            explanation: "In graph-based clustering, inconsistent edges are removed to form clusters.",
        }, // citation slide Partitional Clustering based on Minimum Spanning Trees (2)
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is an inconsistent edge in graph-based clustering?",
            options: ["An edge with the smallest weight", "An edge with a weight significantly larger than the average weight of nearby edges", "An edge with the same weight as other edges", "An edge with the maximum weight"],
            correctAnswer: "An edge with a weight significantly larger than the average weight of nearby edges",
            explanation: "An inconsistent edge in graph-based clustering has a weight significantly larger than the average weight of nearby edges.",
        }, // citation slide Partitional Clustering based on Minimum Spanning Trees (2)
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "In hierarchical clustering, the output is a dendogram.",
            correctAnswer: true,
            explanation: "Hierarchical clustering produces a dendogram as output.",
        }, // citation slide Hierarchical Clustering Algorithms
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is a type of hierarchical clustering?",
            options: ["Agglomerative", "Divisive", "K-means", "Density-based"],
            correctAnswer: "Agglomerative",
            explanation: "Agglomerative clustering is a type of hierarchical clustering.",
        }, // citation slide Hierarchical Clustering Algorithms
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "In agglomerative clustering, the process starts with one cluster for each example.",
            correctAnswer: true,
            explanation: "Agglomerative clustering starts with one cluster for each example.",
        }, // citation slide Basic Pseudocode for Agglomerative Clustering
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the final step in agglomerative clustering?",
            options: ["Merge all examples into a single cluster", "Split clusters into smaller clusters", "Assign each example to the nearest centroid", "Evaluate the clustering solution"],
            correctAnswer: "Merge all examples into a single cluster",
            explanation: "The final step in agglomerative clustering is to merge all examples into a single cluster.",
        }, // citation slide Basic Pseudocode for Agglomerative Clustering
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "In single-link agglomerative clustering, the distance between two clusters is the distance between the nearest pair of examples.",
            correctAnswer: true,
            explanation: "In single-link agglomerative clustering, the distance between two clusters is the distance between the nearest pair of examples.",
        }, // citation slide Agglomerative Clustering in more detail (1)
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the distance between two clusters in complete-link agglomerative clustering?",
            options: ["The distance between the nearest pair of examples", "The distance between the most distant pair of examples", "The average distance between all pairs of examples", "The minimum distance between all pairs of examples"],
            correctAnswer: "The distance between the most distant pair of examples",
            explanation: "In complete-link agglomerative clustering, the distance between two clusters is the distance between the most distant pair of examples.",
        }, // citation slide Agglomerative Clustering in more detail (2)
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "In average-link agglomerative clustering, the distance between two clusters is the arithmetic average of the distances between all pairs of examples.",
            correctAnswer: true,
            explanation: "In average-link agglomerative clustering, the distance between two clusters is the arithmetic average of the distances between all pairs of examples.",
        }, // citation slide Agglomerative Clustering in more detail (2)
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is a limitation of hierarchical clustering?",
            options: ["The decision to merge clusters is greedy", "The result of a merging cannot be undone", "It is computationally inexpensive", "It does not require the computation of distances between examples"],
            correctAnswer: "The decision to merge clusters is greedy",
            explanation: "Hierarchical clustering is greedy, and the result of a merging cannot be undone.",
        }, // citation slide Limitations of hierarchical clustering
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Density-based clustering can discover clusters of arbitrary shape.",
            correctAnswer: true,
            explanation: "Density-based clustering is flexible and can discover clusters of arbitrary shape.",
        }, // citation slide Overview of density-based clustering
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is a key feature of density-based clustering?",
            options: ["It creates clusters of spherical shape", "It is sensitive to outliers", "It can identify outliers as noise", "It requires a predefined number of clusters"],
            correctAnswer: "It can identify outliers as noise",
            explanation: "Density-based clustering can identify outliers as noise and is flexible in discovering clusters of arbitrary shape.",
        }, // citation slide Overview of density-based clustering
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "In clustering evaluation, internal indices measure cohesion and separation within and between clusters.",
            correctAnswer: true,
            explanation: "Internal indices in clustering evaluation measure cohesion within clusters and separation between clusters.",
        }, // citation slide Internal indices for partitional clustering (1)
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the goal of internal indices in clustering evaluation?",
            options: ["To maximize cohesion within each cluster", "To minimize separation between clusters", "To maximize separation between clusters", "To minimize the number of clusters"],
            correctAnswer: "To maximize cohesion within each cluster",
            explanation: "The goal of internal indices is to maximize cohesion within each cluster and separation between clusters.",
        }, // citation slide Internal indices for partitional clustering (1)
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "External indices in clustering evaluation use information not included in the dataset.",
            correctAnswer: true,
            explanation: "External indices use information not included in the dataset for clustering evaluation.",
        }, // citation slide Clustering Evaluation
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is an internal index for clustering evaluation?",
            options: ["Cohesion within clusters", "Separation between clusters", "External validation", "User feedback"],
            correctAnswer: "Cohesion within clusters",
            explanation: "Cohesion within clusters and separation between clusters are internal indices for clustering evaluation.",
        }, // citation slide Internal indices for partitional clustering (1)
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Clustering is a form of supervised learning.",
            correctAnswer: false,
            explanation: "Clustering is a form of unsupervised learning, not supervised learning.",
        }, // citation slide Summary
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is a partitional clustering method?",
            options: ["K-means", "Hierarchical clustering", "Density-based clustering", "Minimum spanning trees"],
            correctAnswer: "K-means",
            explanation: "K-means is a partitional clustering method.",
        }, // citation slide Summary
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "In graph-based clustering, the minimum spanning tree (MST) is used to create separate clusters.",
            correctAnswer: true,
            explanation: "Graph-based clustering uses the minimum spanning tree (MST) to create separate clusters.",
        }, // citation slide Summary
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the goal of K-means clustering?",
            options: ["To maximize the total summation of distances between cluster centroids and examples", "To minimize the total summation of distances between cluster centroids and examples", "To maximize the number of clusters", "To minimize the number of clusters"],
            correctAnswer: "To minimize the total summation of distances between cluster centroids and examples",
            explanation: "The goal of K-means clustering is to minimize the total summation of distances between cluster centroids and examples.",
        }, // citation slide Summary
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "In agglomerative hierarchical clustering, the process starts with all examples in a single cluster.",
            correctAnswer: false,
            explanation: "Agglomerative hierarchical clustering starts with each example in its own cluster, not all examples in a single cluster.",
        }, // citation slide Basic Pseudocode for Agglomerative Clustering
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the first step in agglomerative hierarchical clustering?",
            options: ["Merge the nearest pair of clusters", "Split the nearest pair of clusters", "Assign each example to the nearest centroid", "Evaluate the clustering solution"],
            correctAnswer: "Merge the nearest pair of clusters",
            explanation: "The first step in agglomerative hierarchical clustering is to merge the nearest pair of clusters.",
        }, // citation slide Basic Pseudocode for Agglomerative Clustering
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "In density-based clustering, each example in a cluster must be close to another example in the cluster.",
            correctAnswer: true,
            explanation: "In density-based clustering, each example in a cluster must be close to another example in the cluster.",
        }, // citation slide Overview of density-based clustering
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is NOT a step in the K-means algorithm?",
            options: ["Choose K points at random as initial centroids", "Assign each example to the cluster with the nearest centroid", "Calculate the centroid of each cluster", "Merge clusters based on minimum spanning trees"],
            correctAnswer: "Merge clusters based on minimum spanning trees",
            explanation: "Merging clusters based on minimum spanning trees is not a step in the K-means algorithm.",
        }, // citation slide The K-means algorithm
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "In K-means, the centroid of a cluster is calculated as the mean value of all attributes over all examples in the cluster.",
            correctAnswer: true,
            explanation: "The centroid of a cluster in K-means is calculated as the mean value of all attributes over all examples in the cluster.",
        }, // citation slide K-means in more detail (3)
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "In graph-based clustering, each example is associated with a node in a graph.",
            correctAnswer: true,
            explanation: "In graph-based clustering, each example is associated with a node in a graph.",
        }, // citation slide Partitional Clustering based on Minimum Spanning Trees (1)
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is a minimum spanning tree (MST)?",
            options: ["A tree with the maximum weight", "A tree with the minimum weight", "A tree with no edges", "A tree with all possible edges"],
            correctAnswer: "A tree with the minimum weight",
            explanation: "A minimum spanning tree (MST) is a tree with the minimum weight out of all spanning trees.",
        }, // citation slide Partitional Clustering based on Minimum Spanning Trees (1)
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "In graph-based clustering, inconsistent edges are removed to form clusters.",
            correctAnswer: true,
            explanation: "In graph-based clustering, inconsistent edges are removed to form clusters.",
        }, // citation slide Partitional Clustering based on Minimum Spanning Trees (2)
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is an inconsistent edge in graph-based clustering?",
            options: ["An edge with the smallest weight", "An edge with a weight significantly larger than the average weight of nearby edges", "An edge with the same weight as other edges", "An edge with the maximum weight"],
            correctAnswer: "An edge with a weight significantly larger than the average weight of nearby edges",
            explanation: "An inconsistent edge in graph-based clustering has a weight significantly larger than the average weight of nearby edges.",
        }, // citation slide Partitional Clustering based on Minimum Spanning Trees (2)
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "In hierarchical clustering, the output is a dendogram.",
            correctAnswer: true,
            explanation: "Hierarchical clustering produces a dendogram as output.",
        }, // citation slide Hierarchical Clustering Algorithms
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is a type of hierarchical clustering?",
            options: ["Agglomerative", "Divisive", "K-means", "Density-based"],
            correctAnswer: "Agglomerative",
            explanation: "Agglomerative clustering is a type of hierarchical clustering.",
        }, // citation slide Hierarchical Clustering Algorithms
        // Generated question for Euclidean Distance
        (() => {
            const point1 = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
            const point2 = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
            const euclideanDistance = Math.sqrt(point1.reduce((sum, x, i) => sum + Math.pow(x - point2[i], 2), 0));
            return {
                id: `dm-${++n}`,
                report: generateGitHubUrlAuto(),
                type: "generated",
                subject: "Data Mining & Knowledge Discovery",
                text: `Calculate the Euclidean Distance between the points ${JSON.stringify(point1)} and ${JSON.stringify(point2)}. (Answer is rounded to 2 decimal places)`,
                variables: {
                    "Point 1": point1,
                    "Point 2": point2,
                },
                correctAnswer: Math.round(euclideanDistance * 100) / 100,
                explanation: `The Euclidean Distance is calculated as the square root of the sum of the squared differences between corresponding elements of the two points.`,
            };
        })(), // citation slide "Distance Metrics"
    ];
};
