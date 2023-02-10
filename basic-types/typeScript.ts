//javascript
function f8(a) {
  return `이름은 ${a.name}이고, 연령대는 ${
    Math.floor(a.age / 10) * 10
  }대 입니다.`;
}
// javascript로 다음과 같이 작성하게 되면 "이름은 Mark이고, 연령대는 NaN대 입니다." 라는 결과가 발생할 수도 있다.

function f8(a: {name: string, age: number}): string {
  return `이름은 ${a.name}이고, 연령대는 ${
    Math.floor(a.age / 10) * 10
  }대 입니다.`;
}
// 위처럼 함수를 작성하게 되면 맞는 형식의 인자가 들어와야지 함수가 작동한다.
// 하지만 매번 타입을 {name: string, age: number} 처럼 작성하게 되면 번거롭다.

interface PersonInterface {
  name: string;
  age: number;
}

type PersonTypeAlias = {
  name: string;
  age: number;
}

function f8(a: PersonInterface): string {
  return `이름은 ${a.name}이고, 연령대는 ${Math.floor(a.age / 10) * 10}대 입니다.`;
}
// 이렇게 인터페이스나 type alias를 이용해서 타입을 명시해줄 수도 있다.


// structural type system - 구조가 같으면, 같은 타입이다.

interface IPerson {
  name: string,
  age: number,
  speak(): string;
}

type PersonType = {
  name: string;
  age: number;
  speak(): string;
}

let personInterface: IPerson = {} as any;
let personType: PersonType = {} as any;

personInterface = personType;
personType = personInterface;
// 서로 구조가 같이 때문에 서로에게 할당 가능
// 구조가 같은 인터페이스를 굳이 여러개 만들 필요가 없음


// nominal type system - 구조가 같아도 이름이 다르면, 다른 타입이다.
// typescript는 nominal type system을 따르지 않는다.
// 그러나 구조가 같아도 다른 타입으로 취급되어야 할 때가 있다.

type PersonID = string & { readonly brand: unique symbol };

function PersonID(id: string): PersonID {
  return id as PersonID;
}

function getPersonByID(id: PersonID) {}

getPersonByID(PersonID('id-aaaaa'));
getPersonByID('id-aaaaaa');


