export type ObjectEnumerator<TObject, TResult = unknown> = (item: TObject[keyof TObject], key: keyof TObject, object: TObject) => TResult;
