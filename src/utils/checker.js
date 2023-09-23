export const check = (userInput, word) => {
    let didWin = true;
    let currWord = [...word];
    const nextRowItems = [];
    nextRowItems.length = 5;
    const input = [...userInput];
    for (let i = 0; i < 5; i++) {
        if (currWord[i] === input[i]) {
            nextRowItems[i] = {
                value: input[i],
                className: "correct",
            };
            currWord[i] = ".";
            input[i] = ".";
        }
    }

    for (let i = 0; i < 5; i++) {
        if (input[i] === ".") {
            continue;
        }
        nextRowItems[i] = {
            value: input[i],
            className: "incorrect",
        };
        didWin = false;
        if (currWord.includes(input[i])) {
            nextRowItems[i] = {
                value: input[i],
                className: "correct-but-incorrect-order",
            };
            const ind = currWord.findIndex((word) => word === input[i]);
            currWord[ind] = ".";
            didWin = false;
        }
    }
    return { nextRowItems, didWin };
};
