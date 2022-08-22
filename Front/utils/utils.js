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
function JSONtoColumnsRows(json) {
    if (json.length == 0) { console.log("데이터가 없습니다."); return } else {
        const rows = []
        for (const data of json) {
            rows.push(Object.values(data))
        }
        return [Object.keys(json[0]), rows]
    }
}
function MakeTable(json) {
    const [columns, rows] = JSONtoColumnsRows(json)
    // DOM 생성
    const table = newElement({
        tagName: "table",
    })
    const tableHeadRow = newElement({
        tagName: "tr",
    })
    // DOM 추가
    table.appendChild(tableHeadRow)
    for (const column of columns) {
        console.log(column)
        const headRowElement = newElement({
            tagName: "th",
            innerText: column
        })
        tableHeadRow.appendChild(headRowElement)
    }
    for (const row of rows) {
        const tableRow = newElement({
            tagName: "tr",
        })
        for (const r of row) {
            const rowElement = newElement({
                tagName: "td",
                innerText: r
            })
            tableRow.appendChild(rowElement)
        }
        table.appendChild(tableRow)
    }
    return table
}
export { POST, newElement, RemoveChildElements, MakeTable }