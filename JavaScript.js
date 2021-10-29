//task 1
x = document.getElementById("FirstText").innerHTML;
document.getElementById("FirstText").innerHTML = document.getElementById("SixthText").innerHTML;
document.getElementById("SixthText").innerHTML = x;

//task 2
var radius = 3;
var res = (radius**2 * Math.PI);
document.getElementById("task2").innerHTML += "The answer is: " + res;

//task 3
if(document.cookie !== "" && confirm("Cookies: " + document.cookie + ". Want to save cookies?"))
{
    document.getElementById("getMinForm").setAttribute("class", "hidden");
}
else
{
    document.cookie = "MIN=0;max-age=0";
}


function getMinElement(){
    inputValue = document.getElementById("inputNum").value
    min = inputValue%10
    inputValue = Math.trunc(inputValue/10)
    while (inputValue>0){
        if (inputValue%10<min){
            min = inputValue%10
        }
        inputValue = Math.trunc(inputValue/10)
    }
alert(min)
document.cookie = "MIN=" + min.toString()
}

//task4
function changeColor(){
    let radios = document.getElementsByName('colors')

    for(let i = 0; i < radios.length; i++){
        if(radios[i].checked){
            if(radios[i].value == 'blackColor'){
                document.getElementById('block6').style.background = "black"
                localStorage.setItem(this.name, this.value)
            }
            if(radios[i].value == 'whiteColor'){
                document.getElementById('block6').style.background = "white"
                localStorage.setItem(this.name, this.value)
            }
            if(radios[i].value == 'redColor'){
                document.getElementById('block6').style.background = "red"
                localStorage.setItem(this.name, this.value)
            }
            if(radios[i].value == 'pinkColor'){
                document.getElementById('block6').style.background = "pink"
                localStorage.setItem(this.name, this.value)
            }
            localStorage.setItem('colors',radios[i].value)
        }
    
    }
}
