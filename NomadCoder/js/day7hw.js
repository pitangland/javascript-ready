const numberForm = document.querySelector("#number-form");
const randomInput = document.querySelector("#randomNumber");
const guessInput = document.querySelector("#guessNumber");
const result = document.querySelector("#result");

function handleRandom(event) {
  //멈춰!
  event.preventDefault();

  // value 들을 저장을 해!
  const rangeNumber = randomInput.value;
  localStorage.setItem("rangeNumber", rangeNumber);
  const guessNumber = guessInput.value;
  localStorage.setItem("guessNumber", guessNumber);

  const randomNumber = Math.ceil(Math.random() * rangeNumber);
  resultNumber.innerHTML = `You chose: ${guessNumber}, the machine chose: ${randomNumber}.`;

  if (parseInt(guessNumber) === randomNumber) {
    //  you win!
    result.innerHTML = `You win!`;
  } else {
    // you lost!
    result.innerHTML = `You lost!`;
  }
}

numberForm.addEventListener("submit", handleRandom);
