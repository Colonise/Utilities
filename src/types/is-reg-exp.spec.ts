import { Expect, IgnoreTest, Test, TestCase, TestFixture } from 'alsatian';
import { isRegExp } from './is-reg-exp';

@TestFixture('isRegExp() Tests')
export class IsRegExpTests {
    @TestCase(/a/, true)
    @TestCase(new RegExp('a'), true)
    @TestCase({}, false)
    @Test('isRegExp()')
    public isRegExp1<T>(object: T, expected: boolean) {
        const actual = isRegExp(object);

        Expect(actual).toBe(expected);
    }
}
