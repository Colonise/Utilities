import { is } from './is';

export function isRegExp(object: unknown): object is RegExp {
    return is(object, RegExp);
}
