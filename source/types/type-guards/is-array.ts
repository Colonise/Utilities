import { is } from './is';

// Allow any so it can be used to typeguard anything to an array
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isArray(object: unknown): object is any[];
export function isArray<T>(object: T[]): object is T[];
export function isArray<T>(object: unknown): object is T[];
export function isArray(object: unknown): boolean {
    return is(object, Array);
}
