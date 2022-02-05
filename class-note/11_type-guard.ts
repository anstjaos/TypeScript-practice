interface Developer3 {
    name: string;
    skill: string;
}

interface Person3 {
    name: string;
    age: number;
}

function introduce(): Developer3 | Person3 {
    return { name: 'Tony', age: 33, skill: 'Iron Making' };
}

let tony = introduce();

if ((tony as Developer3).skill) {
    console.log((tony as Developer3).skill);
} else if ((tony as Person3).age) {
    console.log((tony as Person3).age);
}

// 타입 가드 정의
function isDeveloper(target: Developer3 | Person3): target is Developer3 {
    return (target as Developer3).skill !== undefined;
}

if (isDeveloper(tony)) {
    tony.skill;
} else {
    tony.age;
}