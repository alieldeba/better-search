type Options = {
    lowercase: boolean;
};
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
export declare function searchInString(word1: string, word2: string, options?: Options): boolean;
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
export declare function searchInArray(array: string[], word: string, options?: Options): string[];
export {};
