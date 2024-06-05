const NAME_PATTERN = /^[A-Za-z]{1,20}$/; // Limita la lunghezza del nome/cognome a 20 caratteri
const EMAIL_PATTERN = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // Espressione regolare per l'email
const DATE_PATTERN = /^\d{1,2}-\d{1,2}-\d{4}$/; // Espressione regolare per la data nel formato DD-MM-YYYY
const USERNAME_PATTERN = /^[A-Za-z0-9]{1,20}$/; // Limita la lunghezza dell'username a 20 caratteri
const PASSWORD_PATTERN = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/; // Espressione regolare per la password

function checkNomeCognome(inputtxt) {
    return NAME_PATTERN.test(inputtxt.value);
}

function checkEmail(inputtxt) {
    return EMAIL_PATTERN.test(inputtxt.value);
}

function checkData(inputtxt) {
    return DATE_PATTERN.test(inputtxt.value);
}

function checkUserName(inputtxt) {
    return USERNAME_PATTERN.test(inputtxt.value);
}

function checkPassword(inputtxt) {
    return PASSWORD_PATTERN.test(inputtxt.value);
}

function validate(obj) {
    var valid = true;
    var inputs = [
        { field: "nome", errorMessage: "Nome non valido" },
        { field: "cognome", errorMessage: "Cognome non valido" },
        { field: "email", errorMessage: "Email non valida" },
        { field: "nascita", errorMessage: "Data di nascita non valida" },
        { field: "us", errorMessage: "Username non valido" },
        { field: "pw", errorMessage: "Password non valida" }
    ];

    inputs.forEach(function(input) {
        var element = document.getElementsByName(input.field)[0];
        if (!window["check" + input.field.charAt(0).toUpperCase() + input.field.slice(1)](element)) {
            valid = false;
            document.getElementById("err" + input.field.charAt(0).toUpperCase() + input.field.slice(1)).innerHTML = input.errorMessage;
            document.getElementById("err" + input.field.charAt(0).toUpperCase() + input.field.slice(1)).style.color = "red";
        } else {
            document.getElementById("err" + input.field.charAt(0).toUpperCase() + input.field.slice(1)).innerHTML = "";
        }
    });

    if (valid) obj.submit();
}

function myFunction(x) {
    x.style.background = "yellow";
}
