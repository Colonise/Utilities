import { Expect, Test, TestCase, TestFixture } from 'alsatian';
import { isDate } from './is-date';

@TestFixture('isDate() Tests')
export class IsDateTests {
    @TestCase(new Date(), true)
    @TestCase({}, false)
    @Test('isDate(object: unknown) should check if a variable is a Date')
    public isDate1(object: unknown, expected: boolean) {
        const actual = isDate(object);

        Expect(actual).toBe(expected);
    }
}
