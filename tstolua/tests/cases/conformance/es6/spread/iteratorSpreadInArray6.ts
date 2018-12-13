//@target: ES6
var array: number[] = [0, 1];
array.concat([...new SymbolIterator]);

class SymbolIterator {
    next() {
        return {
            value: Symbol(),
            done: false
        };
    }

    [Symbol.iterator]() {
        return this;
    }
}