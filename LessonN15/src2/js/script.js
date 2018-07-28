var varName, varAge, bool

function mesgAccess(bool){
	if (bool) {
		console.log("Вам предоставлен доступ к сайту");
	} else console.log("У Вас отсутствует доступ к сайту. Прочтите требования внизу формы.");
}

function check() {
	console.clear();
	varName = document.getElementById("name").value;
 	varAge = document.getElementById("age").value;
 	bool = document.getElementById('mailingId').checked;
 
	if ((varName !== "")&&(varAge!=="")) {
		if ((document.getElementById('mailingId').checked)&&(varAge >= 18)) {
			mesgAccess(true);
		} else mesgAccess(false);
	}
}

btn = document.getElementsByClassName("button")[0];
btn.addEventListener ("click", check)

