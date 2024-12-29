// console.log("hello")
var inp = document.getElementById("inp");
console.log(inp);
function setnum(num) {
    inp.value += num;
    console.log(num);
}
function delAll() {
    inp.value = "";
}
function cal() {
    var calu = eval(inp.value);
    console.log(calu);
    inp.value = calu;
}
function delOne() {
    inp.value = inp.value.substring(0, inp.value.length - 1);
}
