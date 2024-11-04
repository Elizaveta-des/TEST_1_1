function verify() {
    console.log("s, r, k")
    let s = parseInt(elementA.value);
    let r = parseInt(elementB.value);
    let k = parseInt(elementC.value);
    console.log(s, r, k)

   

    if (2*(k+r) >= Math.sqrt(s)) {
        result = "сцена помещается в зал"
        check = true;
    } 
    else {
        result = "сцена НЕ помещается в зал"
        check = false;
    }
    document.getElementById("result").value = result;
}

function send() {
    if (check) {
        document.getElementById("UserEnter").submit();
    } else {
        alert("Есть недостатки. Повторите ввод")
    }
}



let result;
let check;

const elementA = document.getElementById("s");
const elementB = document.getElementById("r");
const elementC = document.getElementById("k");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)