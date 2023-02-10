// --strictNullChecks 옵션을 사용하면
// null은 자기 자신에게, undefined는 void나 자기 자신에게만 할당이 가능하다.
// 우리는 변수를 안전하게 사용하기 위해서 --strictNullChecks 옵션을 사용한다.
// 그러나 primitive type에 null이나 undefined 값을 할당하지 못하면 코딩하는데 어려움이 있다.
// 그래서 우리는 union type을 사용한다.


let myName: string | null = null
console.log(typeof(myName)) // object

let u: undefined = undefined
let v: void = undefined

let union: string | null = null

union = 'Mark'
console.log(typeof(union)) // string

let n: null = null

// javascript에서의 null 타입
// null : 무언가가 있는데 사용한 준비가 덜 된 상태
// null이라는 타입은 null 이라는 값만 가질 수 있다.
// 런타임에서 typeof 연산자를 이용해서 알아내면, object가 나온다.

// javscript에서의 undefined 타입
// 값을 할당하지 않은 변수는 undefined라는 값을 가진다. 즉, 값이다.
// 무언가가 아예 준비가 안 된 상태
// object의 property가 없을 때도 undefined이다.
// 런타이에서 typeof 연산자를 이용해서 알아내면, undefined가 나온다.

