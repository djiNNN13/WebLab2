//task 1
x = document.getElementById("FirstText").innerHTML;
document.getElementById("FirstText").innerHTML = document.getElementById("SixthText").innerHTML;
document.getElementById("SixthText").innerHTML = x;

//task 2
var radius = 3;
var res = (radius**2 * Math.PI);
document.getElementById("task2").innerHTML += "The answer is: " + res;

//task 3
document.getElementById('calculate').onclick = () => getMinElement();
if (document.cookie) hasCookies();

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
document.cookie = "Min=" + min.toString()
}

function hasCookies() {
	if (confirm(document.cookie + "\n" + "Save?")) {
		alert("Cookies are saved");
		let form = document.forms.getMinForm
		form.elements.numbers.style.visibility = 'hidden'
		form.elements.calculate.style.visibility = 'hidden'
	} else {
		let cookies = document.cookie.split(";");
		for (let i = 0; i < cookies.length; i++) {
			let cookie = cookies[i]
			let eqPos = cookie.indexOf("=")
			let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
			document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;"
			document.cookie = name + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
		}
	}
}