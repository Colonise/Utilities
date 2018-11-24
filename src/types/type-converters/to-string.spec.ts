import { Expect, Test, TestCase, TestFixture } from 'alsatian';
import { toString } from './to-string';

@TestFixture('toString() Tests')
export class ToStringTests {
    @TestCase(true, 'true')
    @TestCase(1, '1')
    @TestCase(0, '0')
    @TestCase(-1, '-1')
    @TestCase(NaN, 'NaN')
    @TestCase('', '')
    @TestCase('a', 'a')
    @TestCase([], '')
    @TestCase(['a'], 'a')
    @TestCase(['a', 'b'], 'a,b')
    @TestCase({}, '[object Object]')
    @TestCase(null, 'null')
    @TestCase(undefined, 'undefined')
    @Test('toString(object: unknown) should convert an object to a string')
    public toString1(array: unknown[], expected: string) {
        const actual = toString(array);

        Expect(actual).toEqual(expected);
    }
}
