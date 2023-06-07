const buttonSubmit = document.querySelector("#buttonSubmit");
const inputName = document.querySelector("#inputName");

function alertAfter2sec(e) {
  e.preventDefault();
  setTimeout(() => {
    alert(inputName.value);
  }, 2000);
}

buttonSubmit.addEventListener("click", alertAfter2sec);
