import { POST, newElement, RemoveChildElements } from "./utils/utils.js"

const table = document.querySelector(".content")
const child = newElement({
    tagName: "h1",
    innerText: "asdf",
    className: "content__child1"
})
table.append(child)




const Info = [
    {id: 1, name: "abcd", joinned: "2022-01-01"},
    {id: 2, name: "abcd", joinned: "2022-01-01"},
    {id: 3, name: "abcd", joinned: "2022-01-01"},
    {id: 4, name: "abcd", joinned: "2022-01-01"},
    {id: 5, name: "abcd", joinned: "2022-01-01"},
    {id: 6, name: "abcd", joinned: "2022-01-01"},
]
if (1) {console.log("Haha")}
console.log(Info, Info.length)
console.log(Object.keys(Info))
console.log(Object.keys(Info[0]))
for (const i of Info) (console.log(i, Object.keys(i)))
