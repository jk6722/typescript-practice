class Person<T, K> { // generic type의 적용 범위는 class 전체가 되어야 한다. 따라서 클래스 이름 뒤에 <>를 붙여줘야함
  private _name: T;
  private _age: K;
  constructor(name: T, age: K) {
    this._name = name;
    this._age = age;
  }
}

new Person<string, number>('Mark', 38);
// new Person<string, number>(3, 39); error!! generic type T를 string으로 지정했는데 지정한 타입과 맞지 않는 타입의 인자로 넣음



