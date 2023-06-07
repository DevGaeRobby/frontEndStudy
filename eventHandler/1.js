const $btns = document.querySelectorAll(".btn");
//쿼리셀렉터all으로 btn 3개를 가져왔으니 btns가 되고 배열이다.
//dom 변수명에는 $붙이고 시작
const $result = document.querySelector(".result");
//쿼리셀렉터로 result선택
const result = [];
//result는 배열
$btns.forEach($btn => {
  $btn.addEventListener("click", function (event) {
    result.push(event.target.innerHTML);
  });
});
//Btns는 배열이므로 forEach로 나눈다.
//여기서target은 btn(버튼)이다.
//target을 쓰는 이유는 클로저 때문,
//target대신 btn을 적으면 생성 환경을 저장하는 클로저 때문에
//btn을 적은 코드가 많을수록 메모리를 엄청 먹는다.

$result.addEventListener("click", function (event) {
  alert(result.join(" "));
});
//click
