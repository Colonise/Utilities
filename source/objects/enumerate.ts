import { ObjectEnumerator } from '../types';

export function enumerate<T extends object>(object: T, enumerator: ObjectEnumerator<T, void>): void {
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            enumerator(object[key], key, object);
        }
    }
}
