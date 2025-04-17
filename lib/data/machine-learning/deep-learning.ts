import {Question} from "../../types";

export const questions: (n: number) => Question[] = (n: number) => {
    return [
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Why are non-linear activations necessary in multi-layer neural networks?",
            options: ["To reduce computational complexity", "To handle vanishing gradients", "To increase linearity", "To ensure faster convergence"],
            correctAnswer: "To handle vanishing gradients",
            explanation: "Non-linear activations are crucial for enabling neural networks to learn complex patterns and mitigate issues like vanishing gradients.",
        }, // citation slide Theoretical Considerations
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "Large neural networks are not necessary for solving complex problems.",
            correctAnswer: false,
            explanation: "Large neural networks are often required to capture the complexity of data and achieve high performance on complex tasks.",
        }, // citation slide Scale
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which activation function is commonly used to address the vanishing gradient problem?",
            options: ["Sigmoid", "ReLU", "Tanh", "Softmax"],
            correctAnswer: "ReLU",
            explanation: "ReLU (Rectified Linear Unit) is widely used to mitigate the vanishing gradient problem in deep neural networks.",
        }, // citation slide Vanishing Gradients
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "Maxout units are a type of piecewise linear continuous (PWLC) function.",
            correctAnswer: true,
            explanation: "Maxout units are designed as PWLC functions to help address issues like vanishing gradients in neural networks.",
        }, // citation slide Vanishing Gradients
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What is the primary advantage of using ReLU over sigmoidal activation functions?",
            options: ["ReLU is always linear", "ReLU avoids saturation issues", "ReLU is computationally cheaper", "ReLU is more sensitive to input changes"],
            correctAnswer: "ReLU avoids saturation issues",
            explanation: "ReLU avoids the saturation issues present in sigmoidal functions, making it more effective for deep neural networks.",
        }, // citation slide Vanishing Gradients
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "Convolutional Neural Networks (CNNs) are primarily used for image data.",
            correctAnswer: true,
            explanation: "CNNs are specifically designed to process and analyze image data efficiently.",
        }, // citation slide Convolutional Neural Networks
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What is the role of a kernel in a Convolutional Neural Network?",
            options: ["To reduce the dimensionality of the input", "To apply a set of weights to the input", "To normalize the input data", "To perform pooling operations"],
            correctAnswer: "To apply a set of weights to the input",
            explanation: "A kernel in a CNN applies a set of learnable weights to the input data to extract features.",
        }, // citation slide Convolutional Neural Networks
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "Dropout is a regularization technique used to prevent overfitting in neural networks.",
            correctAnswer: true,
            explanation: "Dropout randomly sets a fraction of input units to zero during training, which helps prevent overfitting.",
        }, // citation slide Dropout
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What is the purpose of using computational graphs in neural networks?",
            options: ["To visualize the network structure", "To perform symbolic differentiation", "To reduce training time", "To increase model complexity"],
            correctAnswer: "To perform symbolic differentiation",
            explanation: "Computational graphs are used for symbolic differentiation, which simplifies the process of computing gradients during training.",
        }, // citation slide Computational Graphs
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "Increasing the size of a dataset is a natural regularizer for large models.",
            correctAnswer: true,
            explanation: "More data helps regularize large models by providing more examples to learn from, reducing the risk of overfitting.",
        }, // citation slide Scale
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is NOT a benefit of using efficient computers for training neural networks?",
            options: ["Faster training times", "Reduced energy consumption", "Ability to train larger models", "Improved generalization"],
            correctAnswer: "Improved generalization",
            explanation: "Efficient computers primarily enable faster training times and the ability to train larger models, but they do not directly improve generalization.",
        }, // citation slide Scale
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "The cross-entropy error for sigmoidal outputs eliminates the derivative in the weight update equation.",
            correctAnswer: true,
            explanation: "The cross-entropy error simplifies the weight update equation by removing the derivative term for sigmoidal outputs.",
        }, // citation slide Vanishing Gradients
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What is the primary function of a convolutional layer in a CNN?",
            options: ["To flatten the input data", "To apply filters to the input", "To perform pooling operations", "To normalize the input"],
            correctAnswer: "To apply filters to the input",
            explanation: "A convolutional layer applies filters (kernels) to the input data to extract features.",
        }, // citation slide Convolutional Layer
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "Dropout with a probability of p=0.5 means that 50% of the neurons are randomly dropped during training.",
            correctAnswer: true,
            explanation: "Dropout with p=0.5 randomly drops 50% of the neurons during each training iteration to prevent overfitting.",
        }, // citation slide Dropout (cont.)
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What is the purpose of symbolic differentiation in computational graphs?",
            options: ["To reduce memory usage", "To speed up training", "To simplify gradient computation", "To increase model accuracy"],
            correctAnswer: "To simplify gradient computation",
            explanation: "Symbolic differentiation in computational graphs simplifies the process of computing gradients, making training more efficient.",
        }, // citation slide Computational Graphs
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "Rectified Linear Units (ReLU) are a type of non-linear activation function.",
            correctAnswer: true,
            explanation: "ReLU is a non-linear activation function that outputs the input directly if it is positive; otherwise, it outputs zero.",
        }, // citation slide Vanishing Gradients
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is a key advantage of using large datasets in machine learning?",
            options: ["Reduced training time", "Improved generalization", "Lower computational cost", "Simpler model architecture"],
            correctAnswer: "Improved generalization",
            explanation: "Large datasets help improve the generalization of models by providing more diverse examples for training.",
        }, // citation slide Scale
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "Maxout units are designed to handle the vanishing gradient problem in neural networks.",
            correctAnswer: true,
            explanation: "Maxout units are a type of activation function designed to mitigate the vanishing gradient problem by providing a piecewise linear output.",
        }, // citation slide Vanishing Gradients
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What is the primary role of a kernel in a 2D convolution operation?",
            options: ["To reduce dimensionality", "To apply learnable weights", "To normalize input data", "To perform pooling"],
            correctAnswer: "To apply learnable weights",
            explanation: "A kernel in a 2D convolution applies learnable weights to the input data to extract features.",
        }, // citation slide Convolutional Neural Networks
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "Dropout is a technique used to improve the convergence speed of neural networks.",
            correctAnswer: false,
            explanation: "Dropout is primarily used to prevent overfitting, not to improve convergence speed.",
        }, // citation slide Dropout
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What is the main advantage of using computational graphs in neural network training?",
            options: ["Reduced memory usage", "Faster convergence", "Simplified gradient computation", "Increased model complexity"],
            correctAnswer: "Simplified gradient computation",
            explanation: "Computational graphs simplify gradient computation, making the training process more efficient.",
        }, // citation slide Computational Graphs
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "In the weight update equation $\\Delta w_{ij} = \\epsilon(t_{k} - o_{k}) \\sigma'(\\eta_{j}) s_{i}$, what does $\\Delta w_{ij}$ represent?",
            options: ["The learning rate", "The change in weight between neuron $i$ and neuron $j$", "The target output", "The derivative of the activation function"],
            correctAnswer: "The change in weight between neuron $i$ and neuron $j$",
            explanation: "$\\Delta w_{ij}$ represents the change in the weight connecting neuron $i$ to neuron $j$ during the training process.",
        }, // citation slide Vanishing Gradients
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "In the weight update equation $\\Delta w_{ij} = \\epsilon(t_{k} - o_{k}) \\sigma'(\\eta_{j}) s_{i}$, what is the role of $\\epsilon$?",
            options: ["The learning rate", "The target output", "The actual output", "The derivative of the activation function"],
            correctAnswer: "The learning rate",
            explanation: "$\\epsilon$ is the learning rate, which controls the size of the steps taken during gradient descent to update the weights.",
        }, // citation slide Vanishing Gradients
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "In the weight update equation $\\Delta w_{ij} = \\epsilon(t_{k} - o_{k}) \\sigma'(\\eta_{j}) s_{i}$, what does $t_{k}$ represent?",
            options: ["The learning rate", "The target output for the $k$-th output neuron", "The actual output of the $k$-th output neuron", "The derivative of the activation function"],
            correctAnswer: "The target output for the $k$-th output neuron",
            explanation: "$t_{k}$ is the target output for the $k$-th output neuron, which is used to compute the error in the network's predictions.",
        }, // citation slide Vanishing Gradients
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "In the weight update equation $\\Delta w_{ij} = \\epsilon(t_{k} - o_{k}) \\sigma'(\\eta_{j}) s_{i}$, what does $o_{k}$ represent?",
            options: ["The learning rate", "The target output", "The actual output of the $k$-th output neuron", "The derivative of the activation function"],
            correctAnswer: "The actual output of the $k$-th output neuron",
            explanation: "$o_{k}$ is the actual output of the $k$-th output neuron, which is compared to the target output to compute the error.",
        }, // citation slide Vanishing Gradients
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "In the weight update equation $\\Delta w_{ij} = \\epsilon(t_{k} - o_{k}) \\sigma'(\\eta_{j}) s_{i}$, what does $\\sigma'(\\eta_{j})$ represent?",
            options: ["The learning rate", "The target output", "The actual output", "The derivative of the activation function with respect to $\\eta_{j}$"],
            correctAnswer: "The derivative of the activation function with respect to $\\eta_{j}$",
            explanation: "$\\sigma'(\\eta_{j})$ is the derivative of the activation function with respect to the input $\\eta_{j}$ of neuron $j$, which is used to propagate the error backward through the network.",
        }, // citation slide Vanishing Gradients
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "In the weight update equation $\\Delta w_{ij} = \\epsilon(t_{k} - o_{k}) \\sigma'(\\eta_{j}) s_{i}$, what does $s_{i}$ represent?",
            options: ["The learning rate", "The target output", "The actual output of the $k$-th output neuron", "The output of neuron $i$"],
            correctAnswer: "The output of neuron $i$",
            explanation: "$s_{i}$ is the output of neuron $i$, which is connected to neuron $j$ and contributes to the weight update calculation.",
        }, // citation slide Vanishing Gradients
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "In the computational graph equations $h = \\tanh(Wx + b)$ and $y = Vh + a$, what does $h$ represent?",
            options: ["The input vector", "The hidden layer output", "The final output", "The bias term"],
            correctAnswer: "The hidden layer output",
            explanation: "$h$ represents the output of the hidden layer after applying the $\\tanh$ activation function to the linear transformation of the input vector $x$.",
        }, // citation slide Computational Graphs
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "In the computational graph equations $h = \\tanh(Wx + b)$ and $y = Vh + a$, what does $W$ represent?",
            options: ["The input vector", "The weight matrix for the hidden layer", "The final output", "The bias term"],
            correctAnswer: "The weight matrix for the hidden layer",
            explanation: "$W$ represents the weight matrix that transforms the input vector $x$ into the hidden layer.",
        }, // citation slide Computational Graphs
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "In the computational graph equations $h = \\tanh(Wx + b)$ and $y = Vh + a$, what does $b$ represent?",
            options: ["The input vector", "The weight matrix for the hidden layer", "The bias term for the hidden layer", "The final output"],
            correctAnswer: "The bias term for the hidden layer",
            explanation: "$b$ represents the bias term added to the linear transformation of the input vector $x$ before applying the $\\tanh$ activation function.",
        }, // citation slide Computational Graphs
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "In the computational graph equations $h = \\tanh(Wx + b)$ and $y = Vh + a$, what does $y$ represent?",
            options: ["The input vector", "The hidden layer output", "The final output", "The bias term"],
            correctAnswer: "The final output",
            explanation: "$y$ represents the final output of the network after applying a linear transformation to the hidden layer output $h$.",
        }, // citation slide Computational Graphs
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "In the computational graph equations $h = \\tanh(Wx + b)$ and $y = Vh + a$, what does $V$ represent?",
            options: ["The input vector", "The weight matrix for the hidden layer", "The weight matrix for the output layer", "The bias term"],
            correctAnswer: "The weight matrix for the output layer",
            explanation: "$V$ represents the weight matrix that transforms the hidden layer output $h$ into the final output $y$.",
        }, // citation slide Computational Graphs
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "In the computational graph equations $h = \\tanh(Wx + b)$ and $y = Vh + a$, what does $a$ represent?",
            options: ["The input vector", "The weight matrix for the hidden layer", "The bias term for the output layer", "The final output"],
            correctAnswer: "The bias term for the output layer",
            explanation: "$a$ represents the bias term added to the linear transformation of the hidden layer output $h$ to produce the final output $y$.",
        }, // citation slide Computational Graphs
    ];
};
