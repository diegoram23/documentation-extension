import { supineExText, seatedExText, standingExText, retText } from "/data.js"

const therExBtn = document.getElementById('create-btn')
const supineEx = document.getElementById('supine-ex')
const seatedEx = document.getElementById('seated-ex')
const standingEx = document.getElementById('standing-ex')
const weights = document.getElementById('weights-ex')
const therExText = document.getElementById('ther-ex-box')
const reps = document.getElementById('reps-ex')

//Used if user selects more than one choice
let combinedStr = ''


therExBtn.addEventListener('click', () => {

    if (supineEx.checked && seatedEx.checked && standingEx.checked) {
        combinedStr = supineExText + ' ' + seatedExText + ' ' + standingExText
        multiChoice(combinedStr)
    }

    else if (seatedEx.checked && supineEx.checked) {
        combinedStr = supineExText + ' ' + seatedExText
        dualChoice(combinedStr)
    }

    else if (seatedEx.checked && standingEx.checked) {
        combinedStr = standingExText + ' ' + seatedExText
        dualChoice(combinedStr)
    }

    else if (supineEx.checked && standingEx.checked) {
        combinedStr = supineExText + ' ' + standingExText
        dualChoice(combinedStr)
    }

    else if (supineEx.checked) {
        singleChoiceText(supineExText)
    }

    else if (seatedEx.checked) {
        singleChoiceText(seatedExText)
    }

    else if (standingEx.checked) {
        singleChoiceText(standingExText)
    }


})

function singleChoiceText(str) {
    //Edits number of reps text if user chooses to
    let weightsText = retText.replace('#', weights.value + '#')
    let repsText = str.replace('x10', 'x' + reps.value)

    //Text to appear in box if weights are added
    if (weights.value >= 1) {
        therExText.textContent = repsText + weightsText
    } else {
        //Text to appear in box if there are no weigts
        therExText.textContent = repsText
    }
}

function dualChoice(str) {
    //Edits number of reps text if user chooses to
    let repsText = str.replace('x10', '')
    repsText = repsText.replace('x10', 'x' + reps.value)

    let combinedStr = repsText.split(' ')

    //Splits entire string into two and removes repeated words
    const firstHalfStr = combinedStr.splice(0, 16).join(' ')
    const secondHalfStr = combinedStr.splice(17, 33).join(' ')

    //Both strings are rejoined to make an eligible phrase
    const finishedStr = firstHalfStr + " and " + secondHalfStr

    //Text to appear in box if weights are added
    if (weights.value >= 1) {
        let weightsText = retText.replace('#', weights.value + '#')
        therExText.textContent = finishedStr + weightsText

    } else {
        //Text to appear in box if there are no weights
        therExText.textContent = finishedStr

    }

}

function multiChoice(str) {
    let combinedStr = str.split(' ')
    const firstThirdStr = combinedStr.splice(0, 14).join(' ')
    const secondThirdStr = combinedStr.splice(19, 12).join(' ')
    const finalThirdStr = combinedStr.splice(38, 31).join(' ')
    const finishedStr = firstThirdStr + ' and ' + secondThirdStr + ' and ' + finalThirdStr
    therExText.textContent = finishedStr
  
}
