import { expect } from 'chai';
import { insert } from './insert';

describe('insert() Tests', () => {
    it('insert<T>(array: T[], index: number, item: T) should insert an item into an array', () => {
        const testCases = [
            {
                array: [
                    'a',
                    'b',
                    'd',
                    'e'
                ],
                expected: [
                    'a',
                    'b',
                    'c',
                    'd',
                    'e'
                ],
                index: 2,
                item: 'c'
            }
        ];

        for (const { array, expected, index, item } of testCases) {
            const actual = insert(array, index, item);

            expect(actual).to.eql(expected);
        }
    });

    it('insert<T>(array: T[], index: number, items: T[]) should insert an array of items into an array', () => {
        const testCases = [
            {
                array: [
                    'a',
                    'b',
                    'e'
                ],
                expected: [
                    'a',
                    'b',
                    'c',
                    'd',
                    'e'
                ],
                index: 2,
                items: [
                    'c',
                    'd'
                ]
            }
        ];

        for (const { array, expected, index, items } of testCases) {
            const actual = insert(array, index, items);

            expect(actual).to.eql(expected);
        }
    });
});
