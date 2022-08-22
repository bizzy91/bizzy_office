import { POST, newElement, RemoveChildElements } from "./utils/utils.js"

// const table = document.querySelector(".content")
// const child = newElement({
//     tagName: "h1",
//     innerText: "asdf",
//     className: "content__child1"
// })
// table.append(child)
// const Info = [
//     {id: 1, name: "abcd", joinned: "2022-01-01"},
//     {id: 2, name: "abcd", joinned: "2022-01-01"},
//     {id: 3, name: "abcd", joinned: "2022-01-01"},
//     {id: 4, name: "abcd", joinned: "2022-01-01"},
//     {id: 5, name: "abcd", joinned: "2022-01-01"},
//     {id: 6, name: "abcd", joinned: "2022-01-01"},
// ]
// if (1) {console.log("Haha")}
// console.log(Info, Info.length)
// console.log(Object.keys(Info))
// console.log(Object.keys(Info[0]))
// for (const i of Info) (console.log(i, Object.keys(i)))


const content = document.querySelector(".content")

// DOM 생성
const signInArea = newElement({
    tagName: "div",
    className: "sign-in-area"
})
const imgLogo = newElement({
    tagName: "img",
    src: "./images/af_logo2.png",
    alt: "Artifriends",
    style: "width: 150px; margin-bottom: 30px;"
})
const inputEmail = newElement({
    tagName: "input",
    className: "input email",
    id: "input-email",
    placeholder: "artifriends@artifriends.com"
})
const inputPassword = newElement({
    tagName: "input",
    className: "input password",
    id: "input-password",
    type: "password",
    placeholder: "Password"
})
const buttonSignIn = newElement({
    tagName: "button",
    className: "btn sign-in",
    id: "sign-in",
    innerText: "로그인"
})
const buttonSignUp = newElement({
    tagName: "button",
    className: "btn sign-up",
    id: "sign-up",
    innerText: "회원가입"
})

const signUpArea = newElement({
    tagName: "div",
    className: "sign-up-area"
})
const inputPasswordAgain = newElement({
    tagName: "input",
    className: "input re-password",
    id: "input-re-password",
    type: "password",
    placeholder: "Password Again"
})
const inputName = newElement({
    tagName: "input",
    className: "input name",
    placeholder: "이름"
})
// DOM 추가
content.appendChild(signInArea)
signInArea.appendChild(imgLogo)
signInArea.appendChild(inputEmail)
signInArea.appendChild(inputPassword)
signInArea.appendChild(buttonSignIn)
signInArea.appendChild(buttonSignUp)
// 이벤트 생성
function MakeSignUpPage(parent) {
    RemoveChildElements(parent)
    parent.appendChild(signUpArea)
    signUpArea.appendChild(imgLogo)
    signUpArea.appendChild(inputEmail)
    signUpArea.appendChild(inputPassword)
    signUpArea.appendChild(inputPasswordAgain)
    signUpArea.appendChild(inputName)
    signUpArea.appendChild(buttonSignUp)
}
// 이벤트 추가
// console.log(buttonSignUp)
buttonSignUp.addEventListener("click", () => { MakeSignUpPage(content) })