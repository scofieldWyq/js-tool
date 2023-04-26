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
    if (num === 0) {
        return '0';
    }
    let numberStr = '';
    let __index = null;
    /* transform */
    if (num > 1000) {
        const _index = Math.floor((parseInt(num.toString()) + "").length / COUNT);
        __index = INDEX[_index - 1];
        numberStr = (num / 1000 ** _index).toFixed(COUNT);
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
    if (afterDot) {
        humanString += "." + afterDot;
    }
    while (humanString[humanString.length - 1] === '0') {
        humanString = humanString.substring(0, humanString.length - 1);
    }
    return humanString + (__index || '');
}
exports.numberOfHumanRead = numberOfHumanRead;
