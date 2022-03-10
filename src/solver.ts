import answers from "./wordlist/answers";
import {LetterState} from "./types/LetterTyps";



//TODO write test for me
export function stuff(word: string, letterState: string): string[] {
    const letters = word.split("");
    let suggestionList = answers

    letters.forEach((letter, index) => {
        const state = <LetterState>letterState[index];
        switch (state) {
            case "k":
                const knownLetter = word[index]
                suggestionList = suggestionList.filter(answerWord => {
                    return knownLetter === answerWord[index]
                })
                break;
            case "m":
                const maybeLetter = word[index]
                suggestionList = suggestionList.filter(answerWord => {

                    // TODO remember multiple letters kan be unkown
                    return answerWord.split("").includes(maybeLetter) &&
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

