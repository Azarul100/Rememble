import wordBank from "./wordbank.txt";
import wordBankAnswers from './wordbankAnswers.txt';

export const boardDefault = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
]

export const generateWordSet = async () => {
    let wordSet;
    let chosenWord;
    let wordSet2;
    await fetch(wordBank).then((response) => response.text()).then((result) => {
        const wordArr = result.split("\n");
        wordSet = new Set(wordArr)
    })

    await fetch(wordBankAnswers).then((response) => response.text()).then((result) => {
        const wordArr2 = result.split("\n");
        chosenWord = wordArr2[Math.floor(Math.random() * wordArr2.length)];
        console.log(chosenWord)
        wordSet2 = new Set(wordArr2)
    })

    return {wordSet, chosenWord};
}