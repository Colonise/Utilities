import { Expect, Test, TestCase, TestFixture } from 'alsatian';
import { isRegExp } from './is-reg-exp';

@TestFixture('isRegExp() Tests')
export class IsRegExpTests {
    @TestCase(/a/, true)
    @TestCase(new RegExp('a'), true)
    @TestCase({}, false)
    @Test('isRegExp(object: unknown) should check if a variable is a RegExp')
    public isRegExp1(object: unknown, expected: boolean) {
        const actual = isRegExp(object);

        Expect(actual).toBe(expected);
    }
}
