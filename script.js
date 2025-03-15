const inputField = document.getElementById('input');
const btn9 = document.getElementById('btn9');
const btn8 = document.getElementById('btn8');
const btn7 = document.getElementById('btn7');
const btn6 = document.getElementById('btn6');
const btn5 = document.getElementById('btn5');
const btn4 = document.getElementById('btn4');
const btn3 = document.getElementById('btn3');
const btn2 = document.getElementById('btn2');
const btn1 = document.getElementById('btn1');
const btn0 = document.getElementById('btn0');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const divid = document.getElementById('divid');
const percent = document.getElementById('percentage');
const dot = document.getElementById('dot');
const multiple = document.getElementById('multiple');


btn9.addEventListener("click", function(){
    inputField.value += "9";
});
btn8.addEventListener("click", function(){
    inputField.value += "8";
});
btn7.addEventListener("click", function(){
    inputField.value += "7";
});
btn6.addEventListener("click", function(){
    inputField.value += "6";
});
btn5.addEventListener("click", function(){
    inputField.value += "5";
});
btn4.addEventListener("click", function(){
    inputField.value += "4";
});
btn3.addEventListener("click", function(){
    inputField.value += "3";
});
btn2.addEventListener("click", function(){
    inputField.value += "2";
});
btn1.addEventListener("click", function(){
    inputField.value += "1";
});
btn0.addEventListener("click", function(){
    inputField.value += "0";
});
minus.addEventListener("click", function(){
    inputField.value += "-";
});
plus.addEventListener("click", function(){
    inputField.value += "+";
});
divid.addEventListener("click", function(){
    inputField.value += "/";
});
dot.addEventListener("click", function(){
    inputField.value += ".";
});
percent.addEventListener("click", function () {
    inputField.value = parseFloat(inputField.value) / 100;
});
multiple.addEventListener("click", function(){
    inputField.value += "*";
});

//function for equals =//

function equals(){
    inputField.value = eval(inputField.value);
};
equal.addEventListener("click", equals);

// function for AC//

AC.addEventListener("click", clear);
function clear(){
    inputField.value = null;
};

// funtion for OFF //

OFF.addEventListener("click", off);
function off(){
    inputField.value = 'OFF';

    const buttons = document.querySelectorAll(".calculator-btns");
    buttons.forEach(button => {
        button.disabled = true;
    });

    OFF.disabled = true;
    inputField.disabled = true;
    inputField = document.getElementById('input').style.color = "black";
};

ON.addEventListener("click", on);
function on(){
    inputField.value = '';

    const buttons = document.querySelectorAll(".calculator-btns");
    buttons.forEach(button => {
        button.disabled = false;
    });

    OFF.disabled = false;
    inputField.disabled = false;
};