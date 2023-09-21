import { useState } from "react";
import "src/App.css";
import { Input } from "src/components/Input/Input";
import { Grid } from "./components/Grid/Grid";
import { word } from "./utils/words";
import { initialiseGrid } from "src/utils/intialiseGrid";

function App() {
    const [guessedWord, setGuessedWord] = useState("");
    const [currRow, setCurrRow] = useState(-1);
    const [gameState, setGameState] = useState("started");

    const [grid, setGrid] = useState(initialiseGrid());
    const handleGameOver = () => {
        if (gameState === "won") {
            return (
                <div className="result-wrapper">
                    <p className="result-message">You won !</p>
                    <button
                        className="restart-btn"
                        onClick={() => {
                            setGuessedWord("");
                            setCurrRow(-1);
                            setGameState("started");
                            setGrid(initialiseGrid());
                        }}
                    >
                        Retry
                    </button>
                </div>
            );
        } else if (currRow === 5) {
            if (gameState === "won")
                return (
                    <div className="result-wrapper">
                        <p className="result-message">You won !</p>
                        <button
                            className="restart-btn"
                            onClick={() => {
                                setGuessedWord("");
                                setCurrRow(-1);
                                setGameState("started");
                                setGrid(initialiseGrid());
                            }}
                        >
                            Retry
                        </button>
                    </div>
                );
            else
                return (
                    <div className="result-wrapper">
                        <p className="result-message">You Lost !</p>
                        <button
                            className="restart-btn"
                            onClick={() => {
                                setGuessedWord("");
                                setCurrRow(-1);
                                setGameState("started");
                                setGrid(initialiseGrid());
                            }}
                        >
                            Retry
                        </button>
                    </div>
                );
        } else return undefined;
    };
    const result = handleGameOver();
    console.log(word);

    return (
        <>
            <nav>
                <h1>Wordle</h1>
            </nav>
            <Grid currRow={currRow} setCurrRow={setCurrRow} grid={grid} />

            {result || (
                <Input
                    setGuessedWord={setGuessedWord}
                    setCurrRow={setCurrRow}
                    setGrid={setGrid}
                    currRow={currRow}
                    grid={grid}
                    word={word}
                    setGameState={setGameState}
                />
            )}
        </>
    );
}

export default App;
