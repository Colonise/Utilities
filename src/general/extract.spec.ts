import { Expect, Test, TestCase, TestFixture } from 'alsatian';
import { extract } from './extract';

// Disable no-any because it's easier to write unit tests with them for extract()
// tslint:disable:no-any

@TestFixture('extract() Tests')
export class CopyTests {
    @Test('extract() should extract a value from an object if all properties in the chain are not null nor undefined')
    @TestCase({ a: 1 }, ['a'], 1)
    @TestCase({ a: { a: 1 } }, ['a', 'a'], 1)
    @TestCase({ a: { a: { a: 1 } } }, ['a', 'a', 'a'], 1)
    @TestCase({ a: { a: { a: { a: 1 } } } }, ['a', 'a', 'a', 'a'], 1)
    @TestCase({ a: { a: { a: { a: { a: 1 } } } } }, ['a', 'a', 'a', 'a', 'a'], 1)
    @TestCase({ a: { a: { a: { a: { a: { a: 1 } } } } } }, ['a', 'a', 'a', 'a', 'a', 'a'], 1)
    // tslint:disable-next-line:no-any
    public extract1(object: any, properties: string[], expected: any) {
        const actual = extract.apply(null, [object, ...properties]);

        Expect(actual).toBe(expected);
    }

    @Test('extract() should extract undefined from an object if any property in the chain is null or undefined')
    @TestCase({}, ['a'])
    @TestCase({ a: {} }, ['a', 'a'])
    @TestCase({ a: { a: {} } }, ['a', 'a', 'a'])
    @TestCase({ a: { a: { a: {} } } }, ['a', 'a', 'a', 'a'])
    @TestCase({ a: { a: { a: { a: {} } } } }, ['a', 'a', 'a', 'a', 'a'])
    @TestCase({ a: { a: { a: { a: { a: {} } } } } }, ['a', 'a', 'a', 'a', 'a', 'a'])
    public extract2(object: any, properties: string[]) {
        const expected = undefined;

        const actual = extract.apply(null, [object, ...properties]);

        Expect(actual).toBe(expected);
    }
}
