// find every itme in the gear list
//save them in a box called myDiveBag
// for each item in my dive bag, wait for someone to click it, when clicked
    //if it isnt crossed off, cross it off, IF it is crossed off, uncross it.

const stepsDiv = document.getElementById("dive-steps");
const steps = stepsDiv.querySelectorAll("li");
steps.forEach(function (step) {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    step.prepend(checkbox);
    
    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            step.className = "checked";
        } else {
            step.className = "";
        }
    });
});