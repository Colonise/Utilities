export type Unknown =
    | undefined
    | null
    | void
    | string
    | boolean
    | number
    | symbol
    | object
    | Array<any>
    | Function
    | (new (...args: any[]) => any);
