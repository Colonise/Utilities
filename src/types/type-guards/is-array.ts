import { is } from './is';

// Allow any so it can be used to typeguard anything to an array
// tslint:disable-next-line:no-any
export function isArray(object: unknown): object is any[];
export function isArray<T>(object: T[]): object is T[];
export function isArray<T>(object: unknown): object is T[];
export function isArray(object: unknown): boolean {
    return is(object, Array);
}
