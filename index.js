import { therExData } from "/data.js"

const createBtn = document.getElementById('create-btn')
const supineEx = document.getElementById('supine-ex')
const seatedEx = document.getElementById('seated-ex')
const standingEx = document.getElementById('standing-ex')
const therExText = document.getElementById('ther-ex-box')

let therExArray = []

createBtn.addEventListener('click', () => {

    if (supineEx.checked) {
        therExArray.push(Object.values(therExData[0]))
        therExText.textContent = therExArray
    }

    if (seatedEx.checked) {
        therExArray.push(Object.values(therExData[1]))
        therExText.textContent = therExArray
    }

    if (standingEx.checked) {
        therExArray.push(Object.values(therExData[2]))
        therExText.textContent = therExArray
    }

    // if (seatedEx.checked && supineEx.checked) {
    //     therExArray.push((Object.values(therExData[2]) + Object.values(therExData[1])))
    //     removeDuplicate(therExArray)
    // }

})

function removeDuplicate(str) {
    let isDuplString = JSON.stringify(str)
    // console.log(isDuplString.split(''))
}
