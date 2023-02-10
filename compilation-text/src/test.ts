import react from 'react';
// react는 javascript library이기 때문에 typing이 되어있지 않을 것이다.
// npm i --save-dev @types/react를 통해 타입 선언을 해준다.
// @types는 외부 자바스크립트 라이브러리에 대한 타이핑을 도와주는 기능이다.

// @types 폴더 외에 @types와 같은 기능을 하는 폴더를 사용하고 싶다면 typeRoots property에 경로를 명시해주면 된다.

// 아무 설정을 안 하면?
// node_modules/@types 라는 모든 경로를 찾아서 사용
// typeRoots를 사용하면?
// 배열 안에 들어있는 경로들 아래서만 가져온다.

// types를 사용하면?
// 배열 안의 모듈 혹은 ./node_modules/@types/ 안의 모듈 이름에서 찾아온다.
// [] 빈 배열을 넣는다는 건 이 시스템을 사용하지 않겠다는 것이다.


// target 
// 빌드의 결과물을 어떤 버전으로 할 것이냐
// 지정을 안하면 es3 입니다.

// lib
// 기본 type definition 라이브러리를 어떤 것을 사용할 것이냐.
// lib를 지정하지 않을 때,
// target이 'es3'이면, 디폴트로 lib.d.ts를 사용합니다.
// target이 'es5'이면, 디폴트로 dom, es5, scripthost를 사용합니다.
// target이 'es6'이면, 디폴트로 dom, es6, dom.iterable, scripthost를 사용합니다.

// lib를 지정하면 그 lib배열로만 라이브러리를 사용합니다.
const hello = () => {
  console.log('hello');
}


// outDir로 컴파일한 결과로 나오는 결과물들을 모을 폴더를 지정해줄 수 있다.
// rootDir로 컴파일할 파일이 모여있는 루트 폴더를 지정할 수 있다.

