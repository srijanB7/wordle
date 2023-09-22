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
    "STONE",
    "CROOK",
    "MEANT",
    "BRAIN",
    "EMPTY",
    "LOGIC",
    "MIXED",
    "NURSE",
    "NOTED",
    "OCEAN",
    "LEARN",
    "REACT",
    "MAJIC",
    "MONEY",
    "RIVER",
    "SPORT",
    "TOWER",
    "THINK",
    "WOMAN",
    "WHEEL",
    "VOICE",
    "TRAIN",
    "UNDER",
    "GRACE",
    "IDEAL",
    "GLOBE",
    "HUMAN",
    "EVENT",
    "DEBUT",
    "ALBUM",
    "ARENA",
    "BELOW",
    "BEGUN",
    "BEGIN",
    "BEGAN",
];

const generateRandomWord = () => {
    const length = words.length;
    return words[Math.floor(Math.random() * length)];
};

export let word = generateRandomWord();

export const getRandomWord = () => {
    
    word = generateRandomWord();
};
