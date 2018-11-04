import { Expect, Test, TestCase, TestFixture } from 'alsatian';
import { isArray } from './is-array';

@TestFixture('isArray() Tests')
export class IsArrayTests {
    @TestCase([], true)
    @TestCase({}, false)
    @Test('isArray(object: unknown) should check if a variable is an array')
    public isArray1(array: unknown[], expected: unknown) {
        const actual = isArray(array);

        Expect(actual).toEqual(expected);
    }
}
