import { Expect, Test, TestCase, TestFixture } from 'alsatian';
import { last } from './last';

@TestFixture('last() Tests')
export class LastTests {
    @TestCase([], undefined)
    @TestCase(['a', 'b', 'c', 'd', 'e'], 'e')
    @Test('last<T>(array: T[]) should return the last item')
    public last1<T>(array: T[], expected: T) {
        const actual = last(array);

        Expect(actual).toEqual(expected);
    }
}
