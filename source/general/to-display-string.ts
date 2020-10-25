import {
    isArray,
    isBigInt,
    isBoolean,
    isDate,
    isError,
    isFunction,
    isNull,
    isNumber,
    isPlainObject,
    isRegExp,
    isString,
    isSymbol,
    isUndefined,
    isVoid,
    // eslint-disable-next-line @typescript-eslint/no-shadow
    toString
} from '../types';

function withMaxLength(displayString: string, maxLength: number, trimmer: (displayString: string, maxLength: number) => string): string {
    if (displayString.length <= maxLength) {
        return displayString;
    }

    return trimmer(displayString, maxLength);
}

// eslint-disable-next-line max-statements, complexity, max-lines-per-function
export function toDisplayString(value: unknown, maxLength = Infinity): string {
    if (isNull(value)) {
        return 'null';
    }

    if (isUndefined(value)) {
        return 'undefined';
    }

    if (isNumber(value) || isBigInt(value)) {
        return toString(value);
    }

    if (isBoolean(value)) {
        return toString(value);
    }

    if (isString(value)) {
        return withMaxLength(`"${value}"`, maxLength, () => {
            const ellipsisAndDoubleQuotesLength = 5;

            return `"${value.slice(0, maxLength - ellipsisAndDoubleQuotesLength)}..."`;
        });
    }

    if (isSymbol(value)) {
        return withMaxLength(toString(value), maxLength, () => {
            try {
                const description = (<{description: string | undefined; }><unknown>value).description ?? '';
                const symbolAndEllipsisParenthesesLength = 11;

                return `Symbol(${description.slice(0, maxLength - symbolAndEllipsisParenthesesLength)}...`;
            }
            catch (_error: unknown) {
                return 'Symbol()';
            }
        });
    }

    if (isDate(value)) {
        return value.toISOString();
    }

    if (isRegExp(value)) {
        return withMaxLength(toString(value), maxLength, () => {
            const ellipsisAndForwardSlashesLength = 5;

            return `/${value.source.slice(0, Math.max(maxLength - ellipsisAndForwardSlashesLength - value.flags.length, 0))}.../${value.flags}`;
        });
    }

    if (isError(value)) {
        return withMaxLength(toString(value), maxLength, () => {
            const errorName = isVoid(value.name) ? 'Error' : value.name;

            if (isUndefined(value.message)) {
                return errorName;
            }

            const colonAndSpaceLength = 2;
            const errorMessage = value.message.slice(0, Math.max(maxLength - errorName.length - colonAndSpaceLength, 0));

            return `${errorName}: ${errorMessage}`;
        });
    }

    if (isArray(value)) {
        return withMaxLength(`[${value.map(item => toDisplayString(item)).join(', ')}]`, maxLength, displayString => {
            const ellipsisAndSquareBracketLength = 4;

            return `[${displayString.slice(1, maxLength - ellipsisAndSquareBracketLength)}...]`;
        });
    }

    if (isFunction(value)) {
        const valueString = value.toString().trim()
            .replace(/\s+/gu, ' ');

        const name = value.name || '';
        const isClass = valueString.startsWith('class ');
        const isNativeFunction = valueString.endsWith('() { [native code] }');
        const isPlainFunction = !isNativeFunction && Object.prototype.hasOwnProperty.call(value, 'prototype');
        const isArrowFunction = !(isNativeFunction || isPlainFunction);

        if (isArrowFunction) {
            return '() => {}';
        }

        if (name) {
            if (isClass) {
                return `class ${name} {}`;
            }

            return `function ${name}() {}`;
        }

        return 'function () {}';
    }

    if (isPlainObject(value)) {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        return withMaxLength(JSON.stringify(value, (_key, propertyValue) => toDisplayString(propertyValue)), maxLength, displayString => {
            const ellipsisAndCurlyBraceLength = 4;

            return `{${displayString.slice(1, maxLength - ellipsisAndCurlyBraceLength)}...}`;
        });
    }

    return Object.prototype.toString.call(value);
}
