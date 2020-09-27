import { enumerate } from '../objects/enumerate';
import type { NumberDictionary } from '../types/number-dictionary';

export function sum<T>(object: T): number;
export function sum<T>(array: T[]): number;
export function sum<T>(...array: T[]): number;
export function sum(...args: number[] | [number[]]): number {
    const object: NumberDictionary<number> = args.length === 1 ? <NumberDictionary<number>>args[0] : Array.from(<number[]>args);

    let result = 0;

    enumerate(object, value => {
        result += value;
    });

    return result;
}
