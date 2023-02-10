interface Person8 {
  name: string,
  age?: number,
  readonly gender: string, // readonly로 선언하면 변경이 불가능
}

const p81: Person8 = {
  name: 'Mark',
  gender: 'male'
}

// typescript를 사용하는 가장 큰 이유중 하나는 코드에 의도를 담아서 다른 사람들이 코드를 수정하거 사용하려고 할 때
// 이것은 이렇게 하면 안 된다는 의사 표시를 하는 것이다.
// 이런 역할로 사용할 때 typescript는 우리에게 도움을 준다.