//디바운싱 (Debouncing)
//연속으로 호출되는 함수들 중에
//마지막에 호출되는 함수(또는 제일 처음 함수)만 실행되도록 하는 것

//함수 외부에 변수로 timer를 선언
let timer;

const inputName = document.querySelector("#inputName");

//함수 debouncing은 실행 될 때마다,
function debouncing() {
  //timer에 들어간 값을 초기화 함
  //timer의 초기값은 undefind, 따라서 첫 동작엔 if문이 무시됨
  if (timer) {
    clearTimeout(timer);
  }
  //inputValue에 inputName의 value값을 할당
  //const inputValue = inputName.value;를 함수 외부에 선언하면
  //이 변수는 debouncing 함수 내부에서 접근할 수 없게 됨(함수 스코프)
  //안에 둬야 debouncing 함수가 호출될 때마다 inputValue가 현재 입력 필드의 값으로 업데이트됨
  const inputValue = inputName.value;
  //timer에 setTimeout을 할당함.(1초 뒤 inputValue를 alert)
  timer = setTimeout(() => {
    alert(inputValue);
  }, 1000);
}

//inputName에 input을 할 때마다 debouncing함수가 실행되고
//debouncing함수는 실행 될 때마다 timer의 setTimeout을 초기화 함.
//따라서 1초가 지나기 전에 input이 발생하면 setTimeout은 계속 초기화됨.
inputName.addEventListener("input", debouncing);
