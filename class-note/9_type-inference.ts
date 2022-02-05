// 타입 추론 기본 1
let a = 'abc';

function getB(b = 10) {
    let c = 'hi';
    return b + c;
}

// 타입 추론 기본 2
// interface Dropdown1<T> {
//     value: T;
//     title: string;
// }

// let shoppingItem: Dropdown1<string> = {
//     value: 'abc',
//     title: 'hello'
// }

// 타입 추론 기본 3
interface Dropdown1<T> {
    value: T;
    title: string;
}
interface DetailedDropdown<K> extends Dropdown1<K> {
    tag: K;
    description: string;
}

let detailedItem: DetailedDropdown<string> = {
    title: 'abc',
    description: 'ab',
    value: 'value',
    tag: 'tag'
}

// Best Common Type
let arr55 = [1, 2, true];