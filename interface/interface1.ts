interface Person1 { 
  name: string,
  age: number
}
// interface는 javascript로 바꾸면 사라진다.
// 즉, interface는 컴파일 타임에만 이용

function hello1(person: Person1): void {
  console.log(`안녕하세요! ${person.name} 입니다.`);
}

const p1: Person1 = {
  name: 'mark',
  age: 39,
}

hello1(p1);