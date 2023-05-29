const data = {
  tabs: [
    {
      text: "노무현",
    },
    {
      text: "문재인",
    },
    {
      text: "이재명",
    },
  ],
  contents: [
    {
      image: "shangus.jpg",
      text: "노무현은 대한민국의 정치인",
    },
    {
      image: "answodls.jpg",
      text: "문재인은 대한민국의 정치인",
    },
    {
      image: "dlwoaud.jpg",
      text: "이재명은 대한민국의 정치인",
    },
  ],
};

const getTabComponent = (id, text) => {
  const tab = document.createElement("li");
  tab.innerHTML = `
      <li>
        <a href="#" onclick="openTab(event, '${id}')">${text}</a>
      </li>
    `;
  return tab;
};

const $tabs = document.querySelector(".tab-menu"); //ul
const $content = document.querySelector(".tab-content"); //div

for (let index = 0; index < data.tabs.length; index++) {
  $tabs.appendChild(getTabComponent(index, data.tabs[index].text));
}

function openTab(evt, tabIndex) {
  console.log(123);
  const image = data.contents[tabIndex].image;
  const text = data.contents[tabIndex].text;

  $content.innerHTML = `
      <img src="${image}" alt="찢">
      <p>
        ${text}
      </p>
    `;
}
