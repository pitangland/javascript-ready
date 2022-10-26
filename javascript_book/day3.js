// 문자열 심화

/*
대소문자 변환
- toUpperCase() 주어진 문자열을 모두 대문자로 변환.
- toLowerCase() 주어진 문자열을 모두 소문자로 변환.
*/
console.log("=====대소문자 변환=====");
const upp = 'hello world!';
console.log(upp.toUpperCase());
console.log(upp.toLowerCase());

/*
공백 제거
- trim() 문자열의 앞쪽과 뒤쪽의 공백을 제거.
- trimStart(), trimEnd() 문자열의 앞쪽 공백만을, 문자열의 뒤쪽 공백만을 제거.
- trimLeft(), trimRight() 별칭을 사용해서 호출할 수도 있다.
*/
console.log("=====공백 제거=====");
const tri = '    hihi     ';
console.log(tri.trim());
console.log(tri.trimStart());
console.log(tri.trimEnd());
console.log(tri.trimLeft());    // trimStart()의 별칭
console.log(tri.trimRight());   // trimEnd()의 별칭

/*
새로운 문자열 생성
- repeat() 문자열을 주어진 횟수만큼 반복해 이어붙인 새로운 문자열을 반환. -> 원본 객체는 변하지 않음.
- padStart(), padEnd() 문자열의 시작 위치부터, 문자열이 끝나는 부분부터 
                       주어진 문자열을 추가해서 지정한 길이를 만족하는 새로운 문자열을 반환.
*/
console.log("=====새로운 문자열 생성=====");
const rep = 'Hello';
console.log(rep.repeat(3));
console.log(rep);
console.log(rep.padStart(10, 'v')); //vvvvvHello
console.log(rep.padEnd(10, 'v'));   //Hellovvvvv

/*
문자열 검색
- indexOf() 주어진 키워드 값을 문자열에서 검색, 일치하는 첫 번째 인덱스를 반환. 
            일치하는 값을 찾지 못한 경우 -1 반환.
- includes() 주어진 키워드 값을 문자열에서 검색, 일치하는 값을 찾은 경우 true 값, 아니면 false 값.
- startsWith(), endsWith() 주어진 문자열로 시작하는지, 주어진 문자열로 끝나는지 여부 true or false.
*/
console.log("=====문자열 검색=====");
const ind = '안녕하세요. 개발자 김원표입니다.';
console.log(ind.indexOf('개발자'));     // 7
console.log(ind.includes('디자이너'));  // false
console.log(ind.startsWith('안녕'));    // true
console.log(ind.endsWith('안녕'));      // false

/*
문자열 수정
- replace() 주어진 패턴과 일치하는 첫 번째 부분을, 주어진 문자열로 교체한 새로운 문자열을 반환.
            패턴은 문자열뿐만 아니라 정규식등이 될 수 있음.
- replaceAll() 주어진 패턴과 일치하는 모든 부분을, 주어진 문자열로 교체한 새로운 문자열을 봔환.
- substring() 문자열의 주어진 시작 인덱스부터 주어진 종료 인덱스의 이전 인덱스(종료-1)까지를 새로운 문자열로 반환.
- slice() 주어진 인자에 따라 문자열의 일부를 추출해 새로운 문자열로 반환.
- split() 문자열을 주어진 구분자를 기준으로 자른 뒤, 그 결과를 배열로 반환.
*/
console.log("=====문자열 수정=====");
const repl = 'What are you doing now? you';
console.log(repl.replace('you', 'we'));     // 일치하는 첫번째 부분 교체.
console.log(repl.replaceAll('you', 'we'));  // 일치하는 모든 부분 교체.
console.log(repl.substring(0,7));      // What ar
console.log(repl.slice(5));            // are you doing now? you
console.log(repl.slice(2, 7));         // at ar
console.log(repl.split(' '));


// 정규 표현식? 문자열을 처리하는 방법 중 하나. 
// 특정한 규칙을 가진 문자열의 집합을 표현하기 위해 사용되는 형식 언어를 의미.
// 프로그래밍 언어에서 정규 표현식은 일반적으로 문자열의 검색 및 치환을 위해 사용.
