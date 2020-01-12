import { enumerate } from '../objects/enumerate';
import { ArrayEnumerator } from '../types/array-enumerator';
import { ObjectEnumerator } from '../types/object-enumerator';

export function sumBy<T>(array: T[], enumerator: ArrayEnumerator<T, number>): number;
export function sumBy<T>(object: T, enumerator: ObjectEnumerator<T, number>): number;
export function sumBy(
    object: object,
    enumerator: ObjectEnumerator<object, number> | ArrayEnumerator<object, number>
): number {
    let result = 0;

    enumerate(object, (value, key) => {
        result += (<ObjectEnumerator<object, number>>enumerator)(value, key, object);
    });

    return result;
}
