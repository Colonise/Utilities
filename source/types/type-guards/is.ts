import type { Constructor } from '../constructor';
import { isObjectTag } from './is-object-tag';

// eslint-disable-next-line @typescript-eslint/no-shadow
export function is<T>(value: unknown, constructor: Constructor<T>): value is T;
export function is<T>(value: unknown, ...constructors: Constructor<T>[]): value is T;
// eslint-disable-next-line id-length
export function is(value: unknown, ...constructors: Constructor[]): boolean {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    for (const constructor of constructors) {
        if (value instanceof constructor || isObjectTag(value, constructor)) {
            return true;
        }
    }

    return false;
}
