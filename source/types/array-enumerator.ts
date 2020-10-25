export type ArrayEnumerator<TItem, TResult = unknown> = (item: TItem, index: number, array: TItem[]) => TResult;
