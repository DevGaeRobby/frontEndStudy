const inputbox = document.querySelector(".inputbox");
const addBtn = document.querySelector(".addbutton");
const listContainer = document.querySelector(".list-container");

function handleClickAddBtn() {
  if (inputbox.value === "") {
    alert("할 일을 입력하세요");
  } else {
    let listMaker = document.createElement("div");
    listMaker.innerHTML = `<div class="list-box">
    <div>
      <li>
        <input type="checkbox" class="checkbox" /> ${inputbox.value}
      </li>
    </div>
    <div>
      <button class="edit-btn"><img src="editbtn.png" /></button>
      <button class="delete-btn"><img src="deletebtn.png" /></button>
    </div>`;
    listContainer.appendChild(listMaker);

    const deleteBtns = document.querySelectorAll(".delete-btn");
    deleteBtns.forEach(btn => {
      btn.addEventListener("click", handleClickDeleteBtn);
    });
  }
}

addBtn.addEventListener("click", handleClickAddBtn);

function handleClickDeleteBtn(event) {
  const listItem = event.target.closest(".list-box");
  listItem.remove();
}

const deleteBtns = document.querySelectorAll(".delete-btn");
deleteBtns.forEach(btn => {
  btn.addEventListener("click", handleClickDeleteBtn);
});

//체크박스
const checkBox = document.querySelector(".checkbox");
function handleClickCheckBox() {}
checkBox.addEventListener("click", handleClickCheckBox);

//에딧버튼
const editBtn = document.querySelector(".edit-btn");
function handleClickEditBtn() {}
editBtn.addEventListener("click", handleClickEditBtn);
