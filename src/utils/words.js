const words = [
    "CHECK",
    "SHOWN",
    "BRIEF",
    "CHART",
    "CROWN",
    "CYCLE",
    "BROAD",
    "CHEAP",
    "BRING",
];

const getRandomWord = () => {
    const length = words.length;
    return words[Math.floor(Math.random() * length)];
};

export const word = getRandomWord();
