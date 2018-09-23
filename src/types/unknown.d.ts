export type Unknown =
    | undefined
    | null
    | void
    | string
    | boolean
    | number
    | symbol
    | object
    // tslint:disable-next-line:no-any
    | any[]
    | Function
    // tslint:disable-next-line:no-any
    | (new (...args: any[]) => any);
