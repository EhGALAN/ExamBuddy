import {Question} from "../../types";

export const questions: (n: number) => Question[] = (n: number) => {
    return [
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What does the term 'SVM' stand for in the context of machine learning?",
            options: ["Support Vector Machine", "Supervised Vector Model", "Sequential Vector Machine", "Statistical Vector Method"],
            correctAnswer: "Support Vector Machine",
        }, // citation slide "Support Vector Machines"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "Support Vector Machines (SVM) can be used for both classification and regression tasks.",
            correctAnswer: true,
        }, // citation slide "Support Vector Machines"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is NOT a predictor attribute in the given classification example?",
            options: ["Age", "Position", "Salary", "Buy"],
            correctAnswer: "Buy",
        }, // citation slide "Classification-Example"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "In SVM, the target function $f(x)$ maps input features $x$ to the target label $y$.",
            correctAnswer: true,
        }, // citation slide "Classification and Learning from Data"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is NOT an example of a machine learning model?",
            options: ["Neural Networks", "Support Vector Machines", "Decision Trees", "Conditional Probability Tables"],
            correctAnswer: "Conditional Probability Tables",
        }, // citation slide "Classification and Learning from Data"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "In a 2D space, a separating hyperplane in SVM is represented by the equation $ w_1 x^{(1)} + w_2 x^{(2)} + b = 0 $.",
            correctAnswer: true,
        }, // citation slide "Data in 2D and a Separating Hyperplane"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What does the term $ b $ represent in the equation of a separating hyperplane?",
            options: ["Slope", "Intercept", "Margin", "Weight"],
            correctAnswer: "Intercept",
        }, // citation slide "Data in 2D and a Separating Hyperplane"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "The classification objective in SVM is to ensure that $ y_i \\times (\\langle w, x_i \\rangle + b) \\geq 0 $.",
            correctAnswer: true,
        }, // citation slide "Classification using Separating Hyperplanes"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is NOT a factor that influences the choice of a hyperplane in SVM?",
            options: ["Margin", "Weight vector $ w $", "Bias term $ b $", "Loss function"],
            correctAnswer: "Loss function",
        }, // citation slide "Which Hyperplane to Choose?"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "The margin in SVM is defined as the distance between the hyperplane and the closest data points.",
            correctAnswer: true,
        }, // citation slide "Concept of the Margin"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What does the term $ r $ represent in the context of the margin in SVM?",
            options: ["Radius", "Regularization parameter", "Margin distance", "Residual error"],
            correctAnswer: "Margin distance",
        }, // citation slide "Concept of the Margin"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "In Hard Margin SVM, the value of the predictor $ \\langle w, x \\rangle + b $ is set to 1 at the closest example.",
            correctAnswer: true,
        }, // citation slide "Hard Margin SVM"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is NOT a component of the optimization problem in Hard Margin SVM?",
            options: ["Minimizing $ \\frac{1}{2} \\|w\\|^2 $", "Maximizing the margin $ r $", "Slack variables $ \\\\xi_i $", "Constraint $ y_i \\times (\\langle w, x_i \\rangle + b) \\geq 1 $"],
            correctAnswer: "Slack variables $ \\\\xi_i $",
        }, // citation slide "Hard Margin SVM"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "Soft Margin SVM introduces slack variables $ \\\\xi_i $ to handle cases where data is not linearly separable.",
            correctAnswer: true,
        }, // citation slide "Soft Margin SVM"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What does the term $ \\\\xi_i $ represent in Soft Margin SVM?",
            options: ["Weight vector", "Bias term", "Slack variable", "Regularization parameter"],
            correctAnswer: "Slack variable",
        }, // citation slide "Soft Margin SVM"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "In Soft Margin SVM, a high value of $ C $ implies a smaller margin.",
            correctAnswer: true,
        }, // citation slide "Soft Margin SVM"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is NOT a loss function used in SVM?",
            options: ["Zero-one loss", "Hinge loss", "Squared loss", "Logistic loss"],
            correctAnswer: "Logistic loss",
        }, // citation slide "Hinge loss"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "The hinge loss function is zero when $ t \\geq 1 $.",
            correctAnswer: true,
        }, // citation slide "Hinge loss"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What does the term $ t $ represent in the context of the hinge loss?",
            options: ["Target label", "Predicted label", "Margin distance", "Slack variable"],
            correctAnswer: "Predicted label",
        }, // citation slide "Hinge loss"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "The dual formulation of SVM involves optimizing the variables $ \\alpha $.",
            correctAnswer: true,
        }, // citation slide "Dual SVM"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is NOT a constraint in the dual formulation of SVM?",
            options: ["$ \\sum_{i=1}^{N} y_i \\alpha_i = 0 $", "$ 0 \\leq \\alpha_i \\leq C $", "$ \\alpha_i \\geq 0 $", "$ \\alpha_i \\leq 1 $"],
            correctAnswer: "$ \\alpha_i \\leq 1 $",
        }, // citation slide "Dual SVM"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "The kernel trick in SVM allows for non-linear decision boundaries without explicitly computing the feature map $ \\phi(x) $.",
            correctAnswer: true,
        }, // citation slide "Kernels-Implicit Feature Maps"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is NOT a type of kernel in SVM?",
            options: ["Linear kernel", "Polynomial kernel", "RBF kernel", "Sigmoid kernel"],
            correctAnswer: "Sigmoid kernel",
        }, // citation slide "Kernels-Implicit Feature Maps"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "The RBF kernel is an example of a non-linear kernel in SVM.",
            correctAnswer: true,
        }, // citation slide "Kernels-Implicit Feature Maps"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What does the term $ \\sigma $ represent in the RBF kernel?",
            options: ["Standard deviation", "Mean", "Variance", "Covariance"],
            correctAnswer: "Standard deviation",
        }, // citation slide "Kernels-Implicit Feature Maps"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "In the dual formulation of SVM, the decision rule involves computing the dot product $ \\langle \\phi(x_i), \\phi(x_j) \\rangle $.",
            correctAnswer: true,
        }, // citation slide "Classification with Kernels"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is NOT a step in the decision rule for classification with kernels in SVM?",
            options: ["Compute $ w $ explicitly", "Use the kernel trick", "Sum the weighted dot products", "Apply the sign function"],
            correctAnswer: "Compute $ w $ explicitly",
        }, // citation slide "Classification with Kernels"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is a correct interpretation of the equation $ w_1 x^{(1)} + w_2 x^{(2)} + b = 0 $?",
            options: ["It represents a line in 2D space.", "It represents a plane in 3D space.", "It represents a hyperplane in higher-dimensional space.", "It represents a point in space."],
            correctAnswer: "It represents a hyperplane in higher-dimensional space.",
        }, // citation slide "Data in 2D and a Separating Hyperplane"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "The weight vector $ w $ in SVM is perpendicular to the separating hyperplane.",
            correctAnswer: true,
        }, // citation slide "Data in 2D and a Separating Hyperplane"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What does the term $ \\langle w, x \\rangle $ represent in SVM?",
            options: ["Dot product", "Cross product", "Scalar product", "Vector product"],
            correctAnswer: "Dot product",
        }, // citation slide "Classification using Separating Hyperplanes"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "The classification objective in SVM is to maximize the margin between the classes.",
            correctAnswer: true,
        }, // citation slide "Concept of the Margin"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is NOT a component of the optimization problem in Soft Margin SVM?",
            options: ["Minimizing $ \\frac{1}{2} \\|w\\|^2 $", "Maximizing the margin $ r $", "Slack variables $ \\\\xi_i $", "Regularization parameter $ C $"],
            correctAnswer: "Maximizing the margin $ r $",
        }, // citation slide "Soft Margin SVM"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "The hinge loss function is used to measure the error in SVM.",
            correctAnswer: true,
        }, // citation slide "Hinge loss"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is a correct interpretation of the hinge loss function?",
            options: ["It is zero when $ t \\geq 1 $.", "It is one when $ t < 0 $.", "It is $ 1 - t $ when $ t < 1 $.", "It is $ t $ when $ t \\geq 1 $."],
            correctAnswer: "It is zero when $ t \\geq 1 $.",
        }, // citation slide "Hinge loss"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "The dual formulation of SVM involves optimizing the variables $ \\alpha $ subject to certain constraints.",
            correctAnswer: true,
        }, // citation slide "Dual SVM"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is NOT a constraint in the dual formulation of SVM?",
            options: ["$ \\sum_{i=1}^{N} y_i \\alpha_i = 0 $", "$ 0 \\leq \\alpha_i \\leq C $", "$ \\alpha_i \\geq 0 $", "$ \\alpha_i \\leq 1 $"],
            correctAnswer: "$ \\alpha_i \\leq 1 $",
        }, // citation slide "Dual SVM"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "The kernel trick in SVM allows for non-linear decision boundaries without explicitly computing the feature map $ \\phi(x) $.",
            correctAnswer: true,
        }, // citation slide "Kernels-Implicit Feature Maps"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is NOT a type of kernel in SVM?",
            options: ["Linear kernel", "Polynomial kernel", "RBF kernel", "Sigmoid kernel"],
            correctAnswer: "Sigmoid kernel",
        }, // citation slide "Kernels-Implicit Feature Maps"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "The RBF kernel is an example of a non-linear kernel in SVM.",
            correctAnswer: true,
        }, // citation slide "Kernels-Implicit Feature Maps"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What does the term $ \\sigma $ represent in the RBF kernel?",
            options: ["Standard deviation", "Mean", "Variance", "Covariance"],
            correctAnswer: "Standard deviation",
        }, // citation slide "Kernels-Implicit Feature Maps"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "In the dual formulation of SVM, the decision rule involves computing the dot product $ \\langle \\phi(x_i), \\phi(x_j) \\rangle $.",
            correctAnswer: true,
        }, // citation slide "Classification with Kernels"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is NOT a step in the decision rule for classification with kernels in SVM?",
            options: ["Compute $ w $ explicitly", "Use the kernel trick", "Sum the weighted dot products", "Apply the sign function"],
            correctAnswer: "Compute $ w $ explicitly",
        }, // citation slide "Classification with Kernels"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is a correct interpretation of the equation $ w_1 x^{(1)} + w_2 x^{(2)} + b = 0 $?",
            options: ["It represents a line in 2D space.", "It represents a plane in 3D space.", "It represents a hyperplane in higher-dimensional space.", "It represents a point in space."],
            correctAnswer: "It represents a hyperplane in higher-dimensional space.",
        }, // citation slide "Data in 2D and a Separating Hyperplane"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "The weight vector $ w $ in SVM is perpendicular to the separating hyperplane.",
            correctAnswer: true,
        }, // citation slide "Data in 2D and a Separating Hyperplane"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What does the term $ \\langle w, x \\rangle $ represent in SVM?",
            options: ["Dot product", "Cross product", "Scalar product", "Vector product"],
            correctAnswer: "Dot product",
        }, // citation slide "Classification using Separating Hyperplanes"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "The classification objective in SVM is to maximize the margin between the classes.",
            correctAnswer: true,
        }, // citation slide "Concept of the Margin"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is NOT a component of the optimization problem in Soft Margin SVM?",
            options: ["Minimizing $ \\frac{1}{2} \\|w\\|^2 $", "Maximizing the margin $ r $", "Slack variables $ \\\\xi_i $", "Regularization parameter $ C $"],
            correctAnswer: "Maximizing the margin $ r $",
        }, // citation slide "Soft Margin SVM"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "The hinge loss function is used to measure the error in SVM.",
            correctAnswer: true,
        }, // citation slide "Hinge loss"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is a correct interpretation of the hinge loss function?",
            options: ["It is zero when $ t \\geq 1 $.", "It is one when $ t < 0 $.", "It is $ 1 - t $ when $ t < 1 $.", "It is $ t $ when $ t \\geq 1 $."],
            correctAnswer: "It is zero when $ t \\geq 1 $.",
        }, // citation slide "Hinge loss"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "The dual formulation of SVM involves optimizing the variables $ \\alpha $ subject to certain constraints.",
            correctAnswer: true,
        }, // citation slide "Dual SVM"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is NOT a constraint in the dual formulation of SVM?",
            options: ["$ \\sum_{i=1}^{N} y_i \\alpha_i = 0 $", "$ 0 \\leq \\alpha_i \\leq C $", "$ \\alpha_i \\geq 0 $", "$ \\alpha_i \\leq 1 $"],
            correctAnswer: "$ \\alpha_i \\leq 1 $",
        }, // citation slide "Dual SVM"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "The kernel trick in SVM allows for non-linear decision boundaries without explicitly computing the feature map $ \\phi(x) $.",
            correctAnswer: true,
        }, // citation slide "Kernels-Implicit Feature Maps"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is NOT a type of kernel in SVM?",
            options: ["Linear kernel", "Polynomial kernel", "RBF kernel", "Sigmoid kernel"],
            correctAnswer: "Sigmoid kernel",
        }, // citation slide "Kernels-Implicit Feature Maps"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "The RBF kernel is an example of a non-linear kernel in SVM.",
            correctAnswer: true,
        }, // citation slide "Kernels-Implicit Feature Maps"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What does the term $ \\sigma $ represent in the RBF kernel?",
            options: ["Standard deviation", "Mean", "Variance", "Covariance"],
            correctAnswer: "Standard deviation",
        }, // citation slide "Kernels-Implicit Feature Maps"
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "In the dual formulation of SVM, the decision rule involves computing the dot product $ \\langle \\phi(x_i), \\phi(x_j) \\rangle $.",
            correctAnswer: true,
        }, // citation slide "Classification with Kernels"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is NOT a step in the decision rule for classification with kernels in SVM?",
            options: ["Compute $ w $ explicitly", "Use the kernel trick", "Sum the weighted dot products", "Apply the sign function"],
            correctAnswer: "Compute $ w $ explicitly",
        }, // citation slide "Classification with Kernels"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "In the equation of a separating hyperplane $w_1 x^{(1)} + w_2 x^{(2)} + b = 0$, what does $w_1$ represent?",
            options: ["The intercept", "The weight for the first feature", "The bias term", "The margin"],
            correctAnswer: "The weight for the first feature",
            explanation: "In the equation of a separating hyperplane, $w_1$ represents the weight for the first feature $x^{(1)}$.",
        }, // citation slide "Data in 2D and a Separating Hyperplane"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What does the term $b$ represent in the equation of a separating hyperplane?",
            options: ["The weight for the second feature", "The intercept", "The margin", "The bias term"],
            correctAnswer: "The intercept",
            explanation: "In the equation of a separating hyperplane, $b$ represents the intercept, which shifts the hyperplane in the feature space.",
        }, // citation slide "Data in 2D and a Separating Hyperplane"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What is the role of the weight vector $w$ in the context of a separating hyperplane?",
            options: ["It determines the intercept", "It is perpendicular to the hyperplane", "It defines the margin", "It represents the bias term"],
            correctAnswer: "It is perpendicular to the hyperplane",
            explanation: "The weight vector $w$ is perpendicular to the separating hyperplane and defines its orientation in the feature space.",
        }, // citation slide "Data in 2D and a Separating Hyperplane"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What does the term $\\langle w, x \\rangle$ represent in the context of a separating hyperplane?",
            options: ["The dot product of $w$ and $x$", "The cross product of $w$ and $x$", "The scalar product of $w$ and $x$", "The vector product of $w$ and $x$"],
            correctAnswer: "The dot product of $w$ and $x$",
            explanation: "The term $\\langle w, x \\rangle$ represents the dot product of the weight vector $w$ and the feature vector $x$.",
        }, // citation slide "Classification using Separating Hyperplanes"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What is the classification objective in SVM?",
            options: ["Minimize the margin", "Maximize the margin", "Minimize the error", "Maximize the bias term"],
            correctAnswer: "Maximize the margin",
            explanation: "The classification objective in SVM is to maximize the margin between the classes to improve generalization.",
        }, // citation slide "Concept of the Margin"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What does the term $r$ represent in the context of the margin in SVM?",
            options: ["The radius of the margin", "The regularization parameter", "The margin distance", "The residual error"],
            correctAnswer: "The margin distance",
            explanation: "The term $r$ represents the margin distance, which is the distance between the hyperplane and the closest data points.",
        }, // citation slide "Concept of the Margin"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "In Hard Margin SVM, what is the value of the predictor $\\langle w, x \\rangle + b$ at the closest example?",
            options: ["0", "1", "-1", "2"],
            correctAnswer: "1",
            explanation: "In Hard Margin SVM, the value of the predictor $\\langle w, x \\rangle + b$ is set to 1 at the closest example to normalize the scale of the data.",
        }, // citation slide "Hard Margin SVM"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What is the role of the regularization parameter $C$ in Soft Margin SVM?",
            options: ["It controls the margin size", "It controls the amount of slack", "It controls the bias term", "It controls the learning rate"],
            correctAnswer: "It controls the amount of slack",
            explanation: "The regularization parameter $C$ in Soft Margin SVM controls the amount of slack, which allows for some misclassification to handle non-linearly separable data.",
        }, // citation slide "Soft Margin SVM"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What does the term $\\xi_i$ represent in Soft Margin SVM?",
            options: ["The weight vector", "The bias term", "The slack variable", "The regularization parameter"],
            correctAnswer: "The slack variable",
            explanation: "The term $\\xi_i$ represents the slack variable, which quantifies how much the constraint is violated for each data example.",
        }, // citation slide "Soft Margin SVM"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What is the hinge loss function used for in SVM?",
            options: ["To measure the error", "To maximize the margin", "To minimize the bias term", "To regularize the weights"],
            correctAnswer: "To measure the error",
            explanation: "The hinge loss function is used to measure the error in SVM by penalizing misclassifications and data points within the margin.",
        }, // citation slide "Hinge loss"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What is the value of the hinge loss function when $t \\geq 1$?",
            options: ["0", "1", "-1", "2"],
            correctAnswer: "0",
            explanation: "The hinge loss function is zero when $t \\geq 1$, indicating a correct prediction with sufficient margin.",
        }, // citation slide "Hinge loss"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What does the term $t$ represent in the hinge loss function?",
            options: ["The target label", "The predicted label", "The margin distance", "The slack variable"],
            correctAnswer: "The predicted label",
            explanation: "The term $t$ represents the predicted label, which is used to compute the hinge loss based on the margin.",
        }, // citation slide "Hinge loss"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What is the dual formulation of SVM used for?",
            options: ["To minimize the hinge loss", "To maximize the margin", "To compute the kernel trick", "To regularize the weights"],
            correctAnswer: "To maximize the margin",
            explanation: "The dual formulation of SVM is used to maximize the margin by optimizing the variables $\\alpha$ subject to certain constraints.",
        }, // citation slide "Dual SVM"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What is the role of the variables $\\alpha$ in the dual formulation of SVM?",
            options: ["They represent the weights", "They represent the bias terms", "They are the Lagrange multipliers", "They represent the slack variables"],
            correctAnswer: "They are the Lagrange multipliers",
            explanation: "The variables $\\alpha$ in the dual formulation of SVM are the Lagrange multipliers used to optimize the margin.",
        }, // citation slide "Dual SVM"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What is the kernel trick in SVM used for?",
            options: ["To compute the dot product explicitly", "To handle non-linear decision boundaries", "To regularize the weights", "To maximize the margin"],
            correctAnswer: "To handle non-linear decision boundaries",
            explanation: "The kernel trick in SVM is used to handle non-linear decision boundaries without explicitly computing the feature map $\\phi(x)$.",
        }, // citation slide "Kernels-Implicit Feature Maps"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What does the RBF kernel represent in SVM?",
            options: ["A linear kernel", "A polynomial kernel", "A non-linear kernel", "A sigmoid kernel"],
            correctAnswer: "A non-linear kernel",
            explanation: "The RBF kernel is a non-linear kernel used in SVM to handle non-linear decision boundaries.",
        }, // citation slide "Kernels-Implicit Feature Maps"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What does the term $\\sigma$ represent in the RBF kernel?",
            options: ["The standard deviation", "The mean", "The variance", "The covariance"],
            correctAnswer: "The standard deviation",
            explanation: "The term $\\sigma$ in the RBF kernel represents the standard deviation, which controls the width of the Gaussian function.",
        }, // citation slide "Kernels-Implicit Feature Maps"
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "In the dual formulation of SVM, what does the decision rule involve?",
            options: ["Computing $w$ explicitly", "Using the kernel trick", "Summing the weighted dot products", "Applying the sign function"],
            correctAnswer: "Using the kernel trick",
            explanation: "In the dual formulation of SVM, the decision rule involves using the kernel trick to compute the dot product in the feature space.",
        }, // citation slide "Classification with Kernels"
    ];
}
