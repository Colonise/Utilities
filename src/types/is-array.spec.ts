import { Expect, Test, TestCase, TestFixture } from 'alsatian';
import { isArray } from './is-array';

@TestFixture('isArray() Tests')
export class IsArrayTests {
    @TestCase([], true)
    @TestCase({}, false)
    @Test('isArray<T>(object: T) should check if an object is an array')
    public isArray1<T>(array: T[], expected: T) {
        const actual = isArray(array);

        Expect(actual).toEqual(expected);
    }
}
