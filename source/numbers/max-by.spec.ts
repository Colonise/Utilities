import { expect } from 'chai';
import { maxBy } from './max-by';

describe('maxBy() Tests', () => {
    it('maxBy(object: unknown, enumerator: ObjectEnumerator<object, number> | ArrayEnumerator<object, number>) should add all items in an object together using an Enumerator', () => {
        const testCases = [
            {
                object: [
                    1,
                    2,
                    3
                ],
                enumerator: (item: number) => item,
                expected: 3
            },
            {
                object: [
                    { a: 1 },
                    { a: 2 },
                    { a: 3 }
                ],
                enumerator: (item: { a: number }) => item.a,
                expected: { a: 3 }
            },
            {
                object: {
                    a: { a: 1 },
                    b: { a: 2 },
                    c: { a: 3 }
                },
                enumerator: (item: { a: number }) => item.a,
                expected: { a: 3 }
            }
        ];

        for (const { object, enumerator, expected } of testCases) {
            const actual = maxBy(object, enumerator);

            expect(actual).to.eql(expected);
        }
    });
});
