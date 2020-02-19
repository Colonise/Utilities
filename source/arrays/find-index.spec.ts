import { expect } from 'chai';
import { findIndex } from './find-index';

describe('findIndex() Tests', () => {
    it('findIndex<T>(array: T[], item: T) should return the index of an item', () => {
        const testCases = [
            {
                array: [
                    'a',
                    'b',
                    'c',
                    'd',
                    'e'
                ],
                expected: -1,
                item: 'f'
            }
        ];

        for (const { array, expected, item } of testCases) {
            const actual = findIndex(array, item);

            expect(actual).to.equal(expected);
        }
    });
});
