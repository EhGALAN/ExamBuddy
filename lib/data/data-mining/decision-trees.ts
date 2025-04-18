import {Question} from "../../types";
import {generateGitHubUrlAuto} from "@/lib/utils.ts";

export const questions: (n: number) => Question[] = (n: number) => {
    return [
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the class attribute in the provided training set for classification?",
            options: ["Age", "Position", "Salary", "Buy"],
            correctAnswer: "Buy",
            explanation: "The class attribute is the target variable that the decision tree aims to predict.",
        }, // citation slide "Training Set for Classification: a very simple example"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "In a decision tree, leaf nodes represent predictor attributes.",
            correctAnswer: false,
            explanation: "Leaf nodes represent the predicted class, not predictor attributes.",
        }, // citation slide "Decision Tree Structure - example"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which attribute is used as the root node in the provided decision tree example?",
            options: ["Age", "Position", "Salary"],
            correctAnswer: "Salary",
            explanation: "The root node is labeled with the attribute 'Salary' in the example.",
        }, // citation slide "Decision Tree Structure - example"
        // Generated question for Decision Tree Classification
        (() => {
            const salary = ["low", "medium", "high"][Math.floor(Math.random() * 3)];
            const age = Math.floor(Math.random() * 50) + 18; // Random age between 18 and 67
            const prediction =
                salary === "low"
                    ? "no"
                    : salary === "high"
                        ? "yes"
                        : age <= 25
                            ? "yes"
                            : "no";
            return {
                id: `dm-${++n}`,
                report: generateGitHubUrlAuto(),
                type: "generated",
                subject: "Data Mining & Knowledge Discovery",
                text: `If a new example has a 'Salary' of '${salary}' and an 'Age' of ${age}, what is the predicted class according to the decision tree?`,
                variables: {
                    Salary: salary,
                    Age: age,
                },
                correctAnswer: prediction,
                explanation: `According to the decision tree, if Salary is '${salary}' and Age is ${age}, the predicted class is '${prediction}'.`,
            };
        })(), // citation slide "Decision Tree Structure - example"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the classification rule for examples with 'Salary' = 'high'?",
            options: ["Buy = 'no'", "Buy = 'yes'", "Buy = 'maybe'", "Buy = 'unknown'"],
            correctAnswer: "Buy = 'yes'",
            explanation: "The rule states that if 'Salary' is 'high', then 'Buy' is 'yes'.",
        }, // citation slide "Classification Rules - example"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Decision trees are built in a bottom-up fashion.",
            correctAnswer: false,
            explanation: "Decision trees are built in a top-down fashion.",
        }, // citation slide "Basic idea of decision tree induction"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is NOT a stopping rule for decision tree induction?",
            options: ["All instances belong to a single class", "The maximum tree depth has been reached", "The best splitting criterion is greater than a certain threshold", "The tree has at least 100 nodes"],
            correctAnswer: "The tree has at least 100 nodes",
            explanation: "The number of nodes is not a common stopping rule.",
        }, // citation slide "Stopping Rules"
        // Generated question for Entropy Calculation
        (() => {
            const pYes = Math.random(); // Random probability for "yes" (0 to 1)
            const pNo = 1 - pYes; // Probability for "no"
            const entropy = -(pYes * Math.log2(pYes) + pNo * Math.log2(pNo));
            return {
                id: `dm-${++n}`,
                report: generateGitHubUrlAuto(),
                type: "generated",
                subject: "Data Mining & Knowledge Discovery",
                text: `Calculate the entropy for a binary outcome with probabilities P(yes) = ${pYes.toFixed(2)} and P(no) = ${pNo.toFixed(2)}. (Answer rounded to 2 decimal places)`,
                variables: {
                    "P(yes)": pYes.toFixed(2),
                    "P(no)": pNo.toFixed(2),
                },
                correctAnswer: entropy.toFixed(2),
                explanation: "Entropy is calculated using the formula H(X) = -∑(p_i * log2(p_i)).",
            };
        })(), // citation slide "Entropy"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which attribute has the highest information gain in the provided example?",
            options: ["Age", "Position", "Salary"],
            correctAnswer: "Salary",
            explanation: "The attribute 'Salary' has the highest information gain of 0.485.",
        }, // citation slide "Attribute Selection in Decision Trees using Information Gain (3)"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Information gain has a bias favoring attributes with many values.",
            correctAnswer: true,
            explanation: "Information gain can favor attributes with many values, leading to overfitting.",
        }, // citation slide "Attribute Selection in Decision Trees using Information Gain (4)"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the formula for information gain?",
            options: [
                "$\\text{Gain}(T, A) = H(T) + H(T \\mid A)$",
                "$\\text{Gain}(T, A) = H(T) - H(T \\mid A)$",
                "$\\text{Gain}(T, A) = H(T \\mid A) - H(T)$",
                "$\\text{Gain}(T, A) = \\frac{H(T)}{H(T \\mid A)}$"
            ],
            correctAnswer: "$\\text{Gain}(T, A) = H(T) - H(T \\mid A)$",
            explanation: "Information gain is the difference between the entropy before and after the split.",
        }, // citation slide "Information Gain (2)"
        // Generated question for Information Gain
        (() => {
            const entropy = parseFloat((Math.random() * 1).toFixed(2)); // Random entropy (0 to 1)
            const conditionalEntropy = parseFloat((Math.random() * entropy).toFixed(2)); // Conditional entropy less than entropy
            const informationGain = entropy - conditionalEntropy;
            return {
                id: `dm-${++n}`,
                report: generateGitHubUrlAuto(),
                type: "generated",
                subject: "Data Mining & Knowledge Discovery",
                text: `If the entropy of a dataset is ${entropy} and the conditional entropy after splitting on an attribute is ${conditionalEntropy}, what is the information gain? (Answer rounded to 2 decimal places)`,
                variables: {
                    Entropy: entropy,
                    "Conditional Entropy": conditionalEntropy,
                },
                correctAnswer: informationGain.toFixed(2),
                explanation: "Information gain is calculated as the difference between the entropy and conditional entropy.",
            };
        })(), // citation slide "Information Gain (2)"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which criterion reduces the bias of information gain?",
            options: ["Partition Entropy", "Information Gain Ratio", "Conditional Entropy", "Gini Index"],
            correctAnswer: "Information Gain Ratio",
            explanation: "Information Gain Ratio normalizes the information gain by the partition entropy.",
        }, // citation slide "Attribute Selection in Decision Trees using Information Gain (5)"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Partitioning examples according to unique values of an attribute always leads to overfitting.",
            correctAnswer: true,
            explanation: "Partitioning based on unique values can lead to overfitting, as it creates partitions with single examples.",
        }, // citation slide "Attribute Selection in Decision Trees using Information Gain (4)"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the entropy of a dataset with two outcomes, each having a probability of 0.5?",
            options: ["0", "0.5", "1", "2"],
            correctAnswer: "1",
            explanation: "The entropy of a dataset with equally likely outcomes is 1.",
        }, // citation slide "Entropy for Two Outcomes"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is a common stopping rule for decision tree induction?",
            options: ["All instances belong to a single class", "The tree has at least 50 nodes", "The best splitting criterion is less than a certain threshold", "The maximum tree depth has been reached"],
            correctAnswer: "The maximum tree depth has been reached",
            explanation: "Maximum tree depth is a common stopping rule to prevent overfitting.",
        }, // citation slide "Stopping Rules"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Decision trees are always built using information gain as the attribute selection criterion.",
            correctAnswer: false,
            explanation: "Other criteria like Information Gain Ratio and Gini Index can also be used.",
        }, // citation slide "Attribute Selection in Decision Trees using Information Gain (5)"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the purpose of conditional entropy in decision tree induction?",
            options: ["To measure the entropy of the entire dataset", "To measure the entropy of partitions created by an attribute", "To calculate the information gain", "To determine the stopping rule"],
            correctAnswer: "To measure the entropy of partitions created by an attribute",
            explanation: "Conditional entropy measures the entropy of subsets created by splitting on an attribute.",
        }, // citation slide "Conditional Entropy"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is NOT a type of entropy?",
            options: ["Partition Entropy", "Conditional Entropy", "Information Gain", "Shannon Entropy"],
            correctAnswer: "Information Gain",
            explanation: "Information Gain is a measure of the reduction in entropy, not a type of entropy.",
        }, // citation slide "Partition Entropy"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "The Information Gain Ratio criterion always selects the attribute with the highest information gain.",
            correctAnswer: false,
            explanation: "It selects the attribute with the highest ratio of information gain to partition entropy.",
        }, // citation slide "Attribute Selection in Decision Trees using Information Gain (5)"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the purpose of the Information Gain Ratio criterion?",
            options: ["To maximize information gain", "To minimize partition entropy", "To balance information gain and partition entropy", "To reduce overfitting"],
            correctAnswer: "To balance information gain and partition entropy",
            explanation: "It aims to select attributes that provide a good balance between information gain and partition entropy.",
        }, // citation slide "Attribute Selection in Decision Trees using Information Gain (5)"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is a limitation of the Information Gain criterion?",
            options: ["It favors attributes with many values", "It always selects the attribute with the highest entropy", "It is computationally expensive", "It does not consider partition entropy"],
            correctAnswer: "It favors attributes with many values",
            explanation: "Information Gain can favor attributes with many values, leading to overfitting.",
        }, // citation slide "Attribute Selection in Decision Trees using Information Gain (4)"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Decision trees are built in a recursive manner.",
            correctAnswer: true,
            explanation: "Decision trees are built recursively by partitioning the dataset based on attribute values.",
        }, // citation slide "Basic idea of decision tree induction"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the purpose of the stopping rules in decision tree induction?",
            options: ["To prevent overfitting", "To maximize information gain", "To minimize entropy", "To reduce computational complexity"],
            correctAnswer: "To prevent overfitting",
            explanation: "Stopping rules help prevent overfitting by limiting the tree's growth.",
        }, // citation slide "Stopping Rules"
        // Generated question for Dataset Entropy
        (() => {
            const positiveClasses = Math.floor(Math.random() * 10) + 1; // Random positive classes (1 to 10)
            const totalExamples = Math.floor(Math.random() * 20) + 10; // Random total examples (10 to 30)
            const negativeClasses = totalExamples - positiveClasses;
            const entropy =
                -(positiveClasses / totalExamples) * Math.log2(positiveClasses / totalExamples) -
                (negativeClasses / totalExamples) * Math.log2(negativeClasses / totalExamples);
            return {
                id: `dm-${++n}`,
                report: generateGitHubUrlAuto(),
                type: "generated",
                subject: "Data Mining & Knowledge Discovery",
                text: `If a dataset has ${totalExamples} examples with ${positiveClasses} positive and ${negativeClasses} negative classes, what is the entropy? (Answer rounded to 2 decimal places)`,
                variables: {
                    "Total Examples": totalExamples,
                    "Positive Classes": positiveClasses,
                    "Negative Classes": negativeClasses,
                },
                correctAnswer: entropy.toFixed(2),
                explanation: "Entropy is calculated using the formula H(X) = -∑(p_i * log2(p_i)).",
            };
        })(), // citation slide "Entropy H(T)"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is a benefit of using the Information Gain Ratio criterion?",
            options: ["It always maximizes information gain", "It reduces the bias of information gain", "It is faster than information gain", "It does not require partition entropy"],
            correctAnswer: "It reduces the bias of information gain",
            explanation: "Information Gain Ratio reduces the bias of information gain by normalizing it with partition entropy.",
        }, // citation slide "Attribute Selection in Decision Trees using Information Gain (5)"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "The entropy of a dataset with equally likely outcomes is always 0.",
            correctAnswer: false,
            explanation: "The entropy of a dataset with equally likely outcomes is 1.",
        }, // citation slide "Entropy for Two Outcomes"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is NOT a common attribute selection criterion in decision trees?",
            options: ["Information Gain", "Gini Index", "Chi-Square", "Partition Entropy"],
            correctAnswer: "Partition Entropy",
            explanation: "Partition Entropy is used to normalize information gain, not as a standalone criterion.",
        }, // citation slide "Partition Entropy"
    ];
};
