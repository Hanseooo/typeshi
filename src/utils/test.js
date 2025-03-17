

export function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color);
    return color;
}

export default function randomNum(n) { {
    return Math.floor((Math.random() * n) + 1);
    }
}

// export async function generateWord(quantity, language) {
//     let url = ` https://random-word-api.herokuapp.com/word?number=${quantity}&lang=${language}`

//     if (language === 'en') {
//         url = ` https://random-word-api.herokuapp.com/word?number=${quantity}`
//     }
//     return fetch(url).then((res) => res.json()).catch(() => { throw new Error("Error") })

// }

// async function generate() {
//     console.log(await generateWord(5, "en"))
// }

export async function generateWord(quantity, language, punctuation, numbers, capitalization) {
    let url = `https://random-word-api.herokuapp.com/word?number=${quantity}&lang=${language}`

    if (language === 'en') {
        url = `https://random-word-api.herokuapp.com/word?number=${quantity}`
    }
    const words = await fetch(url).then((res) => res.json()).catch(() => { throw new Error("Error") })
    const modifiedWords = [];

    if (capitalization) {
        words.forEach((word) => {
            if (randomNum(4) === 4) {
                word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            }
            modifiedWords.push(word);
        });
    }

    // Apply numbers if enabled
    if (numbers) {
        modifiedWords.forEach((word, index) => {
            if (randomNum(4) === 4) {
                word = generateNumbers(randomNum(2) + 2); // Generate a number string
            }
            modifiedWords[index] = word; // Update the word at the current index
        });
    }

    // Apply punctuation if enabled
    if (punctuation) {
        const punctuationMarks = ['.', ',', ';', '!', '?'];
        modifiedWords.forEach((word, index) => {
            if (randomNum(3) === 3) {
                const randomPunctuationIndex = randomNum(punctuationMarks.length) - 1; // Random index for punctuation
                word = `${word}${punctuationMarks[randomPunctuationIndex]}`; // Add punctuation
            }
            modifiedWords[index] = word; // Update word at the current index
        });
    }

    // Return the modified list of words, or original if no modifications
    if (!punctuation && !numbers && !capitalization) {
        return words; // If no modifications, return original words
    }

    return modifiedWords; // Return the modified words
}

// Helper function to generate random numbers
function generateNumbers(quantity) {
    let numbers = "";
    for (let i = 0; i < quantity; i++) {
        numbers += (randomNum(10) - 1) + ""; // Generate a number string
    }
    return numbers;
}

// Example of calling the function and logging the result
async function generate() {
    console.log(await generateWord(45, "en", true, true, true)); // Generate 15 words with all modifications
}

generate();





