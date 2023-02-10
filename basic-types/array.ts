// let list: Array<number> = [1, 2, 3];
// let list: number[] = [1, 2, 3];
let list: (number | string)[] = [1, 2 ,3, '4'];
// union type을 사용하면 배열에 number와 string을 모두 저장할 수 있지만
// 이런 경우에는 tuple을 사용하는 것이 더 낫다.
[36, 'Mark'];