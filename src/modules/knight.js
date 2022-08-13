import { Board } from "./Board";

function Knight(startRow = 0, startCol = 0 ) {
    if ((startRow < 8 && startCol < 8) && (startRow >= 0 && startCol >= 0)) {
        return {
            startRow,
            startCol
        }
    } else {
        return false;
    }
}

let k1 = Knight(7,1);
let k2 = Knight(9,5);
let k3 = Knight(2,-3);

export {Knight}

//console.log(k1);
//console.log(k2);
//console.log(k3)