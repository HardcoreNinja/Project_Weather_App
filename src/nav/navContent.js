import { createForm, createInput, createIcon, createButton } from "../reusableCode/reusableElements.js"
import { getNav } from "../reusableCode/reusableGetters.js";

const createSearchBar = () => {
    const form = createForm("searchForm");

    form.append(
        createInput(
            "text",               //input_type
            true,                 //input_required
            "Search location...", //input_place_holder
            "searchBar")
        , createButton(
            "search",         //button_icon_name
            "",               //button_text
            "submit",         //button_type
            "submitButton")); //button_class

    return form;
}

const createLogo = () => {
    const container = document.createElement('div');
    container.setAttribute("id", "logo");
    container.append(createIcon("storm"), "iWeather");
    return container;
}

function createNav() {
    getNav().append(createLogo(), createSearchBar());
}

createNav();