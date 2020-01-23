import { expect } from 'chai';
import { minBy } from './min-by';

describe('minBy() Tests', () => {
    it('minBy(object: unknown, enumerator: ObjectEnumerator<object, number> | ArrayEnumerator<object, number>) should add all items in an object together using an Enumerator', () => {
        const testCases = [
            {
                object: [
                    1,
                    2,
                    3
                ],
                enumerator: (item: number) => item,
                expected: 1
            },
            {
                object: [
                    { a: 1 },
                    { a: 2 },
                    { a: 3 }
                ],
                enumerator: (item: { a: number }) => item.a,
                expected: { a: 1 }
            },
            {
                object: {
                    a: { a: 1 },
                    b: { a: 2 },
                    c: { a: 3 }
                },
                enumerator: (item: { a: number }) => item.a,
                expected: { a: 1 }
            }
        ];

        for (const { object, enumerator, expected } of testCases) {
            const actual = minBy(object, enumerator);

            expect(actual).to.eql(expected);
        }
    });
});
