import { Expect, Test, TestCase, TestFixture } from 'alsatian';
import { isNumber } from './is-number';

@TestFixture('isNumber() Tests')
export class IsNumberTests {
    @TestCase(1, true)
    @TestCase(0, true)
    @TestCase(NaN, true)
    @TestCase([], false)
    @TestCase({}, false)
    @Test('isNumber(object: unknown) should check if a variable is a number')
    public isNumber1(object: unknown, expected: boolean) {
        const actual = isNumber(object);

        Expect(actual).toBe(expected);
    }
}
