import { Constructor } from './constructor';

export function isObjectTag<T>(object: T, tag: string): boolean;
export function isObjectTag<T>(object: T, constructor: Constructor<T>): boolean;
export function isObjectTag<T>(object: T, tagOrConstructor: string | Constructor<T>): boolean {
    const name = typeof tagOrConstructor === 'function' ? tagOrConstructor.name : tagOrConstructor;

    return Object.prototype.toString.call(object) === `[object ${name}]`;
}
