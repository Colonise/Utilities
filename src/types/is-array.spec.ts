import { Expect, IgnoreTest, Test, TestCase, TestFixture } from 'alsatian';
import { isArray } from './is-array';

@TestFixture('find Tests')
export class FindTests {
    @IgnoreTest('TODO')
    @TestCase(['a', 'b', 'c', 'd', 'e'], undefined, 'f')
    @Test('find<T>(array: T[], item: T) should return an item')
    public find1<T>(array: T[], expected: T, item: T) {
        const actual = isArray(array);

        Expect(actual).toEqual(expected);
    }
}
