import { expect } from 'chai';
import { clamp } from './clamp';

describe('clamp() Tests', () => {
    it('clamp(value: number, minimum: number, maximum: number) should clamp a number between the minimum and maximum', () => {
        const testCases = [
            {
                value: 5,
                minimum: 0,
                maximum: 10,
                expected: 5
            },
            {
                value: -1,
                minimum: 0,
                maximum: 10,
                expected: 0
            },
            {
                value: 11,
                minimum: 0,
                maximum: 10,
                expected: 10
            }
        ];

        for (const { value, minimum, maximum, expected } of testCases) {
            const actual = clamp(value, minimum, maximum);

            expect(actual).to.equal(expected);
        }
    });
});
