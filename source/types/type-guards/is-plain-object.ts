import { isObject } from './is-object';

// eslint-disable-next-line @typescript-eslint/ban-types
export function isPlainObject(value: unknown): value is object {
    if (!isObject(value)) {
        return false;
    }

    if (Object.getPrototypeOf(value) === null) {
        return true;
    }

    let prototype: unknown = value;

    while (Object.getPrototypeOf(prototype) !== null) {
        prototype = Object.getPrototypeOf(prototype);
    }

    return Object.getPrototypeOf(value) === prototype;
}
