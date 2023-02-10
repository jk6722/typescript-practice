"use strict";
// interface는 컴파일 타임에만 사용하는 런타임에는 사라지는 기능이지만
// class는 javascript의 feature로 사라지지 않는다.
class Person {
    constructor(name) {
        this.name = name;
    }
    hello() {
        console.log(`안녕하세요! ${this.name} 입니다.`);
    }
}
const person = new Person('Mark');
person.hello();
