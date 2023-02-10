"use strict";
const hello3 = (person) => {
    console.log(`안녕하세요 ${person.name} 입니다.`);
    if (typeof person.father !== 'undefined')
        console.log(`제 아버지의 성함은 ${person.father.name} 입니다.`);
};
const p31 = {
    name: 'Mark',
    age: 39,
};
const p32 = {
    name: 'Anna',
    systers: ['Sung', 'Chan'],
    // string은 any에 들어갈 수 있기 때문에 가능
};
const p33 = {
    name: 'Bokdaengi',
    father: p31,
    mother: p32,
    // any 타입이니까 객체가 들어가도 상관 없음
};
hello3(p31);
console.log('\n');
hello3(p33);
