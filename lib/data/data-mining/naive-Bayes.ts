import {Question} from "../../types";

export const questions: (n: number) => Question[] = (n: number) => {
    return [
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the formula for Bayes' theorem?",
            options: [
                "$P(A|B) = \\frac{P(B|A) \\cdot P(A)}{P(B)}$",
                "$P(A|B) = \\frac{P(A) \\cdot P(B|A)}{P(B)}$",
                "$P(A|B) = \\frac{P(A)}{P(B)}$",
                "$P(A|B) = \\frac{P(B|A)}{P(A)}$"
            ],
            correctAnswer: "$P(A|B) = \\frac{P(B|A) \\cdot P(A)}{P(B)}$",
            explanation: "Bayes' theorem is expressed as $P(A|B) = \\frac{P(B|A) \\cdot P(A)}{P(B)}$.",
        }, // citation slide Review of Bayes' Theorem
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Bayes' theorem allows us to compute P(A|B) in terms of P(B|A) and P(B).",
            correctAnswer: true,
            explanation: "Bayes' theorem rewrites P(A|B) using P(B|A) and P(B).",
        }, // citation slide Review of Bayes' Theorem
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "If P(disease is present) = 1%, P(true positive) = 99%, and P(false positive) = 1%, what is the probability that a patient with a positive test result has the disease?",
            options: ["50%", "99%", "1%", "0.5%"],
            correctAnswer: "50%",
            explanation: "Using Bayes' theorem, the probability is calculated as 50%.",
        }, // citation slide Applying Bayes' theorem (2)
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "In Bayesian classification, we choose the class that maximizes P(Ci|Example).",
            correctAnswer: true,
            explanation: "The optimal classification is to choose the class with the highest P(Ci|Example).",
        }, // citation slide Bayesian Classification (1)
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the Naïve Bayes assumption?",
            options: [
                "Attributes are dependent given the class.",
                "Attributes are independent given the class.",
                "Attributes are always independent.",
                "Attributes are always dependent."
            ],
            correctAnswer: "Attributes are independent given the class.",
            explanation: "Naïve Bayes assumes attributes are independent given the class.",
        }, // citation slide Naïve Bayes Classifier
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Naïve Bayes is sensitive to redundant attributes.",
            correctAnswer: true,
            explanation: "Redundant attributes can affect the classification accuracy of Naïve Bayes.",
        }, // citation slide Limitations of Naïve Bayes
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the formula for the Naïve Bayes classifier?",
            options: [
                "$P(C_i|E_j) \\propto P(E_j|C_i) \\cdot P(C_i)$",
                "$P(C_i|E_j) = \\frac{P(E_j|C_i)}{P(C_i)}$",
                "$P(C_i|E_j) = P(E_j) \\cdot P(C_i)$",
                "$P(C_i|E_j) = P(E_j|C_i)$"
            ],
            correctAnswer: "$P(C_i|E_j) \\propto P(E_j|C_i) \\cdot P(C_i)$",
            explanation: "The Naïve Bayes formula is $P(C_i|E_j) \\propto P(E_j|C_i) \\cdot P(C_i)$.",
        }, // citation slide Naïve Bayes Classifier
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "In Naïve Bayes, missing attributes can be ignored because attributes are conditionally independent given the class.",
            correctAnswer: true,
            explanation: "Missing attributes can be ignored due to the conditional independence assumption.",
        }, // citation slide Strengths of Naïve Bayes
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the purpose of introducing artificial (imagined) observations in Naïve Bayes?",
            options: [
                "To increase the dataset size.",
                "To avoid zero probabilities.",
                "To reduce computational complexity.",
                "To improve visualization."
            ],
            correctAnswer: "To avoid zero probabilities.",
            explanation: "Artificial observations prevent zero probabilities from collapsing the model.",
        }, // citation slide Naïve Bayes - example (2)
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Naïve Bayes is particularly effective for spam detection.",
            correctAnswer: true,
            explanation: "Naïve Bayes is widely used in spam detection due to its simplicity and effectiveness.",
        }, // citation slide Strengths of Naïve Bayes
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is NOT a limitation of Naïve Bayes?",
            options: [
                "Assumes attribute independence.",
                "Sensitive to redundant attributes.",
                "Requires large datasets.",
                "Good interpretability."
            ],
            correctAnswer: "Good interpretability.",
            explanation: "Good interpretability is a strength, not a limitation, of Naïve Bayes.",
        }, // citation slide Limitations of Naïve Bayes
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "In Naïve Bayes, continuous attributes are modeled using density functions like Gaussian distributions.",
            correctAnswer: true,
            explanation: "Continuous attributes are estimated using density functions.",
        }, // citation slide Students' Questions: what if independent attributes are continuous?
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the formula for $P(E_j|C_i)$ in Naïve Bayes when attributes are independent?",
            options: [
                "$P(E_j|C_i) = P(Attr_1|C_i) \\cdot P(Attr_2|C_i) \\cdot ... \\cdot P(Attr_m|C_i)$",
                "$P(E_j|C_i) = P(Attr_1|C_i) + P(Attr_2|C_i) + ... + P(Attr_m|C_i)$",
                "$P(E_j|C_i) = \\frac{P(Attr_1|C_i)}{P(Attr_2|C_i)}$",
                "$P(E_j|C_i) = P(Attr_1|C_i) - P(Attr_2|C_i)$"
            ],
            correctAnswer: "$P(E_j|C_i) = P(Attr_1|C_i) \\cdot P(Attr_2|C_i) \\cdot ... \\cdot P(Attr_m|C_i)$",
            explanation: "The formula assumes independence of attributes given the class.",
        }, // citation slide Naïve Bayes Classifier
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Naïve Bayes can handle missing attributes by ignoring them in the calculation.",
            correctAnswer: true,
            explanation: "Missing attributes are ignored due to the independence assumption.",
        }, // citation slide Strengths of Naïve Bayes
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the purpose of the prior probability P(Ci) in Naïve Bayes?",
            options: [
                "To estimate the probability of the class.",
                "To estimate the probability of the attributes.",
                "To estimate the joint probability of attributes and class.",
                "To estimate the conditional probability of attributes given the class."
            ],
            correctAnswer: "To estimate the probability of the class.",
            explanation: "The prior probability P(Ci) estimates the likelihood of the class.",
        }, // citation slide Bayesian Classification (2)
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Naïve Bayes assumes that all attributes are equally important for classification.",
            correctAnswer: false,
            explanation: "Naïve Bayes does not assume equal importance of attributes.",
        }, // citation slide Limitations of Naïve Bayes
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the formula for updating the probability of an attribute in Naïve Bayes with imagined occurrences?",
            options: [
                "$P(\\text{Attr}|C_i) = \\frac{\\text{real occurrences} + k}{\\text{total occurrences} + k \\cdot \\text{number of outcomes}}$",
                "$P(\\text{Attr}|C_i) = \\frac{\\text{real occurrences}}{\\text{total occurrences}}$",
                "$P(\\text{Attr}|C_i) = \\frac{\\text{real occurrences} - k}{\\text{total occurrences} - k}$",
                "$P(\\text{Attr}|C_i) = \\frac{k}{\\text{total occurrences}}$"
            ],
            correctAnswer: "$P(\\text{Attr}|C_i) = \\frac{\\text{real occurrences} + k}{\\text{total occurrences} + k \\cdot \\text{number of outcomes}}$",
            explanation: "Imagined occurrences prevent zero probabilities.",
        }, // citation slide Naïve Bayes - example (2)
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Naïve Bayes is a probabilistic classifier.",
            correctAnswer: true,
            explanation: "Naïve Bayes uses probabilities to classify data.",
        }, // citation slide Naïve Bayes Classifier
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the purpose of the training phase in Naïve Bayes?",
            options: [
                "To classify new examples.",
                "To compute probabilities from the training data.",
                "To estimate the joint probability of attributes.",
                "To handle missing attributes."
            ],
            correctAnswer: "To compute probabilities from the training data.",
            explanation: "The training phase computes probabilities for classification.",
        }, // citation slide Naïve Bayes - example (1)
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Naïve Bayes can be used for both discrete and continuous attributes.",
            correctAnswer: true,
            explanation: "Naïve Bayes handles both discrete and continuous attributes.",
        }, // citation slide Students' Questions: what if independent attributes are continuous?
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the formula for $P(C_i|E_j)$ in Naïve Bayes?",
            options: [
                "$P(C_i|E_j) = \\frac{P(E_j|C_i) \\cdot P(C_i)}{P(E_j)}$",
                "$P(C_i|E_j) = P(E_j|C_i) \\cdot P(C_i)$",
                "$P(C_i|E_j) = \\frac{P(E_j|C_i)}{P(C_i)}$",
                "$P(C_i|E_j) = P(E_j|C_i)$"
            ],
            correctAnswer: "$P(C_i|E_j) = \\frac{P(E_j|C_i) \\cdot P(C_i)}{P(E_j)}$",
            explanation: "The formula is derived from Bayes' theorem.",
        }, // citation slide Naïve Bayes Classifier
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Naïve Bayes assumes that attributes are conditionally independent given the class.",
            correctAnswer: true,
            explanation: "This is the core assumption of Naïve Bayes.",
        }, // citation slide Naïve Bayes Classifier
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the purpose of the test phase in Naïve Bayes?",
            options: [
                "To compute probabilities from the training data.",
                "To classify new examples.",
                "To estimate the joint probability of attributes.",
                "To handle missing attributes."
            ],
            correctAnswer: "To classify new examples.",
            explanation: "The test phase classifies new examples using the computed probabilities.",
        }, // citation slide Naïve Bayes - example (3)
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Naïve Bayes is sensitive to the presence of redundant attributes.",
            correctAnswer: true,
            explanation: "Redundant attributes can degrade the performance of Naïve Bayes.",
        }, // citation slide Limitations of Naïve Bayes
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the purpose of the imagined occurrences in Naïve Bayes?",
            options: [
                "To increase the dataset size.",
                "To avoid zero probabilities.",
                "To reduce computational complexity.",
                "To improve visualization."
            ],
            correctAnswer: "To avoid zero probabilities.",
            explanation: "Imagined occurrences prevent zero probabilities from collapsing the model.",
        }, // citation slide Naïve Bayes - example (2)
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Naïve Bayes is a generative model.",
            correctAnswer: true,
            explanation: "Naïve Bayes models the joint probability of attributes and class.",
        }, // citation slide Naïve Bayes Classifier
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the formula for $P(E_j)$ in Naïve Bayes?",
            options: [
                "$P(E_j) = P(\\text{Attr}_1|C_i) \\cdot P(\\text{Attr}_2|C_i) \\cdot ... \\cdot P(\\text{Attr}_m|C_i)$",
                "$P(E_j) = P(\\text{Attr}_1) \\cdot P(\\text{Attr}_2) \\cdot ... \\cdot P(\\text{Attr}_m)$",
                "$P(E_j) = P(\\text{Attr}_1|C_i) + P(\\text{Attr}_2|C_i) + ... + P(\\text{Attr}_m|C_i)$",
                "$P(E_j) = \\frac{P(\\text{Attr}_1|C_i)}{P(\\text{Attr}_2|C_i)}$"
            ],
            correctAnswer: "$P(E_j) = P(\\text{Attr}_1) \\cdot P(\\text{Attr}_2) \\cdot ... \\cdot P(\\text{Attr}_m)$",
            explanation: "$P(E_j)$ is the joint probability of all attributes.",
        }, // citation slide Bayesian Classification (2)
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Naïve Bayes assumes that all attributes are independent of each other.",
            correctAnswer: false,
            explanation: "Naïve Bayes assumes attributes are independent given the class.",
        }, // citation slide Naïve Bayes Classifier
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the purpose of the prior probability P(Ci) in Naïve Bayes?",
            options: [
                "To estimate the probability of the class.",
                "To estimate the probability of the attributes.",
                "To estimate the joint probability of attributes and class.",
                "To estimate the conditional probability of attributes given the class."
            ],
            correctAnswer: "To estimate the probability of the class.",
            explanation: "The prior probability P(Ci) estimates the likelihood of the class.",
        }, // citation slide Bayesian Classification (2)
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Naïve Bayes can handle missing attributes by ignoring them in the calculation.",
            correctAnswer: true,
            explanation: "Missing attributes are ignored due to the independence assumption.",
        }, // citation slide Strengths of Naïve Bayes
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the purpose of the training phase in Naïve Bayes?",
            options: [
                "To classify new examples.",
                "To compute probabilities from the training data.",
                "To estimate the joint probability of attributes.",
                "To handle missing attributes."
            ],
            correctAnswer: "To compute probabilities from the training data.",
            explanation: "The training phase computes probabilities for classification.",
        }, // citation slide Naïve Bayes - example (1)
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Naïve Bayes can be used for both discrete and continuous attributes.",
            correctAnswer: true,
            explanation: "Naïve Bayes handles both discrete and continuous attributes.",
        }, // citation slide Students' Questions: what if independent attributes are continuous?
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the formula for $P(C_i|E_j)$ in Naïve Bayes?",
            options: [
                "$P(C_i|E_j) = \\frac{P(E_j|C_i) \\cdot P(C_i)}{P(E_j)}$",
                "$P(C_i|E_j) = P(E_j|C_i) \\cdot P(C_i)$",
                "$P(C_i|E_j) = \\frac{P(E_j|C_i)}{P(C_i)}$",
                "$P(C_i|E_j) = P(E_j|C_i)$"
            ],
            correctAnswer: "$P(C_i|E_j) = \\frac{P(E_j|C_i) \\cdot P(C_i)}{P(E_j)}$",
            explanation: "The formula is derived from Bayes' theorem.",
        }, // citation slide Naïve Bayes Classifier
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Naïve Bayes assumes that attributes are conditionally independent given the class.",
            correctAnswer: true,
            explanation: "This is the core assumption of Naïve Bayes.",
        }, // citation slide Naïve Bayes Classifier
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the purpose of the test phase in Naïve Bayes?",
            options: [
                "To compute probabilities from the training data.",
                "To classify new examples.",
                "To estimate the joint probability of attributes.",
                "To handle missing attributes."
            ],
            correctAnswer: "To classify new examples.",
            explanation: "The test phase classifies new examples using the computed probabilities.",
        }, // citation slide Naïve Bayes - example (3)
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Naïve Bayes is sensitive to the presence of redundant attributes.",
            correctAnswer: true,
            explanation: "Redundant attributes can degrade the performance of Naïve Bayes.",
        }, // citation slide Limitations of Naïve Bayes
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the purpose of the imagined occurrences in Naïve Bayes?",
            options: [
                "To increase the dataset size.",
                "To avoid zero probabilities.",
                "To reduce computational complexity.",
                "To improve visualization."
            ],
            correctAnswer: "To avoid zero probabilities.",
            explanation: "Imagined occurrences prevent zero probabilities from collapsing the model.",
        }, // citation slide Naïve Bayes - example (2)
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Naïve Bayes is a generative model.",
            correctAnswer: true,
            explanation: "Naïve Bayes models the joint probability of attributes and class.",
        }, // citation slide Naïve Bayes Classifier
        {
            id: `dm-${++n}`,
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the formula for $P(E_j)$ in Naïve Bayes?",
            options: [
                "$P(E_j) = P(\\text{Attr}_1|C_i) \\cdot P(\\text{Attr}_2|C_i) \\cdot ... \\cdot P(\\text{Attr}_m|C_i)$",
                "$P(E_j) = P(\\text{Attr}_1) \\cdot P(\\text{Attr}_2) \\cdot ... \\cdot P(\\text{Attr}_m)$",
                "$P(E_j) = P(\\text{Attr}_1|C_i) + P(\\text{Attr}_2|C_i) + ... + P(\\text{Attr}_m|C_i)$",
                "$P(E_j) = \\frac{P(\\text{Attr}_1|C_i)}{P(\\text{Attr}_2|C_i)}$"
            ],
            correctAnswer: "$P(E_j) = P(\\text{Attr}_1) \\cdot P(\\text{Attr}_2) \\cdot ... \\cdot P(\\text{Attr}_m)$",
            explanation: "$P(E_j)$ is the joint probability of all attributes.",
        }, // citation slide Bayesian Classification (2)
        {
            id: `dm-${++n}`,
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Naïve Bayes assumes that all attributes are independent of each other.",
            correctAnswer: false,
            explanation: "Naïve Bayes assumes attributes are independent given the class.",
        }, // citation slide Naïve Bayes Classifier
    ];
};
