// find every itme in the gear list
//save them in a box called myDiveBag
// for each item in my dive bag, wait for someone to click it, when clicked
    //if it isnt crossed off, cross it off, IF it is crossed off, uncross it.

const stepsDiv = document.getElementById("dive-steps"); //finds the steps section by its id 
const steps = stepsDiv.querySelectorAll("li"); //find every step inside section
steps.forEach(function (step) { //For each step
    const checkbox = document.createElement("input"); //make a new checkbox
    checkbox.type = "checkbox";
    step.prepend(checkbox); //put it in front of the step
    
    checkbox.addEventListener("change", function () { //wait for the checkbox to change
        if (checkbox.checked) {
            step.className = "checked"; //if checked cross it off
        } else {
            step.className = ""; //otherwise remove it
        }
    });
});