/**
 * references: 
 * 1. 
 */
const INDEX = ["K", "M", "B", "T", "P"];
const COUNT = 3;

/**
 * 将 num 转换为 人类可读的数字字符
 * 
 * @param num 需要转换的数字
 * @param decimals 数字转换的精度
 * @returns 用户可读的数字字符
 */
export function numberOfHumanRead (num: number, decimals=COUNT): string {
    if (num === 0) { // when 0 just return.
        return '0'
    }
    const DECIMALS = 10 ** decimals
    let numberStr = ''
    let __index = null

    /* transform - 数字转换 */
    if (num > DECIMALS) {
        const isFull = (parseInt(num.toString()) + "").length % decimals === 0; // 是否完全为 decimals 的倍数
        const _index = Math.floor((parseInt(num.toString()) + "").length / decimals);
        __index =  INDEX[_index - (isFull ? 2: 1)]
        numberStr = (num / DECIMALS ** (_index - (isFull ? 1: 0))).toFixed(decimals);
    } else {
        numberStr = num.toFixed(decimals) + "";
    }

    /* redecorated - 去掉尾部的 0 */
    while (numberStr[numberStr.length - 1] === '0') {
        numberStr = numberStr.substring(0, numberStr.length - 1)
    }

    return numberStr + (__index || '');
}