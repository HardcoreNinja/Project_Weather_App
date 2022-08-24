const createForm = (form_class = "") => {
    const form = document.createElement("form");
    form.setAttribute("class", form_class);
    return form;
}

const createLabel = (label_text_content) => {
    const label = document.createElement("label");
    label.textContent = label_text_content;
    return label;
}

const createInput = (input_type, input_required, input_class = "") => {
    const input = document.createElement("input");
    input.type = input_type;
    input.required = input_required;
    input.setAttribute("class", input_class);
    return input;
}

const createInputContainer = (label, input, container_class = "") => {
    const container = document.createElement("div");
    container.setAttribute("class", container_class);
    container.append(label, input);
    return container;
}

const createIcon = (icon_name) => {
    const span = document.createElement("span");
    span.classList.add("material-icons");
    span.innerHTML = icon_name;
    return span;
}

const createButton = (button_icon, button_text, button_type = "button", button_class = "") => {
    const button = document.createElement("input");
    button.type = button_type;
    button.setAttribute("class", button_class);
    button.append(createIcon(button_icon), button_text);
    return button;
}

export {
    createForm,
    createLabel,
    createInput,
    createInputContainer,
    createButton
};