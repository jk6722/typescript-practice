# TypeScript Compiler
https://json.schemastore.org/tsconfig

## @types
```js
import react from 'react';
```

react는 javascript library이기 때문에 typing이 되어있지 않을 것이다.

그렇기 때문에 typescript 파일에서는 사용할 수 없다.

npm i --save-dev @types/react 명령어를 통해 타입 선언을 해준다.

@types는 외부 자바스크립트 라이브러리에 대한 타이핑을 도와주는 기능이다.

@types 폴더 외에 @types와 같은 기능을 하는 폴더를 만들어 사용하고 싶다면 typeRoots property에 폴더의 경로를 명시해주면 된다.

### `아무 설정을 안 하면?`
node_modules/@types 라는 모든 경로를 찾아서 사용

### `typeRoots를 사용하면?`
배열 안에 들어있는 경로들 아래서만 가져온다.

### `types를 사용하면?`
배열 안의 모듈 혹은 ./node_modules/@types/ 안의 모듈 이름에서 찾아온다.
[] 빈 배열을 넣는다는 건 이 시스템을 사용하지 않겠다는 것이다.

## target property
빌드의 결과물을 어떤 버전으로 할 것이냐
지정을 안하면 `es3` 입니다.

## lib property
기본 type definition 라이브러리를 어떤 것을 사용할 것이냐.

lib을 지정하지 않을 때,
1. target이 'es3'이면, 디폴트로 lib.d.ts를 사용합니다
2. target이 'es5'이면, 디폴트로 dom, es5, scripthost를 사용합니다
3. target이 'es6'이면, 디폴트로 dom, es6, dom.iterable, scripthost를 사용합니다

lib를 지정하면 그 lib배열로만 라이브러리를 사용합니다.

## outDir, rootDir
Option|Description
--|--
outDir|outDir로 컴파일한 결과로 나오는 결과물들을 모아둘 폴더를 지정해줄 수 있다.
rootDir|rootDir로 컴파일할 파일이 모여있는 루트 폴더를 지정할 수 있다.

## strict
Option|Description
--|--
noImpliciAny|타입스크립트가 추론을 실패한 경우, any가 맞으면 any라고 지정하라. 아무것도 쓰지 않으면, 에러를 발생
noImplicitThis|명시적이지 않게 any 타입을 사용하여, this 표현식에 사용하면 에러를 발생 (this의 타입을 명시해주어야 함)
strictNullChecks|모든 타입은 null, undefined 값을 가질 수 없고, 가지려면 union type을 이용해서 직접 명시해야 합니다.any 타입은 null과 undefined 값을 가집니다. 예외적으로 void 타입의 경우 undefined를 가집니다.
strictFuctionTypes|함수 타입에 대한 bivariant 매개변수 검사를 비활성화 한다. 매개변수는 같거나 상위여야 하고 리턴 타입은 같거나 하위여야 문제가 없다.
strictPropertyInitialization|정의되지 않은 클래스의 속성이 생성자에서 초기화되었는지 확인합니다. 이 옵션을 사용하러면 --strictNullChecks를 사용하도록 설정해야 합니다.

```ts
class Person {
  private: _name:string;
  private _age: number;

  constructor() {}

  public print() {
    console.log(this._name, this._age);
  }
}
```
위와 같은 경우에 _name, _age property에 값이 할당되지 않았기 때문에 에러를 발생시킨다. cunstructor에서 초기 값을 할당한 경우 => 정상으로 처리

Option|Description
--|--
strictBindCallApply|bind, call, apply에 대한 더 엄격한 검사 수행
alwaysStrict|각 소스 파일에 대해 JavaScript의 strict mode로 코드를 분석하고, "use strict"를 해제합니다.

## 주의!
typescript 프로젝트를 할 때에는 무조건 strict="true"로 설정해두고 프로젝트를 진행해야 한다.