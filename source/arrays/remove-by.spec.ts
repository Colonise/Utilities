import { Expect, Test, TestCase, TestFixture } from 'alsatian';
import { ArrayIterator } from '../types';
import { removeBy } from './remove-by';

@TestFixture('removeBy() Tests')
export class RemoveByTests {
    @TestCase(['a', 'b', 'c', 'd', 'e'], ['a', 'b', 'e'], (item: string) => item >= 'c' && item <= 'd')
    @Test('removeBy<T>(array: T[], items: T[]) should remove an array of items from an array')
    public removeBy1<T>(array: T[], expected: T[], iterator: ArrayIterator<T>) {
        const actual = removeBy(array, iterator);

        Expect(actual).toEqual(expected);
    }
}
