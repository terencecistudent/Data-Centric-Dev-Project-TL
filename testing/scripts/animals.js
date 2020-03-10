/*
    Function for Text Input
*/

// Sample of several animals in the database
function animalExists(output) {
    if (output == "Elephant") {
        return ("Result");
    } else if (output == "Giraffe") {
        return ("Result");
    } else if (output == "Toad") {
        return ("Result");
    } else if (output == "Penguin") {
        return ("Result");
    } else if (output == "Fish") {
        return ("Result");
    } else if (output == "Butterfly") {
        return ("Result");
    } else if (output == "Tiger") {
        return ("Result");
    } else if (output == "Panda") {
        return ("Result");
    } else if (output == "Praying Mantis") {
        return ("Result");
    }
}

// User input = no animal in database
function noSearchAnimal(output) {
    if (output == "pig") {
        return ("No Result");
    }
}


/*
    Animal Types on View Animals page
*/

// User selects animal type and animals for selected type show
function animalType(shown) {
    if (shown == "Amphibians") {
        return ("Amphibians");
    } else if (shown == "Birds") {
        return ("Birds")
    } else if (shown == "Fish") {
        return ("Fish")
    } else if (shown == "Invertebrates") {
        return ("Invertebrates")
    } else if (shown == "Mammals") {
        return ("Mammals")
    } else if (shown == "Reptiles") {
        return ("Reptiles")
    } 
}


/*
    Edit Button
*/

// Edit animal to be clicked and brings users to update animal page
function editClicked(editClick) {
    if (editClick = "clicked") {
        return ("clicked");
    }
}


/*
    Delete Button
*/

// Delete is pressed and should delete animal
function deleteClicked(deleteClicked) {
    if (deleteClicked = "Deleted") {
        return ("Deleted");
    }
}
