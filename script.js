let display = document.querySelector(".display");
let buttons = document.querySelectorAll(".grid-item");
let ans = document.querySelector(".ans");


buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    handleInput(e.target.innerText);
  });
});

document.addEventListener("keydown", function (e) {
  let key = e.key;

  if (/[\d+\-*/.%()]/.test(key)) {
    display.innerText += key;
  } else if (key === "Enter") {
    try {
      display.innerText = eval(display.innerText);
      ans.innerText = display.innerText;
    } catch (error) {
      display.innerText = "Error";
    }
  } else if (key === "Backspace") {
    display.innerText = display.innerText.slice(0, -1);
  } else if (key === "c" || key === "C") {
    display.innerText = "";
    ans.innerText = "";
  }
});

function handleInput(value) {
  if (value === "C") {
    display.innerText = "";
    ans.innerText = "";
  } else if (value === "=") {
    try {
      display.innerText = eval(display.innerText);
      ans.innerText = display.innerText;
    } catch (error) {
      display.innerText = "Error";
    }
  } else if (value === "Ans") {
    ans.innerText = display.innerText;
  } else {
    display.innerText += value;
  }
}
