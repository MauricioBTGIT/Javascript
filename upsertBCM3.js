// show a message with a type of the input
function showMessage(input, message, type) {
	// get the small element and set the message
	const msg = input.parentNode.querySelector("small");
	msg.innerText = message;
	// update the class for the input
	input.className = type ? "success" : "error";
	return type;
}

function showError(input, message) {
	return showMessage(input, message, false);
}

function showSuccess(input) {
	return showMessage(input, "", true);
}

function hasValue(input, message) {
	if (input.value.trim() === "") {
		return showError(input, message);
	}
	return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
	// check if the value is not empty
	if (!hasValue(input, requiredMsg)) {
		return false;
	}
	// validate email format
	const emailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const email = input.value.trim();
	if (!emailRegex.test(email)) {
		return showError(input, invalidMsg);
	}
	return true;
}

//const form = document.querySelector("#frmguardaTipificacion");
//document.getElementById('iframe').contentWindow.document
//document.querySelector('iframe').contentDocument
const form = document.querySelector("#icForm");

const LVL1_REQUIRED = "Seleccione el nivel 1";
const LVL2_REQUIRED = "Seleccione el nivel 2";
const EMAIL_REQUIRED = "Please enter your email";
const EMAIL_INVALID = "Please enter a correct email address format";

form.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault();

	// validate the form
	let lvl1Valid = hasValue(form.elements["lvl1"], LVL1_REQUIRED);
	let lvl2Valid = hasValue(form.elements["lvl2"], LVL2_REQUIRED);
	//let emailValid = validateEmail(form.elements["email"], EMAIL_REQUIRED, EMAIL_INVALID);
	// if valid, submit the form.
	if (lvl1Valid && lvl2Valid) {
		//alert("Datos validados. Se guardan en BCM");
		console.log("Datos validados. Se guardan en BCM");
		
		const jsonData = {
		  IDNEGOCIO: idnegocio,
		  TIPIFICACION_NIVEL1: form.elements["lvl1"],
		  TIPIFICACION_NIVEL2: form.elements["lvl2"],
		  TIPIFICACION_NIVEL3: form.elements["lvl3"],
		  TIPIFICACION_NIVEL4: form.elements["lvl4"],
		  CONTACTID: "ID CONTACTO",
		  IDAGENTE: "ID AGENTE"
		}
		
		upsertJSON(url, jsonData, 
		function(err, data) {
		  if (err !== null) {
			//alert('Something went wrong: ' + err);
			  console.log('error algo no resulto');
		  } else {
			//alert('Your query count: ' + data);
			//alert('Your query as string: ' + JSON.stringify(data));
			console.log(data)
			

		  }
		});
		
	}
});

