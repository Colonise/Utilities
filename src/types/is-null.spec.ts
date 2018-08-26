import { Expect, Test, TestCase, TestFixture } from 'alsatian';
import { isNull } from './is-null';

@TestFixture('isNull() Tests')
export class IsNullTests {
    @TestCase(null, true)
    @TestCase([], false)
    @TestCase({}, false)
    @Test('isNull(obj: any) should check if a variable is null')
    public isNull1<T>(object: T, expected: boolean) {
        const actual = isNull(object);

        Expect(actual).toBe(expected);
    }
}
