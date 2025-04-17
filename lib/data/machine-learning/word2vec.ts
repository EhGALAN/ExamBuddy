import {Question} from "../../types";

export const questions: (n: number) => Question[] = (n: number) => {
    return [
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What is the primary goal of word2vec in natural language processing?",
            options: ["To classify text into categories", "To generate text", "To represent words as vectors in a continuous vector space", "To translate text between languages"],
            correctAnswer: "To represent words as vectors in a continuous vector space",
            explanation: "Word2vec aims to represent words as vectors in a continuous vector space, capturing semantic relationships between words.",
        }, // citation slide word2vec
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "Word2vec uses a neural network to learn word embeddings.",
            correctAnswer: true,
            explanation: "Word2vec employs a neural network architecture to learn word embeddings from text data.",
        }, // citation slide word2vec
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is a key component of the word2vec architecture?",
            options: ["Hidden Layer", "Convolutional Layer", "Recurrent Layer", "Pooling Layer"],
            correctAnswer: "Hidden Layer",
            explanation: "The word2vec architecture includes a hidden layer, which is essential for learning word embeddings.",
        }, // citation slide word2vec
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "Word2vec can capture semantic relationships between words, such as 'King' - 'Man' + 'Woman' ≈ 'Queen'.",
            correctAnswer: true,
            explanation: "Word2vec can capture semantic relationships between words through vector arithmetic.",
        }, // citation slide word2vec
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What is the purpose of the softmax classifier in the word2vec model?",
            options: ["To normalize input vectors", "To predict the probability of a word appearing nearby", "To reduce dimensionality", "To cluster words"],
            correctAnswer: "To predict the probability of a word appearing nearby",
            explanation: "The softmax classifier in word2vec predicts the probability of a word appearing in the context of other words.",
        }, // citation slide word2vec
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "Word2vec uses a one-hot encoded vector as input for each word.",
            correctAnswer: true,
            explanation: "Word2vec represents each word as a one-hot encoded vector during training.",
        }, // citation slide word2vec
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "How many neurons are typically used in the hidden layer of the word2vec model?",
            options: ["100", "300", "500", "1000"],
            correctAnswer: "300",
            explanation: "The word2vec model typically uses 300 neurons in the hidden layer to learn word embeddings.",
        }, // citation slide word2vec
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "Word2vec can be used to find analogies between words, such as 'Madrid' - 'Spain' + 'France' ≈ 'Paris'.",
            correctAnswer: true,
            explanation: "Word2vec can capture analogies between words through vector arithmetic.",
        }, // citation slide word2vec
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What is the role of the weight matrix in the word2vec model?",
            options: ["To store word frequencies", "To transform input vectors into embeddings", "To cluster words", "To normalize input vectors"],
            correctAnswer: "To transform input vectors into embeddings",
            explanation: "The weight matrix in word2vec transforms input vectors into embeddings in the hidden layer.",
        }, // citation slide word2vec
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "Word2vec can be trained on large corpora of text to learn meaningful word representations.",
            correctAnswer: true,
            explanation: "Word2vec is designed to be trained on large corpora of text to learn meaningful word representations.",
        }, // citation slide word2vec
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is a key advantage of word2vec?",
            options: ["It can handle multimodal data", "It can capture semantic relationships between words", "It can generate images", "It can translate text"],
            correctAnswer: "It can capture semantic relationships between words",
            explanation: "Word2vec's key advantage is its ability to capture semantic relationships between words.",
        }, // citation slide word2vec
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "Word2vec uses a supervised learning approach to train its model.",
            correctAnswer: false,
            explanation: "Word2vec uses an unsupervised learning approach to train its model on text data.",
        }, // citation slide word2vec
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What is the output of the word2vec model for a given input word?",
            options: ["A binary classification", "A vector representation of the word", "A clustered group of words", "A probability distribution over all words"],
            correctAnswer: "A vector representation of the word",
            explanation: "The output of the word2vec model is a vector representation of the input word.",
        }, // citation slide word2vec
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "Word2vec can be used for tasks such as sentiment analysis and text classification.",
            correctAnswer: true,
            explanation: "Word2vec embeddings can be used as features for tasks like sentiment analysis and text classification.",
        }, // citation slide word2vec
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is NOT a component of the word2vec architecture?",
            options: ["Input Vector", "Hidden Layer", "Output Layer", "Convolutional Layer"],
            correctAnswer: "Convolutional Layer",
            explanation: "The word2vec architecture does not include a convolutional layer.",
        }, // citation slide word2vec
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "Word2vec embeddings are static and do not change after training.",
            correctAnswer: true,
            explanation: "Word2vec embeddings are static and remain fixed after the training process.",
        }, // citation slide word2vec
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What is the dimensionality of the word vectors in the word2vec model?",
            options: ["100", "300", "500", "1000"],
            correctAnswer: "300",
            explanation: "The word2vec model typically produces word vectors with a dimensionality of 300.",
        }, // citation slide word2vec
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "Word2vec can capture syntactic relationships between words, such as 'quick' - 'slow' + 'run' ≈ 'walk'.",
            correctAnswer: true,
            explanation: "Word2vec can capture syntactic relationships between words through vector arithmetic.",
        }, // citation slide word2vec
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "Which of the following is a limitation of word2vec?",
            options: ["It cannot handle out-of-vocabulary words", "It requires labeled data for training", "It cannot capture contextual meanings", "It is computationally expensive"],
            correctAnswer: "It cannot handle out-of-vocabulary words",
            explanation: "Word2vec cannot handle out-of-vocabulary words, as it relies on a fixed vocabulary.",
        }, // citation slide word2vec
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "Word2vec embeddings can be used as input features for other machine learning models.",
            correctAnswer: true,
            explanation: "Word2vec embeddings can be used as input features for other machine learning models, such as classifiers or neural networks.",
        }, // citation slide word2vec
        {
            id: `ml-${++n}`,
            type: "multiple-choice",
            subject: "Machine Learning",
            text: "What is the primary difference between the CBOW and Skip-gram models in word2vec?",
            options: ["CBOW uses a single hidden layer, while Skip-gram uses multiple hidden layers", "CBOW predicts context words from a target word, while Skip-gram predicts a target word from context words", "CBOW is supervised, while Skip-gram is unsupervised", "CBOW is faster than Skip-gram"],
            correctAnswer: "CBOW predicts context words from a target word, while Skip-gram predicts a target word from context words",
            explanation: "CBOW predicts context words from a target word, while Skip-gram predicts a target word from context words.",
        }, // citation slide word2vec
        {
            id: `ml-${++n}`,
            type: "true-false",
            subject: "Machine Learning",
            text: "Word2vec can be used to measure the similarity between two words.",
            correctAnswer: true,
            explanation: "Word2vec embeddings can be used to measure the similarity between two words using cosine similarity or other distance metrics.",
        }, // citation slide word2vec
    ];
}
