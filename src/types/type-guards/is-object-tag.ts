import { Constructor } from '../constructor';

export function isObjectTag<T>(object: T, tag: string): boolean;
export function isObjectTag<T>(object: T, constructor: Constructor<T>): boolean;
export function isObjectTag<T>(object: T, tagOrConstructor: string | Constructor<T> & { name?: string }): boolean {
    // TODO: Hopefully TSLint fixes it's problems with the `strict-type-predicates` rule
    // tslint:disable-next-line:strict-type-predicates
    const name = typeof tagOrConstructor === 'function' ? tagOrConstructor.name : tagOrConstructor;

    return Object.prototype.toString.call(object) === `[object ${name}]`;
}
