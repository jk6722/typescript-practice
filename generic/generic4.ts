type HelloFunctionGeneric1 = <T>(message: T) => T;

const HelloFunctionGeneric1 = <T>(message: T): T => {
  return message;
};

interface HelloFunctionGeneric2 {
  <T>(message: T): T;
}

const HelloFunctionGeneric2 = <T>(message: T): T => {
  return message;
}

console.log(HelloFunctionGeneric1('Hello'));