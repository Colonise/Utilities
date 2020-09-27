// eslint-disable-next-line @typescript-eslint/ban-types
export type Defined<TObject> = Exclude<TObject, undefined | null | never>;
export type RecursivelyDefined<TObject> = {
    [Key in keyof Defined<TObject>]-?: RecursivelyDefined<Defined<TObject>[Key]>
};
