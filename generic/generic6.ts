class PersonExtends<T extends string | number> { // 이렇게 선언하게 되면 T는 string 또는 number만 가능하다.
  private _name: T;

  constructor(name: T) {
    this._name = name;
  }
}

new PersonExtends('Mark');
new PersonExtends(33);
new PersonExtends(true); // error! boolean은 string | number에 할당할 수 없기 때문에

// type은 최대한 작은 범위로 제한을 걸어주는 것이 좋다.
// generic type을 사용할 때는 extends를 통해 범위 제한을 걸어준다.