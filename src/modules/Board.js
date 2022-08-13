import { Knight } from "./knight";

function Board(size = 8) {
    let board = [];
    for (let i = 0;i < size;i++) {
        let row = [];
        for (let j = 0;j < size;j++ ) {
            row.push(false)
        }
        board.push(row)
    }

    return {board}
}

//console.log(b1)

export {Board}