import { Constructor } from './constructor';

export function isObjectTag<T>(object: T, tag: string): boolean;
export function isObjectTag<T>(object: T, constructor: Constructor<T>): boolean;
export function isObjectTag<T>(object: T, tagOrConstructor: string | Constructor<T>): boolean {
    return (
        Object.prototype.toString.call(object) ===
        `[object ${typeof tagOrConstructor === 'function' ? tagOrConstructor.name : tagOrConstructor}]`
    );
}
