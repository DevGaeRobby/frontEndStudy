//1. new Promise() 메소드를 호출해서 Promise를 생성하세요.
var myPromise = new Promise(function (resolve, reject) {
  resolve();
});

//2. new Promise()를 호출할 때 콜백 함수의 인자를 resolve, reject로 선언하세요.
function getData() {
  var data = "javascript promise";
  return new Promise(function (resolve, reject) {
    resolve(data);
  });
}

// then을 이용해서 resolve()의 결과 값 data를 resolvedData로 받습니다.
getData().then(function (resolvedData) {
  document.write(resolvedData);
});
