declare const maybe: unknown;
const aNumber: number = maybe;

if(maybe === true) {
  maybe; //런타임에 여기 들어온 maybe는 boolean 타입이고 값이 true일 수 밖에 없다. 
  const aBoolean: boolean = maybe;
  const aString: string = maybe; // 무조건 boolean타입이어야 하기 때문에 string에 할당하는 건 불가능
}

if(typeof maybe === 'string') {
  maybe; //런타임에 여기 들어온 maybe는 string 타입이어야 한다.
  const aString: string = maybe;
  const aBoolean: boolean = maybe; //무조건 string 타입이어야 하기 때문에 boolean에 할당하는 건 불가능
}

// any와 같이 아무거나 할당할 수 있다.
// 그러나 컴파일러가 타입을 추론할 수 있게끔 타입의 유형을 좁히거나
// 타입을 확정해주지 않으면 다른 곳에 할당할 수 없고, 사용할 수 없다.
// 즉, any보다 type-safe한 타입이다.

