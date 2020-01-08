import { isDate } from './is-date';
import { expect } from 'chai';

describe('isDate() Tests', () => {
    it('isDate(object: unknown) should check if a variable is a Date', () => {
        const testCases = [
            { object: new Date(), expected: true },
            { object: {}, expected: false }
        ];

        for (const { object, expected } of testCases) {
            const actual = isDate(object);

            expect(actual).to.equal(expected);
        }
    });
});
