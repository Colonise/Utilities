import { enumerate } from '../objects/enumerate';
import { StringDictionary } from '../types/string-dictionary';

export function sum<T>(object: T): number;
export function sum<T>(array: T[]): number;
export function sum<T>(...array: T[]): number;
export function sum(): number {
    let object: StringDictionary<number>;

    object = arguments.length > 1 ? Array.from(arguments) : arguments[0];

    let result = 0;

    enumerate(object, value => {
        result += value;
    });

    return result;
}
