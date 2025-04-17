import { questions  } from "@/lib/data/natural-computation/CO637-Co-Evolution-and-Niching";
import { questions as questions2 } from "@/lib/data/natural-computation/CO637-Lect-6-ACO-1";
import { questions as questions3 } from "@/lib/data/natural-computation/CO637-Lect-7-ACO-2";
import { questions as questions4 } from "@/lib/data/natural-computation/CO637-MOO-and-Self-Adapt-EAs";
import { questions as questions5 } from "@/lib/data/natural-computation/GP-part-1";
import { questions as questions6 } from "@/lib/data/natural-computation/GP-part-2";
import { questions as questions7 } from "@/lib/data/natural-computation/Lecture-1.1";
import { questions as questions8 } from "@/lib/data/natural-computation/Lecture-1.2";
import { questions as questions9 } from "@/lib/data/natural-computation/Lecture-2.1";
import { questions as questions10 } from "@/lib/data/natural-computation/Lecture-2.2";
import { questions as questions11 } from "@/lib/data/natural-computation/Lecture-3.1";
import { questions as questions12 } from "@/lib/data/natural-computation/Lecture-5";
import { questions as questions13 } from "@/lib/data/natural-computation/Lecture-8";

export function naturalComputation() {
    let n = 0;
    const allQuestions = [questions, questions2, questions3, questions4, questions5, questions6, questions7, questions8, questions9, questions10, questions11, questions12, questions13];
    let computeQuestions = [];
    for (let i = 0; i < allQuestions.length; i++) {
        computeQuestions.push(allQuestions[i](n));
    }
    computeQuestions = computeQuestions.flat();
    return computeQuestions;
}