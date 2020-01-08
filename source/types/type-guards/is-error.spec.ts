import { isError } from './is-error';
import { expect } from 'chai';

describe('isError() Tests', () => {
    it('isError(object: unknown) should check if a variable is an Error', () => {
        const testCases = [
            { object: new Error(), expected: true },
            { object: new EvalError(), expected: true },
            { object: new RangeError(), expected: true },
            { object: new ReferenceError(), expected: true },
            { object: new SyntaxError(), expected: true },
            { object: new TypeError(), expected: true },
            { object: new URIError(), expected: true },
            { object: {}, expected: false }
        ];

        for (const { object, expected } of testCases) {
            const actual = isError(object);

            expect(actual).to.equal(expected);
        }
    });
});
