import type { ArrayEnumerator } from '../types/array-enumerator';
import { enumerate } from '../objects/enumerate';
import type { ObjectEnumerator } from '../types/object-enumerator';

export function sumBy<T>(array: T[], enumerator: ArrayEnumerator<T, number>): number;
export function sumBy<T>(object: T, enumerator: ObjectEnumerator<T, number>): number;
export function sumBy(
    // eslint-disable-next-line @typescript-eslint/ban-types
    object: object,
    // eslint-disable-next-line @typescript-eslint/ban-types
    enumerator: ObjectEnumerator<object, number> | ArrayEnumerator<object, number>
): number {
    let result = 0;

    enumerate(object, (value, key) => {
        // eslint-disable-next-line @typescript-eslint/ban-types
        result += (<ObjectEnumerator<object, number>>enumerator)(value, key, object);
    });

    return result;
}
