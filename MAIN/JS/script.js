
const myDiveBag = document.querySelectorAll(".gear li"); //this finds every item in the gear list
myDiveBag.forEach(function (item) { //for each item in my dive bag
    item.addEventListener("click", function () { //wait for someone to click it
        if (item.className === "packed") { //if it is crossed off
            item.className = ""; //uncross it
        } else {            //if it isn't crossed off
            item.className = "packed";      //cross it off
        
        }
    });
});

const stepsDiv = document.getElementById("dive-steps"); //finds the steps section by its id 
const steps = stepsDiv.querySelectorAll("li"); //find every step inside section box
steps.forEach(function (step) { //For each step
    const checkbox = document.createElement("input"); //make a new checkbox
    checkbox.type = "checkbox";
    step.prepend(checkbox); //put it in front of the step, prepend = put this at the beginning 
    
    checkbox.addEventListener("change", function () { //wait for the checkbox to change
        if (checkbox.checked) {
            step.className = "checked"; //if checked cross it off
        } else {
            step.className = ""; //otherwise remove it
        }
    });
});

//make button functional

const gearList = document.getElementById("gear-list"); //find the gear list
const newGearBox = document.getElementById("new-gear"); //find the text box
const addGearButton = document.getElementById("add-gear-button"); //find the button

addGearButton.addEventListener("click", function () {
    const newGearText = newGearBox.value;
    if (newGearText !== "") {
        const newListItem = document.createElement("li");
        newListItem.textContent = newGearText;
        gearList.appendChild(newListItem);
        
        newListItem.addEventListener("click", function (){
            if (newListItem.className === "packed") {
                newListItem.className = "";
            } else {
                newListItem.className = "packed";
            }
        });
        newGearBox.value = "";
    }
});
