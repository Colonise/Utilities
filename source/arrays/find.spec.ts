import { find } from './find';
import { expect } from 'chai';

describe('find() Tests', () => {
    const testCases = [
        {
            array: [
                'a',
                'b',
                'c',
                'd',
                'e'
            ],
            expected: 'c',
            item: 'c'
        },
        {
            array: [
                'a',
                'b',
                'c',
                'd',
                'e'
            ],
            expected: undefined,
            item: 'f'
        }
    ];

    it('find<T>(array: T[], item: T) should return an item', () => {
        for (const { array, expected, item } of testCases) {
            const actual = find(array, item);

            expect(actual).to.equal(expected);
        }
    });
});
