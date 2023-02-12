let s = document.querySelector(".select");
let w = document.querySelector(".wrapper");

/* s.style = 'border: 1px solid grey'; */

s.addEventListener("click", function () {
  showWrapper();
});

w.addEventListener("click", function (event) {
  s.textContent = event.target.textContent;
  showWrapper();
});

function showWrapper() {
  if (w.hidden == true) {
    w.hidden = false;
  } else {
    w.hidden = true;
  }
}
