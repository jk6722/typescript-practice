"use strict";
function helloArray(message) {
    return message[0];
}
console.log(helloArray(['Hello', 'World'])); // 두 요소의 공통 타입인 string으로 추론이 될 것이다.
console.log(helloArray(['Hello', 5])); // 두 요소의 타입을 다르게 넣는다면 T는 union type으로 추론된다.
function helloTuple(message) {
    return message[0];
}
helloTuple(['Hello', 'World']);
helloTuple(['Hello', 5]);
// 정해진 길이만큼의 배열인 Tuple로 들어온다면 generic도 Tuple로 선언을 해야하고
// Array로 들어온다면 generic도 Array로 선언하는 것이 맞다.
