// domUpdates.js

import getRandomText from './texts.js';
import { getRandomItem } from './utils.js';
import adjectives from './adjectives.js';

export function updateTexts(generateButton, promptInput) {
    const text = getRandomText();
    console.log(`Updating texts with: ${text}`);
    generateButton.textContent = text;
}

export function updateImFeelingButton(imFeelingButton) {
    const randomAdjective = getRandomItem(adjectives);
    imFeelingButton.textContent = `I'm feeling ${randomAdjective}`;
}
