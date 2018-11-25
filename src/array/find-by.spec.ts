import { Expect, Test, TestCase, TestFixture } from 'alsatian';
import { ArrayIterator } from '../types';
import { findBy } from './find-by';

@TestFixture('findBy() Tests')
export class FindByTests {
    @TestCase(['a', 'b', 'c', 'd', 'e'], undefined, <ArrayIterator<string>>(item => item === 'f'))
    @Test('findBy<T>(array: T[], iterator: ArrayIterator<T>) should use a iterator to return an item')
    public findBy1<T>(array: T[], expected: T, iterator: ArrayIterator<T>) {
        const actual = findBy(array, iterator);

        Expect(actual).toEqual(expected);
    }
}
