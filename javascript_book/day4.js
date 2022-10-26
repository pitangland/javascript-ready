// 배열 심화

/*
배열 판별
- Array.isArray() 주어진 인자가 배열인지를 판별, 배열이라면 true or false.
*/
console.log("=====배열 판별=====");
const arr1 = ['Hello', 'World'];
const str1 = 'Hello World';
const number1 = 123;
console.log(Array.isArray(arr1));
console.log(Array.isArray(str1));

/*
배열 생성
- Array.from() 반복 가능한 객체 또는 유사 배열 객체를 복사해 새로운 배열 객체를 반환.
- Array.of()   인자의 개수나 데이터 타입에 무관하게 가변적인 인자를 가지는 새로운 배열을 반환.
*/
console.log("=====배열 생성=====");
const arr2 = [1, 2, 3, 4, 5];
const newArr1 = Array.from(arr2);
console.log(arr2);
console.log(newArr1);

// 두 번째 인자에 선택적으로 매핑할 함수를 지정할 수 있고, 결과를 배열로 반환.
function plusTwo(number) {
    return number+2;
}
const newArr2 = Array.from(arr2, plusTwo);
console.log(newArr2);

// Array.of()
const arr3 = Array.of(1, 3, 5);
console.log(arr3);

// Array() 와 Array.of() 의 차이점은?
const arr4 = Array(3);      // 3개의 빈 요소를 가진 배열을 반환.
const ofArr = Array.of(3);  // 3을 요소로 가진 배열을 반환.
console.log(arr4);      
console.log(ofArr);

/*
배열 요소 조작
- push() 배열의 끝에 하나 이상의 요소를 추가하고, 변경된 배열의 길이 반환.
- pop()  배열의 끝에서 하나의 요소를 제거하고, 해당 요소를 반환.
- unshift() 배열의 앞쪽에 하나 이상의 요소를 추가, 변경된 길이를 반환.
- shift()   배열의 첫 번째 요소를 제거하고, 제거한 요소를 반환.
*/
console.log("=====배열 요소 조작=====");
const arr5 = [1, 2, 3, 4, 5];
console.log(arr5);
arr5.push(6, 7, 8);
console.log(arr5);
console.log(arr5.pop()); // 8
console.log(arr5.pop()); // 7
console.log(arr5);
arr5.unshift(6, 7, 8);
console.log(arr5);  // 6, 7, 8, 1, 2, 3, 4, 5, 6
console.log(arr5.shift()); // 6
console.log(arr5.shift()); // 7
console.log(arr5);

/*
배열과 반복
- forEach() 주어진 함수를 배열 요소 각각에 대해 실행하는 메서드, 필수 인자로 실행할 함수가 요구됨.
            또한 해당 함수는 필수 인자로 현재 요소를 가지며, 
            선택적으로 현재 요소의 인덱스와 forEach()를 호출한 배열을 가질 수 있음.
*/
console.log("=====배열과 반복=====");
const arr6 = [1, 2, 3];
arr6.forEach((number, index) => {
    console.log(`${index+1}번째 요소 : ${number}`);
});

/*
배열 요소 검색과 정렬
- includes()   배열이 주어진 요소를 포함하는지에 따라 true or false
- find()       주어진 판별 함수를 만족하는 첫 번째 요소의 값 반환. 찾지 못하면 undefined 반환.
*/
console.log("=====배열 요소 검색과 정렬=====");
const arr7 = ['hello', 'world', 'hi', 'friend'];
console.log(arr7.includes('hello'));
// 요소의 길이가 3 이하인 경우를 판별해 일치하는 첫 번째 요소의 값 반환.
const key = arr7.find((value) => value.length < 3);
console.log(key);   // hi

/*
- findIndex()  주어진 판별 함수를 만족하는 첫 번째 요소의 인덱스를 반환. 없다면 -1을 반환.
- sort()       배열을 정렬한 다음 해당 배열을 반환. 새로운 배열이 아닌 원본 배열 수정.
*/
const arr8 = [1, 2, 3, 10, 23, 11];
// 요소인 숫자들이 3보다 큰 지 판별해 일치하는 첫 번째 요소의 인덱스 값 반환.
const key2 = arr8.findIndex((number) => number>3);  
console.log(key2);
console.log(arr8.sort()); // 하지만, 숫자 대 숫자로 비교하여 정렬이 아니기에 예상과 다르게 정렬.
console.log(arr7.sort()); // 문자 배열일 경우 제대로 정렬.

/*
배열 요소 수정
- fill()    배열을 지정한 값으로 채우며, 원본 배열을 수정함.
- slice()   배열의 복사본을 조각 내 새로운 배열로 반환.
- splice()  필수 인자로 시작 인덱스 요구, 원본 배열 자체를 수정함에 주의.
*/
console.log("=====배열 요소 수정=====");
const arr9 = [1, 2, 3, 4, 5];
arr9.fill(10);       //10 10 10 10 10
arr9.fill(20, 3);    //10 10 10 20 20
arr9.fill(30, 1, 3); //10 30 30 20 20
console.log(arr9);
console.log(arr9.slice());      //10 30 30 20 20
console.log(arr9.slice(1));     //30 30 20 20
console.log(arr9.slice(1, 3));  //30 30
console.log(arr9);              //10 30 30 20 20 -> why? 새로운 배열로 반환했기에
console.log(arr9.splice(2));            //30 20 20
console.log(arr9);                      //10 30
console.log(arr9.splice(0, 1));         //10
console.log(arr9);                      //30
console.log(arr9.splice(1, 0, 10));     //[]
console.log(arr9);                      //30 10

/*
기타 배열 메서드
- join()     배열의 모든 요소를 이어붙여 하나의 문자열로 반환. 
             선택적으로 각각의 요소를 구분할 문자를 인자로 가질 수 있다. 생략할 경우 기본 구분자 쉼표가 된다.
- concat()   인자로 주어진 배열을 기존 배열에 합쳐 새로운 배열로 반환.
- map()      배열의 모든 요소들에 각각 주어진 함수를 실행한 뒤 그 결과들을 모아 새로운 배열로 반환.
             필수 인자로 실행할 함수가 요구됨.
- filter()   주어진 판별 함수의 결괏값이 참인 요소들만을 모아 새로운 배열로 반환.
             필수 인자로 실행할 함수가 요구됨.
    forEach()와 비슷한데 반환 값이 없는 것과 달리 map(), filter()는 새로운 배열을 반환.
- reduce()   필수 인자로 리듀서 함수를, 선택 인자로 리듀서 함수에 제공할 초깃값을 가질 수 있으며,
             배열의 각 요소에 대해 주어진 리듀서 함수를 실행한 뒤, 하나의 값을 반환.
*/
const ar = ['hello', 'world', 'hi'];
const ar1 = ['123', '456'];
const ar2 = [1, 2, 3, 4, 5];
const ar3 = [10, 20, 100, 40, 2, 23, 235, 11];
console.log(ar.join());         // 생략할 경우 기본 구분자 , 쉼표.
console.log(ar.join(" / "));
console.log(ar.concat(ar1));                //hello world hi 123 456
console.log(ar.concat('lee', 'kim'));       //hello world hi lee kim
const newArr3 = ar2.map((value) => value * 5);
console.log(newArr3);   //5 10 15 20 25
const newArr4 = ar3.filter((number) => number > 99);
console.log(newArr4);   //100 235
// acc은 리듀서 함수의 반환 값들을 누적하는 대상.
// value는 현재 처리할 요소의 값을 의미.
const reducer = (acc, value) => acc + value;
console.log(ar2.reduce(reducer));       //15
console.log(ar2.reduce(reducer, 10));   //25

