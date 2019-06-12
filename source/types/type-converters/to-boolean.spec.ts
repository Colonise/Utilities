import { Expect, Test, TestCase, TestFixture } from 'alsatian';
import { toBoolean } from './to-boolean';

@TestFixture('toBoolean() Tests')
export class ToBooleanTests {
    @TestCase(true, true)
    @TestCase(false, false)
    @TestCase(1, true)
    @TestCase(0, false)
    @TestCase(-1, true)
    @TestCase(NaN, false)
    @TestCase('', false)
    @TestCase('a', true)
    @TestCase([], true)
    @TestCase({}, true)
    @TestCase(null, false)
    @TestCase(undefined, false)
    @Test('toBoolean(object: unknown) should convert an object to a boolean')
    public toBoolean1(array: unknown[], expected: boolean) {
        const actual = toBoolean(array);

        Expect(actual).toEqual(expected);
    }
}
