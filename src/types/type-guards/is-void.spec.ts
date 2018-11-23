import { Expect, Test, TestCase, TestFixture } from 'alsatian';
import { isVoid } from './is-void';

@TestFixture('isVoid() Tests')
export class IsVoidTests {
    @TestCase(undefined, true)
    @TestCase(null, true)
    @TestCase([], false)
    @TestCase({}, false)
    @Test('isVoid(object: unknown) should check if a variable is null or undefined')
    public isVoid1(object: unknown, expected: boolean) {
        const actual = isVoid(object);

        Expect(actual).toBe(expected);
    }
}
