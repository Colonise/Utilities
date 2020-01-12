import { enumerate } from '../../objects';
import { NumberDictionary } from '../number-dictionary';
import { StringDictionary } from '../string-dictionary';

export function toMap<T>(object: StringDictionary<T>): Map<string, T>;
export function toMap<T>(object: NumberDictionary<T>): Map<number, T>;
export function toMap(object: StringDictionary<unknown> | NumberDictionary<unknown>): Map<unknown, unknown> {
    const map = new Map<unknown, unknown>();

    enumerate(object, (value, key) => {
        map.set(key, value);
    });

    return map;
}
