import { Expect, Test, TestCase, TestFixture } from 'alsatian';
import { unique } from './unique';

@TestFixture('unique() Tests')
export class UniqueTests {
    @TestCase(['a', 'a', 'a', 'a', 'b', 'c', 'c', 'd', 'd', 'd', 'e'], ['a', 'b', 'c', 'd', 'e'])
    @Test('unique<T>(array: T[]) should return an array with all items being unique')
    public unique1<T>(array: T[], expected: T[]) {
        const actual = unique(array);

        Expect(actual).toEqual(expected);
    }
}
