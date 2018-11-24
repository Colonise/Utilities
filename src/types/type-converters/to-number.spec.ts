import { Expect, Test, TestCase, TestFixture } from 'alsatian';
import { toNumber } from './to-number';

@TestFixture('toNumber() Tests')
export class ToNumberTests {
    @TestCase(true, 1)
    @TestCase(1, 1)
    @TestCase(0, 0)
    @TestCase(-1, -1)
    @TestCase('', 0)
    @TestCase('1', 1)
    @TestCase('.1', 0.1)
    @TestCase([], 0)
    @TestCase(null, 0)
    @Test('toNumber(object: unknown) should convert an object to a number')
    public toNumber1(array: unknown[], expected: number) {
        const actual = toNumber(array);

        Expect(actual).toEqual(expected);
    }

    @TestCase(NaN)
    @TestCase('a')
    @TestCase({})
    @TestCase(undefined)
    @Test('toNumber(object: unknown) should convert an object to NaN')
    public toNumber2(array: unknown[]) {
        const actual = toNumber(array);

        Expect(isNaN(actual)).toEqual(true);
    }
}
