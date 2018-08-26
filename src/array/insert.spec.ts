import { Expect, Test, TestCase, TestFixture } from 'alsatian';
import { insert } from './insert';

@TestFixture('insert Tests')
export class InsertTests {
    @TestCase(['a', 'b', 'd', 'e'], ['a', 'b', 'c', 'd', 'e'], 2, 'c')
    @Test('insert<T>(array: T[], index: number, item: T) should insert an item into an array')
    public insert1<T>(array: T[], expected: T[], index: number, item: T) {
        const actual = insert(array, index, item);

        Expect(actual).toEqual(expected);
    }

    @TestCase(['a', 'b', 'e'], ['a', 'b', 'c', 'd', 'e'], 2, ['c', 'd'])
    @Test('insert<T>(array: T[], index: number, items: T[]) should insert an array of items into an array')
    public insert2<T>(array: T[], expected: T[], index: number, items: T[]) {
        const actual = insert(array, index, items);

        Expect(actual).toEqual(expected);
    }
}
