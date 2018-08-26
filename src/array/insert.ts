import { isArray } from '../types/is-array';

export function insert<T>(array: T[], index: number, item: T): T[];
export function insert<T>(array: T[], index: number, items: T[]): T[];
export function insert<T>(array: T[], index: number, itemOrItems: T | T[]) {
    const items = isArray(itemOrItems) ? itemOrItems : [itemOrItems];

    array.splice(index, 0, ...items);

    return array;
}
