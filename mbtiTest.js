const question = document.getElementsByClassName("question");
const checkBox = document.getElementsByClassName("checkBox");
const answer1 = document.getElementById("answer1");
answer1.addEventListener("click", function (event) {
  answer1.innerHTML = qna[0].a[1].answer;
});

const qna = [
  {
    q: `1`,
    a: [{ answer: "a" }, { answer: "b" }, { answer: "c" }],
  },
  {
    q: `2`,
    a: [{ answer: "d" }, { answer: "e" }, { answer: "f" }],
  },
  {
    q: `3`,
    a: [{ answer: "g" }, { answer: "h" }, { answer: "i" }],
  },
];
