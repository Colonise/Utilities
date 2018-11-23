import { Expect, Test, TestCase, TestFixture } from 'alsatian';
import { extract } from './extract';

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

@TestFixture('extract() Tests')
export class CopyTests {
    @TestCase({ a: 1 }, ['a'], 1)
    @TestCase({ a: { a: 1 } }, ['a', 'a'], 1)
    @TestCase({ a: { a: { a: 1 } } }, ['a', 'a', 'a'], 1)
    @TestCase({ a: { a: { a: { a: 1 } } } }, ['a', 'a', 'a', 'a'], 1)
    @TestCase({ a: { a: { a: { a: { a: 1 } } } } }, ['a', 'a', 'a', 'a', 'a'], 1)
    @TestCase({ a: { a: { a: { a: { a: { a: 1 } } } } } }, ['a', 'a', 'a', 'a', 'a', 'a'], 1)
    @Test('extract() should extract a value from an object if all properties in the chain are not null nor undefined')
    public extract1(object: unknown, properties: string[], expected: unknown) {
        const actual = extract.apply(null, [object, ...properties]);

        Expect(actual).toBe(expected);
    }

    @TestCase({}, ['a'])
    @TestCase({ a: {} }, ['a', 'a'])
    @TestCase({ a: { a: {} } }, ['a', 'a', 'a'])
    @TestCase({ a: { a: { a: {} } } }, ['a', 'a', 'a', 'a'])
    @TestCase({ a: { a: { a: { a: {} } } } }, ['a', 'a', 'a', 'a', 'a'])
    @TestCase({ a: { a: { a: { a: { a: {} } } } } }, ['a', 'a', 'a', 'a', 'a', 'a'])
    @Test('extract() should extract undefined from an object if any property in the chain is null or undefined')
    public extract2(object: unknown, properties: string[]) {
        const expected = undefined;

        const actual = extract.apply(null, [object, ...properties]);

        Expect(actual).toBe(expected);
    }

    @Test('extract() should have correct intellisense and return undefined')
    public extract3() {
        const o: O = extract<O>(undefined);

        const a: A = extract(o, 'a');
        const b: B = extract(o, 'a', 'b');
        const c: C = extract(o, 'a', 'b', 'c');
        const d: D = extract(o, 'a', 'b', 'c', 'd');
        const e: E = extract(o, 'a', 'b', 'c', 'd', 'e');
        const f: F = extract(o, 'a', 'b', 'c', 'd', 'e', 'f');
        const g: G = extract(o, 'a', 'b', 'c', 'd', 'e', 'f', 'g');
        const h: H = extract(o, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h');
        const i: I = extract(o, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i');

        Expect(o).toBe(undefined);

        Expect(a).toBe(undefined);
        Expect(b).toBe(undefined);
        Expect(c).toBe(undefined);
        Expect(d).toBe(undefined);
        Expect(e).toBe(undefined);
        Expect(f).toBe(undefined);
        Expect(g).toBe(undefined);
        Expect(h).toBe(undefined);
        Expect(i).toBe(undefined);
    }

    @Test('extract() should have correct intellisense and return the defined value')
    public extract4() {
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

        Expect(o).toEqual({ a: { b: { c: { d: { e: { f: { g: { h: { i: {} } } } } } } } } });

        Expect(a).toEqual({ b: { c: { d: { e: { f: { g: { h: { i: {} } } } } } } } });
        Expect(b).toEqual({ c: { d: { e: { f: { g: { h: { i: {} } } } } } } });
        Expect(c).toEqual({ d: { e: { f: { g: { h: { i: {} } } } } } });
        Expect(d).toEqual({ e: { f: { g: { h: { i: {} } } } } });
        Expect(e).toEqual({ f: { g: { h: { i: {} } } } });
        Expect(f).toEqual({ g: { h: { i: {} } } });
        Expect(g).toEqual({ h: { i: {} } });
        Expect(h).toEqual({ i: {} });
        Expect(i).toEqual({});
    }
}
