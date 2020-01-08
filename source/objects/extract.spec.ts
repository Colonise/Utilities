import { extract } from './extract';
import { expect } from 'chai';

type I = { j?: {} } | undefined;
type H = { i?: I } | undefined;
type G = { h?: H } | undefined;
type F = { g?: G } | undefined;
type E = { f?: F } | undefined;
type D = { e?: E } | undefined;
type C = { d?: D } | undefined;
type B = { c?: C } | undefined;
type A = { b?: B } | undefined;

type O = { a?: A } | undefined;

describe('extract() Tests', () => {
    it('extract() should extract a value from an object if all properties in the chain are not null nor undefined', () => {
        const testCases = [
            {
                object: { a: 1 },
                properties: [
                    'a'
                ],
                expected: 1
            },
            {
                object: { a: { a: 1 } },
                properties: [
                    'a',
                    'a'
                ],
                expected: 1
            },
            {
                object: { a: { a: { a: 1 } } },
                properties: [
                    'a',
                    'a',
                    'a'
                ],
                expected: 1
            },
            {
                object: { a: { a: { a: { a: 1 } } } },
                properties: [
                    'a',
                    'a',
                    'a',
                    'a'
                ],
                expected: 1
            },
            {
                object: { a: { a: { a: { a: { a: 1 } } } } },
                properties: [
                    'a',
                    'a',
                    'a',
                    'a',
                    'a'
                ],
                expected: 1
            },
            {
                object: { a: { a: { a: { a: { a: { a: 1 } } } } } },
                properties: [
                    'a',
                    'a',
                    'a',
                    'a',
                    'a',
                    'a'
                ],
                expected: 1
            }
        ];

        for (const { object, properties, expected } of testCases) {
            const actual = extract(object, ...properties);

            expect(actual).to.equal(expected);
        }
    });

    it('extract() should extract undefined from an object if any property in the chain is null or undefined', () => {
        const testCases = [
            {
                object: {},
                properties: [
                    'a'
                ]
            },
            {
                object: { a: {} },
                properties: [
                    'a',
                    'a'
                ]
            },
            {
                object: { a: { a: {} } },
                properties: [
                    'a',
                    'a',
                    'a'
                ]
            },
            {
                object: { a: { a: { a: {} } } },
                properties: [
                    'a',
                    'a',
                    'a',
                    'a'
                ]
            },
            {
                object: { a: { a: { a: { a: {} } } } },
                properties: [
                    'a',
                    'a',
                    'a',
                    'a',
                    'a'
                ]
            },
            {
                object: { a: { a: { a: { a: { a: {} } } } } },
                properties: [
                    'a',
                    'a',
                    'a',
                    'a',
                    'a',
                    'a'
                ]
            }
        ];
        for (const { object, properties } of testCases) {
            const expected = undefined;

            const actual = extract(object, ...properties);

            expect(actual).to.equal(expected);
        }
    });

    it('extract() should have correct intellisense and return undefined', () => {
        const o: O = extract({ a: { b: { c: { d: { e: { f: { g: { h: { i: {} } } } } } } } } });

        const a: A = extract(o, 'a');
        const b: B = extract(o, 'a', 'b');
        const c: C = extract(o, 'a', 'b', 'c');
        const d: D = extract(o, 'a', 'b', 'c', 'd');
        const e: E = extract(o, 'a', 'b', 'c', 'd', 'e');
        const f: F = extract(o, 'a', 'b', 'c', 'd', 'e', 'f');
        const g: G = extract(o, 'a', 'b', 'c', 'd', 'e', 'f', 'g');
        const h: H = extract(o, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h');
        const i: I = extract(o, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i');

        expect(o).to.eql({ a: { b: { c: { d: { e: { f: { g: { h: { i: {} } } } } } } } } });

        expect(a).to.eql({ b: { c: { d: { e: { f: { g: { h: { i: {} } } } } } } } });
        expect(b).to.eql({ c: { d: { e: { f: { g: { h: { i: {} } } } } } } });
        expect(c).to.eql({ d: { e: { f: { g: { h: { i: {} } } } } } });
        expect(d).to.eql({ e: { f: { g: { h: { i: {} } } } } });
        expect(e).to.eql({ f: { g: { h: { i: {} } } } });
        expect(f).to.eql({ g: { h: { i: {} } } });
        expect(g).to.eql({ h: { i: {} } });
        expect(h).to.eql({ i: {} });
        expect(i).to.eql({});
    });
});
