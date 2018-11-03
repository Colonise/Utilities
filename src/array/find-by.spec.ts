import { Expect, Test, TestCase, TestFixture } from 'alsatian';
import { Finder } from '../types';
import { findBy } from './find-by';

@TestFixture('findBy Tests')
export class FindByTests {
    @TestCase(['a', 'b', 'c', 'd', 'e'], undefined, <Finder<string>>(item => item === 'f'))
    @Test('findBy<T>(array: T[], finder: Finder<T>) should use a finder to return an item')
    public findBy1<T>(array: T[], expected: T, finder: Finder<T>) {
        const actual = findBy(array, finder);

        Expect(actual).toEqual(expected);
    }
}
