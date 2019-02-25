window.onload = function(){
	hideAlert();
	let textId = document.getElementById("textId");
	textId.addEventListener("blur",function(){validateId()});
	let textPassword = document.getElementById("textPassword");
	textPassword.addEventListener("blur",function(){validatePassword()});
	let textName = document.getElementById("textName");
	textName.addEventListener("blur",function(){validateName()});
	let textEmail = document.getElementById("textEmail");
	textEmail.addEventListener("blur",function(){validateEmail()});
	let textZip = document.getElementById("textZip");
	textZip.addEventListener("blur",function(){validateZip()});
	let btnSave = document.getElementById("btnSave");
	btnSave.addEventListener("click",function(){submitForm()});
}

function hideAlert(){
	let divAlert = document.getElementsByClassName("alert");
	for (let i = 0;i < divAlert.length;i++){
		divAlert[i].style.display = "none";
	}
}

function validateId(){
	let alertId = document.getElementById("alertId");
	let id = event.target.value;
	if (!validateEmpty(alertId,id)){
		event.target.classList.add("border-danger");
	}
}

function validateEmpty(alertError,value){
	const MESSAGE = "Campo obligatorio"
	let isValid = true;
	if (!value){
		alertError.style.display = "block";
		alertError.innerHTML = MESSAGE;
		isValid = false;
	}
}

function validatePassword(){
	let alertPassword = document.getElementById("alertPassword");
	let password = event.target.value;
	if (!validateEmpty(alertPassword,password)){
		event.target.classList.add("border-danger");
	}
}

function validateName(){
	let alertName = document.getElementById("alertName");
	let name = event.target.value;
	if (!validateEmpty(alertName,name)){
		event.target.classList.add("border-danger");
	}
}

function validateEmail(){
	let alertEmail = document.getElementById("alertEmail");
	let email = event.target.value;
	if (!validateEmpty(alertEmail,email)){
		event.target.classList.add("border-danger");
	}
}

function validateZip(){
	let alertZip = document.getElementById("alertZip");
	let zip = event.target.value;
	if (!validateEmpty(alertZip,zip)){
		event.target.classList.add("border-danger");
	}
}
function submitForm(){
	validateCountry();
}

function validateCountry(){
	let selectCountry = document.getElementById("selectCountry");
	let countrySelected = selectCountry.options[selectCountry.selectedIndex].text;
	let alertCountry = document.getElementById("alertCountry");
	let isValid = true;
	if (countrySelected == "Selecciona un país..."){
		selectCountry.classList.add("border-danger");
		alertCountry.style.display = "block";
		alertCountry.innerHTML = "Debes seleccionar un país";
	}
}