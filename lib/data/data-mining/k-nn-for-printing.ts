import {Question} from "../../types";

export const questions: (n: number) => Question[] = (n: number) => {
    return [
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is an example of an instance-based learning method?",
            options: ["Decision Trees", "Naïve Bayes", "k-Nearest Neighbours", "Conditional Probability Tables"],
            correctAnswer: "k-Nearest Neighbours",
            explanation: "k-Nearest Neighbours is an instance-based learning method that stores training examples and classifies new instances based on similarity to stored examples.",
        }, // citation slide: Instance-Based Learning
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "In k-Nearest Neighbours, the classification of a query instance is based on the majority class of its nearest neighbours.",
            correctAnswer: true,
            explanation: "The k-NN algorithm classifies a query instance by assigning it the most frequent class among its k nearest neighbours.",
        }, // citation slide: k-Nearest Neighbours
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What does the inductive bias in k-Nearest Neighbours assume?",
            options: ["The class of an instance is independent of nearby instances.", "The class of an instance is similar to the class of nearby instances.", "The class of an instance is determined by a predefined rule.", "The class of an instance is random."],
            correctAnswer: "The class of an instance is similar to the class of nearby instances.",
            explanation: "The inductive bias in k-NN assumes that instances close to each other are likely to belong to the same class.",
        }, // citation slide: Inductive Bias in k-Nearest Neighbours
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "In k-Nearest Neighbours, the distance between two instances can be measured using the Manhattan distance.",
            correctAnswer: true,
            explanation: "The Manhattan distance is one of the distance metrics used in k-NN to measure the similarity between instances.",
        }, // citation slide: Measuring Distance - Instances
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is a reason for normalizing continuous attribute values in k-Nearest Neighbours?",
            options: ["To ensure all attributes contribute equally to the distance calculation.", "To reduce the computational complexity.", "To increase the variance in the data.", "To make the algorithm deterministic."],
            correctAnswer: "To ensure all attributes contribute equally to the distance calculation.",
            explanation: "Normalization ensures that attributes with larger ranges do not dominate the distance calculation.",
        }, // citation slide: Measuring Distance - Normalisation
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "In k-Nearest Neighbours, attribute weighting allows different attributes to have different degrees of relevance.",
            correctAnswer: true,
            explanation: "Attribute weighting assigns different weights to attributes based on their relevance to the classification task.",
        }, // citation slide: Attribute Weighting (1)
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "In k-Nearest Neighbours, the classification of a new instance is faster if only typical instances are used instead of all training instances.",
            correctAnswer: true,
            explanation: "Using typical instances reduces the number of comparisons needed for classification, making the process faster.",
        }, // citation slide: Selecting Typical Instances (1)
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the purpose of selecting typical instances in k-Nearest Neighbours?",
            options: ["To increase the memory usage.", "To reduce the classification time.", "To make the algorithm non-deterministic.", "To increase the variance in predictions."],
            correctAnswer: "To reduce the classification time.",
            explanation: "Typical instances are selected to reduce the number of comparisons during classification, making the process faster.",
        }, // citation slide: Selecting Typical Instances (1)
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "In k-Nearest Neighbours, the intra-class similarity of an instance is the mean similarity between the instance and other instances of the same class.",
            correctAnswer: true,
            explanation: "Intra-class similarity measures how similar an instance is to other instances within the same class.",
        }, // citation slide: Selecting Typical Instances (4)
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is a disadvantage of the k-Nearest Neighbours algorithm?",
            options: ["It is slow to classify new instances.", "It requires a lot of memory to store the model.", "It cannot handle complex problems.", "It is not incremental."],
            correctAnswer: "It is slow to classify new instances.",
            explanation: "k-NN is computationally expensive during classification as it requires comparing the new instance to all training instances.",
        }, // citation slide: Summary
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "In k-Nearest Neighbours, the value of k can be set to any number between 1 and the total number of training instances.",
            correctAnswer: true,
            explanation: "The value of k can range from 1 to the total number of training instances, depending on the desired sensitivity of the model.",
        }, // citation slide: Inductive Bias in Practice
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the formula for the Manhattan distance between two instances X and Y?",
            options: ["Dist(X, Y) = √∑(Xi - Yi)²", "Dist(X, Y) = ∑|Xi - Yi|", "Dist(X, Y) = max(|Xi - Yi|)", "Dist(X, Y) = min(|Xi - Yi|)"],
            correctAnswer: "Dist(X, Y) = ∑|Xi - Yi|",
            explanation: "The Manhattan distance is the sum of the absolute differences between corresponding attributes of the two instances.",
        }, // citation slide: Measuring Distance - Instances
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "In k-Nearest Neighbours, the distance between categorical attribute values is 0 if the values are the same and 1 if they are different.",
            correctAnswer: true,
            explanation: "For categorical attributes, the distance is 0 if the values are identical and 1 if they are different.",
        }, // citation slide: Measuring Distance - Attributes
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the purpose of normalization in k-Nearest Neighbours?",
            options: ["To reduce the memory usage.", "To ensure all attributes contribute equally to the distance calculation.", "To increase the variance in the data.", "To make the algorithm deterministic."],
            correctAnswer: "To ensure all attributes contribute equally to the distance calculation.",
            explanation: "Normalization ensures that attributes with larger ranges do not dominate the distance calculation.",
        }, // citation slide: Measuring Distance - Normalisation
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "In k-Nearest Neighbours, attribute weights can be manually specified or automatically computed.",
            correctAnswer: true,
            explanation: "Attribute weights can be set manually or computed automatically based on the relevance of each attribute.",
        }, // citation slide: Attribute Weighting (2)
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is a reason for using attribute weighting in k-Nearest Neighbours?",
            options: ["To ensure all attributes are equally relevant.", "To reduce the computational complexity.", "To allow different attributes to have different degrees of relevance.", "To make the algorithm non-deterministic."],
            correctAnswer: "To allow different attributes to have different degrees of relevance.",
            explanation: "Attribute weighting allows different attributes to contribute differently to the distance calculation based on their relevance.",
        }, // citation slide: Attribute Weighting (2)
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "In k-Nearest Neighbours, the inter-class similarity of an instance is the mean similarity between the instance and instances of other classes.",
            correctAnswer: true,
            explanation: "Inter-class similarity measures how similar an instance is to instances of different classes.",
        }, // citation slide: Selecting Typical Instances (4)
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the formula for the weighted Euclidean distance between two instances $X$ and $Y$?",
            options: [
                "$\\text{Dist}(X, Y) = \\sum W_i \\cdot |X_i - Y_i|$",
                "$\\text{Dist}(X, Y) = \\sqrt{\\sum W_i \\cdot (X_i - Y_i)^2}$",
                "$\\text{Dist}(X, Y) = \\max(W_i \\cdot |X_i - Y_i|)$",
                "$\\text{Dist}(X, Y) = \\min(W_i \\cdot |X_i - Y_i|)$"
            ],
            correctAnswer: "$\\text{Dist}(X, Y) = \\sqrt{\\sum W_i \\cdot (X_i - Y_i)^2}$",
            explanation: "The weighted Euclidean distance incorporates attribute weights into the distance calculation.",
        }, // citation slide: Attribute Weighting (1)
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "In k-Nearest Neighbours, the classification of a new instance is based on the majority class of its k nearest neighbours.",
            correctAnswer: true,
            explanation: "The k-NN algorithm classifies a new instance by assigning it the most frequent class among its k nearest neighbours.",
        }, // citation slide: k-Nearest Neighbours
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the purpose of selecting typical instances in k-Nearest Neighbours?",
            options: ["To increase the memory usage.", "To reduce the classification time.", "To make the algorithm non-deterministic.", "To increase the variance in predictions."],
            correctAnswer: "To reduce the classification time.",
            explanation: "Typical instances are selected to reduce the number of comparisons during classification, making the process faster.",
        }, // citation slide: Selecting Typical Instances (1)
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "In k-Nearest Neighbours, the intra-class similarity of an instance is the mean similarity between the instance and other instances of the same class.",
            correctAnswer: true,
            explanation: "Intra-class similarity measures how similar an instance is to other instances within the same class.",
        }, // citation slide: Selecting Typical Instances (4)
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is a disadvantage of the k-Nearest Neighbours algorithm?",
            options: ["It is slow to classify new instances.", "It requires a lot of memory to store the model.", "It cannot handle complex problems.", "It is not incremental."],
            correctAnswer: "It is slow to classify new instances.",
            explanation: "k-NN is computationally expensive during classification as it requires comparing the new instance to all training instances.",
        }, // citation slide: Summary
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "In k-Nearest Neighbours, the value of k can be set to any number between 1 and the total number of training instances.",
            correctAnswer: true,
            explanation: "The value of k can range from 1 to the total number of training instances, depending on the desired sensitivity of the model.",
        }, // citation slide: Inductive Bias in Practice
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "In k-Nearest Neighbours, the distance between categorical attribute values is 0 if the values are the same and 1 if they are different.",
            correctAnswer: true,
            explanation: "For categorical attributes, the distance is 0 if the values are identical and 1 if they are different.",
        }, // citation slide: Measuring Distance - Attributes
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the purpose of normalization in k-Nearest Neighbours?",
            options: ["To reduce the memory usage.", "To ensure all attributes contribute equally to the distance calculation.", "To increase the variance in the data.", "To make the algorithm deterministic."],
            correctAnswer: "To ensure all attributes contribute equally to the distance calculation.",
            explanation: "Normalization ensures that attributes with larger ranges do not dominate the distance calculation.",
        }, // citation slide: Measuring Distance - Normalisation
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "In k-Nearest Neighbours, attribute weights can be manually specified or automatically computed.",
            correctAnswer: true,
            explanation: "Attribute weights can be set manually or computed automatically based on the relevance of each attribute.",
        }, // citation slide: Attribute Weighting (2)
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is a reason for using attribute weighting in k-Nearest Neighbours?",
            options: ["To ensure all attributes are equally relevant.", "To reduce the computational complexity.", "To allow different attributes to have different degrees of relevance.", "To make the algorithm non-deterministic."],
            correctAnswer: "To allow different attributes to have different degrees of relevance.",
            explanation: "Attribute weighting allows different attributes to contribute differently to the distance calculation based on their relevance.",
        }, // citation slide: Attribute Weighting (2)
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "In k-Nearest Neighbours, the inter-class similarity of an instance is the mean similarity between the instance and instances of other classes.",
            correctAnswer: true,
            explanation: "Inter-class similarity measures how similar an instance is to instances of different classes.",
        }, // citation slide: Selecting Typical Instances (4)
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the formula for the Manhattan distance between two instances $X$ and $Y$?",
            options: [
                "$\\text{Dist}(X, Y) = \\sqrt{\\sum(X_i - Y_i)^2}$",
                "$\\text{Dist}(X, Y) = \\sum|X_i - Y_i|$",
                "$\\text{Dist}(X, Y) = \\max(|X_i - Y_i|)$",
                "$\\text{Dist}(X, Y) = \\min(|X_i - Y_i|)$"
            ],
            correctAnswer: "$\\text{Dist}(X, Y) = \\sum|X_i - Y_i|$",
            explanation: "The Manhattan distance is the sum of the absolute differences between corresponding attributes of the two instances.",
        }, // citation slide: Measuring Distance - Instances
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "In k-Nearest Neighbours, the classification of a new instance is based on the majority class of its k nearest neighbours.",
            correctAnswer: true,
            explanation: "The k-NN algorithm classifies a new instance by assigning it the most frequent class among its k nearest neighbours.",
        }, // citation slide: k-Nearest Neighbours
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the purpose of selecting typical instances in k-Nearest Neighbours?",
            options: ["To increase the memory usage.", "To reduce the classification time.", "To make the algorithm non-deterministic.", "To increase the variance in predictions."],
            correctAnswer: "To reduce the classification time.",
            explanation: "Typical instances are selected to reduce the number of comparisons during classification, making the process faster.",
        }, // citation slide: Selecting Typical Instances (1)
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "In k-Nearest Neighbours, the intra-class similarity of an instance is the mean similarity between the instance and other instances of the same class.",
            correctAnswer: true,
            explanation: "Intra-class similarity measures how similar an instance is to other instances within the same class.",
        }, // citation slide: Selecting Typical Instances (4)
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is a disadvantage of the k-Nearest Neighbours algorithm?",
            options: ["It is slow to classify new instances.", "It requires a lot of memory to store the model.", "It cannot handle complex problems.", "It is not incremental."],
            correctAnswer: "It is slow to classify new instances.",
            explanation: "k-NN is computationally expensive during classification as it requires comparing the new instance to all training instances.",
        }, // citation slide: Summary
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "In k-Nearest Neighbours, the value of k can be set to any number between 1 and the total number of training instances.",
            correctAnswer: true,
            explanation: "The value of k can range from 1 to the total number of training instances, depending on the desired sensitivity of the model.",
        }, // citation slide: Inductive Bias in Practice
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "In k-Nearest Neighbours, the distance between categorical attribute values is 0 if the values are the same and 1 if they are different.",
            correctAnswer: true,
            explanation: "For categorical attributes, the distance is 0 if the values are identical and 1 if they are different.",
        }, // citation slide: Measuring Distance - Attributes
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the purpose of normalization in k-Nearest Neighbours?",
            options: ["To reduce the memory usage.", "To ensure all attributes contribute equally to the distance calculation.", "To increase the variance in the data.", "To make the algorithm deterministic."],
            correctAnswer: "To ensure all attributes contribute equally to the distance calculation.",
            explanation: "Normalization ensures that attributes with larger ranges do not dominate the distance calculation.",
        }, // citation slide: Measuring Distance - Normalisation
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "In k-Nearest Neighbours, attribute weights can be manually specified or automatically computed.",
            correctAnswer: true,
            explanation: "Attribute weights can be set manually or computed automatically based on the relevance of each attribute.",
        }, // citation slide: Attribute Weighting (2)
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is a reason for using attribute weighting in k-Nearest Neighbours?",
            options: ["To ensure all attributes are equally relevant.", "To reduce the computational complexity.", "To allow different attributes to have different degrees of relevance.", "To make the algorithm non-deterministic."],
            correctAnswer: "To allow different attributes to have different degrees of relevance.",
            explanation: "Attribute weighting allows different attributes to contribute differently to the distance calculation based on their relevance.",
        }, // citation slide: Attribute Weighting (2)
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "In k-Nearest Neighbours, the inter-class similarity of an instance is the mean similarity between the instance and instances of other classes.",
            correctAnswer: true,
            explanation: "Inter-class similarity measures how similar an instance is to instances of different classes.",
        }, // citation slide: Selecting Typical Instances (4)
    ];
};
