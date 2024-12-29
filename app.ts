// console.log("hello")
let inp= document.getElementById("inp") as HTMLInputElement
console.log(inp)

function setnum(num:string):void{
    inp.value += num
    console.log(num)
}
function delAll():void{

   inp.value = ""
    }


    function cal():void{
        let calu = eval(inp.value)
        console.log(calu)
        inp.value = calu
    }

    function delOne():void{
        inp.value = inp.value.substring(0,inp.value.length - 1)
    }

 