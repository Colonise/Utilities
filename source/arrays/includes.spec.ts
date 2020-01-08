import { includes } from './includes';
import { expect } from 'chai';

describe('includes() Tests', () => {
    const testCases = [
        {
            array: [],
            item: undefined,
            expected: false
        },
        {
            array: [
                'a',
                'b',
                'c',
                'd',
                'e'
            ],
            item: 'a',
            expected: true
        }
    ];

    it('includes<T>(array: T[], item: T) should check whether an item is included in an array', () => {
        for (const { array, item, expected } of testCases) {
            const actual = includes(array, item);

            expect(actual).to.equal(expected);
        }
    });
});
