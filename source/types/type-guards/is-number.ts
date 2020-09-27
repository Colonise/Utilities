import { is } from './is';

export function isNumber(object: unknown): object is number {
    return typeof object === 'number' || is(object, Number);
}
