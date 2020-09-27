import { capitalise } from './capitalise';
import { copy } from '../objects';
import { getWords } from './get-words';
// eslint-disable-next-line no-duplicate-imports
import type { GetWordsOptions } from './get-words';
import type { StringDictionary } from '../types';
import { toLowerCase } from './to-lower-case';

export interface ToTitleCaseOptions extends GetWordsOptions {
    lowerCaseWords?: StringDictionary<boolean>;
}

const defaultToTitleCaseOptions: ToTitleCaseOptions = {
    /**
     * A dictionary of words to not capitalise.
     *
     * All keys must be lower case.
     *
     * Default includes:
     *  - Articles
     *    - a
     *    - an
     *    - the
     *  - Conjunctions
     *    - and
     *    - but
     *    - for
     *    - nor
     *    - or
     *    - so
     *    - yet
     *  - Prepositions
     *    - as
     *    - at
     *    - by
     *    - from
     *    - in
     *    - into
     *    - of
     *    - off
     *    - on
     *    - onto
     *    - per
     *    - than
     *    - to
     *    - until
     *    - with
     */
    lowerCaseWords: {
        /* eslint-disable id-length */
        // Articles
        a: true,
        an: true,
        the: true,

        // Conjunctions
        and: true,
        but: true,
        'for': true,
        nor: true,
        or: true,
        so: true,
        yet: true,

        // Prepositions
        as: true,
        at: true,
        by: true,
        from: true,
        'in': true,
        into: true,
        of: true,
        off: true,
        on: true,
        onto: true,
        per: true,
        than: true,
        to: true,
        until: true,
        'with': true
        /* eslint-enable id-length */
    },
    pascalCaseAsSeparator: true
};

export function toTitleCase(value: string): string;
export function toTitleCase(value: string, options: ToTitleCaseOptions): string;
export function toTitleCase(value: string, options: ToTitleCaseOptions = {}): string {
    const words = getWords(value, copy(defaultToTitleCaseOptions, options));
    const lowerCaseWords = options.lowerCaseWords ?? {};

    const titleCaseWords = words.map(word => {
        const lowerCaseWord = toLowerCase(word);

        return lowerCaseWords[lowerCaseWord] ? lowerCaseWord : capitalise(lowerCaseWord);
    });

    const result = titleCaseWords.join(' ');

    return result;
}
