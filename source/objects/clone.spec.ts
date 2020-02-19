import { expect } from 'chai';
import { Constructor } from '../types';
import { InstanceOf } from '../types/instance-of';
import { clone } from './clone';

class TestingClass {
    public c = this.a + this.b;

    public constructor(public a: number, public b: number) {}

    public d() {
        return this.a + this.b + this.c;
    }
}

describe('clone() Tests', () => {
    const testCases: { object: unknown; expected: unknown }[] = [
        { object: { a: 1, b: 2, c: 3 }, expected: { a: 1, b: 2, c: 3 } },
        {
            object: [
                'a',
                'b',
                'c',
                'd',
                'e'
            ],
            expected: [
                'a',
                'b',
                'c',
                'd',
                'e'
            ]
        },
        { object: new TestingClass(1, 2), expected: new TestingClass(1, 2) }
    ];

    it('clone<T>(object: T) should clone an object', () => {
        for (const { object, expected } of testCases) {
            const actual = clone(object);

            expect(actual).to.eql(expected);
            // tslint:disable-next-line: no-unused-expression
            expect(actual instanceof (<InstanceOf<Constructor>>expected).constructor).to.be.true;
        }
    });
});
