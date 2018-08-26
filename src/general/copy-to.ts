import { isObject } from '../types/is-object';

export function copyTo<T>(from: T, to: T): T {
    if (!isObject(to)) {
        return to;
    }

    if (!isObject(from)) {
        return from;
    }

    for (const key in from) {
        if (from.hasOwnProperty(key)) {
            to[key] = from[key];
        }
    }

    return to;
}
