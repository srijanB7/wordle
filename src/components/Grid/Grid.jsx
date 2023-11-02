import { range } from "src/utils/range";
import "./Grid.css";

export const Grid = ({ currRow, setCurrRow, grid }) => {
    const rows = range(0, 6),
        cols = range(0, 5);

    return (
        <div className="grid-wrapper">
            {grid.map((row, ind) => (
                <div className="row" key={ind}>
                    {row.map((col, cellInd) => (
                        <div className={`cell ${col.className}`} key={cellInd}>
                            {col.value}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};
