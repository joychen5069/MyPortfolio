//set so that users cannot submit empty forms
function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
}


$("#send").on("click", function(event) {
    if ($("#name") === "" )
    displayMessage("error" "Please enter your name")
})