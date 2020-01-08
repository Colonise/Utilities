import { ArrayIterator } from '../types';
import { findBy } from './find-by';
import { expect } from 'chai';

describe('findBy() Tests', () => {
    it('findBy<T>(array: T[], iterator: ArrayIterator<T>) should use a iterator to return an item', () => {
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
                iterator: <ArrayIterator<string>>(item => item === 'f')
            }
        ];

        for (const { array, expected, iterator } of testCases) {
            const actual = findBy(array, iterator);

            expect(actual).to.equal(expected);
        }
    });
});
