import { questions  } from "@/lib/data/data-mining/Lect_05_06_Clustering";
import { questions as questions2 } from "@/lib/data/data-mining/Lect_07_Multi_Label_Classif";
import { questions as questions3 } from "@/lib/data/data-mining/Lect_08_09_KDD_Proc_Feat_Constr_Select_Class_Imbal";
import { questions as questions4 } from "@/lib/data/data-mining/Lect_10_Review";
import { questions as questions5 } from "@/lib/data/data-mining/Lects_01__02_Introduction_Assoc_Rules";
import { questions as questions6 } from "@/lib/data/data-mining/Lects_03__04_Interpret_Fair_Classif";
import { questions as questions7 } from "@/lib/data/data-mining/bias-variance-for-printing";
import { questions as questions8 } from "@/lib/data/data-mining/decision-trees";
import { questions as questions9 } from "@/lib/data/data-mining/ensembles";
import { questions as questions10 } from "@/lib/data/data-mining/evaluation-of-classification";
import { questions as questions11 } from "@/lib/data/data-mining/k-nn-for-printing";
import { questions as questions12 } from "@/lib/data/data-mining/ml-intro";
import { questions as questions13 } from "@/lib/data/data-mining/naive-Bayes";

export function dataMining() {
    let n = 0;
    const allQuestions = [questions, questions2, questions3, questions4, questions5, questions6, questions7, questions8, questions9, questions10, questions11, questions12, questions13];
    let computeQuestions = [];
    for (let i = 0; i < allQuestions.length; i++) {
        computeQuestions.push(allQuestions[i](n));
    }
    computeQuestions = computeQuestions.flat();
    return computeQuestions;
}