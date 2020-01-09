import { StringDictionary } from '../types';

export function sum<T>(object: T): number;
export function sum<T>(array: T[]): number;
export function sum<T>(...array: T[]): number;
export function sum(): number {
    let object: StringDictionary<number>;

    object = arguments.length > 1 ? Array.from(arguments) : arguments[0];

    let result = 0;

    // tslint:disable-next-line: forin
    for (const key in object) {
        result += object[key];
    }

    return result;
}
