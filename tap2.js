const data = {
  tabs: [
    {
      text: "탭1",
    },
    {
      text: "탭2",
    },
    {
      text: "탭3",
    },
  ],
  contents: [
    {
      image: "",
      text: "탭1",
    },
    {
      image: "",
      text: "탭2",
    },
    {
      image: "",
      text: "탭3",
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
      <img src="${image}" alt="이미지">
      <p>
        ${text}
      </p>
    `;
}
