import { Unknown } from '../types/unknown';

export function extract<T, P extends keyof T>(object: T, property: P): T[P] | undefined;
export function extract<T, P1 extends keyof T, P2 extends keyof T[P1]>(
    object: T,
    property1: P1,
    property2: P2
): T[P1][P2] | undefined;
export function extract<T, P1 extends keyof T, P2 extends keyof T[P1], P3 extends keyof T[P1][P2]>(
    object: T,
    property1: P1,
    property2: P2,
    property3: P3
): T[P1][P2][P3] | undefined;
export function extract<
    T,
    P1 extends keyof T,
    P2 extends keyof T[P1],
    P3 extends keyof T[P1][P2],
    P4 extends keyof T[P1][P2][P3]
>(object: T, property1: P1, property2: P2, property3: P3, property4: P4): T[P1][P2][P3][P4] | undefined;
export function extract<
    T,
    P1 extends keyof T,
    P2 extends keyof T[P1],
    P3 extends keyof T[P1][P2],
    P4 extends keyof T[P1][P2][P3],
    P5 extends keyof T[P1][P2][P3][P4]
>(
    object: T,
    property1: P1,
    property2: P2,
    property3: P3,
    property4: P4,
    property5: P5
): T[P1][P2][P3][P4][P5] | undefined;
export function extract<
    T,
    P1 extends keyof T,
    P2 extends keyof T[P1],
    P3 extends keyof T[P1][P2],
    P4 extends keyof T[P1][P2][P3],
    P5 extends keyof T[P1][P2][P3][P4],
    P6 extends keyof T[P1][P2][P3][P4][P5]
>(
    object: T,
    property1: P1,
    property2: P2,
    property3: P3,
    property4: P4,
    property5: P5,
    property6: P6
): T[P1][P2][P3][P4][P5][P6] | undefined;
export function extract<
    T,
    P1 extends keyof T,
    P2 extends keyof T[P1],
    P3 extends keyof T[P1][P2],
    P4 extends keyof T[P1][P2][P3],
    P5 extends keyof T[P1][P2][P3][P4],
    P6 extends keyof T[P1][P2][P3][P4][P5],
    P7 extends keyof T[P1][P2][P3][P4][P5][P6]
>(
    object: T,
    property1: P1,
    property2: P2,
    property3: P3,
    property4: P4,
    property5: P5,
    property6: P6,
    property7: P7
): T[P1][P2][P3][P4][P5][P6][P7] | undefined;
export function extract<
    T,
    P1 extends keyof T,
    P2 extends keyof T[P1],
    P3 extends keyof T[P1][P2],
    P4 extends keyof T[P1][P2][P3],
    P5 extends keyof T[P1][P2][P3][P4],
    P6 extends keyof T[P1][P2][P3][P4][P5],
    P7 extends keyof T[P1][P2][P3][P4][P5][P6],
    P8 extends keyof T[P1][P2][P3][P4][P5][P6][P7]
>(
    object: T,
    property1: P1,
    property2: P2,
    property3: P3,
    property4: P4,
    property5: P5,
    property6: P6,
    property7: P7,
    property8: P8
): T[P1][P2][P3][P4][P5][P6][P7][P8] | undefined;
export function extract<
    T,
    P1 extends keyof T,
    P2 extends keyof T[P1],
    P3 extends keyof T[P1][P2],
    P4 extends keyof T[P1][P2][P3],
    P5 extends keyof T[P1][P2][P3][P4],
    P6 extends keyof T[P1][P2][P3][P4][P5],
    P7 extends keyof T[P1][P2][P3][P4][P5][P6],
    P8 extends keyof T[P1][P2][P3][P4][P5][P6][P7],
    P9 extends keyof T[P1][P2][P3][P4][P5][P6][P7][P8]
>(
    object: T,
    property1: P1,
    property2: P2,
    property3: P3,
    property4: P4,
    property5: P5,
    property6: P6,
    property7: P7,
    property8: P8,
    property9: P9
): T[P1][P2][P3][P4][P5][P6][P7][P8][P9] | undefined;
export function extract<T>(object: T, ...properties: string[]): Unknown {
    // tslint:disable-next-line:no-any
    let result: any = object;

    for (let i = 0; i < properties.length; i++) {
        const property = properties[i];
        const current = result[property];

        if (current == null) {
            return undefined;
        } else {
            result = current;
        }
    }

    return result;
}
