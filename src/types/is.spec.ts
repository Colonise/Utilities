import { Expect, Test, TestCase, TestFixture } from 'alsatian';
import { Constructor } from './constructor';
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
    @Test('is(obj: any, constructor: Constructor<any>) should check if a variable is an instance of a constructor')
    public is1<T>(object: T, constructor: Constructor<T>, expected: boolean) {
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
    @Test('is(obj: any, constructor: Constructor<any>) should check if a variable is an instance of a constructor')
    public is2<T, T1, T2>(object: T, constructor1: Constructor<T1>, constructor2: Constructor<T2>, expected: boolean) {
        const actual = is(object, constructor1, constructor2);

        Expect(actual).toBe(expected);
    }
}
