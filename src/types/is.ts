import { Constructor } from './constructor';
import { isObjectTag } from './is-object-tag';

export function is<T>(
    // tslint:disable-next-line:no-any
    object: any,
    constructor: Constructor<T>
): object is T;
export function is<T1, T2>(
    // tslint:disable-next-line:no-any
    object: any,
    constructor1: Constructor<T1>,
    constructor2: Constructor<T2>
): object is T1 | T2;
export function is<T1, T2, T3>(
    // tslint:disable-next-line:no-any
    object: any,
    constructor1: Constructor<T1>,
    constructor2: Constructor<T2>,
    constructor3: Constructor<T3>
): object is T1 | T2 | T3;
export function is<T1, T2, T3, T4>(
    // tslint:disable-next-line:no-any
    object: any,
    constructor1: Constructor<T1>,
    constructor2: Constructor<T2>,
    constructor3: Constructor<T3>,
    constructor4: Constructor<T4>
): object is T1 | T2 | T3 | T4;
export function is<T1, T2, T3, T4, T5>(
    // tslint:disable-next-line:no-any
    object: any,
    constructor1: Constructor<T1>,
    constructor2: Constructor<T2>,
    constructor3: Constructor<T3>,
    constructor4: Constructor<T4>,
    constructor5: Constructor<T5>
): object is T1 | T2 | T3 | T4 | T5;
export function is<T1, T2, T3, T4, T5, T6>(
    // tslint:disable-next-line:no-any
    object: any,
    constructor1: Constructor<T1>,
    constructor2: Constructor<T2>,
    constructor3: Constructor<T3>,
    constructor4: Constructor<T4>,
    constructor5: Constructor<T5>,
    constructor6: Constructor<T6>
): object is T1 | T2 | T3 | T4 | T5 | T6;
export function is<T1, T2, T3, T4, T5, T6, T7>(
    // tslint:disable-next-line:no-any
    object: any,
    constructor1: Constructor<T1>,
    constructor2: Constructor<T2>,
    constructor3: Constructor<T3>,
    constructor4: Constructor<T4>,
    constructor5: Constructor<T5>,
    constructor6: Constructor<T6>,
    constructor7: Constructor<T7>
): object is T1 | T2 | T3 | T4 | T5 | T6 | T7;
export function is<T1, T2, T3, T4, T5, T6, T7, T8>(
    // tslint:disable-next-line:no-any
    object: any,
    constructor1: Constructor<T1>,
    constructor2: Constructor<T2>,
    constructor3: Constructor<T3>,
    constructor4: Constructor<T4>,
    constructor5: Constructor<T5>,
    constructor6: Constructor<T6>,
    constructor7: Constructor<T7>,
    constructor8: Constructor<T8>
): object is T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8;
export function is<T1, T2, T3, T4, T5, T6, T7, T8, T9>(
    // tslint:disable-next-line:no-any
    object: any,
    constructor1: Constructor<T1>,
    constructor2: Constructor<T2>,
    constructor3: Constructor<T3>,
    constructor4: Constructor<T4>,
    constructor5: Constructor<T5>,
    constructor6: Constructor<T6>,
    constructor7: Constructor<T7>,
    constructor8: Constructor<T8>,
    constructor9: Constructor<T9>
): object is T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9;
// tslint:disable-next-line:no-any
export function is(object: any, ...constructors: Constructor<any>[]): boolean {
    return constructors.some(constructor => object instanceof constructor || isObjectTag(object, constructor));
}
