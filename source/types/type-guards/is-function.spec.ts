import { Expect, Test, TestCase, TestFixture } from 'alsatian';
import { isFunction } from './is-function';

@TestFixture('isFunction() Tests')
export class IsFunctionTests {
    // tslint:disable-next-line:no-empty
    @TestCase(() => {}, true)
    // tslint:disable-next-line:no-empty
    @TestCase(function() {}, true)
    @TestCase(Function, true)
    @TestCase([], false)
    @TestCase({}, false)
    @Test('isFunction(object: unknown) should check if a variable is a function')
    public isFunction1(object: unknown, expected: boolean) {
        const actual = isFunction(object);

        Expect(actual).toBe(expected);
    }
}
