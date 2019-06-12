export type Defined<TObject> = Exclude<TObject, undefined | null | never | void>;
export type RecursivelyDefined<TObject> = {
    [Key in keyof Defined<TObject>]-?: RecursivelyDefined<Defined<TObject>[Key]>
};
