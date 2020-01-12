import { expect } from 'chai';
import { ArrayEnumerator } from '../types';
import { findBy } from './find-by';

describe('findBy() Tests', () => {
    it('findBy<T>(array: T[], enumerator: ArrayEnumerator<T>) should use a Enumerator to return an item', () => {
        const testCases = [
            {
                array: [
                    'a',
                    'b',
                    'c',
                    'd',
                    'e'
                ],
                expected: undefined,
                enumerator: <ArrayEnumerator<string>>(item => item === 'f')
            }
        ];

        for (const { array, expected, enumerator } of testCases) {
            const actual = findBy(array, enumerator);

            expect(actual).to.equal(expected);
        }
    });
});
