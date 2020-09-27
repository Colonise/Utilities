import type { ObjectEnumerator } from '../types/object-enumerator';

// eslint-disable-next-line @typescript-eslint/ban-types
export function enumerate<T extends object>(object: T, enumerator: ObjectEnumerator<T, void>): void {
    for (const key in object) {
        if (Object.prototype.hasOwnProperty.call(object, key)) {
            enumerator(object[key], key, object);
        }
    }
}
