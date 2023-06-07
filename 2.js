function $(sellector) {
  const dom = document.querySelector(sellector);

  return {
    on: function (eventName, eventHandler) {
      dom.addEventListener(eventName, eventHandler);
    },
  };
}

const $btns = document.querySelectorAll(".btn");
$btns.forEach($btn => {
  $btn.addEventListener("click", function (event) {
    result.push(event.target.innerHTML);
  });
});

$("#result").on("click", function (event) {
  alert(result.join(" "));
});

const object = {
  add: function (a) {
    this.value += a``;
  },
};

object.add;
