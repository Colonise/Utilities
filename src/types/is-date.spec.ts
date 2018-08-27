import { Expect, Test, TestCase, TestFixture } from 'alsatian';
import { isDate } from './is-date';

@TestFixture('isDate() Tests')
export class IsDateTests {
    @TestCase(new Date(), true)
    @TestCase({}, false)
    @Test('isDate()')
    public isDate1<T>(object: T, expected: boolean) {
        const actual = isDate(object);

        Expect(actual).toBe(expected);
    }
}
