import randomNum from "./randomNum"

export async function generateWord(quantity: number, language: string, punctuation: boolean, numbers: boolean, capitalization: boolean) {
    let url = `https://random-word-api.herokuapp.com/word?number=${quantity}&lang=${language}`;

    if (language === 'en') {
        url = `https://random-word-api.herokuapp.com/word?number=${quantity}`;
    }

    const words = await fetch(url)
        .then((res) => res.json())
        .catch(() => { throw new Error("Error fetching words") });

    const modifiedWords: string[] = [];

    if (capitalization) {
        words.forEach((word: string) => {
            if (randomNum(4) === 4) {
                word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            }
            modifiedWords.push(word);
        });
    } else {
        words.forEach((word: string) => modifiedWords.push(word));
    }

    if (numbers) {
        modifiedWords.forEach((word: string, index: number) => {
            if (randomNum(4) === 4) {
                word = generateNumbers(randomNum(2) + 2);
            }
            modifiedWords[index] = word;
        });
    }

    if (punctuation) {
        const punctuationMarks = ['.', ',', ';', '!', '?'];
        modifiedWords.forEach((word: string, index: number) => {
            if (randomNum(3) === 3) {
                const randomPunctuationIndex = randomNum(punctuationMarks.length) - 1;
                word = `${word}${punctuationMarks[randomPunctuationIndex]}`;
            }
            modifiedWords[index] = word;
        });
    }

    if (!punctuation && !numbers && !capitalization) {
        return words;
    }
    return modifiedWords;
}

function generateNumbers(quantity: number): string {
    let numbers = "";
    for (let i = 0; i < quantity; i++) {
        numbers += (randomNum(10) - 1) + "";
    }
    return numbers;
}

console.log(await generateWord(5, "en", true, true, true));
