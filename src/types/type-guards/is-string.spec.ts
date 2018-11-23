import { Expect, Test, TestCase, TestFixture } from 'alsatian';
import { isString } from './is-string';

@TestFixture('isString() Tests')
export class IsStringTests {
    @TestCase('a', true)
    @TestCase([], false)
    @TestCase({}, false)
    @Test('isString(object: unknown) should check if a variable is a string')
    public isString1(object: unknown, expected: boolean) {
        const actual = isString(object);

        Expect(actual).toBe(expected);
    }
}
