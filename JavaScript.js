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

let item = localStorage.getItem("colors");
if (item != null)
{
    if(item == "blackColor"){
        document.getElementById('block6').style.background = "black"
    }
    if(item == "whiteColor"){
        document.getElementById('block6').style.background = "white"
    }
    if(item == "redColor"){
        document.getElementById('block6').style.background = "red"
    }
    if(item == "pinkColor"){
        document.getElementById('block6').style.background = "pink"
    }
}


function changeColor(){
    let radios = document.getElementsByName('colors')

    for(let i = 0; i < radios.length; i++){
        if(radios[i].checked){
            if(radios[i].value == 'blackColor'){
                document.getElementById('block6').style.background = "black"
                localStorage.setItem('colors',radios[i].value)
            }
            if(radios[i].value == 'whiteColor'){
                document.getElementById('block6').style.background = "white"
                localStorage.setItem('colors',radios[i].value)
            }
            if(radios[i].value == 'redColor'){
                document.getElementById('block6').style.background = "red"
                localStorage.setItem('colors',radios[i].value)
            }
            if(radios[i].value == 'pinkColor'){
                document.getElementById('block6').style.background = "pink"
                localStorage.setItem('colors',radios[i].value)
            }
            
        }
    
    }
}



//task 5

let newForm = document.createElement('form')
newForm.innerHTML =
	'<br> Write something: <input id="string_text"> <br>'+
	'<button id="save" type="button">Apply</button>'
let table = document.createElement('table')
document.getElementById('block4').append(table)

let mydiv = document.getElementById('customDiv');
mydiv.onclick = () => document.getElementById('block4').append(newForm);



newForm[1].onclick = () => {
	const textString = newForm[0].value;
	addField(textString)
}

index = 0
function addField(textString) {
	let row = table.insertRow(index)
	let cell = row.insertCell(0)

	let textField = document.createTextNode(textString)
	cell.appendChild(textField)

	let saveButton = document.createElement('button')
	cell.appendChild(saveButton)
	saveButton.textContent = 'Save'
	saveButton.style.marginTop = '5px'
	saveButton.onclick = () => {
		const hist = '$'+ textString
		let dumpy = localStorage.getItem('text') + hist
		localStorage.setItem('text',dumpy);
	}
	index++
}
