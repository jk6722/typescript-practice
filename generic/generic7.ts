interface IPerson {
  name: string;
  age: number;
}

const person: IPerson = {
  name: 'Mark',
  age: 39,
}

function getProp(obj: IPerson, key: 'name' | 'age'): string | number {
  return obj[key];
  // key가 name이면 string을 리턴하고 age면 number를 리턴해야하는데
  // 이런식으로 작성하면 string | number 타입을 리턴하게 됨
}

function setProp(obj: IPerson, key: 'name' | 'age', value: string | number ): void {
  // obj[key] = value; 이렇게 union type으로 설정하면 string에 number를 할당하는 경우나 number에 string을 할당할 수 있는 가능성이 생기기 때문에 error
  
}

// 그러면 어떻게??

function getProp_1(obj: IPerson, key: keyof IPerson): IPerson[keyof IPerson] {
  return obj[key];
}

function setProp_1(obj: IPerson, key: keyof IPerson, value: IPerson[keyof IPerson]): void {
  obj[key] = value;
}

// IPerson[keyof IPerson]
// => IPerson['name' | 'age']
// => IPerson['name'] | IPerson['age']
// => string | number
// 이렇게 해도 결과적으로 똑같음

function getProp_2<T, K extends keyof T>(obj: T, key: K): T[K] {
  // 이렇게 generic type을 쓰면 리턴 타입이 string | number 처럼 union type으로 나오는 것이 아닌 정확하게 추론됨.
  return obj[key];
}

getProp_2(person, 'name');

function setProp_2<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
  obj[key] = value;
}

setProp_2(person, 'age', 32);