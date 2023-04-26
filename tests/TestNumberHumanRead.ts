const assert = require('assert')
import { numberOfHumanRead } from "../src/NumberhumanRead";




assert('123.12', numberOfHumanRead(123.12))
assert('1.234K', numberOfHumanRead(1234))
assert('12.345K', numberOfHumanRead(12345))
assert('123.456K', numberOfHumanRead(123456))
assert('1.234M', numberOfHumanRead(1234567))
assert('12.345M', numberOfHumanRead(12345678))
assert('123.456M', numberOfHumanRead(123456789))
assert('1.234B', numberOfHumanRead(1234567891))
assert('12.345B', numberOfHumanRead(12345678912))
assert('123.456B', numberOfHumanRead(123456789123))
assert('1.234T', numberOfHumanRead(1234567891234))
assert('12.345T', numberOfHumanRead(12345678912345))
assert('123.456T', numberOfHumanRead(123456789123456))
assert('1.234P', numberOfHumanRead(1234567891234567))
assert('12.345P', numberOfHumanRead(12345678912345678))
assert('123.456P', numberOfHumanRead(123456789123456789))