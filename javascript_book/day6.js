// 클래스

// 클래스란? 객체 지향 프로그래밍을 정의하는 개념 중 하나
//           똑같은 객체를 여러 번 다시 찍어내기 위한 틀. 즉, 템플릿.

/*
기본 문법
클래스와 인스턴스
인스턴스란? 객체를 만들기 위한 틀을 의미하는 클래스를 실제로 사용할 수 있는 객체로 만든 것.
            즉, 클래스로 구현된 구체적인 실체를 의미.
클래스와 인스턴스 생성
*/
class User {
  #name;
  // 생성자 함수
  constructor(name) {
    this.validate(name);
    this.#name = name;
  }
  validate(name) {
    if (name !== "pitang") {
      console.log("error"); //error
    }
  }
  printName() {
    console.log(this.name); // undefined
  }
}
const aUser = new User("Pitang");
aUser.printName();

/*
필드란? 클래스에 정의할 수 있는 프로퍼티.
클래스도 함수처럼 표현식으로 작성할 수 있다.

private, protected
클래스의 필드는 두 가지 타입. public 과 private 
private타입을 쓸 때에는 # 을 붙여 사용.

static
인스턴스 없이도 사용할 수 있는 프로퍼티나 메서드를 정적 프로퍼티, 메서드라 한다. static 키워드 붙여 사용.

상속? 기존의 클래스에 기능을 추가하거나 재정의하는 등, 클래스를 확장하여 기존의 클래스를 기반으로 하는
      새로운 클래스를 만들 수 있는 개념을 의미.

instanceof 연산자? 좌변에 주어진 대상이 우변에 주어진 클래스의 인스턴스인지에 따라 true or false.

메서드 오버라이딩
생성자 오버라이딩
*/

class User1 {
  name = "John";
  age = [3, 2, 1];
  age = this.age.sort((a, b) => a - b);
  printAge() {
    // age.sort((a, b) => a - b);
    console.log(this.age);
  }
}
const bUser = new User1();
console.log(bUser.name);
console.log(bUser.age);

// 구조 분해 할당

// 구조 분해 할당이란? 배열 또는 객체의 구조를 분해하여, 그 값을 개별 변수에 담는 표현식을 의미.
// 배열 구조 분해
const arr = [1, 2, 3, 4, 5];
const [one, two, three] = arr;
// console.log(one, two, three); //1 2 3

// 객체 구조 분해
// 함수 인자 구조 분해
// 구조 분해 활요 (기본 값, 중간 값 생략, 나머지 요소, 변수 값 교환)

// DOM

// DOM이란? HTML문서의 요소들을 계층으로 표현하여 조작할 수 있게끔 해주는 인터페이스를 의미.
//          즉, 한 마디로 모든 HTML요소들은 HTML DOM을 통해서 접근할 수 있고, 조작 및 제어할 수 있다.

/*
요소 선택
- getElementById()
- getElementsByClassName()
- getElementsByTagName()
- getElementsByName()
- querySelector()
- querySelectorAll()

HTML 문서에서 id 값은 중복 될 수 없는 유일 값.

요소 변경
요소 생성 - createElement()
*/

/*
이벤트? 사건이 발생하는 것을 의미. 종류(키보드, 마우스, form)
이벤트 리스터 등록, 삭제, 전파(버블링, 캡쳐링)
*/

// 모듈

/*
모듈? 코드를 모아둔 하나의 파일, 재사용성 및 유지 보수성을 위해 사용.
      (하나의 자바스크립트 파일)

모듈 사용법 import and export
*/

// 어떻게 해야하지?
