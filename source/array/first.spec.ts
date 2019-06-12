import { Expect, Test, TestCase, TestFixture } from 'alsatian';
import { first } from './first';

@TestFixture('first() Tests')
export class FirstTests {
    @TestCase([], undefined)
    @TestCase(['a', 'b', 'c', 'd', 'e'], 'a')
    @Test('first<T>(array: T[]) should return the first item')
    public first1<T>(array: T[], expected: T) {
        const actual = first(array);

        Expect(actual).toEqual(expected);
    }
}
