interface IPerson1 {
  name: string,
  age?: number,
  hello(): void,
}

// interface는 컴파일 타임에만 사용하는 런타임에는 사라지는 기능이지만
// class는 javascript의 feature로 사라지지 않는다.

class Person implements IPerson1 {
  name: string
  age: number | undefined

  constructor(name: string) {
    this.name = name
  }

  hello(): void {
    console.log(`안녕하세요! ${this.name} 입니다.`)
  }
}

const person: IPerson1 = new Person('Mark');
person.hello();

