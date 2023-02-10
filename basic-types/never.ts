function error(message: string): never {
  throw new Error(message);
  // return 타입이 never이기 때문에 return을 해서는 안 된다.
  // 즉 함수가 끝까지 가서 끝나면 안 된다.
  // throw를 하게 되면 함수가 끝까지 수행되지 않고 끝나기 때문에 괜찮다.
}

function fail() {
  return error('failed');
}

function infiniteloop(): never {
  while(true) {

  }
  // while문의 조건을 true로 설정해주면 무한 루프가 돌기 때문에
  // 함수가 끝까지 수행될 수 없다.
  // 그렇기 때문에 리턴 값을 never로 지정할 수 있게 된다.
}

let a: string = 'hello';

if (typeof a !== 'string') {
  a;
  // a는 string으로 타입이 지정되었는데 typeof a가 'string'이 아닌 경우는 없다.
  // 이때 a에는 never type이 지정된다.
}

declare const b: string | number;

if(typeof b !== 'string') {
  b;
}

type Indexable<T> = T extends string ? T & {[index: string]: any} : never;

type ObjectIndexable = Indexable<{}>;