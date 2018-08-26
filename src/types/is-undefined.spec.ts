import { Expect, Test, TestCase, TestFixture } from 'alsatian';
import { isUndefined } from './is-undefined';

@TestFixture('isUndefined() Tests')
export class IsUndefinedTests {
    @TestCase(undefined, true)
    @TestCase([], false)
    @TestCase({}, false)
    @Test('isUndefined(obj: any) should check if a variable is undefined')
    public isUndefined1<T>(object: T, expected: boolean) {
        const actual = isUndefined(object);

        Expect(actual).toBe(expected);
    }
}
