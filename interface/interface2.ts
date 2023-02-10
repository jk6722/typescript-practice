interface Person2 {
  name: string,
  age?: number,
}

function hello2(person: Person2): void {
  console.log(`안녕하세요! ${person.name} 입니다.`);
  if(typeof person.age !== 'undefined'){
    console.log(`그리고 나이는 ${person.age}세 입니다.`)
  }
}

hello2({name: 'Mark', age: 32});