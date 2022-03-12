import answers from "./wordlist/answers";
import {LetterState} from "./types/LetterTyps";
import {occurences} from "./utils";

export function solutionSuggestions(word: string, letterState: string): string[] {
    const letters = word.split("");
    let suggestionList = answers

    letters.forEach((letter, index) => {
        const state = letterState[index] as LetterState;
        switch (state) {
            case "k":
                const knownLetter = word[index]
                suggestionList = suggestionList.filter(answerWord => {
                    return knownLetter === answerWord[index]
                })
                break;
            case "m":
                const maybeLetter = word[index]
                let amount = 0
                letters.forEach((lookUpLetter, newIndex) => {
                    if (lookUpLetter === maybeLetter && letterState[newIndex] === 'm'){
                        amount += 1;
                    }
                })

                suggestionList = suggestionList.filter(answerWord => {
                    return occurences(answerWord, maybeLetter) === amount &&
                        maybeLetter !== answerWord[index]
                })
                break;
            default:
                // ignore the rest
                break;
        }
    })

    return suggestionList
}

