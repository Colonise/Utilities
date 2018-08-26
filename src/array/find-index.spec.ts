import { Expect, Test, TestCase, TestFixture } from 'alsatian';
import { Finder } from '../types/finder';
import { findIndex } from './find-index';

@TestFixture('findIndex() Tests')
export class FindIndexTests {
    @TestCase(['a', 'b', 'c', 'd', 'e'], -1, 'f')
    @Test('findIndex<T>(array: T[], item: T) should return the index of an item')
    public findIndex1<T>(array: T[], expected: T, item: T) {
        const actual = findIndex(array, item);

        Expect(actual).toEqual(expected);
    }

    @TestCase(['a', 'b', 'c', 'd', 'e'], -1, <Finder<string>>(item => item === 'f'))
    @Test('findIndex<T>(array: T[], finder: Finder<T>) should use a finder to return an index')
    public findIndex2<T>(array: T[], expected: T, finder: Finder<T>) {
        const actual = findIndex(array, finder);

        Expect(actual).toEqual(expected);
    }
}
