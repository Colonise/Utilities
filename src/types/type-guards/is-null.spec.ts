import { Expect, Test, TestCase, TestFixture } from 'alsatian';
import { isNull } from './is-null';

@TestFixture('isNull() Tests')
export class IsNullTests {
    @TestCase(null, true)
    @TestCase([], false)
    @TestCase({}, false)
    @Test('isNull(object: unknown) should check if a variable is null')
    public isNull1(object: unknown, expected: boolean) {
        const actual = isNull(object);

        Expect(actual).toBe(expected);
    }
}
