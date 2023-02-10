// type alias vs interface

// function

type EatType = (food: string) => void;

interface IEat {
  (food: string): void;
}

// array

type PersonList = string[];

interface IPersonList {
  [index: number]: string;
}

// intersection

interface ErrorHandling {
  success: boolean;
  error?: { message: string };
}

interface ArtistsData {
  artists: { name: string }[];
}

type ArtistsResponseType = ArtistsData & ErrorHandling;

interface IArtistsResponse extends ArtistsData, ErrorHandling {}

let art: ArtistsResponseType;
let iar: IArtistsResponse;


// union type
interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

type PetType = Bird | Fish; // type alias를 이용하면 union type을 쉽게 정의할 수 있다.

interface IPet extends PetType {} // error

class Pet implements PetType {} // error 


// Declaration Merging - interface

interface MergingInterface {
  a: string;
}

interface MergingInterface {
  b: string;
}
// 선언이 Merging 된다
let mi: MergingInterface = {
  a: 'mark',
  b: 'Anna'
}

mi.a = 'a'
mi.b = 'b'


// Declaration Merging - type alias

type MergingType = {
  a: string;
}

type MergingType = {
  b: string
}

// Declaration Merging은 interface만 가능하다!

// 기존에 구현되어 있는 interface에 기능을 추가할 때 Merging을 많이 사용한다.


// type alias는 어떤 type을 부르는 이름을 지정하는 것이고
// interface는 새로운 type을 만들어내는 것이라고 보는 게 편할 것이다.