"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchInString = searchInString;
exports.searchInArray = searchInArray;
const specialChars = {
    ".": "",
    " ": "",
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
    ة: "ه",
    ذ: "ز",
};
const english = {
    e: "i",
};
const replacementMap = Object.assign(Object.assign(Object.assign({}, specialChars), arabic), english);
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
function searchInString(word1, word2, options = { lowercase: true }) {
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
function searchInArray(array, word, options = { lowercase: true }) {
    if (options.lowercase) {
        word = word.toLowerCase();
    }
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (options.lowercase) {
            if (searchInString(word, array[i].toLowerCase())) {
                result.push(array[i]);
            }
        }
        else {
            if (searchInString(word, array[i])) {
                result.push(array[i]);
            }
        }
    }
    return result;
}
