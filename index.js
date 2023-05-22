import { supineExText, seatedExText, standingExText, reps, weightsText } from "/data.js"

const createBtn = document.getElementById('create-btn')
const supineEx = document.getElementById('supine-ex')
const seatedEx = document.getElementById('seated-ex')
const standingEx = document.getElementById('standing-ex')
const isWeights = document.getElementById('weights-ex')
const therExText = document.getElementById('ther-ex-box')

let dualText = ''

createBtn.addEventListener('click', () => {

    if (seatedEx.checked && supineEx.checked) {
        dualText = supineExText + ' ' + seatedExText
        removeDuplicate(dualText)
    }

    else if (supineEx.checked) {
        therExText.textContent = supineExText
    }

    else if (seatedEx.checked) {
        therExText.textContent = seatedExText
    }

    else if (standingEx.checked) {
        therExText.textContent = standingExText
    }


})

function removeDuplicate(str) {

    let combinedStr = str.split(' ')

    //Splits entire string into two and removes repeated words
    const firstHalfStr = combinedStr.splice(0, 16).join(' ')
    const secondHalfStr = combinedStr.splice(16, 33).join(' ')
    //Both strings are rejoined to make an eligible phrase
    const finalStr = firstHalfStr + " and " + secondHalfStr

    //Text to appear in box is then set as finalStr
    therExText.textContent = finalStr
}
