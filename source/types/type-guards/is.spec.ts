import { Expect, Test, TestCase, TestFixture } from 'alsatian';
import { Constructor } from '../constructor';
import { is } from './is';

@TestFixture('is() Tests')
export class IsTests {
    @TestCase({}, Object, true)
    @TestCase([], Object, true)
    @TestCase(1, Object, false)
    @TestCase(1, Number, true)
    @TestCase('a', Object, false)
    @TestCase('a', String, true)
    @TestCase(true, Object, false)
    @TestCase(true, Boolean, true)
    @Test(
        'is(obj: unknown, constructor: Constructor<unknown>) should check if a variable is an instance of a constructor'
    )
    public is1(object: unknown, constructor: Constructor, expected: boolean) {
        const actual = is(object, constructor);

        Expect(actual).toBe(expected);
    }

    @TestCase({}, Array, Object, true)
    @TestCase([], Array, Object, true)
    @TestCase(1, Object, Object, false)
    @TestCase(1, Object, Number, true)
    @TestCase('a', Object, Object, false)
    @TestCase('a', Object, String, true)
    @TestCase(true, Object, Object, false)
    @TestCase(true, Object, Boolean, true)
    @Test(
        'is(obj: unknown, constructor: Constructor<unknown>) should check if a variable is an instance of a constructor'
    )
    public is2(object: unknown, constructor1: Constructor, constructor2: Constructor, expected: boolean) {
        const actual = is(object, constructor1, constructor2);

        Expect(actual).toBe(expected);
    }
}
