function myFunction() {
    if (!document.getElementById("validationCustom01").value) {
        document.getElementById("reqfield").innerHTML = "Please fill the field";
    } else {
        document.getElementById("reqfield").innerHTML = null;
    }
    if (!document.getElementById("validationCustom02").value) {
        document.getElementById("reqfield1").innerHTML = "Please fill the field";
    } else {
        document.getElementById("reqfield1").innerHTML = null;
    }
    if (!document.getElementById("validationCustomUsername").value) {
        document.getElementById("reqfield2").innerHTML = "Please fill the field";
    } else {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var valid = re.test(document.getElementById("validationCustomUsername").value);
        if (!valid) {
            document.getElementById("usernameform").innerHTML = "Please fill valid username";
        } else {
            document.getElementById("usernameform").innerHTML = null;
        }
        document.getElementById("reqfield2").innerHTML = null;
    }
    if (!document.getElementById("validationCustom04").value) {
        document.getElementById("reqfield4").innerHTML = "Please select the field";
    } else {
        document.getElementById("reqfield4").innerHTML = null;
    }
    if (!document.getElementById("validationCustom03").value) {
        document.getElementById("reqfield3").innerHTML = "Please select the city";
    } else {
        document.getElementById("reqfield3").innerHTML = null;
    }
    if (!document.getElementById("validationCustom05").value) {
        document.getElementById("reqfield5").innerHTML = "Please provide a valid zip";
    } else {
        document.getElementById("reqfield5").innerHTML = null;
    }

}

function fnameValidation(fName) {
    document.getElementById("reqfield").innerHTML = null;
    if (!fName) {
        document.getElementById("reqfield").innerHTML = "Please Provide First Name";
    }
}

function lnameValidation(lName) {
    document.getElementById("reqfield1").innerHTML = null;
    if (!lName) {
        document.getElementById("reqfield1").innerHTML = " Please Provide First Name";
    }
}

function usernameValidation(uName) {
    document.getElementById("reqfield2").innerHTML = null;
    if (!uName) {
        document.getElementById("reqfield2").innerHTML = " Please Provide User Name";
    }
}

function cityValidation(uCity) {
    document.getElementById("reqfield3").innerHTML = null;
    if (!uCity) {
        document.getElementById("reqfield3").innerHTML = " Please Provide City";
    }
}

function stateValidation(uState) {
    document.getElementById("reqfield4").innerHTML = null;
    if (!uState) {
        document.getElementById("reqfield4").innerHTML = " Please Provide State";
    }
}


function zipValidation(uZip) {
    document.getElementById("reqfield5").innerHTML = null;
    if (!uZip) {
        document.getElementById("reqfield5").innerHTML = " Please Provide Zip";
    }
}