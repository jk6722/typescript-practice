interface IPerson2 {
  name: string,
  age?: number,
}

interface IKorean extends IPerson2 { //interface를 상속하게 되면 IPerson2가 가지고 있는 property들은 상속이 되고, 원하는 property를 추가할 수 있음
  city: string,
}

const k: IKorean = {
  name: '이웅재',
  city: '서울',
  age: 38
}