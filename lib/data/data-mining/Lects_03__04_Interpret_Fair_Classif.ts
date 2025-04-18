import {Question} from "../../types";
import {generateGitHubUrlAuto} from "@/lib/utils.ts";

export const questions: (n: number) => Question[] = (n: number) => {
    return [
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is a key motivation for learning interpretable classification models?",
            options: ["Improving model accuracy", "Reducing computational cost", "Increasing user trust in predictions", "Ensuring faster training times"],
            correctAnswer: "Increasing user trust in predictions",
            explanation: "Understanding a model often improves the chances that the user will trust the model's predictions.",
        }, // citation slide Motivation for learning interpretable classification models
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Intrinsic interpretability is specific to each type of model.",
            correctAnswer: true,
            explanation: "Intrinsic interpretability is specific to each type of model, such as decision trees or Naïve Bayes.",
        }, // citation slide In-model (intrinsic) vs. Post-model (post-hoc) interpretability approaches
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which approach is mainly used for black-box models like neural networks?",
            options: ["Intrinsic interpretability", "Post-hoc interpretability", "Global interpretability", "Local interpretability"],
            correctAnswer: "Post-hoc interpretability",
            explanation: "Post-hoc interpretability is mainly used for black-box models and is typically model-agnostic.",
        }, // citation slide In-model (intrinsic) vs. Post-model (post-hoc) interpretability approaches
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What does global interpretability refer to?",
            options: ["Interpreting the entire model at once", "Explaining the prediction of each testing example separately", "Analyzing the model's training data", "Evaluating the model's performance metrics"],
            correctAnswer: "Interpreting the entire model at once",
            explanation: "Global interpretability involves interpreting the entire model at once, understanding how features interact to predict class labels in general.",
        }, // citation slide Scope of the interpretability: global vs. local
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Local interpretability focuses on explaining the prediction of each testing example separately.",
            correctAnswer: true,
            explanation: "Local interpretability involves explaining the prediction of each testing example or small group of examples separately.",
        }, // citation slide Scope of the interpretability: global vs. local
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is an example of an intrinsic, global interpretation of a white-box model?",
            options: ["A decision tree", "A neural network", "A support vector machine", "A k-nearest neighbors model"],
            correctAnswer: "A decision tree",
            explanation: "A decision tree is an example of a white-box model that can be interpreted globally if it is small and the features are interpretable.",
        }, // citation slide Example of intrinsic, global interpretation of a white box model: a decision tree
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "generated",
            subject: "Data Mining & Knowledge Discovery",
            text: "Convert the following decision tree path into an IF-THEN rule: Salary = 'medium', Age ≤ 25, Buy = 'yes'.",
            variables: {
                "Salary": "medium",
                "Age": "≤ 25",
                "Buy": "yes",
            },
            correctAnswer: "IF (Salary = 'medium' AND Age ≤ 25) THEN (Buy = 'yes')",
            explanation: "Each path from the root to a leaf in a decision tree represents a rule.",
        }, // citation slide Converting a decision tree into a rule set
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which attribute is most important for predicting 'good' or 'bad' credit in the given decision tree?",
            options: ["Salary", "Age", "Own_house", "Education"],
            correctAnswer: "Salary",
            explanation: "The attribute closest to the root is generally the most important for classification.",
        }, // citation slide Exercise on interpreting decision trees
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "A decision tree typically contains only a subset of the most relevant attributes.",
            correctAnswer: true,
            explanation: "Decision trees often include only the most relevant attributes, making the model more interpretable.",
        }, // citation slide Interpreting decision trees: the pros
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is a limitation of decision trees in terms of attribute selection?",
            options: ["They always select the most relevant attributes.", "They replicate attributes and cause data fragmentation.", "They ignore irrelevant attributes.", "They are always visually interpretable."],
            correctAnswer: "They replicate attributes and cause data fragmentation.",
            explanation: "Once an attribute is selected at a node, all its values must be added to the outgoing branches, leading to replication and fragmentation.",
        }, // citation slide Interpreting decision trees: the cons
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "IF-THEN rules can be directly extracted from a decision tree.",
            correctAnswer: true,
            explanation: "Each path from the root to a leaf in a decision tree can be converted into an IF-THEN rule.",
        }, // citation slide Learning IF-THEN Classification Rules
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is a limitation of measuring simplicity in terms of model size?",
            options: ["It ignores the meaning of the attributes.", "It always prefers shorter models.", "It is purely syntactic.", "It is always accurate."],
            correctAnswer: "It ignores the meaning of the attributes.",
            explanation: "Simplicity measures like model size are syntactic and ignore the semantic meaning of attributes.",
        }, // citation slide Limitations of measuring simplicity (proxy for interpretability) in terms of model size
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "The Naïve Bayes model assigns a class to a new example based on the highest product of conditional probabilities and class probabilities.",
            correctAnswer: true,
            explanation: "The Naïve Bayes formula assigns a class to a new example by maximizing the product of conditional probabilities and class probabilities.",
        }, // citation slide Recap of Naïve Bayes models (1)
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "generated",
            subject: "Data Mining & Knowledge Discovery",
            text: "Calculate the probability of the class 'no' for a new example with BT = Pos., Fever = none, using the given Naïve Bayes model.",
            variables: {
                "P(Pos. BT | no)": 0.3,
                "P(no fever | no)": 0.7,
                "P(no)": 0.6,
            },
            correctAnswer: 0.126,
            explanation: "The probability is calculated as P(Pos. BT | no) * P(no fever | no) * P(no).",
        }, // citation slide Recap of Naïve Bayes models (2): example
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is a local, post-hoc interpretability method?",
            options: ["LIME", "Decision Trees", "Naïve Bayes", "Rule Sets"],
            correctAnswer: "LIME",
            explanation: "LIME is a local, post-hoc interpretability method that learns a local explanation model for each new example.",
        }, // citation slide Local, post-hoc interpretability
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "LIME learns a linear-equation model as a local explanation for the classification of a new instance.",
            correctAnswer: true,
            explanation: "LIME uses a linear-equation model to explain the classification of a new instance locally.",
        }, // citation slide LIME: Local Interpretable Model-agnostic Explanations [Ribeiro et al. 2016]
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is a limitation of LIME's explanations?",
            options: ["They are always accurate.", "They are globally interpretable.", "The data space region where the explanation applies is unclear.", "They are always syntactic."],
            correctAnswer: "The data space region where the explanation applies is unclear.",
            explanation: "LIME's explanations are local, and the region of the data space where they apply is not always clear.",
        }, // citation slide Example of LIME's explanations
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "The local linear model in LIME depends on the size of the neighborhood around the instance being explained.",
            correctAnswer: true,
            explanation: "The local linear model in LIME is influenced by the size of the neighborhood around the instance.",
        }, // citation slide The local linear model depends on the size of the neighbourhood around x
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is a key challenge in learning fair classification models?",
            options: ["Data is usually biased.", "Classification algorithms are always unbiased.", "Fairness is easy to achieve.", "Bias amplification is rare."],
            correctAnswer: "Data is usually biased.",
            explanation: "Data is often biased, making it challenging to learn fair classification models.",
        }, // citation slide Introduction: learning from biased data
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Bias amplification occurs when a machine learning model increases the bias present in the training data.",
            correctAnswer: true,
            explanation: "Bias amplification happens when a model exacerbates the biases present in the training data.",
        }, // citation slide Examples of Bias Amplification by Machine Learning
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is an example of bias in gender classification?",
            options: ["Equal error rates for all groups.", "Higher error rates for darker-skinned females.", "Lower error rates for lighter-skinned males.", "No bias in any group."],
            correctAnswer: "Higher error rates for darker-skinned females.",
            explanation: "Bias in gender classification often results in higher error rates for certain demographic groups, such as darker-skinned females.",
        }, // citation slide Bias in gender classification - face recognition (2)
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "The Discrimination Score (DS) measures the difference in the probability of a positive outcome between favoured and unfavoured groups.",
            correctAnswer: true,
            explanation: "The Discrimination Score (DS) is used to measure unfairness by comparing the probabilities of positive outcomes between groups.",
        }, // citation slide Unfairness Measures for the Classification Task (1)
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is a pre-processing approach to achieve fairness in classification?",
            options: ["Removing sensitive attributes", "Modifying the classification algorithm", "Post-processing the model's predictions", "Reweighing examples"],
            correctAnswer: "Removing sensitive attributes",
            explanation: "Removing sensitive attributes is a pre-processing approach to achieve fairness, though it may not be very effective in practice.",
        }, // citation slide Approaches for learning fair classifiers
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Removing sensitive attributes can still lead to unfair classifications if other correlated attributes remain in the dataset.",
            correctAnswer: true,
            explanation: "Attributes correlated with sensitive attributes can still lead to unfair classifications even after the sensitive attributes are removed.",
        }, // citation slide Removing sensitive attributes ('fairness through unawareness')
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is a limitation of the 'fairness through unawareness' approach?",
            options: ["It is always effective.", "It makes detecting biases more difficult.", "It eliminates all biases.", "It is easy to implement."],
            correctAnswer: "It makes detecting biases more difficult.",
            explanation: "Removing sensitive attributes can make it harder to detect biases in the learned model.",
        }, // citation slide Removing sensitive attributes ('fairness through unawareness')
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Data massaging involves changing the class labels of some examples to make the data fairer.",
            correctAnswer: true,
            explanation: "Data massaging changes the class labels of certain examples to reduce bias in the training data.",
        }, // citation slide Data Massaging Approach [Calders et al. 2009]
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which examples are promoted in the data massaging approach?",
            options: ["Examples with high probability of the favoured class.", "Examples with low probability of the unfavoured class.", "Examples closer to the class boundary.", "Randomly selected examples."],
            correctAnswer: "Examples closer to the class boundary.",
            explanation: "Examples closer to the class boundary are re-labelled to minimize the loss of accuracy.",
        }, // citation slide Data Massaging Approach - Example
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Reweighing assigns weights to examples based on their sensitive attribute value and class label.",
            correctAnswer: true,
            explanation: "Reweighing assigns higher or lower weights to examples based on their sensitive attribute value and class label.",
        }, // citation slide Reweighing: Assigning Weights to Examples [Calders et al. 2009]
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is a challenge in learning fair classification models?",
            options: ["Data is usually unbiased.", "Classification algorithms can amplify biases.", "Fairness measures are always consistent.", "Pre-processing approaches are always sufficient."],
            correctAnswer: "Classification algorithms can amplify biases.",
            explanation: "Classification algorithms can learn models that are more biased than the original data.",
        }, // citation slide Summary
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "There is no single best measure of unfairness in classification tasks.",
            correctAnswer: true,
            explanation: "The choice of the best unfairness measure depends on the application domain.",
        }, // citation slide Summary
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is a post-hoc interpretability method?",
            options: ["LIME", "Decision Trees", "Naïve Bayes", "Rule Sets"],
            correctAnswer: "LIME",
            explanation: "LIME is a post-hoc interpretability method that explains the predictions of any classifier.",
        }, // citation slide LIME: Local Interpretable Model-agnostic Explanations [Ribeiro et al. 2016]
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Post-hoc interpretability methods are usually model-agnostic and do not access the model's inner workings.",
            correctAnswer: true,
            explanation: "Post-hoc methods are typically model-agnostic and do not depend on the model's internal structure.",
        }, // citation slide Local, post-hoc interpretability
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is a limitation of post-hoc interpretability methods?",
            options: ["They are always accurate.", "They are surrogate models.", "They are globally interpretable.", "They are always syntactic."],
            correctAnswer: "They are surrogate models.",
            explanation: "Post-hoc methods are surrogate models and may not fully capture the complexity of the original model.",
        }, // citation slide Summary
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "A shorter model is not necessarily more interpretable than a larger one.",
            correctAnswer: true,
            explanation: "Users may prefer longer rules if they are more specific and precise, even if they have less statistical support.",
        }, // citation slide Limitations of measuring simplicity (proxy for interpretability) in terms of model size
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is a key motivation for learning interpretable classification models?",
            options: ["Improving model accuracy", "Reducing computational cost", "Ensuring legal compliance", "Ensuring faster training times"],
            correctAnswer: "Ensuring legal compliance",
            explanation: "Legal requirements often mandate the need for interpretable models to justify predictions.",
        }, // citation slide Motivation for learning interpretable classification models
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Intrinsic interpretability is specific to each type of model, such as decision trees or Naïve Bayes.",
            correctAnswer: true,
            explanation: "Intrinsic interpretability depends on the specific model type and its structure.",
        }, // citation slide In-model (intrinsic) vs. Post-model (post-hoc) interpretability approaches
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is a limitation of decision trees?",
            options: ["They always select the most relevant attributes.", "They replicate attributes and cause data fragmentation.", "They ignore irrelevant attributes.", "They are always visually interpretable."],
            correctAnswer: "They replicate attributes and cause data fragmentation.",
            explanation: "Decision trees replicate attributes and cause data fragmentation, which can reduce interpretability.",
        }, // citation slide Interpreting decision trees: the cons
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "IF-THEN rules can be learned directly from data, not just extracted from decision trees.",
            correctAnswer: true,
            explanation: "IF-THEN rules can be learned directly from data or extracted from decision trees.",
        }, // citation slide Learning IF-THEN Classification Rules
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is a limitation of measuring simplicity in terms of model size?",
            options: ["It ignores the meaning of the attributes.", "It always prefers shorter models.", "It is purely syntactic.", "It is always accurate."],
            correctAnswer: "It ignores the meaning of the attributes.",
            explanation: "Simplicity measures like model size are syntactic and ignore the semantic meaning of attributes.",
        }, // citation slide Limitations of measuring simplicity (proxy for interpretability) in terms of model size
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "The Naïve Bayes model assigns a class to a new example based on the highest product of conditional probabilities and class probabilities.",
            correctAnswer: true,
            explanation: "The Naïve Bayes formula assigns a class to a new example by maximizing the product of conditional probabilities and class probabilities.",
        }, // citation slide Recap of Naïve Bayes models (1)
        (() => {
            const PosBT_no = parseFloat(Math.random().toFixed(2));
            const no_fever_no = parseFloat(Math.random().toFixed(2));
            const no = parseFloat(Math.random().toFixed(2));

            return {
                id: `dm-${++n}`,
                report: generateGitHubUrlAuto(),
                type: "generated",
                subject: "Data Mining & Knowledge Discovery",
                text: "Calculate the probability of the class 'no' for a new example with BT = Pos., Fever = none, using the given Naïve Bayes model. (Answer to 2 decimal places)",
                variables: {
                    "P(Pos. BT | no)": PosBT_no,
                    "P(no fever | no)": no_fever_no,
                    "P(no)": no,
                },
                correctAnswer: Math.round((PosBT_no * no_fever_no * no) * 100) / 100,
                explanation: "The probability is calculated as P(Pos. BT | no) * P(no fever | no) * P(no).",

            }
        })(), // citation slide Recap of Naïve Bayes models (2): example
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is a local, post-hoc interpretability method?",
            options: ["LIME", "Decision Trees", "Naïve Bayes", "Rule Sets"],
            correctAnswer: "LIME",
            explanation: "LIME is a local, post-hoc interpretability method that learns a local explanation model for each new example.",
        }, // citation slide Local, post-hoc interpretability
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "LIME learns a linear-equation model as a local explanation for the classification of a new instance.",
            correctAnswer: true,
            explanation: "LIME uses a linear-equation model to explain the classification of a new instance locally.",
        }, // citation slide LIME: Local Interpretable Model-agnostic Explanations [Ribeiro et al. 2016]
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is a limitation of LIME's explanations?",
            options: ["They are always accurate.", "They are globally interpretable.", "The data space region where the explanation applies is unclear.", "They are always syntactic."],
            correctAnswer: "The data space region where the explanation applies is unclear.",
            explanation: "LIME's explanations are local, and the region of the data space where they apply is not always clear.",
        }, // citation slide Example of LIME's explanations
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "The local linear model in LIME depends on the size of the neighborhood around the instance being explained.",
            correctAnswer: true,
            explanation: "The local linear model in LIME is influenced by the size of the neighborhood around the instance.",
        }, // citation slide The local linear model depends on the size of the neighbourhood around x
    ];
};
