import { getRandomItem } from './utils.js';

// Separate texts by category
const motivationalTexts = [
    'Let’s go!', 'Create it!', 'Make magic happen!', 'Do it!', 'Let’s do this!', 'Get creative!', 'Go wild!', 'Start now!',
    'Generate!', 'Make it happen!', 'Dream big!', 'Let’s create!', 'Unleash creativity!', 'Innovate!', 'Spark ideas!',
    'Craft it!', 'Imagine!', 'Design now!', 'Get inspired!', 'Bring it to life!', 'Think big!', 'Create now!', 'Make it!',
    'Keep calm and create on!', 'May the odds be ever in your favor!', 'To infinity and beyond!', 'Level up!', 'New game!',
    'Start quest!', 'Boss mode!', 'Power up!', 'Press any key to start!'
];

const easterEggsTexts = [
    'Use the force, Luke!', 'I find your lack of faith disturbing.', 'I have a bad feeling about this.',
    'It’s a trap!', 'Never tell me the odds.', 'In my experience, there is no such thing as luck.',
    'The force will be with you, always.', 'Live long and prosper.', 'The needs of the many outweigh the needs of the few.',
    'Resistance is futile.', 'Set phasers to stun.', 'Beam me up, Scotty!', 'To boldly go where no man has gone before.',
    'Space, the final frontier.', 'Engage!', 'Make it so.', 'Warp speed!', 'Fascinating.', 'Do or do not, there is no try.',
    'Do a barrel roll!', 'It’s dangerous to go alone! Take this.', 'Good luck, Fox!', 'Try a somersault!', 'The enemy’s coming from behind.',
    'We’re heading out!', 'I see the enemy core!', 'Move it, Fox!', 'This is Peppy, all systems go.', 'It’s dangerous to go alone! Let’s see what you’ve got!',
    'You’re becoming more like your father.', 'Fox, get this guy off me!', 'I’m fine, you okay?', 'Can’t let you do that, Star Fox!',
    'You’ve met with a terrible fate, haven’t you?', 'You were almost a Jill sandwich!',
    'War. War never changes.', 'Praise the sun!', 'Would you kindly?', 'Finish him!', 'Get over here!', 'Arrow to the knee.',
    'I used to be an adventurer like you.', 'It’s high noon.', 'Who’s your daddy?', 'Stop right there, criminal scum!',
    'Would you like to know more?', 'The only good bug is a dead bug.', 'Come on, you apes! You wanna live forever?',
    'Service guarantees citizenship.', 'I’m from Buenos Aires, and I say kill ‘em all!', 'I’m doing my part!', 'Cowboys forever!',
    'Robot Danny Glover!', 'Maaaannn...'
];

// Probabilities for motivational (55%) and easter eggs (45%)
const probabilities = [
    ...Array(55).fill('motivational'),
    ...Array(45).fill('easter_eggs')
];

// Function to select a random text based on probabilities
function getRandomText() {
    const randomIndex = Math.floor(Math.random() * probabilities.length);
    const selectedType = probabilities[randomIndex];

    let selectedText;
    if (selectedType === 'motivational') {
        selectedText = getRandomItem(motivationalTexts);
    } else {
        selectedText = getRandomItem(easterEggsTexts);
    }

    console.log(`Selected type: ${selectedType}`);
    console.log(`Selected text: ${selectedText}`);
    return selectedText;
}

export default getRandomText;
