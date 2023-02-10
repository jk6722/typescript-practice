function returnAny(message: any): any {
  console.log(message)
}

const any1 = returnAny('리턴은 아무거나')

// any 타입은 할 수 있는 기능에 제약이 없다. 즉, 어떤 것이든 할 수 있다.
any1.toString();
// string이 할 수 있는 일, number가 할 수 있는 일 상관없이 일단 코드를 작성할 수 있다.
// 그래서 최대한 사용하지 않는 것이 좋다.
// 컴파일 타임에 타입 체크가 정상적으로 이뤄지지 않기 때문이다.


// 그러나 any가 사용되어야 하는 상황이 있다.
// 위의 함수는 message를 그저 콘솔에 log만 하는 함수이다.
// 그렇기 때문에 message에는 어떠한 타입의 값이 들어가도 상관이 없다.

let looselyTyped: any = {};
const d = looselyTyped.a.b.c.d;
// any는 개체를 통해 계속 전파된다.

function leakingAny(obj: any) {
  const a = obj.num
  const b = a + 1
  return b
}
const c = leakingAny({num: 0})
// a, b, c 모두 any가 되어버린다(any의 누수)

c.indexOf('0')