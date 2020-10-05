export function isSymbol(object: unknown): object is symbol {
    return typeof object === 'symbol';
}
