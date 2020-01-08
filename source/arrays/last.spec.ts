import { last } from './last';
import { expect } from 'chai';

describe('last() Tests', () => {
    it('last<T>(array: T[]) should return the last item', () => {
        const testCases = [
            {
                array: [],
                expected: undefined
            },
            {
                array: [
                    'a',
                    'b',
                    'c',
                    'd',
                    'e'
                ],
                expected: 'e'
            }
        ];

        for (const { array, expected } of testCases) {
            const actual = last(array);

            expect(actual).to.equal(expected);
        }
    });
});
