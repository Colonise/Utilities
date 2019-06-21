import { Constructor } from '../constructor';
import { isObjectTag } from './is-object-tag';

export function is<T>(value: unknown, constructor: Constructor<T>): value is T;
export function is<T>(value: unknown, ...constructors: Constructor<T>[]): value is T;
export function is(value: unknown, ...constructors: Constructor[]): boolean {
    for (const constructor of constructors) {
        if (value instanceof constructor || isObjectTag(value, constructor)) {
            return true;
        }
    }

    return false;
}
