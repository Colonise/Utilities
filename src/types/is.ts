import { Constructor } from './constructor';
import { isObjectTag } from './is-object-tag';

export function is<T>(object: T, ...constructors: Constructor<T>[]): object is T {
    return constructors.some(constructor => object instanceof constructor || isObjectTag(object, constructor));
}
