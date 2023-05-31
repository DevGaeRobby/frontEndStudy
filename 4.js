const obj = {
  name: "티버",
  job: "강아지",
  hobbies: [
    {
      id: 1,
      title: "똥싸기",
      discription: "냄새가 아주 심함",
    },
    {
      id: 2,
      title: "원반",
      discription: "원반 가져올때 빨리 달림",
    },
    {
      id: 3,
      title: "잠자기",
      discription: "코골이가 있음",
      motions: ["엎드려자기", "누워자기", "뒤집어자기"],
    },
  ],
};

/*
  아래처럼 출력
  
  이름: 티버
  직업: 강아지
  취미
  1. 똥싸기 - 냄새가 아주 심함
  2. 원반 - 원반 가져올때 빨리 달림
  3. 잠자기 - 코골이가 있음
    3 - 1 엎드려자기
    3 - 2 누워자기
    3 - 3 뒤집어자기
  */

console.log(`이름: ${obj.name}`);
console.log(`직업: ${obj.job}`);
console.log(`취미`);
obj.hobbies.forEach(function (hobbie) {
  console.log(`${hobbie.id}. ${hobbie.title} - ${hobbie.discription}`);
  if (hobbie.motions) {
    hobbie.motions.forEach(function (motion, index) {
      console.log(`3 - ${index+1} ${motion}`);
    });
  }
});

//     3 - 1 ${obj.hobbies[2].motions[0]}
//     3 - 2 ${obj.hobbies[2].motions[1]}
//     3 - 3 ${obj.hobbies[2].motions[2]}`
// )
