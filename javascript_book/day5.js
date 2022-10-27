// 객체 심화

// 객체의 축약 표현
// 프로퍼티 축약 표현 -> 프로퍼티 값으로 변수를 사용하는 경우, 코드 예제와 같이 키값을 생략할 수 있음.
console.log("=====객체의 축약 표현=====");
const name = 'pitang';
const age = 20;
const obj = {
    // name: name,
    name,
    // age: age
    age
};
console.log(obj);

// 메서드 : 객체의 프로퍼티로 선언된 함수
// 메서드 축약 표현
console.log("=====메서드 축약 표현=====");
const obj1 = {
    // greeting: function() {
    greeting() {
        console.log('Hello!');
    }
};
obj1.greeting();

/*
객체와 반복
- for in문  객체의 키 개수만큼 반복하여, 첫 번째 키값부터 마지막키값까지 순회할 수 있는 반복문.
            배열에서의 사용은 권장하지 않음. 오히려 forEach() of map()을 사용.
*/
console.log("=====객체와 반복=====");
const obj2 = {
    x: 10,
    y: 20,
    z: 30
};
for (value in obj2) {
    console.log(value);
}

/*
프로퍼티 열거
- Object.keys()     주어진 객체의 키값들을 배열로 반환.
- Object.values()   주어진 객체의 프로퍼티 값들을 배열로 반환.
- Object.entries()  프로퍼티를 각각의 배열로 반환. 전체 객체는 프로퍼티 배열들의 배열로 표현.
- hasOwnProperty()  객체가 주어진 프로퍼티를 가지고 있는지 true or false로 반환.
*/

/*
선택적 연결 연산자
존재하지 않을 수도 있는 프로퍼티에 안전하게 접근할 수 있도록 해주는 연산자 ?. 을 의미.
*/
const data = {};
// console.log(data.user.name); //TypeError
console.log(data.user?.name);   // undefiend

/*
프로퍼티 키 동적 생성
객체의 프로퍼티를 생성할 때, 프로퍼티의 값은 동적으로 생성할 수 있다.
하지만, 프로퍼티의 키는 동적으로 생성할 수가 없다.
*/
const arr = ['name', 'age', 'job'];
const obj3 = {
    // arr[0]: 'John'
};
obj3[arr[0]] = 'John';
obj3[arr[1]] = 20;
obj3[arr[2]] = 'front-end';
console.log(obj3);

// Set, Map 심화

/*
Set
배열과의 차이점 => 중복 허용 x, 인덱스의 개념 x, 키와 값이 같다.
주로 중복을 제거하거나 값의 유무만을 판단해야 하는 경우에 사용.
반대로 특정 요소에 접근해야 하는 경우, 기타 인덱스가 필요한 상황에는 배열이 사용.
*/

/*
- new Set()     새로운 셋 생성. 이 때 괄호안에 초깃값으로 배열과 같은 객체를 전달받으면, 해당 값을 복사하여 셋을 생성.
- add()         
- delete()      값을 성공적으로 제거한 경우 true or false
- has()         주어진 값이 셋에 존재하는지에 따라 true or false
- clear()       셋에 들어있는 요소들을 모두 제거하고 비어있는 상태로 만듦.
- size()        
- forEach()     셋은 배열과 거의 동일한 구조이기에, forEach()문 사용 가능.
*/

/*
Map
객체의 주요 차이점 => 순서 보장, 반복 가능, 모든 데이터 타입의 키 허용, 키를 문자열로 취급 x
주로 키의 순서가 보장되어야 할 때나 객체의 키가 객체에 허용되지 않는 데이터 타입인 경우에 사용.
이외에는 객체가 사용.
*/

/*
- new Map()     새로운 맵 생성. 이때 괄호 안에 반복이 가능하면서 키와 값 쌍인 객체를 받으면, 해당 값이 추가된 맵 생성.
- set()         주어진 키와 값을 맵에 추가.
- get()         인자로 전달받은 키에 해당하는 값을 반환. 존재하지 않을 경우 undefined
- has()         인자로 전달받은 키가 맵에 존재하는지에 따라 true or false
- delete();     인자로 전달받은 키에 해당하는 값을 삭제. 삭제 여부를 true or false
- clear();      맵에 들어있는 프로퍼티들을 모두 제거하고 비어있는 상태로 만듦.
- size();
*/
