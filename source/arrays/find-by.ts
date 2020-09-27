import type { ArrayEnumerator } from '../types/array-enumerator';

export function findBy<TItem>(array: TItem[], enumerator: ArrayEnumerator<TItem>): TItem | undefined {
    for (let i = 0; i < array.length; i++) {
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        if (enumerator(array[i], i, array)) {
            return array[i];
        }
    }

    return undefined;
}
