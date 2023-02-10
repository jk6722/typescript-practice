class Parent {
  constructor(protected _name: string, private _age: number) {}

  public print(): void {
    console.log(`이름은 ${this._name} 이고, 나이는 ${this._age} 입니다.`);
  }
}
// const p = new Parent("Mark", 39);
// p.print();

class Child extends Parent {
  public _name = 'Mark Jr.' // property를 override 할 수 있다.
  public gender = "male";

  constructor(name: string, age: number, gender?: string) {
    super(name, age)
    this._name = name
    if(gender !== undefined){
      this.gender = gender
    }
  }
}

const c = new Child("Son", 5)
c.print();