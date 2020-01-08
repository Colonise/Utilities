import { Constructor } from './constructor';
import { expect } from 'chai';

describe('Constructor<T> Tests', () => {
    it('Constructor<T> should have correct intellisense', () => {
        const stringConstructor = <Constructor<String>>String;
        const booleanConstructor = <Constructor<Boolean>>Boolean;
        const numberConstructor = <Constructor<Number>>Number;
        const regExpConstructor = <Constructor<RegExp>>RegExp;
        const objectConstructor = <Constructor<Object>>Object;
        const arrayConstructor = <Constructor<unknown[]>>Array;

        expect(stringConstructor).to.exist;
        expect(booleanConstructor).to.exist;
        expect(numberConstructor).to.exist;
        expect(regExpConstructor).to.exist;
        expect(objectConstructor).to.exist;
        expect(arrayConstructor).to.exist;
    });
});
