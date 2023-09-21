import React, { useState } from "react";
import "src/components/Input/Input.css";

export const Input = ({
    setGuessedWord,
    setCurrRow,
    setGrid,
    currRow,
    grid,
    word,
    setGameState,
}) => {
    const [userInput, setUserInput] = useState("");
    return (
        <form
            className="input-wrapper"
            onSubmit={(event) => {
                event.preventDefault();
                setGuessedWord(userInput);
                setUserInput("");
                const nextRow = currRow + 1;
                setCurrRow(nextRow);
                const nextRowItems = [];
                let didWin = true;
                for (let i = 0; i < 5; i++) {
                    let className;
                    if (userInput[i] === word[i]) {
                        className = "correct";
                    } else if (
                        userInput[i] !== word[i] &&
                        word.indexOf(userInput[i]) !== -1
                    ) {
                        didWin = false;
                        className = "correct-but-incorrect-order";
                    } else if (
                        userInput[i] !== word[i] &&
                        word.indexOf(userInput[i]) === -1
                    ) {
                        didWin = false;
                        className = "incorrect";
                    }
                    const currObj = {
                        value: userInput[i],
                        className,
                    };
                    nextRowItems.push(currObj);
                }
                if (didWin) {
                    setGameState("won");
                }
                const nextGrid = grid.map((row, ind) => {
                    if (ind === nextRow) return nextRowItems;
                    return row;
                });
                setGrid(nextGrid);
            }}
        >
            <label htmlFor="guess-input" className="label">Enter Guess:</label>
            <input
                id="guess-input"
                className="guess-input"
                type="text"
                maxLength={5}
                value={userInput}
                onChange={(event) => setUserInput(event.target.value.toUpperCase())}
            />
        </form>
    );
};
