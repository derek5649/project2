function validation() {
    var firstName = document.forms["surveyForm"]["firstname"].value;
    var lastName = document.forms["surveyForm"]["lastname"].value;
    if (firstName == null || firstName == "" || lastName == null || lastName == "") {
        document.querySelector('.notify').textContent = "You must fill out all required fields.";
        return false;
    }
}