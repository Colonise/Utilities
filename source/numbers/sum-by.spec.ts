import { expect } from 'chai';
import { sumBy } from './sum-by';

describe('sumBy() Tests', () => {
    it('sumBy(object: unknown, enumerator: ObjectEnumerator<object, number> | ArrayEnumerator<object, number>) should add all items in an object together using an Enumerator', () => {
        const testCases = [
            {
                object: [
                    { a: 1 },
                    { a: 2 },
                    { a: 3 }
                ],
                enumerator: (item: { a: number }) => item.a,
                expected: 6
            },
            {
                object: {
                    a: { a: 1 },
                    b: { a: 2 },
                    c: { a: 3 }
                },
                enumerator: (item: { a: number }) => item.a,
                expected: 6
            }
        ];

        for (const { object, enumerator, expected } of testCases) {
            const actual = sumBy(object, enumerator);

            expect(actual).to.equal(expected);
        }
    });
});
