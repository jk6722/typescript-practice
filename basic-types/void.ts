function returnVoid(message: string) {
  console.log(message);
  return;
}
function returnVoid(message: string): void {
  console.log(message);
}
const ret = returnVoid('리턴이 없다');

// noImplicitReturns 옵션을 키면
// 함수에서 모든 경우에 값을 명시적으로 리턴하지 않으면
// 컴파일 에러를 발생시킨다.
function f5(a: number): number {
  if(a > 0){
    return a * 38;
  }
  // a < 0인 경우에는 리턴값이 명시되어 있지 않으므로 에러가 발생
}
