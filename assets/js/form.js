//set so that users cannot submit empty forms

//this still doesnt work
function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
}


$("#send").on("click", function(event) {
    if ($("#name") === "" ) {
        preventDefault();
    displayMessage("error", "Please enter your name")
    }
})