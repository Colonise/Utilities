import { Expect, Test, TestCase, TestFixture } from 'alsatian';
import { removeMany } from './remove-many';

@TestFixture('removeMany() Tests')
export class RemoveManyTests {
    @TestCase(['a', 'b', 'c', 'd', 'e'], ['a', 'b', 'e'], ['c', 'd'])
    @Test('removeMany<T>(array: T[], items: T[]) should remove an array of items from an array')
    public removeMany1<T>(array: T[], expected: T[], items: T[]) {
        const actual = removeMany(array, items);

        Expect(actual).toEqual(expected);
    }
}
