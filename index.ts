const specialChars = {
    ".": "",
    " ": "",
    "-": "",
    "!": "",
    "؟": "",
    "?": "",
};

const arabic = {
    أ: "ا",
    إ: "ا",
    ء: "ا",
    آ: "ا",
    ئ: "ا",
    ؤ: "ا",
    ط: "ت",
    ى: "ي",
    ه: "ة",
    ة: "ت",
    ذ: "ز",
};

const diacritics = {
    "ّ": "",
    "َ": "",
    "ً": "",
    "ُ": "",
    "ٌ": "",
    "ِ": "",
    "ٍ": "",
    "ْ": "",
};

const english = {
    e: "i",
    y: "i",
    k: "c",
    ä: "a",
    ö: "o",
    ü: "u",
    ç: "c",
};

const numbers = {
    "٠": "0",
    "١": "1",
    "٢": "2",
    "٣": "3",
    "٤": "4",
    "٥": "5",
    "٦": "6",
    "٧": "7",
    "٨": "8",
    "٩": "9",
};

type ReplacementMap = {
    [key: string]: string;
};

type Options = {
    lowercase: boolean;
};

const replacementMap: ReplacementMap = {
    ...specialChars,
    ...arabic,
    ...english,
    ...numbers,
    ...diacritics,
};

const regexString = Object.keys(replacementMap).join("");
let regex = new RegExp("[" + regexString + "]", "g");

/**
 * @description
 * This function will search for a word in another word,
 * disregarding Arabic diacritics and special characters.
 * @param {String} word1 - The word to search in
 * @param {String} word2 - The word to search for
 * @param {Options} options - Options object
 * @param {Boolean} options.lowercase - Whether to lowercase the words before searching
 * @returns {Boolean} Whether the word2 is found in word1
 */
export function searchInString(
    word1: string,
    word2: string,
    options: Options = { lowercase: true }
): boolean {
    if (options.lowercase) {
        word1 = word1.toLowerCase();
        word2 = word2.toLowerCase();
    }

    word1 = word1.replace(regex, function (match) {
        return replacementMap[match];
    });

    word2 = word2.replace(regex, function (match) {
        return replacementMap[match];
    });

    return word1.includes(word2) || word2.includes(word1);
}

/**
 * @description
 * This function will search for a word in an array of words,
 * disregarding Arabic diacritics and special characters.
 * @param {Array} array - The array to search in
 * @param {String} word - The word to search for
 * @param {Options} options - Options object
 * @param {Boolean} options.lowercase - Whether to lowercase the words before searching
 * @returns {Array} An array of words that contain the given word
 */
export function searchInArray(
    array: string[],
    word: string,
    options: Options = { lowercase: true }
): string[] {
    if (options.lowercase) {
        word = word.toLowerCase();
    }

    const result: string[] = [];

    for (let i = 0; i < array.length; i++) {
        if (options.lowercase) {
            if (searchInString(word, array[i].toLowerCase())) {
                result.push(array[i]);
            }
        } else {
            if (searchInString(word, array[i])) {
                result.push(array[i]);
            }
        }
    }

    return result;
}
