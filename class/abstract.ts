abstract class AbstractPerson { // abstract 특성이 하나라도 들어있으면 class를 abstract로 선언해야 한다.
  protected _name: string = 'Mark';

  abstract setName(name: string): void;
  // abstract function은 틀만 만들고 구현은 하지 않는다.
  // 구현은 상속받은 클래스에서 해준다.
}

// new AbstractPerson(); // abstract class는 instance를 만들 수 없음

class _Person extends AbstractPerson {
  setName(name: string): void {
    this._name= name;
  }
}

const p = new _Person();
p.setName('Jason');
