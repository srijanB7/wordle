const initialGridCell = { value: "", className: "initial" };
export const initialiseGrid = () => {
    const res = [];
    for (let i = 0; i < 6; i++) {
        const cells = [];
        for (let j = 0; j < 5; j++) {
            cells.push(initialGridCell);
        }
        res.push(cells);
    }
    return res;
};
