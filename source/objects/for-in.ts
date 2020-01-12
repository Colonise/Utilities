import { ObjectIterator } from '../types';

export function forIn<T extends object>(object: T, iterator: ObjectIterator<T, void>): void {
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            iterator(object[key], key, object);
        }
    }
}
