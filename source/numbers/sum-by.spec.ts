import { expect } from 'chai';
import { sumBy } from './sum-by';

describe('sumBy() Tests', () => {
    it('sumBy(object: unknown, iterator: ObjectIterator<object, number> | ArrayIterator<object, number>) should add all items in an object together using an iterator', () => {
        const testCases = [
            {
                object: [
                    { a: 1 },
                    { a: 2 },
                    { a: 3 }
                ],
                iterator: (item: { a: number }) => item.a,
                expected: 6
            },
            {
                object: {
                    a: { a: 1 },
                    b: { a: 2 },
                    c: { a: 3 }
                },
                iterator: (item: { a: number }) => item.a,
                expected: 6
            }
        ];

        for (const { object, iterator, expected } of testCases) {
            const actual = sumBy(object, iterator);

            expect(actual).to.equal(expected);
        }
    });
});
