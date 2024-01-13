const decreasebtn = document.getElementById("decrease");
const resetbtn = document.getElementById("reset");
const increasebtn = document.getElementById("increase");
const labelbtn = document.getElementById("labelnumber");
let count = 0;

decreasebtn.addEventListener("click", function () {
  count--;
  numbercheck(count);
  labelbtn.textContent = count;
});
increasebtn.addEventListener("click", function () {
  count++;
  numbercheck(count);
  labelbtn.textContent = count;
});
resetbtn.addEventListener("click", function () {
  count = 0;
  numbercheck(count);
  labelbtn.textContent = count;
});

function numbercheck(count) {
  if (count < 0) labelbtn.style.color = "red";
  else if (count > 0) labelbtn.style.color = "green";
  else labelbtn.style.color = "black";
}
