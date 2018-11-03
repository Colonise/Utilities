import { Expect, Test, TestCase, TestFixture } from 'alsatian';
import { findIndex } from './find-index';

@TestFixture('findIndex() Tests')
export class FindIndexTests {
    @TestCase(['a', 'b', 'c', 'd', 'e'], -1, 'f')
    @Test('findIndex<T>(array: T[], item: T) should return the index of an item')
    public findIndex1<T>(array: T[], expected: T, item: T) {
        const actual = findIndex(array, item);

        Expect(actual).toEqual(expected);
    }
}
