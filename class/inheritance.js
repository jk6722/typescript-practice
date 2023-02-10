"use strict";
class Parent {
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    print() {
        console.log(`이름은 ${this._name} 이고, 나이는 ${this._age} 입니다.`);
    }
}
// const p = new Parent("Mark", 39);
// p.print();
class Child extends Parent {
    constructor(name, age, gender) {
        super(name, age);
        this._name = 'Mark Jr.'; // property를 override 할 수 있다.
        this.gender = "male";
        this._name = name;
        if (gender !== undefined) {
            this.gender = gender;
        }
    }
}
const c = new Child("Son", 5);
c.print();
