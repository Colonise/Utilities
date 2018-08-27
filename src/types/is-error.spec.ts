import { Expect, Test, TestCase, TestFixture } from 'alsatian';
import { isError } from './is-error';

@TestFixture('isError() Tests')
export class IsErrorTests {
    @TestCase(new Error(), true)
    @TestCase(new EvalError(), true)
    @TestCase(new RangeError(), true)
    @TestCase(new ReferenceError(), true)
    @TestCase(new SyntaxError(), true)
    @TestCase(new TypeError(), true)
    @TestCase(new URIError(), true)
    @TestCase({}, false)
    @Test('isError()')
    public isError1<T>(object: T, expected: boolean) {
        const actual = isError(object);

        Expect(actual).toBe(expected);
    }
}
