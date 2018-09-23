export type Unknown =
    | undefined
    | null
    | void
    | string
    | boolean
    | number
    | object
    | Function
    | (new (...args: any[]) => any);
