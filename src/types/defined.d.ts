export type Defined<T> = Exclude<T, undefined | null | never | void>;
export type RecursivelyDefined<T> = { [Key in keyof Defined<T>]-?: RecursivelyDefined<Defined<T>[Key]> };
