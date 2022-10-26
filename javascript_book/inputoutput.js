
// 자바스크립트에서는 readline 모듈을 이용해 콘솔을 통해 값을 입력받을 수 있음.
/*
readline 모듈은 자바스크립트에서 내장된 모듈로 Readable 스트림에서 한줄씩 입출력을 처리할 수 있도로고 도와준다.
*/

// 모듈 불러오기
// require(모듈 이름))
const readline = require("readline");

// readline interface 객체 만들기
// readline interface 객체를 이용해 콘솔에서 표준 입출력을 처리할 수 있다.
// createInterface() 메서드를 이용해 객체를 만들고, rl 이라는 변수에 저장해둔다.
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout,
});

// on 메서드
// 생성한 rl 객체로 입출력과 관련된 여러 이벤트들을 처리할 수 있다.
// 예를 들어 사용자가 콘솔에 입력을 넣는 것과 같은 사건을 의미하고
// on 메서드를 이용하면 이벤트가 발생할 때 실행할 동작을 지정할 수 있다.

// line 이벤트
// readline interface를 통해 다룰 이벤트는 "line" 이벤트로 사용자가 콘솔에 입력을 할 때 발생.
// 입력 이벤트는 입력 스트림에 줄바꿈을 나타내는 \n, \r, \r\n 제어 문자가 나타나거나,
// 사용자가 Enter or Return을 누를 때 발생하게 된다. 
// 아래와 같이 작성하면 사용자가 입력한 한 줄을 그대로 다시 출력 가능.
rl.on("line", function (x) {
    console.log(x);
});
// 즉, 사용자가 입력 이벤트를 발생시키면, x 변수를 통해 사용자가 입력한 내용이 저장되고 이를 콘솔에 출력.

// close 이벤트
// Readable 스트림 종료를 제어하는 이벤트, line 이벤트와 비슷한 형태로 작성.
// 해당 이벤트는 더이상 입력받을 것이 없을 때 rl.close()를 호출하여 발생.
rl.on("line", function (x) {
    console.log(x);
    rl.close();     // 입력종료
}).on("close", function () {
    // 입력 종료 후 동작할 코드
})



