import { Expect, Test, TestCase, TestFixture } from 'alsatian';
import { remove } from './remove';

@TestFixture('remove() Tests')
export class RemoveTests {
    @TestCase(['a', 'b', 'c', 'd', 'e'], ['a', 'b', 'd', 'e'], 'c')
    @TestCase(['a', 'a', 'a', 'b', 'c', 'd', 'e'], ['b', 'c', 'd', 'e'], 'a')
    @Test('remove<T>(array: T[], item: T) should remove an item from an array')
    public remove1<T>(array: T[], expected: T[], item: T) {
        const actual = remove(array, item);

        Expect(actual).toEqual(expected);
    }
}
