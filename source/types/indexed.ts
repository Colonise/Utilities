export type Indexed<TValue> = { [TKey in keyof TValue]: TValue[TKey] };
