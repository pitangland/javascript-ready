// 자바스크립트 ES6+ 독학백서 정리.
// 기초 문법 part 1

// 변수
// let과 const 키워드 사용
console.log("=====변수=====");
let age = 20;
console.log(age);

age = 30;
console.log(age)

const name = 'John';
console.log(name);

// const는 저장한 값을 바꿀 수 없다. 에러 발생.
//name = "pitang";

// const를 기본으로 사용하는 버릇을 들이는 것이 좋음.

// var라는 키워드도 존재하지만, 
// 변수의 중복 정의를 제한하지 않는 등 치명적인 단점때문에 거의 사용하지 않음.

/* 
 String 문자열 데이터 타입
 작은따옴표 '', 큰따옴표 "", 백틱 ``
 백틱의 경우 백틱 안에 문자열을 작성하고, 변수나 수식이 들어가야 할 공간에 ${} 기호를 쓴 뒤,
                                        그 안에 변수나 수식 등을 작성하면 됨.
*/
console.log("=====String=====");
const message = `My name is ${name} and I'm ${age} years old.`;
console.log(message);

/*
 Symbol 심벌 데이터 타입은 객체의 고유한 식별자를 만들기 위해 사용.
*/
// const id = Symbol();
// console.log(typeof id);
console.log("=====Symbol=====");
const id = Symbol('id');
console.log(id);

/*
참조 데이터 타입(Reference Types)? 보관하는 주소가 담기는 데이터 타입을 의미.
고정된 크기 x, 주소만을 가지기 때문에 동적으로 크기가 변하는 데이터를 보관할 수 있다.
*/
console.log("=====참조 데이터 타입=====");
const arrN = [1, 2, 3];
const arrS = ['Hello', 'World'];
console.log(arrN);
console.log(arrS);

/*
객체? 여러 종류의 데이터 타입의 집합. 키와 값으로 구성. 쌍을 프로퍼티(property)라 부름.
이 때 객체의 키는 항상 문자 또는 심벌 데이터 타입이어야 함.
*/
console.log("=====객체=====");
const user = {
    id: 'abc',
    password: 123123
};
console.log(user);
console.log(user.id);
console.log(user['password']);

/*
Set? 데이터 집합, 중복 x.
*/
console.log("=====Set=====");
const set = new Set();
set.add(1);
set.add(2);
set.add(1); // 중복이므로 저장되지 않을 것임.
console.log(set); // Set(2) { 1, 2 }

/*
Map? 객체와 같이 키와 값을 연결하는 방식의 데이터 집합. 
객체와 다른 점은?
- 키값으로 모든 데이터 타입 허용
- 삽입된 순서대로 정렬. map.size로 크기를 바로 알 수 있음
- 맵 자체로 순회할 수 있음.
*/
console.log("=====Map=====");
const map = new Map();
map.set('Hello', 'World!');
map.set(123, 456);
console.log(map); // Map(2) { 'Hello' => 'World!', 123 => 456}

/*
산술 연산자
+ : 덧셈
- : 뺄셈
* : 곱셈
/ : 나눗셈
% : 나머지
** : 지수
*/
console.log("=====산술 연산자=====");
console.log(1+2);
console.log(3-1);
console.log(3*2);
console.log(6/2);
console.log(2+"살!"); // 문자 데이터 타입이 있는 경우, 숫자 덧셈이 아니라 문자를 결합.
console.log(10%2);
console.log(2**3); // 8

/*
증감 연산자? 숫자를 증가시키거나 감소시키기 위해 사용되는 연산자.
*/
console.log("=====증감 연산자=====");
let number = 10;
number++;
console.log(number);
number--;
console.log(number);

/*
비교 연산자
< or >      :크거나 작은지 비교
<= or >=    :크거나 같은지 비교
== or ===   :같은지 비교
!= or !==   :동등한지 비교

논리 연산자
&& : AND
|| : OR
!  : NOT
*/

/*
Nullish 연산자? 여러 개의 피연산자 중 값이 확정되어 있는 피연산자를 찾는 연산을 수행.
*/
console.log("=====Nullish=====");
const a = undefined;
const b = null;
const c = 'Hello';
console.log(a ?? b ?? c); // 확정되어 있는 변수 C를 반환.

/*
비트 연산자? 인수를 32비트 정수로 변환한 다음 이진연산(Binary)을 수행하는 연산자. -> 사용할 일 거의 없음.
& : AND
| : OR
~ : NOT
^ : XOR
<< : LEFT SHIFT
>> : RIGHT SHIFT
*/


/*
전개 구문? 반복이 가능한 객체에 적용할 수 있는 문법. 배열이나 객체, 문자열의 요소를 각각 꺼내서 펼친다.
*/
console.log("=====전개 구문=====");
const hello = 'HELLO';
const world = 'World!';
console.log(...hello, ...world); // H E L L O W o r l d !