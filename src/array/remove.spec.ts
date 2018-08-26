import { Expect, Test, TestCase, TestFixture } from 'alsatian';
import { remove } from './remove';

@TestFixture('remove Tests')
export class RemoveTests {

    @TestCase(['a', 'b', 'c', 'd', 'e'], ['a', 'b', 'd', 'e'], 2)
    @Test('remove<T>(array: T[], item: T) should remove an item from an array')
    public remove1<T>(array: T[], expected: T[], item: T) {
        const actual = remove(array, item);

        Expect(actual).toEqual(expected);
    }

    @TestCase(['a', 'b', 'c', 'd', 'e'], ['a', 'b', 'e'], ['c', 'd'])
    @Test('remove<T>(array: T[], items: T[]) should remove an array of items from an array')
    public remove2<T>(array: T[], expected: T[], items: T[]) {
        const actual = remove(array, items);

        Expect(actual).toEqual(expected);
    }

    @TestCase(['a', 'b', 'c', 'd', 'e'], ['a', 'b', 'e'], 2, 2)
    @Test(
        'remove<T>(array: T[], index: number, count?: number) should remove a count of items from an array by an index'
    )
    public remove3<T>(array: T[], expected: T[], index: number, count: number) {
        const actual = remove(array, index, count);

        Expect(actual).toEqual(expected);
}
}
