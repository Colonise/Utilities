import { Expect, Test, TestCase, TestFixture } from 'alsatian';
import { Finder } from '../types/finder';
import { find } from './find';

@TestFixture('find Tests')
export class FindTests {
    @TestCase(['a', 'b', 'c', 'd', 'e'], 'c', 'c')
    @TestCase(['a', 'b', 'c', 'd', 'e'], undefined, 'f')
    @Test('find<T>(array: T[], item: T) should return an item')
    public find1<T>(array: T[], expected: T, item: T) {
        const actual = find(array, item);

        Expect(actual).toEqual(expected);
    }

    @TestCase(['a', 'b', 'c', 'd', 'e'], undefined, <Finder<string>>(item => item === 'f'))
    @Test('find<T>(array: T[], finder: Finder<T>) should use a finder to return an item')
    public find2<T>(array: T[], expected: T, finder: Finder<T>) {
        const actual = find(array, finder);

        Expect(actual).toEqual(expected);
    }
}
