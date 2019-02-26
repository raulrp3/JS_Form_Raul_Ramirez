window.onload = function(){
	hideAlerts();
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

function hideAlerts(){
	let divAlert = document.getElementsByClassName("alert");
	for (let i = 0;i < divAlert.length;i++){
		divAlert[i].style.display = "none";
	}
}

function validateId(){
	let alertId = document.getElementById("alertId");
	let id = event.target.value;
	if (!validateEmpty(alertId,id)){
		addClass(event.target,"border-danger");
	}else if(!validateLength(5,12,id,alertId)){
		addClass(event.target,"border-danger");
	}else{
		hideAlert(alertId);
		removeClass(event.target,"border-danger");
	}
}

function validateEmpty(alertError,value){
	const MESSAGE = "Campo obligatorio"
	let isValid = true;
	if (!value){
		showAlert(alertError,MESSAGE);
		isValid = false;
	}
	return isValid;
}

function validatePassword(){
	let alertPassword = document.getElementById("alertPassword");
	let password = event.target.value;
	if (!validateEmpty(alertPassword,password)){
		addClass(event.target,"border-danger");
	}else if(!validateLength(7,12,password,alertPassword)){
		addClass(event.target,"border-danger");
	}else{
		hideAlert(alertPassword);
		removeClass(event.target,"border-danger");
	}
}

function validateName(){
	let alertName = document.getElementById("alertName");
	let name = event.target.value;
	let expReg = new RegExp(/^[A-Za-z\s]+$/g);
	const MESSAGE = "El nombre no puede contener números";
	if (!validateEmpty(alertName,name)){
		addClass(event.target,"border-danger");
	}else if(!validateValue(name,expReg,alertName,MESSAGE)){
		addClass(event.target,"border-danger");
	}else{
		hideAlert(alertName);
		removeClass(event.target,"border-danger");
	}
}

function validateEmail(){
	let alertEmail = document.getElementById("alertEmail");
	let email = event.target.value;
	let regExp = new RegExp(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i);
	const MESSAGE = "Email no válido";
	if (!validateEmpty(alertEmail,email)){
		addClass(event.target,"border-danger");
	}else if(!validateValue(email,regExp,alertEmail,MESSAGE)){
		addClass(event.target,"border-danger");
	}else{
		hideAlert(alertEmail);
		removeClass(event.target,"border-danger");
	}
}

function validateZip(){
	let alertZip = document.getElementById("alertZip");
	let zip = event.target.value;
	let expReg = new RegExp(/^[0-9\s]+$/g);
	const MESSAGE = "El código zip no puede contener letras";
	if (!validateEmpty(alertZip,zip)){
		addClass(event.target,"border-danger");
	}else if(!validateValue(zip,expReg,alertZip,MESSAGE)){
		addClass(event.target,"border-danger");
	}else{
		hideAlert(alertZip);
		removeClass(event.target,"border-danger");
	}
}
function submitForm(){
	let selectCountry = document.getElementById("selectCountry");
	let alertCountry = document.getElementById("alertCountry");
	let alertLanguage = document.getElementById("alertLanguage");
	if (validateCountry()){
		hideAlert(alertCountry);
		removeClass(selectCountry,"border-danger");
	}
	if (validateLanguage()){
		hideAlert(alertLanguage);
	}
}

function validateCountry(){
	let selectCountry = document.getElementById("selectCountry");
	let countrySelected = selectCountry.options[selectCountry.selectedIndex].text;
	let alertCountry = document.getElementById("alertCountry");
	let isValid = true;
	if (countrySelected == "Selecciona un país..."){
		addClass(selectCountry,"border-danger");
		showAlert(alertCountry,"Debes seleccionar un país");
		isValid = false;
	}
	return isValid;
}

function validateLanguage(){
	let alertLanguage = document.getElementById("alertLanguage");
	let checkLanguage = document.querySelectorAll("input[type = 'checkbox']");
	let counter = 0;
	let isValid = true;
	for (let i = 0;i < checkLanguage.length;i++){
		if (checkLanguage[i].checked){
			counter++;
		}
	}
	if (counter < 1){
		showAlert(alertLanguage,"Debes seleccionar al menos un idioma")
		isValid = false;
	}
	return isValid;
}

function validateLength(minLength,maxLength,value,alertError){
	const MESSAGE = "Tiene que tener una longitud entre " + minLength + " y " + maxLength;
	let isValid = true;
	if (value.length < minLength || value.length > maxLength){
		showAlert(alertError,MESSAGE);
		isValid = false;
	}
	return isValid;
}

function validateValue(value,expReg,alertError,message){
	let isValid = true;
	if (!expReg.test(value)){
		showAlert(alertError,message);
		isValid = false;
	}
	return isValid;
}

function addClass(input,value){
	input.classList.add(value);
}

function removeClass(input,value){
	input.classList.remove(value);
}

function hideAlert(alertError){
	alertError.style.display = "none";
}

function showAlert(alertError,message){
	alertError.style.display = "block";
	alertError.innerHTML = message;
}

