import { useState } from "react";
import { check } from "src/utils/checker";
import "src/components/Input/Input.css";

export const Input = ({
    setCurrRow,
    setGrid,
    currRow,
    grid,
    word,
    setGameState,
}) => {
    const [userInput, setUserInput] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        setUserInput("");
        const nextRow = currRow + 1;
        setCurrRow(nextRow);
        const checkObj = check(userInput, word);
        const nextRowItems = checkObj.nextRowItems;
        let didWin = checkObj.didWin;
        if (didWin) {
            setGameState("won");
        }
        const nextGrid = grid.map((row, ind) => {
            if (ind === nextRow) return nextRowItems;
            return row;
        });
        setGrid(nextGrid);
    }

    return (
        <form
            className="input-wrapper"
            onSubmit={(event) => handleSubmit(event)}
        >
            <label htmlFor="guess-input" className="label">
                Enter Guess:
            </label>
            <input
                id="guess-input"
                className="guess-input"
                type="text"
                maxLength={5}
                value={userInput}
                onChange={(event) =>
                    setUserInput(event.target.value.toUpperCase())
                }
            />
        </form>
    );
};
