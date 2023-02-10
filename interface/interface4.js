"use strict";
const p41 = {
    name: 'Mark',
    age: 39,
    hello: function () {
        console.log(`안녕하세요! ${this.name} 입니다.`);
    }
};
const p42 = {
    name: 'Mark',
    age: 39,
    hello() {
        console.log(`안녕하세요! ${this.name} 입니다.`);
    }
};
// const p43: Person4 = {
//   name: 'Mark',
//   age: 39,
//   hello: (): void => {
//     console.log(`안녕하세요! ${this.name} 입니다.`);
//   }
// }
// arrow function에서는 this가 지칭하는 대상의 범위가 다르기 때문에 this를 이용할 수 없다.
p41.hello();
p42.hello();
