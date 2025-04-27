import {Question} from "../../types";
import {generateGitHubUrlAuto} from "@/lib/utils.ts";

export const questions: (n: number) => Question[] = (n: number) => {
    return [
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What does KDD stand for in the context of data mining?",
            options: ["Knowledge Discovery and Data Mining", "Knowledge Data Distribution", "Knowledge-Driven Development", "Knowledge Discovery Database"],
            correctAnswer: "Knowledge Discovery and Data Mining",
        }, // citation slide "A bit of terminology - Fayyad et al. (1996)"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Data Mining is the only step involved in the Knowledge Discovery process.",
            correctAnswer: false,
        }, // citation slide "A bit of terminology - Fayyad et al. (1996)"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which phase of the CRISP-DM process involves understanding the business objectives?",
            options: ["Business understanding", "Data understanding", "Data preparation", "Modelling"],
            correctAnswer: "Business understanding",
        }, // citation slide "The CRISP-DM Process Model for Knowledge Discovery"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "The CRISP-DM process is linear and does not involve feedback to previous phases.",
            correctAnswer: false,
        }, // citation slide "The CRISP-DM Process Model for Knowledge Discovery"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is a major data quality issue that can arise from faulty data-collection equipment?",
            options: ["Noisy data", "Incompleteness", "Inconsistent data", "Redundant data"],
            correctAnswer: "Noisy data",
        }, // citation slide "Major data quality issues"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Missing values in a dataset are always a result of data not being entered due to misunderstanding or lack of time.",
            correctAnswer: false,
        }, // citation slide "Major data quality issues"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which technique is used to smooth noisy data by distributing values into bins?",
            options: ["Normalization", "Binning", "Clustering", "Regression"],
            correctAnswer: "Binning",
        }, // citation slide "Trying to reduce noise - Binning (1)"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "In binning, equal-depth bins ensure a constant range of values in each bin.",
            correctAnswer: false,
        }, // citation slide "Trying to reduce noise - Binning (1)"
        (() => {
            const binValues = Array(7).map(() => Math.floor(Math.random() * 20));
            const bin = binValues.sort((a, b) => a - b);
            const median = bin[Math.floor(bin.length / 2)];
            return {
                id: `dm-${++n}`,
                report: generateGitHubUrlAuto(),
                type: "generated",
                subject: "Data Mining & Knowledge Discovery",
                text: "What is the median value in the bin ?",
                variables: {
                    "Bin values": bin,
                },
                correctAnswer: median,
            }
        })(), // citation slide "Trying to reduce noise - Binning (2)"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Binning is always beneficial for improving data quality.",
            correctAnswer: false,
        }, // citation slide "Trying to reduce noise - Binning (2)"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What was the reason for the anomalous pattern of 5% of customers being born on the same day?",
            options: ["Data entry error", "Birth rate spike", "Seasonal trend", "Random coincidence"],
            correctAnswer: "Data entry error",
        }, // citation slide "Real-world examples of data-quality problems"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "The doubling of sales on US e-commerce websites on the 30th of October 2005 was due to a marketing campaign.",
            correctAnswer: false,
        }, // citation slide "Real-world examples of data-quality problems (cont.)"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which approach involves removing all records with missing values?",
            options: ["Imputation", "Removal", "Prediction", "Default value replacement"],
            correctAnswer: "Removal",
        }, // citation slide "Approaches for coping with missing values"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Replacing missing values with the mean of known values reduces an attribute's variability.",
            correctAnswer: true,
        }, // citation slide "Approaches for coping with missing values"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is a common cause of redundant data in integrated datasets?",
            options: ["Different attribute names", "Derived attributes", "Inconsistent scales", "Duplicate records"],
            correctAnswer: "Different attribute names",
        }, // citation slide "Redundant data"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Feature construction always makes it easier to interpret a model learned from transformed data.",
            correctAnswer: false,
        }, // citation slide "Feature Construction"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the goal of Principal Component Analysis (PCA)?",
            options: ["To reduce data dimensionality", "To increase data variability", "To normalize data", "To cluster data"],
            correctAnswer: "To reduce data dimensionality",
        }, // citation slide "Overview of Principal Component Analysis (PCA)"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "PCA constructs new features that capture a small amount of variance in the data.",
            correctAnswer: false,
        }, // citation slide "Overview of Principal Component Analysis (PCA)"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which approach to attribute selection is independent of the classification algorithm?",
            options: ["Filter approach", "Wrapper approach", "Hybrid approach", "Heuristic approach"],
            correctAnswer: "Filter approach",
        }, // citation slide "Filter vs. Wrapper approaches (1)"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "The wrapper approach evaluates attribute subsets by measuring the classification accuracy of the target algorithm.",
            correctAnswer: true,
        }, // citation slide "Filter vs. Wrapper approaches (1)"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is a limitation of the filter approach in attribute selection?",
            options: ["It is algorithm-dependent", "It does not evaluate attribute subsets", "It is computationally expensive", "It requires domain knowledge"],
            correctAnswer: "It does not evaluate attribute subsets",
        }, // citation slide "Filter vs. Wrapper approaches (2)"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "The wrapper approach uses the same evaluation function as the filter approach.",
            correctAnswer: false,
        }, // citation slide "Filter vs. Wrapper approaches (2)"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which method adds one attribute at a time to the set of selected attributes?",
            options: ["Forward Sequential Selection", "Backward Sequential Selection", "Greedy Selection", "Exhaustive Search"],
            correctAnswer: "Forward Sequential Selection",
        }, // citation slide "Forward Sequential Attribute Selection (1)"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Backward Sequential Selection starts with the full set of attributes and removes one attribute at a time.",
            correctAnswer: true,
        }, // citation slide "Backward Sequential Attribute Selection (1)"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is a disadvantage of under-sampling the majority class?",
            options: ["It introduces redundancy", "It increases computational time", "It throws away relevant information", "It requires domain knowledge"],
            correctAnswer: "It throws away relevant information",
        }, // citation slide "Under-sampling"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Over-sampling the minority class avoids the loss of instances associated with under-sampling.",
            correctAnswer: true,
        }, // citation slide "Over-sampling (1)"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What does SMOTE stand for in the context of over-sampling?",
            options: ["Synthetic Minority Oversampling Technique", "Standardized Minority Over-sampling Technique", "Selective Minority Over-sampling Technique", "Sequential Minority Over-sampling Technique"],
            correctAnswer: "Synthetic Minority Oversampling Technique",
        }, // citation slide "Over-sampling (2)"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "SMOTE creates synthetic instances by duplicating existing minority class instances.",
            correctAnswer: false,
        }, // citation slide "Over-sampling (2)"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the cost of misclassifying an instance of the minority class called?",
            options: ["FP_cost", "FN_cost", "TP_cost", "TN_cost"],
            correctAnswer: "FN_cost",
        }, // citation slide "Cost-Sensitive Learning (1)"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "In cost-sensitive learning, FN_cost is always greater than FP_cost.",
            correctAnswer: true,
        }, // citation slide "Cost-Sensitive Learning (1)"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is a reasonable default value for FN_cost if no expert knowledge is available?",
            options: ["1", "ICR", "FP_cost", "0"],
            correctAnswer: "ICR",
        }, // citation slide "Cost-Sensitive Learning (2)"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "The ICR (Imbalanced Class Ratio) is always reduced to 1 in re-sampling techniques.",
            correctAnswer: false,
        }, // citation slide "Re-sampling techniques"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is NOT a phase of the CRISP-DM process?",
            options: ["Data cleaning", "Data preparation", "Data understanding", "Deployment"],
            correctAnswer: "Data cleaning",
        }, // citation slide "The CRISP-DM Process Model for Knowledge Discovery"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Inconsistent data can occur due to differences in attribute value scales, such as km vs miles.",
            correctAnswer: true,
        }, // citation slide "Major data quality issues"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the main challenge of imbalanced classes in classification tasks?",
            options: ["Increased computational time", "Difficulty in measuring predictive performance", "Over-prediction of the minority class", "Under-prediction of the majority class"],
            correctAnswer: "Difficulty in measuring predictive performance",
        }, // citation slide "The problem of imbalanced classes"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Classification algorithms tend to under-predict the majority class and over-predict the minority class.",
            correctAnswer: false,
        }, // citation slide "The problem of imbalanced classes"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which technique involves creating synthetic instances along the line joining a minority class instance and its nearest neighbors?",
            options: ["Under-sampling", "Over-sampling", "SMOTE", "Cost-Sensitive Learning"],
            correctAnswer: "SMOTE",
        }, // citation slide "Over-sampling (2)"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Feature construction always improves the interpretability of a model.",
            correctAnswer: false,
        }, // citation slide "Feature Construction"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the goal of the data preparation phase in the CRISP-DM process?",
            options: ["To apply data mining algorithms", "To evaluate the model", "To deploy the model", "To select and construct attributes"],
            correctAnswer: "To select and construct attributes",
        }, // citation slide "The CRISP-DM Process Model for Knowledge Discovery"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Binning is a technique used to reduce noise in data by replacing values with more representative values.",
            correctAnswer: true,
        }, // citation slide "Trying to reduce noise - Binning (1)"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "The CRISP-DM process is not iterative and does not involve user interaction.",
            correctAnswer: false,
        }, // citation slide "The CRISP-DM Process Model for Knowledge Discovery"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "Which of the following is a common cause of missing values in a dataset?",
            options: ["Data not entered due to misunderstanding", "Value of an attribute is not applicable", "Value of the attribute is not known", "All of the above"],
            correctAnswer: "All of the above",
        }, // citation slide "Coping with missing values"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "Redundant data should always be removed from a dataset.",
            correctAnswer: true,
        }, // citation slide "Redundant data"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Data Mining & Knowledge Discovery",
            text: "What is the main advantage of the filter approach in attribute selection?",
            options: ["It is algorithm-dependent", "It is computationally efficient", "It evaluates attribute subsets", "It is more accurate"],
            correctAnswer: "It is computationally efficient",
        }, // citation slide "Filter vs. Wrapper approaches (2)"
        {
            id: `dm-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Data Mining & Knowledge Discovery",
            text: "The wrapper approach is always more accurate than the filter approach.",
            correctAnswer: false,
        }, // citation slide "Filter vs. Wrapper approaches (2)"
    ];
};
