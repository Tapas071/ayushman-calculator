const btn9 = document.getElementById("btn9");
const btn8 = document.getElementById("btn8");
const btn7 = document.getElementById("btn7");
const btnplus = document.getElementById("btn+");
const display = document.getElementById("display-content");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btnminus = document.getElementById("btn-");
const btndelete = document.getElementById("btndel");
const btnac = document.getElementById("btn-ac");
const btnpoint = document.getElementById("btn-decimal");
const btn0 = document.getElementById("btn0");
const btndivide = document.getElementById("btn-divide");
const btnmultiply = document.getElementById("btn-multiply");

var s = "0";
display.innerHTML = s;

const equalto = document.getElementById("equal-sign");

function isDigit(a) {
  let b = "a" - "0";
  if (b >= 0 && b <= 9) {
    return true;
  } else {
    return false;
  }
}

btn9.addEventListener("click", function () {
  if (s == "0") {
    s = "";
  }
  s += btn9.value;
  display.innerHTML = s;
});
btn8.addEventListener("click", function () {
  if (s == "0") {
    s = "";
  }
  s += btn8.value;
  display.innerHTML = s;
});
btn7.addEventListener("click", function () {
  if (s == "0") {
    s = "";
  }
  s += btn7.value;
  display.innerHTML = s;
});
btn6.addEventListener("click", function () {
  if (s == "0") {
    s = "";
  }
  s += btn6.value;
  display.innerHTML = s;
});
btn5.addEventListener("click", function () {
  if (s == "0") {
    s = "";
  }
  s += btn5.value;
  display.innerHTML = s;
});
btn4.addEventListener("click", function () {
  if (s == "0") {
    s = "";
  }
  s += btn4.value;
  display.innerHTML = s;
});
btn3.addEventListener("click", function () {
  if (s == "0") {
    s = "";
  }
  s += btn3.value;
  display.innerHTML = s;
});
btn2.addEventListener("click", function () {
  if (s == "0") {
    s = "";
  }
  s += btn2.value;
  display.innerHTML = s;
});
btn1.addEventListener("click", function () {
  if (s == "0") {
    s = "";
  }
  s += btn1.value;
  display.innerHTML = s;
});
btn0.addEventListener("click", function () {
  if (s == "0") {
    s = "";
  }
  s += btn0.value;
  display.innerHTML = s;
});
btnplus.addEventListener("click", function () {
  var a = s[s.length - 1];
  // alert(a)
  if (a == "+") {
  } else if (a == "-" || a == "*" || a == "/") {
    s = s.substring(0, s.length - 1);
    s += "+";
    display.innerHTML = s;
  } else {
    s += btnplus.value;
    display.innerHTML = s;
  }
});

btnminus.addEventListener("click", function () {
  var a = s[s.length - 1];
  // alert(a)
  if (a == "-") {
  } else if (a == "+" || a == "*" || a == "/") {
    s = s.substring(0, s.length - 1);
    s += "-";
    display.innerHTML = s;
  } else {
    s += btnminus.value;
    display.innerHTML = s;
  }
});

btndivide.addEventListener("click", function () {
  // alert("firs")
  var a = s[s.length - 1];
  // alert(a)
  if (a == "/") {
  } else if (a == "+" || a == "*" || a == "-") {
    s = s.substring(0, s.length - 1);
    s += "/";
    display.innerHTML = s;
  } else {
    s += btndivide.value;
    display.innerHTML = s;
  }
});
btnmultiply.addEventListener("click", function () {
  var a = s[s.length - 1];
  // alert(a)
  if (a == "*") {
  } else if (a == "+" || a == "/" || a == "-") {
    s = s.substring(0, s.length - 1);
    s += "*";
    display.innerHTML = s;
  } else {
    s += btnmultiply.value;
    display.innerHTML = s;
  }
});
btnpoint.addEventListener("click", function () {
  s += btnpoint.value;
  display.innerHTML = s;
});
btndelete.addEventListener("click", function () {
  s = s.substring(0, s.length - 1);
  display.innerHTML = s;
});
btnac.addEventListener("click", function () {
  s = "0";
  display.innerHTML = s;
});

equalto.addEventListener("click", function () {
  let result = eval(s);
  display.innerHTML = result;
});
