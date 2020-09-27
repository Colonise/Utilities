import type { Constructor } from '../constructor';

export function isObjectTag<T>(object: T, tag: string): boolean;
// eslint-disable-next-line @typescript-eslint/no-shadow
export function isObjectTag<T>(object: T, constructor: Constructor<T>): boolean;
export function isObjectTag<T>(object: T, tagOrConstructor: string | Constructor<T> & { name?: string; }): boolean {
    const name = typeof tagOrConstructor === 'string' ? tagOrConstructor : tagOrConstructor.name;

    return Object.prototype.toString.call(object) === `[object ${name}]`;
}
