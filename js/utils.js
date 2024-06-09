// utils.js

/**
 * Returns a random item from the provided array.
 * If the array is empty or not provided, returns an empty string and logs an error.
 * @param {Array} arr - The array to pick a random item from.
 * @returns {*} - The randomly selected item or an empty string.
 */
export function getRandomItem(arr) {
    if (!arr || arr.length === 0) {
        console.error('getRandomItem: array is empty or not provided');
        return '';
    }
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

/**
 * Returns the appropriate article ('a' or 'an') for the given word.
 * @param {string} word - The word to get the article for.
 * @returns {string} - 'a' or 'an' based on the first letter of the word.
 */
export function getArticle(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(word[0].toLowerCase()) ? 'an' : 'a';
}

console.log('utils.js loaded');
