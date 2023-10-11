function isUndefinedNullOrEmpty<T>(array: T[] | null | undefined): boolean {
    return !array || array.length === 0;
}

function isNotEmpty<T>(array: T[] | null | undefined): boolean {
    return !isUndefinedNullOrEmpty(array);
}

function emptyList<T>(): [] {
    return [];
}

function listOf(): [] {
    return emptyList()
}

function first<T>(array: T[]): T | undefined {
    return array.length > 0 ? array[0] : undefined;
}

function last<T>(array: T[]): T | undefined {
    return array.length > 0 ? array[array.length - 1] : undefined;
}

function any<T>(array: T[], predicate: (item: T) => boolean): boolean {
    return array.some(predicate);
}

function contains<T>(array: T[], element: T): boolean {
    return array.includes(element);
}