"use strict";
const helloPerson = (name, age) => {
    console.log(`안녕하세요! ${name} 입니다.`);
    if (typeof age !== 'undefined') {
        console.log(`그리고 제 나이는 ${age}세 입니다.`);
    }
};
helloPerson('Mark', 123);
