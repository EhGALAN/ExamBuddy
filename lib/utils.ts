import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type {Question} from "@/lib/types.ts";

declare const __COMMIT_HASH__: string;

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function randomBetween(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}

export function factorialize(num: number): number {
    if (num === 0 || num === 1)
        return 1;
    for (var i = num - 1; i >= 1; i--) {
        num *= i;
    }
    return num;
}

export const checkAnswer = (question: Question, answer: any): boolean => {
    switch (question.type) {
        case "multiple-choice":
            return answer === question.correctAnswer;
        case "true-false":
            return answer === question.correctAnswer;
        case "generated":
            // For generated questions, we might need custom validation logic
            return Math.abs(Number(answer) - Number(question.correctAnswer)) < 0.01
        default:
            return false
    }
};

function getCurrentLineNumber(): number | undefined {
    const err = new Error();
    const stackLines = err.stack?.split('\n');
    if (!stackLines || stackLines.length < 3) return;

    const match = stackLines[2].match(/:(\d+):\d+\)?$/);
    if (match) {
        return parseInt(match[1], 10);
    }
}

function getFileInfoFromError(): { filename?: string; dirname?: string } {
    const err = new Error();
    const stackLines = err.stack?.split('\n');

    if (!stackLines || stackLines.length < 3) return {};

    const match = stackLines[2].match(/\(?(.+):\d+:\d+\)?$/);
    if (!match) return {};

    const urlPath = match[1].slice(1, -1);

    return {pathname: urlPath.split("/ExamBuddy/").at(-1)?.split?.("?").at(0)};
}

export function generateGitHubUrlAuto(): string {
    const repoUrl = "https://github.com/EhGALAN/ExamBuddy";
    if (!repoUrl) throw new Error('GITHUB_REPO_URL not set in .env');

    const { pathname } = getFileInfoFromError();
    console.log(pathname);
    if (!pathname) throw new Error('Could not extract filename from error stack');

    const commitHash = __COMMIT_HASH__;
    const lineNumber = getCurrentLineNumber();

    let url = `${repoUrl}/blob/${commitHash}/${pathname}`;
    if (lineNumber !== undefined) {
        url += `#L${lineNumber}`;
    }
    return url;
}
