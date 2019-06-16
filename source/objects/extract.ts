import { Defined } from '../types';

export function extract<TObject>(object: TObject): Defined<TObject> | undefined;
export function extract<TObject, TProperty extends keyof Defined<TObject>>(
    object: TObject,
    property: TProperty
): Defined<Defined<TObject>[TProperty]> | undefined;
export function extract<
    TObject,
    TProperty1 extends keyof Defined<TObject>,
    TProperty2 extends keyof Defined<Defined<TObject>[TProperty1]>
>(
    object: TObject,
    property1: TProperty1,
    property2: TProperty2
): Defined<Defined<Defined<TObject>[TProperty1]>[TProperty2]> | undefined;
export function extract<
    TObject,
    TProperty1 extends keyof Defined<TObject>,
    TProperty2 extends keyof Defined<Defined<TObject>[TProperty1]>,
    TProperty3 extends keyof Defined<Defined<Defined<TObject>[TProperty1]>[TProperty2]>
>(
    object: TObject,
    property1: TProperty1,
    property2: TProperty2,
    property3: TProperty3
): Defined<Defined<Defined<Defined<TObject>[TProperty1]>[TProperty2]>[TProperty3]> | undefined;
export function extract<
    TObject,
    TProperty1 extends keyof Defined<TObject>,
    TProperty2 extends keyof Defined<Defined<TObject>[TProperty1]>,
    TProperty3 extends keyof Defined<Defined<Defined<TObject>[TProperty1]>[TProperty2]>,
    TProperty4 extends keyof Defined<Defined<Defined<Defined<TObject>[TProperty1]>[TProperty2]>[TProperty3]>
>(
    object: TObject,
    property1: TProperty1,
    property2: TProperty2,
    property3: TProperty3,
    property4: TProperty4
): Defined<Defined<Defined<Defined<Defined<TObject>[TProperty1]>[TProperty2]>[TProperty3]>[TProperty4]> | undefined;
export function extract<
    TObject,
    TProperty1 extends keyof Defined<TObject>,
    TProperty2 extends keyof Defined<Defined<TObject>[TProperty1]>,
    TProperty3 extends keyof Defined<Defined<Defined<TObject>[TProperty1]>[TProperty2]>,
    TProperty4 extends keyof Defined<Defined<Defined<Defined<TObject>[TProperty1]>[TProperty2]>[TProperty3]>,
    TProperty5 extends keyof Defined<
        Defined<Defined<Defined<Defined<TObject>[TProperty1]>[TProperty2]>[TProperty3]>[TProperty4]
    >
>(
    object: TObject,
    property1: TProperty1,
    property2: TProperty2,
    property3: TProperty3,
    property4: TProperty4,
    property5: TProperty5
):
    | Defined<
        Defined<
            Defined<Defined<Defined<Defined<TObject>[TProperty1]>[TProperty2]>[TProperty3]>[TProperty4]
        >[TProperty5]
    >
    | undefined;
export function extract<
    TObject,
    TProperty1 extends keyof Defined<TObject>,
    TProperty2 extends keyof Defined<Defined<TObject>[TProperty1]>,
    TProperty3 extends keyof Defined<Defined<Defined<TObject>[TProperty1]>[TProperty2]>,
    TProperty4 extends keyof Defined<Defined<Defined<Defined<TObject>[TProperty1]>[TProperty2]>[TProperty3]>,
    TProperty5 extends keyof Defined<
        Defined<Defined<Defined<Defined<TObject>[TProperty1]>[TProperty2]>[TProperty3]>[TProperty4]
    >,
    TProperty6 extends keyof Defined<
        Defined<Defined<Defined<Defined<Defined<TObject>[TProperty1]>[TProperty2]>[TProperty3]>[TProperty4]>[TProperty5]
    >
>(
    object: TObject,
    property1: TProperty1,
    property2: TProperty2,
    property3: TProperty3,
    property4: TProperty4,
    property5: TProperty5,
    property6: TProperty6
):
    | Defined<
        Defined<
            Defined<
                Defined<Defined<Defined<Defined<TObject>[TProperty1]>[TProperty2]>[TProperty3]>[TProperty4]
            >[TProperty5]
        >[TProperty6]
    >
    | undefined;
export function extract<
    TObject,
    TProperty1 extends keyof Defined<TObject>,
    TProperty2 extends keyof Defined<Defined<TObject>[TProperty1]>,
    TProperty3 extends keyof Defined<Defined<Defined<TObject>[TProperty1]>[TProperty2]>,
    TProperty4 extends keyof Defined<Defined<Defined<Defined<TObject>[TProperty1]>[TProperty2]>[TProperty3]>,
    TProperty5 extends keyof Defined<
        Defined<Defined<Defined<Defined<TObject>[TProperty1]>[TProperty2]>[TProperty3]>[TProperty4]
    >,
    TProperty6 extends keyof Defined<
        Defined<Defined<Defined<Defined<Defined<TObject>[TProperty1]>[TProperty2]>[TProperty3]>[TProperty4]>[TProperty5]
    >,
    TProperty7 extends keyof Defined<
        Defined<
            Defined<
                Defined<Defined<Defined<Defined<TObject>[TProperty1]>[TProperty2]>[TProperty3]>[TProperty4]
            >[TProperty5]
        >[TProperty6]
    >
>(
    object: TObject,
    property1: TProperty1,
    property2: TProperty2,
    property3: TProperty3,
    property4: TProperty4,
    property5: TProperty5,
    property6: TProperty6,
    property7: TProperty7
):
    | Defined<
        Defined<
            Defined<
                Defined<
                    Defined<Defined<Defined<Defined<TObject>[TProperty1]>[TProperty2]>[TProperty3]>[TProperty4]
                >[TProperty5]
            >[TProperty6]
        >[TProperty7]
    >
    | undefined;
export function extract<
    TObject,
    TProperty1 extends keyof Defined<TObject>,
    TProperty2 extends keyof Defined<Defined<TObject>[TProperty1]>,
    TProperty3 extends keyof Defined<Defined<Defined<TObject>[TProperty1]>[TProperty2]>,
    TProperty4 extends keyof Defined<Defined<Defined<Defined<TObject>[TProperty1]>[TProperty2]>[TProperty3]>,
    TProperty5 extends keyof Defined<
        Defined<Defined<Defined<Defined<TObject>[TProperty1]>[TProperty2]>[TProperty3]>[TProperty4]
    >,
    TProperty6 extends keyof Defined<
        Defined<Defined<Defined<Defined<Defined<TObject>[TProperty1]>[TProperty2]>[TProperty3]>[TProperty4]>[TProperty5]
    >,
    TProperty7 extends keyof Defined<
        Defined<
            Defined<
                Defined<Defined<Defined<Defined<TObject>[TProperty1]>[TProperty2]>[TProperty3]>[TProperty4]
            >[TProperty5]
        >[TProperty6]
    >,
    TProperty8 extends keyof Defined<
        Defined<
            Defined<
                Defined<
                    Defined<Defined<Defined<Defined<TObject>[TProperty1]>[TProperty2]>[TProperty3]>[TProperty4]
                >[TProperty5]
            >[TProperty6]
        >[TProperty7]
    >
>(
    object: TObject,
    property1: TProperty1,
    property2: TProperty2,
    property3: TProperty3,
    property4: TProperty4,
    property5: TProperty5,
    property6: TProperty6,
    property7: TProperty7,
    property8: TProperty8
):
    | Defined<
        Defined<
            Defined<
                Defined<
                    Defined<
                        Defined<Defined<Defined<Defined<TObject>[TProperty1]>[TProperty2]>[TProperty3]>[TProperty4]
                    >[TProperty5]
                >[TProperty6]
            >[TProperty7]
        >[TProperty8]
    >
    | undefined;
export function extract<
    TObject,
    TProperty1 extends keyof Defined<TObject>,
    TProperty2 extends keyof Defined<Defined<TObject>[TProperty1]>,
    TProperty3 extends keyof Defined<Defined<Defined<TObject>[TProperty1]>[TProperty2]>,
    TProperty4 extends keyof Defined<Defined<Defined<Defined<TObject>[TProperty1]>[TProperty2]>[TProperty3]>,
    TProperty5 extends keyof Defined<
        Defined<Defined<Defined<Defined<TObject>[TProperty1]>[TProperty2]>[TProperty3]>[TProperty4]
    >,
    TProperty6 extends keyof Defined<
        Defined<Defined<Defined<Defined<Defined<TObject>[TProperty1]>[TProperty2]>[TProperty3]>[TProperty4]>[TProperty5]
    >,
    TProperty7 extends keyof Defined<
        Defined<
            Defined<
                Defined<Defined<Defined<Defined<TObject>[TProperty1]>[TProperty2]>[TProperty3]>[TProperty4]
            >[TProperty5]
        >[TProperty6]
    >,
    TProperty8 extends keyof Defined<
        Defined<
            Defined<
                Defined<
                    Defined<Defined<Defined<Defined<TObject>[TProperty1]>[TProperty2]>[TProperty3]>[TProperty4]
                >[TProperty5]
            >[TProperty6]
        >[TProperty7]
    >,
    TProperty9 extends keyof Defined<
        Defined<
            Defined<
                Defined<
                    Defined<
                        Defined<Defined<Defined<Defined<TObject>[TProperty1]>[TProperty2]>[TProperty3]>[TProperty4]
                    >[TProperty5]
                >[TProperty6]
            >[TProperty7]
        >[TProperty8]
    >
>(
    object: TObject,
    property1: TProperty1,
    property2: TProperty2,
    property3: TProperty3,
    property4: TProperty4,
    property5: TProperty5,
    property6: TProperty6,
    property7: TProperty7,
    property8: TProperty8,
    property9: TProperty9
):
    | Defined<
        Defined<
            Defined<
                Defined<
                    Defined<
                        Defined<
                            Defined<
                                Defined<Defined<Defined<TObject>[TProperty1]>[TProperty2]>[TProperty3]
                            >[TProperty4]
                        >[TProperty5]
                    >[TProperty6]
                >[TProperty7]
            >[TProperty8]
        >[TProperty9]
    >
    | undefined;
export function extract<TResult = unknown>(object: unknown, ...properties: string[]): Defined<TResult> | undefined;
export function extract(object: unknown, ...properties: string[]): unknown {
    // TSLint seems to think `typeof object == null` is always false
    // tslint:disable-next-line:strict-type-predicates
    if (object == null) {
        return undefined;
    }

    // Allow any because to allow easy non-null and non-undefined coalescing
    // tslint:disable-next-line:no-any
    let result = <any>object;

    const length = properties.length;

    for (let i = 0; i < length; i++) {
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
