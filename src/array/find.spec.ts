import { Expect, Test, TestCase, TestFixture } from 'alsatian';
import { find } from './find';

@TestFixture('find Tests')
export class FindTests {
    @TestCase(['a', 'b', 'c', 'd', 'e'], 'c', 'c')
    @TestCase(['a', 'b', 'c', 'd', 'e'], undefined, 'f')
    @Test('find<T>(array: T[], item: T) should return an item')
    public find1<T>(array: T[], expected: T, item: T) {
        const actual = find(array, item);

        Expect(actual).toEqual(expected);
    }
}
