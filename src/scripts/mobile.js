const items = document.querySelectorAll(".menu-item");
const menu = document.querySelector("menu");
const isCheck = document.querySelector(".myChecked");

// biome-ignore lint/complexity/noForEach: <explanation>
items.forEach((item) => {
  item.addEventListener("click", () => {
    isCheck.checked = false;
  });
});
