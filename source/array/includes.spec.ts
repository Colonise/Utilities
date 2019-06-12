import { Expect, Test, TestCase, TestFixture } from 'alsatian';
import { includes } from './includes';

@TestFixture('includes() Tests')
export class IncludesTests {
    @TestCase([], undefined, false)
    @TestCase(['a', 'b', 'c', 'd', 'e'], 'a', true)
    @Test('includes<T>(array: T[], item: T) should check whether an item is included in an array')
    public includes1<T>(array: T[], item: T, expected: boolean) {
        const actual = includes(array, item);

        Expect(actual).toEqual(expected);
    }
}
