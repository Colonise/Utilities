import { removeMany } from './remove-many';
import { expect } from 'chai';

describe('removeMany() Tests', () => {
    const testCases = [
        {
            array: [
                'a',
                'b',
                'c',
                'd',
                'e'
            ],
            expected: [
                'a',
                'b',
                'e'
            ],
            items: [
                'c',
                'd'
            ]
        }
    ];

    it('removeMany<T>(array: T[], items: T[]) should remove an array of items from an array', () => {
        for (const { array, expected, items } of testCases) {
            const actual = removeMany(array, items);

            expect(actual).to.eql(expected);
        }
    });
});
