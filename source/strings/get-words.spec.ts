import { Expect, Test, TestCase, TestFixture } from 'alsatian';
import { getWords } from './get-words';

@TestFixture('getWords() Tests')
export class GetWordsTests {
    @TestCase('abc def g h i', ['abc', 'def', 'g', 'h', 'i'])
    @Test('getWords(value: string) should get the words from a string')
    public getWords1(value: string, expected: string[]) {
        const actual = getWords(value);

        Expect(actual).toEqual(expected);
    }

    @TestCase('abc    def     g    h       i', ['abc', 'def', 'g', 'h', 'i'])
    @TestCase('abc    def     g    h    \t\t\t\r\r\r\n\n\n\n\n\n\r\n\r\n\r\n    i ', ['abc', 'def', 'g', 'h', 'i'])
    @Test('getWords(value: string) should handle large contiguous separators')
    public getWords2(value: string, expected: string[]) {
        const actual = getWords(value);

        Expect(actual).toEqual(expected);
    }

    @TestCase('abc%$ def"" g h- i/', ['abc', 'def', 'g', 'h', 'i'])
    @TestCase('abc!@ def\'\' g_ h?, i;.,', ['abc', 'def', 'g', 'h', 'i'])
    @Test('getWords(value: string) should ignore characters not in separators or letters')
    public getWords3(value: string, expected: string[]) {
        const actual = getWords(value);

        Expect(actual).toEqual(expected);
    }

    @TestCase('abCdeFGHi', ['ab', 'Cde', 'F', 'G', 'Hi'])
    @TestCase('ab Cde F G Hi', ['ab', 'Cde', 'F', 'G', 'Hi'])
    @TestCase('ab CdeF GHi', ['ab', 'Cde', 'F', 'G', 'Hi'])
    @TestCase('ABCDEFGHI', ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'])
    @TestCase('abcdefghi', ['abcdefghi'])
    @Test('getWords(value: string, { pascalCaseAsSeparator: true }) should separate words by upper case letters when')
    public getWords4(value: string, expected: string[]) {
        const actual = getWords(value, { pascalCaseAsSeparator: true });

        Expect(actual).toEqual(expected);
    }

    @TestCase('abCdeFGHi', ['abCdeFGHi'])
    @Test('getWords(value: string, { pascalCaseAsSeparator: false }) should not separate words by upper case letters when')
    public getWords5(value: string, expected: string[]) {
        const actual = getWords(value, { pascalCaseAsSeparator: false });

        Expect(actual).toEqual(expected);
    }
}
