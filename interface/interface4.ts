interface Person4 {
  name: string,
  age: number,
  hello(): void;
  // Person4 타입으로 지정하기 위해서는 hello() 함수가 정의되어 있어야 할 것이다.
}

const p41: Person4 = {
  name: 'Mark',
  age: 39,
  hello: function(): void {
    console.log(`안녕하세요! ${this.name} 입니다.`);
  }
}

const p42: Person4 = {
  name: 'Mark',
  age: 39,
  hello(): void {
    console.log(`안녕하세요! ${this.name} 입니다.`);
  }
}

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

