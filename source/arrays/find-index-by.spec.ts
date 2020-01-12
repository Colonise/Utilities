import { expect } from 'chai';
import { ArrayEnumerator } from '../types';
import { findIndexBy } from './find-index-by';

describe('findIndexBy() Tests', () => {
    it('findIndex<T>(array: T[], enumerator: ArrayEnumerator<T>) should use an Enumerator to return an index', () => {
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
                enumerator: <ArrayEnumerator<string>>(item => item === 'f')
            }
        ];

        for (const { array, expected, enumerator } of testCases) {
            const actual = findIndexBy(array, enumerator);

            expect(actual).to.equal(expected);
        }
    });
});
