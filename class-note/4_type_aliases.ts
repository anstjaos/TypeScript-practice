interface Person2 {
    name: string;
    age: number;
}

type Person1 = {
    name: string;
    age: number;
}

// interface
var seho1: Person2 = {
    name: '세호',
    age: 30
}

// type
var seho2: Person1 = {
    name: '세호',
    age: 30
}

type MyString = string;
const str2: MyString = 'hello';