//your JS code here.

const prev = document.getElementById("prev");
const next = document.getElementById("next");
const progress = document.getElementById("progress");

let current = 1;
const total = 5;

next.addEventListener("click", function () {
  if (current < total) {
    current++;
    update();
  }
});

prev.addEventListener("click", function () {
  if (current > 1) {
    current--;
    update();
  }
});

function update() {
  for (let i = 1; i <= total; i++) {
    const circle = document.getElementById("circle-" + i);

    if (i <= current) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  }

  // update progress width
  progress.style.width = ((current - 1) / (total - 1)) * 100 + "%";

  // button states
  prev.disabled = current === 1;
  next.disabled = current === total;
}