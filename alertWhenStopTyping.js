//디바운싱 (Debouncing)
//연속으로 호출되는 함수들 중에
//마지막에 호출되는 함수(또는 제일 처음 함수)만 실행되도록 하는 것

let timer;

const inputName = document.querySelector("#inputName");
const inputValue = inputName.value;

function debouncing(e) {
  e.preventDefault();
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => {
    alert(inputValue);
  }, 1000);
}

inputName.addEventListener("input", debouncing);
