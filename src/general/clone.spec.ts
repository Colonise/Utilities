import { Expect, Test, TestCase, TestFixture } from 'alsatian';
import { clone } from './clone';

@TestFixture('clone() Tests')
export class CloneTests {
    @TestCase(['a', 'b', 'c', 'd', 'e'], ['a', 'b', 'c', 'd', 'e'])
    @TestCase({ a: 1, b: 2, c: 3 }, { a: 1, b: 2, c: 3 })
    @Test('clone<T>(object: T) should clone an object')
    public clone1<T>(object: T, expected: T) {
        const actual = clone(object);

        Expect(actual).toEqual(expected);
    }
}
