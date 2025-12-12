var validSubmission = Boolean(false)
var errors = []

 // Clears the list when a user resubmits the form
function clearerrors() {
    errors = [];
    const submissionSpan = document.getElementById("submission");
    if(submissionSpan) {
        submissionSpan.innerHTML = "";
    }
}

//Calls all the functions to check whether the form has been correctly filled out
function isValid() {

    clearerrors();

    checkname();
    checkemail();
    checkphoneno();
    checktickets();
    checkpayment();
    checkterms();

    if (errors.length == 0) {
        var span = document.getElementById("submission")
        span.innerHTML ="Success!, The form has been submitted" 
    }else{ 
        var span = document.getElementById("submission")
        span.innerHTML =errors.join("<br>")
    }
}


function checkemail() {
    const emailInput = document.getElementById("email");
    const emailValue = emailInput.value.trim();

    if (emailValue === "") {
        errors.push("Email is required");
        return false;
    }

    if (!emailInput.checkValidity()) {
        errors.push("Invalid email")
        return false;
    }
}

function checkphoneno() {
    const phoneInput = document.getElementById("phoneno");
    const phoneno = phoneInput.value.trim();
    
    if (phoneno === "") {
        errors.push("Phone number is required");
        return false;
    }
    
    if (!phoneInput.checkValidity()) {
        errors.push("Phone number must be 11 digits and start with 0");
        return false;
    }

    return true;
}

function checkname() {
    const nameInput = document.getElementById("name");
    const nameValue = nameInput.value.trim();
    
    if (nameValue === "") {
        errors.push("Full name is required");
        return false;
    }
    
    return true;
}

function checktickets() {
    const ticketsNum = document.getElementById("ticketsNum").value;
    const ticketsType = document.getElementById("ticketsType").value;
    
    if (!ticketsNum || ticketsNum === "") {
        errors.push("Please select number of tickets");
        return false;
    }
    
    if (!ticketsType || ticketsType === "") {
        errors.push("Please select ticket type");
        return false;
    }
    
    return true;
}

function checkpayment() {
    const paymentMethods = document.getElementsByName("payment");
    let isSelected = false;
    
    for (let i = 0; i < paymentMethods.length; i++) {
        if (paymentMethods[i].checked) {
            isSelected = true;
            break;
        }
    }
    
    if (!isSelected) {
        errors.push("Please select a payment method");
        return false;
    }
    
    return true;
}

function checkterms() {
    const termsCheckbox = document.getElementsByName("agree")[0];
    
    if (!termsCheckbox.checked) {
        errors.push("You must accept the terms and conditions");
        return false;
    }
    
    return true;
}

// reseting the form for when the user wants to restart their submission
function resetForm() {
    document.getElementById("bookingForm").reset();
    clearerrors();
}

// function called when filtering the scheduls between the two different days
 function showDay(day) {
    const sections = document.querySelectorAll('.schedule-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    const tabs = document.querySelectorAll('.day-tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    document.getElementById(day).classList.add('active');

    event.target.classList.add('active');
}