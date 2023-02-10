let sub1: 1 = 1;
let sup1: number = sub1;
sup1 = sub1;
sub1 = sup1; // error! Type 'number' is not assignable to type '1'.

let sub2: number[] = [1];
let sup2: object = sub2;
sub2 = sup2; // error! Type '{}' is missing the following properties from type 'number[]: length, pop, push, concat, and 16 more.

let sub3: [number, number] = [1, 2];
// 물론 터플의 앞 뒤 타입이 다를 수 있겠지만 둘 다 number라면 number array의 subtype으로 볼 수 있다.
let sup3: number[] = sub3;
sub3 = sup3; // error!

let sub4: number = 1;
let sup4: any = sub4;
sub4 = sup4; // super type이 any일 경우 sub4에 sup4를 할당할 수 있다. (에러가 날 것 같지만 아님)

let sub5: never = 0 as never;
let sup5: number = sub5;
sub5 = sup5; // error! Type 'number' is not assignable to type 'never'

class Animal {}
class Dog extends Animal {
  eat() {}
}

let sub6: Dog = new Dog();
let sup6: Animal = sub6;
sub6 = sup6; // error! Child class에 Parent class를 할당할 수 없다. 반대는 가능

// 1. 같거나 서브 타입인 경우, 할당이 가능하다. => 공변
let sub7: string = '';
let sup7: string | number = sub7;

let sub8: {a: string; b: number} = {a: '', b:1};
let sup8: {a: string | number; b: number } = sub8;

let sub9: Array<{a: string; b: number}> = [{a: '', b: 1}];
let sup9: Array<{a: string | number; b: number}> = sub9;

// 2. 함수의 매개변수 타입만 같거나 슈퍼타입인 경우, 할당이 가능하다. => 반병
class Person {}
class Developer extends Person {
  coding() {}
}
class StartupDeveloper extends Developer {
  burning() {}
}

function tellme(f: (d: Developer) => Developer) {}

tellme(function dToD(d: Developer): Developer {
  return new Developer();
})

tellme(function pToD(d: Person): Developer {
  return new Developer();
})

tellme(function sToD(d: StartupDeveloper): Developer {
  // 여기서 d가 burning()을 호출하게 되면 문제가 된다.
  return new Developer();
})

// Person class가 갖고 있는 함수는 Developer가 똑같이 모두 사용이 가능하지만,
// StartupDeveloper class만이 갖고 있는 함수는 Developer 클래스가 사용할 수 없다.
// 그렇기 때문에 슈퍼타입인 경우엔 매개변수에 할당이 가능하지만 서브타입인 경우엔 할당할 수 없다.
