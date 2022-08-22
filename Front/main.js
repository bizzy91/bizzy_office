import { POST, newElement, RemoveChildElements, MakeTable } from "./utils/utils.js"


const Info = [
    {id: 1, name: "abcd", joinned: "2022-01-01"},
    {id: 2, name: "abcd", joinned: "2022-01-01"},
    {id: 3, name: "abcd", joinned: "2022-01-01"},
    {id: 4, name: "abcd", joinned: "2022-01-01"},
    {id: 5, name: "abcd", joinned: "2022-01-01"},
    {id: 6, name: "abcd", joinned: "2022-01-01"},
]



const content = document.querySelector(".content")
const tableArea1 = newElement({
    tagName: "div"
})
const tableArea2 = newElement({
    tagName: "div"
})
content.appendChild(tableArea1)
content.appendChild(tableArea2)
tableArea1.appendChild(MakeTable(Info))
tableArea2.appendChild(MakeTable(Info))
// DOM 생성
// DOM 추가
// 이벤트 생성
// 이벤트 추가
