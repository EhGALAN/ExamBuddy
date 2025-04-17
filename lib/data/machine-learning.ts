import { questions } from "@/lib/data/machine-learning/comp6362Lec01.ts";
import { questions as questions2 } from "@/lib/data/machine-learning/comp6362Lec02.ts";
import { questions as questions3 } from "@/lib/data/machine-learning/comp6362Lec03.ts";
import { questions as questions4 } from "@/lib/data/machine-learning/comp6362Lec04.ts";
import { questions as questions5 } from "@/lib/data/machine-learning/comp6362Lec05.ts";
import { questions as questions6 } from "@/lib/data/machine-learning/comp6362Lec06.ts";
import { questions as questions7 } from "@/lib/data/machine-learning/comp6362Lec07.ts";
import { questions as questions8 } from "@/lib/data/machine-learning/comp6362Lec08.ts";
import { questions as questions9 } from "@/lib/data/machine-learning/comp6362Lec09.ts";
import { questions as questions10 } from "@/lib/data/machine-learning/comp6362Lec10.ts";
import { questions as questions11 } from "@/lib/data/machine-learning/comp6362Lec11.ts";
import { questions as questions12 } from "@/lib/data/machine-learning/deep-learning";
import { questions as questions13 } from "@/lib/data/machine-learning/word2vec.ts";
import { questions as questions14 } from "@/lib/data/machine-learning/svm";

export function machineLearning() {
    let n = 0;
    const allQuestions = [questions, questions2, questions3, questions4, questions5, questions6, questions7, questions8, questions9, questions10, questions11, questions12, questions13, questions14];
    let computeQuestions = [];
    for (let i = 0; i < allQuestions.length; i++) {
        computeQuestions.push(allQuestions[i](n));
    }
    computeQuestions = computeQuestions.flat();
    return computeQuestions;
}