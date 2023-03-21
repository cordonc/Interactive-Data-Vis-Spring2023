var button = document.getElementById("clickme"),
  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = "today i hit my juul: " + count;
};