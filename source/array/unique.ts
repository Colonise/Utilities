import { includes } from './includes';

export function unique<T>(array: T[]): T[] {
    const seen: T[] = [];

    return array.filter(item => {
        const isUnique = !includes(seen, item);

        if (isUnique) {
            seen.push(item);
        }

        return isUnique;
    });
}
