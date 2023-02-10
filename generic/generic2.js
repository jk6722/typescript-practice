"use strict";
function helloBasic(message) {
    return message;
}
function helloBasic_(message, comment) {
    return message;
}
console.log(helloBasic('Hello world')); // 이렇게 호출할 때 <> 안에 원하는 type을 지정해줄 수 있다.
console.log(helloBasic(36)); // 이렇게 <>를 따로 써주지 않으면, 들어간 값에 의해 type이 추정됨.
// 그런데 36을 넣으면 number 타입으로 추론되어야하지 않나 생각하지만 
// typescript는 가장 좁은 범위로 추론하기 때문에 타입이 number가 아닌 36으로 추론됨
helloBasic_('Mark', 39);
helloBasic_(36, 39);
