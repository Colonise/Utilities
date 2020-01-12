import { forIn } from '../../objects';
import { NumberDictionary } from '../number-dictionary';
import { StringDictionary } from '../string-dictionary';

export function toArray<T>(object: StringDictionary<T>): T[];
export function toArray<T>(object: NumberDictionary<T>): T[];
export function toArray(object: StringDictionary<unknown> | NumberDictionary<unknown>): unknown[] {
    const array: unknown[] = [];

    forIn(object, value => {
        array.push(value);
    });

    return array;
}
