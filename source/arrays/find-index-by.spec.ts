import { ArrayIterator } from '../types';
import { findIndexBy } from './find-index-by';
import { expect } from 'chai';

describe('findIndexBy() Tests', () => {
    it('findIndex<T>(array: T[], iterator: ArrayIterator<T>) should use an iterator to return an index', () => {
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
                iterator: <ArrayIterator<string>>(item => item === 'f')
            }
        ];

        for (const { array, expected, iterator } of testCases) {
            const actual = findIndexBy(array, iterator);

            expect(actual).to.equal(expected);
        }
    });
});
