// Adicione essa linha para evitar conflitos de declaração
declare global {
    interface Array<T> {
        isNullOrEmpty(): boolean;
        isNotNullOrEmpty(): boolean;
        isNotEmpty(): boolean;
        isEmpty(): boolean;
        first(): T | undefined;
        last(): T | undefined;
        any(condition: (item: T) => boolean): boolean;
        all(condition: (item: T) => boolean): boolean;
        distinct(): T[];
        distinctBy<K>(selector: (item: T) => K): T[];
        forEachOrderedBy<K>(keySelector: (item: T) => K, action: (item: T) => void): void;
        forEachIndexed(action: (item: T, index: number) => void): void;
        fastForEach(action: (item: T) => void): void;
    }
}

// Verifica se o array está vazio ou nulo
Array.prototype.isNullOrEmpty = function () {
    return this === null || this.length === 0;
};

Array.prototype.isEmpty = function () {
    return this.length === 0;
};

Array.prototype.isNotEmpty = function () {
    return this.length !== 0;
};

// // Verifica se o array não está vazio e não é nulo
// Array.prototype.isNotNullOrEmpty = function () {
//     return this !== null && this.length > 0;
// };

// Retorna o primeiro elemento do array (ou undefined se estiver vazio)
Array.prototype.first = function () {
    return this.length > 0 ? this[0] : undefined;
};

// Retorna o último elemento do array (ou undefined se estiver vazio)
Array.prototype.last = function () {
    return this.length > 0 ? this[this.length - 1] : undefined;
};

// Verifica se pelo menos um item atende à condição especificada
Array.prototype.any = function (condition: (item: any) => boolean): boolean {
    return this.some(condition);
};

// Verifica se todos os itens atende à condição especificada
Array.prototype.all = function (condition: (item: any) => boolean): boolean {
    return this.every(condition)
};

// Retorna uma nova matriz contendo elementos únicos
// Array.prototype.distinct = function () {
//     return Array.from(new Set(this));
// };

Array.prototype.forEachOrderedBy = function <T, K>(keySelector: (item: T) => K, action: (item: T) => void) {
    const sortedArray = [...this].sort((a, b) => {
        const keyA = keySelector(a);
        const keyB = keySelector(b);
        return keyA < keyB ? -1 : keyA > keyB ? 1 : 0;
    });
    sortedArray.forEach(action);
}

Array.prototype.forEachIndexed = function <T>(action: (item: T, index: number) => void) {
    for (let i = 0; i < this.length; i++) {
        action(this[i], i);
    }
};

Array.prototype.fastForEach = function <T>(action: (item: T) => void) {
    for (let i = 0; i < this.length; i++) {
        const item = this[i];
        action(item);
    }
};

// Array.prototype.distinctBy = function <T, K>(selector: (item: T) => K) {
//     const set = new Set<K>();
//     const list: T[] = [];

//     for (const item of this) {
//         const key = selector(item);

//         if (!set.has(key)) {
//             set.add(key);
//             list.push(item);
//         }
//     }

//     return list;
// };

console.time()

let teste: [] = []

if (teste.isEmpty()) {
    console.log('is Empty');
}

if (teste.isNotEmpty()) {
    console.log('teste is not empty');
}

if (teste.isNullOrEmpty()) {
    console.log('teste is not null or empty');
}

console.log(teste.first());

console.log(teste.last());

console.timeEnd()

export { }