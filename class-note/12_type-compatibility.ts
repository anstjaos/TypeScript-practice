// 인터페이스
interface Developer4 {
    name: string;
    skill: string;
}

interface Person4 {
    name: string;
}

let developer4: Developer4;
let person4: Person4;
// developer4 = person4;

// 함수
let add5 = function(a: number) {
    // ...
}

let sum5 = function(a: number, b: number) {
    // ...
}
sum5 = add5;
// 파라미터 갯수가 안맞아서 호환 불가능
// add5 = sum5;

// 제네릭
interface Empty<T> {

}
let empty1: Empty<string>;
let empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
    data: T;
}
let notEmpty1: NotEmpty<string>;
let notEmpty2: NotEmpty<number>;
notEmpty1 = notEmpty2;
notEmpty2 = notEmpty1;