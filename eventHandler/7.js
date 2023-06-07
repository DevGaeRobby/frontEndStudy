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

function call(number) {
  console.log(
    `
    이름: ${obj.name}
    직업: ${obj.job}
    취미
    ${obj.hobbies[number].id}. ${obj.hobbies[number].title} - ${obj.hobbies[number].discription}`
  );

  if (obj.hobbies[number].motions) {
    obj.hobbies[number].motions.forEach(function (motion, index) {
      console.log(`${number + 1} - ${index} ${motion}`);
    });
  }
}

call(0);
/*
    이름: 티버
    직업: 강아지
    취미
    1. 똥싸기 - 냄새가 아주 심함
  */
call(1);
/*
    이름: 티버
    직업: 강아지
    취미
    2. 원반 - 원반 가져올때 빨리 달림
  */
call(2);
/*
    이름: 티버
    직업: 강아지
    취미
    3. 잠자기 - 코골이가 있음
    3 - 1 엎드려자기
    3 - 2 누워자기
    3 - 3 뒤집어자기
  */
