const assert = require('assert')
import { numberOfHumanRead } from "../src/NumberhumanRead";
import {expect, jest, test} from '@jest/globals';

/* unit tests */
test("Run numberOfHumanRead test", () => {
    expect(numberOfHumanRead(0.12312)).toBe('0.123');
    expect(numberOfHumanRead(1.2312)).toBe('1.231');
    expect(numberOfHumanRead(12.312)).toBe('12.312');
    expect(numberOfHumanRead(123.12)).toBe('123.12');
    expect(numberOfHumanRead(1234)).toBe('1.234K'); 
    expect(numberOfHumanRead(12345)).toBe('12.345K'); 
    expect(numberOfHumanRead(123456)).toBe('123.456K'); 
    expect(numberOfHumanRead(1234567)).toBe('1.235M'); 
    expect(numberOfHumanRead(12345678)).toBe('12.346M');
    expect(numberOfHumanRead(123456789)).toBe('123.457M'); 
    expect(numberOfHumanRead(1234567891)).toBe('1.235B'); 
    expect(numberOfHumanRead(12345678912)).toBe('12.346B'); 
    expect(numberOfHumanRead(123456789123)).toBe('123.457B'); 
    expect(numberOfHumanRead(1234567891234)).toBe('1.235T'); 
    expect(numberOfHumanRead(12345678912345)).toBe('12.346T'); 
    expect(numberOfHumanRead(123456789123456)).toBe('123.457T'); 
    expect(numberOfHumanRead(1234567891234567)).toBe('1.235P'); 
    expect(numberOfHumanRead(12345678912345678)).toBe('12.346P'); 
    expect(numberOfHumanRead(123456789123456789)).toBe('123.457P'); 
})