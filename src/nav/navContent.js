import { createForm, createLabel, createInput, createInputContainer, createButton } from "../reusableCode/reusableElements.js"
import { getNav } from "../reusableCode/reusableGetters.js";

const createSearchBar = () => {
    const form = createForm("searchForm");

    const inputContainer = createInputContainer(
        createLabel("Search"),
        createInput(
            "text",        //input_type
            true,          //input_required
            "searchBar"),  //input_class
        "inputContainer"); //input_container_class

    form.append(inputContainer, createButton(
        "search",         //button_icon_name
        "Search",         //button_text
        "submit",         //button_type
        "submitButton")); //button_class

    return form;
}

function createNav() {
    getNav().append(createSearchBar());
}

createNav();