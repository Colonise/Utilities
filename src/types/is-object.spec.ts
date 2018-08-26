import { Expect, Test, TestCase, TestFixture } from 'alsatian';
import { isObject } from './is-object';

@TestFixture('isObject() Tests')
export class IsObjectTests {
    @TestCase([], true)
    @TestCase({}, true)
    @TestCase(null, false)
    @TestCase(1, false)
    @Test('isObject(obj: any) should check if a variable is a object')
    public isObject1<T>(object: T, expected: boolean) {
        const actual = isObject(object);

        Expect(actual).toBe(expected);
    }
}
