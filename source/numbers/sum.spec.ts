import { expect } from 'chai';
import { sum } from './sum';

describe('sum() Tests', () => {
    it('sum(object: unknown) should add all items in an object together', () => {
        const testCases = [
            {
                object: [
                    1,
                    2,
                    3
                ],
                expected: 6
            },
            {
                object: {
                    a: 1,
                    b: 2,
                    c: 3
                },
                expected: 6
            }
        ];

        for (const { object, expected } of testCases) {
            const actual = sum(object);

            expect(actual).to.equal(expected);
        }
    });
});
