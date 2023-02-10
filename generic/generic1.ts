function helloString(message: string): string {
  return message;
}

function helloNumber(message: number): number {
  return message;
}

// 더 많은 같은 형태의 반복된 함수들...
// 모든 타입을 받아서 모든 타입을 리턴할 수 있는 함수를 만들면 되지 않을까?

// 이럴 때 사용하는 게 any인데 any를 사용하게 되면 의도와 다른 결과를 가져오게 된다.
function hello(message: any): any {
  return message;
}

console.log(hello('Mark').length);
console.log(hello(33).length);
// 리턴값이 number라는 것을 우리는 알고 있지만 코드상 any타입이기 때문에 어떤 property든 이용할 수 있게 된다.
// number에 length를 사용했음에도 컴파일 타임에 에러가 발생하지 않는다.
// 심지어 length값 조차도 any 타입이다.
// 그래서 사용하는 것이 generic type이다.

function helloGeneric<T> (message: T): T {
  return message;
}

console.log(helloGeneric('Mark').length); // 이렇게 하면 리턴 타입이 string으로 인식이 된다.
// console.log(helloGeneric(34).length); // error! number타입에는 length를 사용할 수 없기 때문.
console.log(helloGeneric(true));