"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberOfHumanRead = void 0;
/**
 * references:
 * 1.
 */
const INDEX = ["K", "M", "B", "T", "P"];
const COUNT = 3;
function numberOfHumanRead(num) {
    let numberStr = '';
    /* transform */
    if (num > 1000) {
        const _index = Math.floor((parseInt(num.toString()) + "").length / COUNT);
        numberStr = (num / 1000 ** _index).toFixed(COUNT) + INDEX[_index - 1];
    }
    else {
        numberStr = num.toFixed(COUNT) + "";
    }
    /* redecorated */
    const afterDot = numberStr.split(".")[1];
    const beforeDot = numberStr.split(".")[0];
    let humanString = '';
    let count = 0;
    for (let i = beforeDot.length - 1; i >= 0; i--, count++) {
        if (count === 3) {
            humanString = ',' + humanString;
        }
        humanString = beforeDot[i] + humanString;
    }
    humanString += "." + afterDot;
    return humanString;
}
exports.numberOfHumanRead = numberOfHumanRead;
