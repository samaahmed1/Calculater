function appendNamber(number) {
  document.getElementById("display").value += number;
}

function appendOperator(operator) {
  let display = document.getElementById("display").value;
  if (display !== "") {
    document.getElementById("display").value += operator;
  }
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  let display = document.getElementById("display").value;
  try {
    if (display === "" || /^[0-9.]+$/.test(display) || /[+\-*/%.]$/.test(display)) {
      document.getElementById("display").value = "Error";
      return;
    }
    document.getElementById("display").value = eval(display);
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}

function deleteLast() {
  let display = document.getElementById("display").value;
  document.getElementById("display").value = display.slice(0, -1);
}
