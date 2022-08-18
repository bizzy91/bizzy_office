async function POST(URI, body={}) {
    try {
        let response = await fetch(URI, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        })
        let result = await response.json()
        return result
    } catch (e) { throw e }
}
function newElement(attributes) {
    if (attributes["tagName"]) {
        let element = document.createElement(attributes["tagName"])
        delete attributes["tagName"]
        for (let attribute in attributes) { element[attribute] = attributes[attribute] }

        return element
    } else { console.log("Please check attributes")}
}
function RemoveChildElements(element) {
    while (element.hasChildNodes()) {
        element.removeChild(element.firstChild)
    }
}

export { POST, newElement, RemoveChildElements }