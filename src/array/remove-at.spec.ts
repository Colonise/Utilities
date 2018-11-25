import { Expect, Test, TestCase, TestFixture } from 'alsatian';
import { removeAt } from './remove-at';

@TestFixture('removeAt() Tests')
export class RemoveAtTests {
    @TestCase(['a', 'b', 'c', 'd', 'e'], ['a', 'b', 'e'], 2, 2)
    @Test(
        'removeAt<T>(array: T[], index: number, count?: number) should remove a count of items from an array by an index'
    )
    public remove1<T>(array: T[], expected: T[], index: number, count: number) {
        const actual = removeAt(array, index, count);

        Expect(actual).toEqual(expected);
    }
}
