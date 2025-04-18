import {Question} from "../../types";
import {generateGitHubUrlAuto} from "@/lib/utils.ts";

export const questions: (n: number) => Question[] = (n: number) => {
    return [
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which tool is recommended for managing Python packages and tools in the context of Jupyter Notebooks?",
            options: ["Anaconda", "Docker", "Visual Studio Code", "MATLAB"],
            correctAnswer: "Anaconda",
        }, // citation slide "Working with Jupyter Notebooks"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Machine Learning",
            text: "Jupyter Notebooks can support kernels other than Python, such as R.",
            correctAnswer: true,
        }, // citation slide "Jupyter environment"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What type of cell in a Jupyter Notebook is used for writing and executing Python code?",
            options: ["Markdown cell", "Code cell", "Output cell", "Visualization cell"],
            correctAnswer: "Code cell",
        }, // citation slide "Jupyter environment"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which Python library is primarily used for handling large, multidimensional arrays and matrices?",
            options: ["Pandas", "NumPy", "Matplotlib", "Scikit-Learn"],
            correctAnswer: "NumPy",
        }, // citation slide "Python libraries"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Machine Learning",
            text: "Pandas is a Python library specifically designed for data manipulation and analysis.",
            correctAnswer: true,
        }, // citation slide "Python libraries"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What is the primary purpose of feature scaling in machine learning?",
            options: ["To reduce overfitting", "To handle missing values", "To improve model performance with numerical data", "To encode categorical data"],
            correctAnswer: "To improve model performance with numerical data",
        }, // citation slide "Feature Scaling"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Machine Learning",
            text: "Min-max scaling transforms data to a range of 0 to 1.",
            correctAnswer: true,
        }, // citation slide "Feature Scaling"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is a common technique for handling missing values in a dataset?",
            options: ["One-hot encoding", "Min-max scaling", "SimpleImputer", "StandardScaler"],
            correctAnswer: "SimpleImputer",
        }, // citation slide "Data Cleaning - Missing values"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Machine Learning",
            text: "One-hot encoding is used to transform categorical data into numerical data for machine learning models.",
            correctAnswer: true,
        }, // citation slide "One-hot Encoding"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What is the typical split ratio for training and testing datasets in machine learning?",
            options: ["90/10", "80/20", "70/30", "60/40"],
            correctAnswer: "80/20",
        }, // citation slide "Creating a test set"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Machine Learning",
            text: "Stratified sampling is used to ensure that each subgroup in the data is proportionally represented in the training and testing sets.",
            correctAnswer: true,
        }, // citation slide "Stratified sampling"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is a common performance metric for regression models?",
            options: ["Accuracy", "Precision", "Mean Absolute Error (MAE)", "F1 Score"],
            correctAnswer: "Mean Absolute Error (MAE)",
        }, // citation slide "Performance metric"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Machine Learning",
            text: "Root Mean Square Error (RMSE) is more sensitive to outliers compared to Mean Absolute Error (MAE).",
            correctAnswer: true,
        }, // citation slide "Performance metrics"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What is the purpose of feature engineering in machine learning?",
            options: ["To reduce the size of the dataset", "To create new features from existing ones", "To remove outliers", "To normalize the data"],
            correctAnswer: "To create new features from existing ones",
        }, // citation slide "Feature Engineering"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Machine Learning",
            text: "Standardization (z-score) centers data around the mean with unit variance.",
            correctAnswer: true,
        }, // citation slide "Feature Scaling"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is NOT a step in the machine learning pipeline?",
            options: ["Data collection", "Model deployment", "Feature scaling", "Algorithm selection"],
            correctAnswer: "Algorithm selection",
        }, // citation slide "ML Pipeline"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Machine Learning",
            text: "Correlation coefficients range from -1 to 1, where values closer to 1 indicate a strong positive correlation.",
            correctAnswer: true,
        }, // citation slide "Going deeper - correlations"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What is the purpose of visualizations in the context of machine learning?",
            options: ["To clean the data", "To explore correlations between features", "To scale the data", "To impute missing values"],
            correctAnswer: "To explore correlations between features",
        }, // citation slide "Visualisations"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Machine Learning",
            text: "Ordinal data has an intrinsic order, while categorical data does not.",
            correctAnswer: true,
        }, // citation slide "Data representation"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is a common library for plotting in Python?",
            options: ["NumPy", "Pandas", "Matplotlib", "Scikit-Learn"],
            correctAnswer: "Matplotlib",
        }, // citation slide "Python libraries"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "true-false",
            subject: "Machine Learning",
            text: "In machine learning, outliers can significantly affect the results of min-max scaling but have less impact on standardization.",
            correctAnswer: true,
        }, // citation slide "Feature Scaling"
        {
            id: `ml-${++n}`,
            report: generateGitHubUrlAuto(),
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What is the primary goal of the machine learning pipeline?",
            options: ["To automate data collection", "To streamline the process of building and deploying models", "To reduce computational costs", "To eliminate the need for feature engineering"],
            correctAnswer: "To streamline the process of building and deploying models",
        }, // citation slide "ML Pipeline"
        // Min-Max Scaling Generated Question
        (() => {
            const minValue = Math.floor(Math.random() * 100); // Random min value
            const maxValue = minValue + Math.floor(Math.random() * 100) + 1; // Random max value (greater than min)
            const originalValue = Math.floor(Math.random() * (maxValue - minValue) + minValue); // Random value within the range
            const scaledValue = (originalValue - minValue) / (maxValue - minValue);

            return {
                id: `ml-${++n}`,
                report: generateGitHubUrlAuto(),
                type: "generated",
                subject: "Machine Learning",
                text: `Calculate the min-max scaled value for a feature with min=${minValue}, max=${maxValue}, and original value=${originalValue}. (Round the answer to 2 decimal places)`,
                variables: {
                    "Min Value": minValue,
                    "Max Value": maxValue,
                    "Original Value": originalValue,
                },
                correctAnswer: Math.round(scaledValue * 100) / 100,
            };
        })(), // citation slide "Feature Scaling"

        // Standardization Generated Question
        (() => {
            const meanValue = Math.floor(Math.random() * 50); // Random mean value
            const stdDev = Math.floor(Math.random() * 20) + 1; // Random standard deviation (non-zero)
            const originalValue = Math.floor(Math.random() * (meanValue + 2 * stdDev) + (meanValue - 2 * stdDev)); // Random value within 2 std deviations of the mean
            const standardizedValue = (originalValue - meanValue) / stdDev;

            return {
                id: `ml-${++n}`,
                report: generateGitHubUrlAuto(),
                type: "generated",
                subject: "Machine Learning",
                text: `Calculate the standardized value for a feature with mean=${meanValue}, standard deviation=${stdDev}, and original value=${originalValue}. (Round the answer to 2 decimal places)`,
                variables: {
                    "Mean Value": meanValue,
                    "Standard Deviation": stdDev,
                    "Original Value": originalValue,
                },
                correctAnswer: Math.round(standardizedValue * 100) / 100,
            };
        })(), // citation slide "Feature Scaling"

        // Mean Absolute Error (MAE) Generated Question
        (() => {
            const numSamples = Math.floor(Math.random() * 10) + 5; // Random number of samples (5-15)
            const targetValues = Array.from({length: numSamples}, () => Math.floor(Math.random() * 100)); // Random target values
            const predictedValues = targetValues.map(v => v + Math.floor(Math.random() * 20) - 10); // Random predictions with some error
            const mae = (1 / numSamples) * predictedValues.reduce((sum, pred, i) => sum + Math.abs(pred - targetValues[i]), 0);

            return {
                id: `ml-${++n}`,
                report: generateGitHubUrlAuto(),
                type: "generated",
                subject: "Machine Learning",
                text: `Calculate the Mean Absolute Error (MAE) for the following target and predicted values: ${targetValues.join(", ")} (target) and ${predictedValues.join(", ")} (predicted). (Round the answer to 2 decimal places)`,
                variables: {
                    "Target Values": targetValues,
                    "Predicted Values": predictedValues,
                },
                correctAnswer: Math.round(mae * 100) / 100,
            };
        })(), // citation slide "Mean Absolute Error (MAE)"

        // Root Mean Square Error (RMSE) Generated Question
        (() => {
            const numSamples = Math.floor(Math.random() * 10) + 5; // Random number of samples (5-15)
            const targetValues = Array.from({length: numSamples}, () => Math.floor(Math.random() * 100)); // Random target values
            const predictedValues = targetValues.map(v => v + Math.floor(Math.random() * 20) - 10); // Random predictions with some error
            const rmse = Math.sqrt(
                (1 / numSamples) * predictedValues.reduce((sum, pred, i) => sum + Math.pow(pred - targetValues[i], 2), 0)
            );

            return {
                id: `ml-${++n}`,
                report: generateGitHubUrlAuto(),
                type: "generated",
                subject: "Machine Learning",
                text: `Calculate the Root Mean Square Error (RMSE) for the following target and predicted values: ${targetValues.join(", ")} (target) and ${predictedValues.join(", ")} (predicted). (Round the answer to 2 decimal places)`,
                variables: {
                    "Target Values": targetValues,
                    "Predicted Values": predictedValues,
                },
                correctAnswer: Math.round(rmse * 100) / 100,
            };
        })(), // citation slide "Root Mean Square Error (RMSE)"
    ];
};
