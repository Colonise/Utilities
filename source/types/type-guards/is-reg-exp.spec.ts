import { expect } from 'chai';
import { isRegExp } from './is-reg-exp';

describe('isRegExp() Tests', () => {
    it('isRegExp(object: unknown) should check if a variable is a RegExp', () => {
        const testCases = [
            { object: /a/, expected: true },
            { object: new RegExp('a'), expected: true },
            { object: {}, expected: false }
        ];

        for (const { object, expected } of testCases) {
            const actual = isRegExp(object);

            expect(actual).to.equal(expected);
        }
    });
});
