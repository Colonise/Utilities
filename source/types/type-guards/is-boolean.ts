import { is } from './is';

export function isBoolean(object: unknown): object is boolean {
    return typeof object === 'boolean' || is(object, Boolean);
}
