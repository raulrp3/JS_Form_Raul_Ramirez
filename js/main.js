window.onload = function(){
	hideAlert();
	let btnSave = document.getElementById("btnSave");
	btnSave.addEventListener("click",function(){submitForm()});
}

function hideAlert(){
	let divAlert = document.getElementsByClassName("alert");
	for (let i = 0;i < divAlert.length;i++){
		divAlert[i].style.display = "none";
	}
}

function submitForm(){
	validateInputRequired()
	validateSelectRequired();
}

function validateInputRequired(){
	let inputRequired = document.querySelectorAll("input.required");
	let isValid = true;
	for (let i = 0;i < inputRequired.length;i++){
		if (!inputRequired[i].value){
			inputRequired[i].classList.add("border-danger");
			showAlert(i,"Campo obligatorio");
			isValid = false;
		}
	}
	return isValid;
}

function showAlert(index,message){
	let alertRequired = document.querySelectorAll("div.required");
	alertRequired[index].style.display = "block";
	alertRequired[index].innerHTML = message;
}

function validateSelectRequired(){
	let selectCountry = document.getElementById("selectCountry");
	let countrySelected = selectCountry.options[selectCountry.selectedIndex].text;
	let alertCountry = document.getElementById("alertCountry");
	let isValid = true;
	if (countrySelected == "Selecciona un país..."){
		selectCountry.classList.add("border-danger");
		alertCountry.style.display = "block";
		alertCountry.innerHTML = "Debes seleccionar un país";
		isValid = false;
	}
	return isValid;
}