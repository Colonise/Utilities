import { expect } from 'chai';
import { remove } from './remove';

describe('remove() Tests', () => {
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
                'd',
                'e'
            ],
            item: 'c'
        },
        {
            array: [
                'a',
                'a',
                'a',
                'b',
                'c',
                'd',
                'e'
            ],
            expected: [
                'b',
                'c',
                'd',
                'e'
            ],
            item: 'a'
        }
    ];

    it('remove<T>(array: T[], item: T) should remove an item from an array', () => {
        for (const { array, expected, item } of testCases) {
            const actual = remove(array, item);

            expect(actual).to.eql(expected);
        }
    });
});
