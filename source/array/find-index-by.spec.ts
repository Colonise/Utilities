import { Expect, Test, TestCase, TestFixture } from 'alsatian';
import { ArrayIterator } from '../types';
import { findIndexBy } from './find-index-by';

@TestFixture('findIndexBy() Tests')
export class FindIndexByTests {
    @TestCase(['a', 'b', 'c', 'd', 'e'], -1, <ArrayIterator<string>>(item => item === 'f'))
    @Test('findIndex<T>(array: T[], iterator: ArrayIterator<T>) should use an iterator to return an index')
    public findIndexBy1<T>(array: T[], expected: T, iterator: ArrayIterator<T>) {
        const actual = findIndexBy(array, iterator);

        Expect(actual).toEqual(expected);
    }
}
