import { Expect, Test, TestCase, TestFixture } from 'alsatian';
import { Finder } from '../types';
import { findIndexBy } from './find-index-by';

@TestFixture('findIndexBy() Tests')
export class FindIndexByTests {
    @TestCase(['a', 'b', 'c', 'd', 'e'], -1, <Finder<string>>(item => item === 'f'))
    @Test('findIndex<T>(array: T[], finder: Finder<T>) should use a finder to return an index')
    public findIndexBy1<T>(array: T[], expected: T, finder: Finder<T>) {
        const actual = findIndexBy(array, finder);

        Expect(actual).toEqual(expected);
    }
}
