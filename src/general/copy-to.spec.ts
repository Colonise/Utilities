import { IgnoreTest, Test, TestCase, TestFixture } from 'alsatian';

@TestFixture('copyTo() Tests')
export class CopyToTests {
    @IgnoreTest('TODO')
    @TestCase(['a', 'b', 'c', 'd', 'e'], undefined, 'f')
    @Test('find<T>(array: T[], item: T) should return an item')
    public find1<T>(array: T[], expected: T, item: T) {
        // const actual = copyTo(array, item);
        // Expect(actual).toEqual(expected);
    }
}
