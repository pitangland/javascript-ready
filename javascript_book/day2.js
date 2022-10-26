// 기초 문법 part 2

/*
조건문? 지정된 특정 조건이 참인지 거짓인지에 따라 서로 다른 코드로 분기하기 위해 사용되는 제어문을 의미.
- if-else if-else문
- switch문 -> 조건이 일치하는 케이스를 확인하면 이후 break까지의 명령을 실행 후 조건문을 빠져나옴.
*/

/*
반복문? 반복적으로 수행해야 하는 동작을 처리하기 위해 사용되는 제어문을 의미.

- for문 => 시작 값 -> 조건 체크 -> 코드 실행 -> 증감.
- break? 사용자가 원하는 지점에서 반복문을 빠져나올 수 있음.
- continue? 현재 반복을 종료하고 다음 반복으로 넘기는 명령어.
*/
console.log("=====반복문=====");
// 시작 값 생략
console.log("=====시작 값 생략=====");
let i = 0;
for(; i<5; i++) {
    console.log(i);
}
// 증감 값 생략
console.log("=====증감 값 생략=====");
let j = 0;
for(; j < 5;) {
    console.log(j++);
}

/*
- for of문 => 반복 가능한 객체에 사용할 수 있는 반복문, 주어진 객체를 차례대로 순화.
  괄호 안에 반복에 사용할 변수명, of 그리고 반복이 가능한 객체를 순서대로 작성.
*/
console.log("=====for of문=====");
const arr = [1, 2, 3, 4, 5];
for (const i of arr) {
    console.log(i);
}

/*
- while문 => 괄호 안의 조건이 만족할 동안 내부 코드를 반복.
*/
console.log("=====while문=====");
let k = 0;
while ( k < 10 ) {
    console.log(k);
    k++;
}

/*
- do while문 => 조건의 참 또는 거짓 여부와 상관없이 최소한 한 번은 실행.
*/
console.log("=====do while문=====");
let l = 0;
do {
    console.log(l);
    l++;
} while (l < 10);

// 기초 문법 part3

/*
함수? 하나의 동작을 위한 코드 집합을 의미. 반복적인 동작을 처리하기 위해 작성.
 함수의 내부에서 선언된 변수는 변수가 존재하는 유효 범위가 함수 내부로 제한. -> 지역변수(Local Variable)라 부름.
 함수의 외부에서 선언된 변수를 함수 내부에서 접근하는 것은 가능. -> 전역변수(Global Varicable)라 부름.
 - 하지만, 전역변수가 지역변수에 동일한 이름으로 선언되면 지역변수에만 접근할 수 있다.
*/
console.log("=====함수=====");
function sum(a, b) {
    console.log(a+b);
    console.log(arguments); // 마치 배열과 같이 저장되고 접근함. 받아주는 저장소가 있기 때문에 초과된 인수 무시, 오류 x.
}
sum(10, 20);
sum(15, 25);
sum(10); // NaN (Not-A-Number) 10과 undefined를 덧셈연산으로 시도하기 때문.
sum(10, 20, 30); // 30 초과된 인수를 무시할 뿐, 오류 x.

/*
인자와 매개변수, 아규먼트(Argument)와 파라미터(Parameter)
인자? 함수를 호출할 때 전달하는 값.
매개변수? 함수를 정의할 때 작성하는 필요 인자.

- 나머지 인자? 지정한 인자를 제외한 나머지 모든 인자들을 배열로 묶어 나타낼 수 있음.
*/
console.log("=====나머지 인자=====");
function something(a, b, ...rest) {
    console.log(a);     // 1
    console.log(b);     // 2
    console.log(rest);  // [ 3, 4, 5 ]
}
something(1, 2, 3, 4, 5);

/*
함수 표현식? 자바스크립트에서는 함수는 하나의 값으로 취급.
*/
console.log("=====함수 표현식=====");
function sum1(a, b) {
    return a+b;
}
const sum2 = function (a, b) {
    return a+b;
};
console.log(sum1(10, 20));  // 30 
console.log(sum2(10, 20));  // 30 sum1과 sum2가 같은 결과를 가지는 것을 알 수 있음.

/*
화살표 함수? 함수 표현식과 비슷하지만, 그보다 더 단순한 표현 방법으로 함수를 정의할 수 있는 방식.
- 변수를 선언하듯 함수를 선언, 값 대신 사용할 인자를 (a, b)와 같이 작성한 다음, 
  화살표라고 부르는 기호(=>)를 붙인 뒤 함수의 내용을 작성.
  화살표 뒤에 바로 반환 값을 작성할 경우 return문 생략. 
  but, {} 중괄호를 열고 함수의 내용을 작성할 경우 return문 사용해야 함.
*/
console.log("=====화살표 함수=====");
const sum3 = (a, b) => a+b;


