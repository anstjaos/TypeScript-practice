// any는 사용하지 않아야함.
function logMessage(value: any) {
    console.log(value);
}

logMessage('hello');
logMessage(100);
logMessage(false);

// Union type
let seho3: string | number | boolean;
function logMessage1(value: string | number) {
    // 타입 가드
    if (typeof value === 'number') {
        // value가 number로 자동 추론된다.
        value.toLocaleString();
    }
    if (typeof value === 'string') {
        value.toString();
    }
    throw new TypeError('value must be string or number');
}
logMessage1('hello');
logMessage(100);

interface Developer1 {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function askSomeone(someone: Developer1 | Person) {
    someone.name;
}
askSomeone({ name: 'Developer', skill: '웹 개발' });
askSomeone({ name: '캡틴', age: 100 });

function askSomeone1(someone: Developer1 & Person) {
    someone.name;
    someone.skill;
    someone.age;
}
askSomeone1({ name: 'Developer', skill: '웹 개발', age: 34 });