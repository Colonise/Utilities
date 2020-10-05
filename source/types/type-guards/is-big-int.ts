export function isBigInt(object: unknown): object is bigint {
    return typeof object === 'bigint';
}
