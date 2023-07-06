// eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-type-alias
export type Defined<TObject> = Exclude<TObject, undefined | null | never>;
export type RecursivelyDefined<TObject> = {
    [Key in keyof Defined<TObject>]-?: RecursivelyDefined<Defined<TObject>[Key]>
};
