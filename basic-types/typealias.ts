type MyStringType = string;

const str = 'World';

let myStr: MyStringType = 'hello';
myStr = str;

let personT: string | number = 0;
personT = 'Mark';

//Aliasing Union Type
type StringOrNumber = string | number;

let another: StringOrNumber = 0;
another = 'Anna';

personT = another;

// 1. 유니온 타입은 A도 가능하고 B도 가능한 타입
// 2. 길게 쓰는 걸 짧게

// Aliasing Tuple
let tuplePerson: [string, number] = ['Mark', 35];
type PersonTuple = [string, number];
let anotherPerson: PersonTuple = ['Anna', 24];

// 1. 튜플 타입에 별칭을 줘서 여러군데서 사용할 수 있게 한다.

// Aliasing Function
type EatType = (food: string) => void;