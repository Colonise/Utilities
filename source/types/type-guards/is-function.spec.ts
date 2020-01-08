import { isFunction } from './is-function';
import { expect } from 'chai';

describe('isFunction() Tests', () => {
    it('isFunction(object: unknown) should check if a variable is a function', () => {
        const testCases = [
            // tslint:disable-next-line:no-empty
            { object: () => {}, expected: true },
            // tslint:disable-next-line:no-empty object-literal-shorthand
            { object: function() {}, expected: true },
            // tslint:disable-next-line:no-empty
            { object() {}, expected: true },
            { object: Function, expected: true },
            { object: [], expected: false },
            { object: {}, expected: false }
        ];

        for (const { object, expected } of testCases) {
            const actual = isFunction(object);

            expect(actual).to.equal(expected);
        }
    });
});
