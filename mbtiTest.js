const main = document.getElementsByClassName('test');
const resultBox = [{}]
const qna = [
    {
        q: `1+1=?`,
        a: [
            { answer: `1이다`},
            { answer: `2다`},
            { answer: `3이다`}
        ]
    },
    {
        q: `1+2=?`,
        a: [
            { answer: `1이다`},
            { answer: `2다`},
            { answer: `3이다`}
        ]
    },
    {
        q: `0+1=?`,
        a: [
            { answer: `1이다`},
            { answer: `2다`},
            { answer: `3이다`}
        ]
    }
]

main.addEventListener('click', function (event) {
    const id = event.target.id;

    if (id === "answer1") {
        //resultBox에 answer1의 문자열 push하고
        //question innerText 변경 answer1,2,3 innerText 변경
    } else if (id === "answer2") {
        //resultBox에 answer1의 문자열 push하고
        //question innerText 변경 answer1,2,3 innerText 변경
    } else if (id === "answer3") {
        //resultBox에 answer1의 문자열 push하고
        //question innerText 변경 answer1,2,3 innerText 변경
    }
});