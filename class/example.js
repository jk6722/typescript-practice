"use strict";
class Person {
    // readonly로 선언하면 public이든 private든 Initializer나 Constructor로만 값을 지정할 수 있다.
    constructor(name, country) {
        // property를 선언하는 곳 (Initializer) 또는 생성자에서 값을 할당하지 않는 경우에는 !를 붙여서 위험을 표시한다.
        // javascript에서는 private를 지원하지 않아 오랫동안 프로퍼티나 메소드 앞에 _(under bar)를 붙였었다.
        // 지금까지 그 습관이 이어지고 있는 경향이 있다.
        this.name = 'Mark';
        this.country = 'Korea';
        this.name = name;
        this.country = country;
    }
}
// class => object를 만들어내는 틀
// {mark: 'male', jade: 'male'}
// {chloe: 'female', alex: 'male', anna: 'female'}
class Students {
    constructor() {
        // [property]: value
        // indexable property는 초기화 해주지 않아도 된다.
        // 초기값이 이거다 라고 설정해줄 수가 없음
        this.mark = 'male';
    }
}
//property가 고정된 형태가 아니라 동적인 경우에 index signature를 고려해보면 된다.
const a = new Students();
a.mark = 'male';
a.jade = 'male';
console.log(a);
const b = new Students();
b.chloe = 'female';
b.alex = 'male';
b.anna = 'female';
console.log(b);
// Static Method, Property
class Person_ {
    hello() {
        console.log('안녕하세요', Person_.CITY);
    }
    change() {
        Person_.CITY = 'LA';
    }
}
Person_.CITY = 'Seoul';
const p1 = new Person_();
// p1.hello()
// Person_.hello();
// class로 instance를 만들어서 함수를 호출하는 것이 아닌 class 자체로 함수를 호출
console.log(Person_.CITY);
// class로부터 만들어진 object에서 공통적으로 사용하고 싶은 데이터가 있다면 static으로 선언하여 사용할 수 있게 한다.
const p2 = new Person_();
p1.hello();
p2.hello();
p1.change();
p2.hello();
// Singleton Pattern (단일 객체 패턴)
class ClassName {
    static getInstance() {
        // ClassName으로부터 만든 object가 있으면 그걸 리턴
        // 없으면, 만든다.
        if (ClassName.instsance === null) {
            ClassName.instsance = new ClassName();
        }
        return ClassName.instsance;
    }
    constructor() { } // constructor를 private로 선언하여 밖에서 new를 통해 객체를 생성할 수 없게 함
}
ClassName.instsance = null;
const a1 = ClassName.getInstance();
const b1 = ClassName.getInstance();
console.log(a1 === b1);
