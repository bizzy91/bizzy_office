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
function newElement(tagName, attributes) {
    let newTag = document.createElement(tagName)
    if (attributes["id"]) { newTag.id = attributes["id"] }
    if (attributes["className"]) { newTag.className = attributes["className"] }
    if (attributes["innerText"]) { newTag.innerText = attributes["innerText"] }

    return newTag
}
function RemoveChildElements(element) {
    while (element.hasChildNodes()) {
        element.removeChild(element.firstChild)
    }
}