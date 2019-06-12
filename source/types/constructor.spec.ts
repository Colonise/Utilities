import { Expect, Test, TestFixture } from 'alsatian';
import { Constructor } from './constructor';

@TestFixture('Constructor<T> Tests')
export class ConstructorTests {
    @Test('Constructor<T> should have correct intellisense')
    public constructor1() {
        const stringConstructor = <Constructor<String>>String;
        const booleanConstructor = <Constructor<Boolean>>Boolean;
        const numberConstructor = <Constructor<Number>>Number;
        const regExpConstructor = <Constructor<RegExp>>RegExp;
        const objectConstructor = <Constructor<Object>>Object;
        const arrayConstructor = <Constructor<unknown[]>>Array;

        Expect(stringConstructor).toBeDefined();
        Expect(booleanConstructor).toBeDefined();
        Expect(numberConstructor).toBeDefined();
        Expect(regExpConstructor).toBeDefined();
        Expect(objectConstructor).toBeDefined();
        Expect(arrayConstructor).toBeDefined();
    }
}
