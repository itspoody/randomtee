import { updateTexts, updateImFeelingButton } from './domUpdates.js';
import { getRandomItem } from './utils.js';
import adjectives from './adjectives.js';
import nouns from './nouns.js';
import getRandomText from './texts.js';  // Ensure this import is correct
import { startLoadingAnimation, stopLoadingAnimation } from './loadingAnimation.js';
import { fadeInElement, fadeOutElement, enlargeElement, shrinkElement } from './fadeEffects.js';

export function initializeEvents() {
    const generateButton = document.getElementById('generate');
    const imFeelingButton = document.getElementById('im-feeling');
    const promptInput = document.getElementById('prompt');
    const logo = document.getElementById('logo');
    const pinwheel = document.getElementById('pinwheel');
    const placeholder = document.getElementById('placeholder');
    const searchBar = document.querySelector('.search-bar');
    const buttons = document.querySelector('.buttons');
    const loading = document.getElementById('loading');

    // Initial update of texts and buttons on page load
    updateTexts(generateButton, promptInput);
    updateImFeelingButton(imFeelingButton);

    // Create initial prompt
    const initialAdjective = getRandomItem(adjectives);
    const initialNoun = getRandomItem(nouns);
    promptInput.placeholder = `let's make a ${initialAdjective} ${initialNoun} shirt!`;

    // Function to cycle generate button text
    function cycleGenerateButtonText() {
        const newText = getRandomText();
        if (!newText) {
            console.error('cycleGenerateButtonText: newText is empty or null');
        }
        generateButton.textContent = newText;
        console.log(`New generate button text: ${newText}`);
    }

    // Event listener for "Generate" button click
    generateButton.addEventListener('click', function() {
        console.log('Generate button clicked');
        fadeOutElement(logo, 1000, () => {
            logo.style.display = 'none';
            console.log('Logo faded out');
        });

        searchBar.style.opacity = 0.5;
        buttons.style.opacity = 0.5;
        promptInput.style.opacity = 0.5;
        console.log('Search bar, buttons, and prompt input opacity set to 0.5');

        loading.classList.add('active');
        console.log('Loading animation started');

        // Show the pinwheel and animate its appearance immediately after the logo fades out
        pinwheel.style.display = 'block';
        pinwheel.style.opacity = 0; // Ensure pinwheel starts at 100% transparency
        enlargeElement(pinwheel, 2000);
        fadeInElement(pinwheel, 2000, () => {
            console.log('Pinwheel enlarged and faded in');
        });

        startLoadingAnimation();

        setTimeout(() => {
            shrinkElement(pinwheel, 500, () => {
                pinwheel.style.display = 'none';
                console.log('Pinwheel shrunk and hidden');
                stopLoadingAnimation();
                placeholder.style.opacity = 0;
                placeholder.style.display = 'block';
                fadeInElement(placeholder, 3000);
                cycleGenerateButtonText(); // Update the text immediately after the placeholder appears
            });

            loading.classList.remove('active');
            console.log('Loading animation stopped');
        }, 3000);
    });

    // Add event listeners for mouseover to reset opacity
    searchBar.addEventListener('mouseover', function() {
        searchBar.style.opacity = 1;
        buttons.style.opacity = 1;
        promptInput.style.opacity = 1;
        console.log('Mouseover on search bar or buttons - opacity reset to 1');
    });

    buttons.addEventListener('mouseover', function() {
        searchBar.style.opacity = 1;
        buttons.style.opacity = 1;
        promptInput.style.opacity = 1;
        console.log('Mouseover on search bar or buttons - opacity reset to 1');
    });

    imFeelingButton.addEventListener('click', function() {
        const randomAdjective = getRandomItem(adjectives);
        const randomNoun = getRandomItem(nouns);
        promptInput.placeholder = `let's make a ${randomAdjective} ${randomNoun} shirt!`;
        updateImFeelingButton(imFeelingButton);
        console.log('I\'m feeling button clicked - new placeholder and button text set');
    });

    promptInput.addEventListener('focus', function() {
        searchBar.style.opacity = 1;
        buttons.style.opacity = 1;
        promptInput.style.opacity = 1;
        console.log('Prompt input focused - opacity reset to 1');
    });
}
