import { expect } from 'chai';
import { is } from './is';

describe('is() Tests', () => {
    it('is(obj: unknown, constructor: Constructor<unknown>) should check if a variable is an instance of a constructor', () => {
        const testCases = [
            { object: {}, constructor: Object, expected: true },
            { object: [], constructor: Object, expected: true },
            { object: 1, constructor: Object, expected: false },
            { object: 1, constructor: Number, expected: true },
            { object: 'a', constructor: Object, expected: false },
            { object: 'a', constructor: String, expected: true },
            { object: true, constructor: Object, expected: false },
            { object: true, constructor: Boolean, expected: true }
        ];

        for (const { object, constructor, expected } of testCases) {
            const actual = is(object, constructor);

            expect(actual).to.equal(expected);
        }
    });

    it('is(obj: unknown, constructor: Constructor<unknown>) should check if a variable is an instance of a constructor', () => {
        const testCases = [
            {
                object: {},
                constructors: [
                    Array,
                    Object
                ],
                expected: true
            },
            {
                object: [],
                constructors: [
                    Array,
                    Object
                ],
                expected: true
            },
            {
                object: 1,
                constructors: [
                    Object,
                    Object
                ],
                expected: false
            },
            {
                object: 1,
                constructors: [
                    Object,
                    Number
                ],
                expected: true
            },
            {
                object: 'a',
                constructors: [
                    Object,
                    Object
                ],
                expected: false
            },
            {
                object: 'a',
                constructors: [
                    Object,
                    String
                ],
                expected: true
            },
            {
                object: true,
                constructors: [
                    Object,
                    Object
                ],
                expected: false
            },
            {
                object: true,
                constructors: [
                    Object,
                    Boolean
                ],
                expected: true
            }
        ];

        for (const { object, constructors, expected } of testCases) {
            const actual = is(object, ...constructors);

            expect(actual).to.equal(expected);
        }
    });
});
