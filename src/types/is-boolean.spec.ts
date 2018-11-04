import { Expect, Test, TestCase, TestFixture } from 'alsatian';
import { isBoolean } from './is-boolean';

@TestFixture('isBoolean() Tests')
export class IsBooleanTests {
    @TestCase(true, true)
    @TestCase(false, true)
    @TestCase([], false)
    @TestCase({}, false)
    @Test('isBoolean(object: unknown) should check if a variable is a boolean')
    public isBoolean1(object: unknown, expected: boolean) {
        const actual = isBoolean(object);

        Expect(actual).toBe(expected);
    }
}
