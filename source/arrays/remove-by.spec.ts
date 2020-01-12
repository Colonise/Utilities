import { expect } from 'chai';
import { removeBy } from './remove-by';

describe('removeBy() Tests', () => {
    it('removeBy<T>(array: T[], items: T[]) should remove an array of items from an array', () => {
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
                enumerator: (item: string) => item >= 'c' && item <= 'd'
            }
        ];

        for (const { array, expected, enumerator } of testCases) {
            const actual = removeBy(array, enumerator);

            expect(actual).to.eql(expected);
        }
    });
});
