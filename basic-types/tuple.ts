let x: [string, number];

// 순서대로 type에 맞는 값을 넣어야 한다.
x = ['Hello', 39];
// x = [10, 'Hello']; => Error

x[0] = 'Hello'
x[1] = 20
// x[2] = 'World' => Error. 인덱스 범위를 넘어가게 되면 값이 undefined로 설정되어 있기 때문에 값을 할당할 수 없음

const person: [string, number] = ["mark", 39]

const [first, second] = person


// tuple은 array와 다르게 길이가 정해져있고 앞뒤의 type이 정확하고, type이 다를 수도 있는 그런 자료형이다.