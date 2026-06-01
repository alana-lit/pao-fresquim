export const processPayload = (formSelector, schema) => {
    /*
        formSelector:
        This is the id or the class of the form or container that contains your Input or Select components.
        This only works for direct children of the container, example:
        div > Input -> works
        div > div > Input -> Doesn't work.
        SCHEMA:
        Object {
            key: {"type": "int | float | string", "alias": "key_transform"}
        }
        key is the id passed to the Input or Select components;
        type is the type key is expected to be, by default, all of them comes as strings;
        alias is the new name of the key, because ID's might differ from DB's schemas, so we fix it.
    */
    const form = document.querySelector(formSelector)
    
    const payload = {}
    for(const el of form.children) {
        if(el.tagName == "BUTTON") continue
        if(el.children[1].tagName != "INPUT") { // If this is not an input, then it's a select component
            payload[el] = document.querySelector("div.selected_option>input").value
            continue
        }
    
        const input = el.children[1]
        let value = input.value
    
        if(schema[input.id].type == "float") {
            value = Number.parseFloat(value)
        } else if(schema[input.id].type == "int") {
            value = Number.parseInt(value)
        }
    
        payload[
            schema[input.id].alias
        ] = value
    }

    return payload
}