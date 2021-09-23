let switcherlis = document.querySelectorAll(".portfolio li");
let imgs = document.querySelectorAll(".portfolio .box");

switcherlis.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", manageImgs);
});

function removeActive() {
  switcherlis.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}

function manageImgs() {
  imgs.forEach((ele) => {
    ele.style.display = "none";
  });
  document.querySelectorAll(this.dataset.cat).forEach((ele) => {
    ele.style.display = "block";
  });
}
