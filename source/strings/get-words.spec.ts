import { getWords } from './get-words';
import { expect } from 'chai';

describe('getWords() Tests', () => {
    it('getWords(value: string) should get the words from a string', () => {
        const testCases = [
            {
                value: 'abc def g h i',
                expected: [
                    'abc',
                    'def',
                    'g',
                    'h',
                    'i'
                ]
            }
        ];

        for (const { value, expected } of testCases) {
            const actual = getWords(value);

            expect(actual).to.eql(expected);
        }
    });

    it('getWords(value: string) should handle large contiguous separators', () => {
        const testCases = [
            {
                value: 'abc    def     g    h       i',
                expected: [
                    'abc',
                    'def',
                    'g',
                    'h',
                    'i'
                ]
            },
            {
                value: 'abc    def     g    h    \t\t\t\r\r\r\n\n\n\n\n\n\r\n\r\n\r\n    i ',
                expected: [
                    'abc',
                    'def',
                    'g',
                    'h',
                    'i'
                ]
            }
        ];
        for (const { value, expected } of testCases) {
            const actual = getWords(value);

            expect(actual).to.eql(expected);
        }
    });

    it('getWords(value: string) should ignore characters not in separators or letters', () => {
        const testCases = [
            {
                value: 'abc%$ def"" g h- i/',
                expected: [
                    'abc',
                    'def',
                    'g',
                    'h',
                    'i'
                ]
            },
            {
                value: `abc!@ def'' g_ h?, i;.,`,
                expected: [
                    'abc',
                    'def',
                    'g',
                    'h',
                    'i'
                ]
            }
        ];
        for (const { value, expected } of testCases) {
            const actual = getWords(value);

            expect(actual).to.eql(expected);
        }
    });

    it('getWords(value: string, { pascalCaseAsSeparator: true }) should separate words by upper case letters when', () => {
        const testCases = [
            {
                value: 'abCdeFGHi',
                expected: [
                    'ab',
                    'Cde',
                    'F',
                    'G',
                    'Hi'
                ]
            },
            {
                value: 'ab Cde F G Hi',
                expected: [
                    'ab',
                    'Cde',
                    'F',
                    'G',
                    'Hi'
                ]
            },
            {
                value: 'ab CdeF GHi',
                expected: [
                    'ab',
                    'Cde',
                    'F',
                    'G',
                    'Hi'
                ]
            },
            {
                value: 'ABCDEFGHI',
                expected: [
                    'A',
                    'B',
                    'C',
                    'D',
                    'E',
                    'F',
                    'G',
                    'H',
                    'I'
                ]
            },
            {
                value: 'abcdefghi',
                expected: [
                    'abcdefghi'
                ]
            }
        ];
        for (const { value, expected } of testCases) {
            const actual = getWords(value, { pascalCaseAsSeparator: true });

            expect(actual).to.eql(expected);
        }
    });

    it('getWords(value: string, { pascalCaseAsSeparator: false }) should not separate words by upper case letters when', () => {
        const testCases = [
            {
                value: 'abCdeFGHi',
                expected: [
                    'abCdeFGHi'
                ]
            }
        ];
        for (const { value, expected } of testCases) {
            const actual = getWords(value, { pascalCaseAsSeparator: false });

            expect(actual).to.eql(expected);
        }
    });
});
