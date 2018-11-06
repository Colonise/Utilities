import { Expect, Test, TestCase, TestFixture } from 'alsatian';
import { clone } from './clone';

class TestingClass {
    public c = this.a + this.b;

    public constructor(public a: number, public b: number) {}

    public d() {
        return this.a + this.b + this.c;
    }
}

@TestFixture('clone() Tests')
export class CloneTests {
    @TestCase({ a: 1, b: 2, c: 3 }, { a: 1, b: 2, c: 3 })
    @TestCase(['a', 'b', 'c', 'd', 'e'], ['a', 'b', 'c', 'd', 'e'])
    @TestCase(new TestingClass(1, 2), new TestingClass(1, 2))
    @Test('clone<T>(object: T) should clone an object')
    public clone1<T>(object: T, expected: T) {
        const actual = clone(object);

        Expect(actual).toEqual(expected);
        Expect(actual instanceof expected.constructor).toBe(true);
    }
}
