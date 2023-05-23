import { supineExText, seatedExText, standingExText, retText, transfersText } from "/data.js"

/*----------------------------- Ther Ex variables ---------------------------------- */
const therExCreatBtn = document.getElementById('ther-ex-create-btn')
const supineEx = document.getElementById('supine-ex')
const seatedEx = document.getElementById('seated-ex')
const standingEx = document.getElementById('standing-ex')
const weights = document.getElementById('weights-ex')
const therExText = document.getElementById('ther-ex-box')
const reps = document.getElementById('reps-ex')

/*----------------------------- Ther Act variables ---------------------------------- */
const therActCreateBtn = document.getElementById('ther-act-create-btn')
const transfers = document.getElementById('transfers')
const therActText = document.getElementById('ther-act-box')
const ad = document.getElementById('ad')

//Depending what exercise options user chooses, a specific function will be called
therExCreatBtn.addEventListener('click', () => {

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

//Function called if user chooses only one exercise option
function singleChoiceText(str) {
    //Edits number of reps text if user chooses to
    let weightsText = retText.replace('#', weights.value + '#')
    let repsText = str.replace('x10', 'x' + reps.value)

    //Weights text to appear with exercise text if weights are added
    if (weights.value >= 1) {
        therExText.textContent = repsText + weightsText
    } else {
        //Only exercise text appears
        therExText.textContent = repsText
    }
}

//Function called if user chooses any two exercise options
function dualChoice(str) {

    let combinedStr = str.split(' ')

    //Splits entire string into two and removes repeated words
    const firstHalfStr = combinedStr.splice(0, 14).join(' ')
    const secondHalfStr = combinedStr.splice(19, 33).join(' ')

    //Both strings are rejoined and reps value is edited if neeeded
    const finishedStr = firstHalfStr + " and " + secondHalfStr.replace('x10', 'x' + reps.value)

    //Weights text to appear with exercise text if weights are added
    if (weights.value >= 1) {
        let weightsText = retText.replace('#', weights.value + '#')
        therExText.textContent = finishedStr + weightsText

    } else {
        //Only exercise text appears
        therExText.textContent = finishedStr

    }

}


//Function called if user chooses all three exercise options
function multiChoice(str) {
    let combinedStr = str.split(' ')

    //Splits entire string into three and removes repeated words
    const firstThirdStr = combinedStr.splice(0, 14).join(' ')
    const secondThirdStr = combinedStr.splice(19, 12).join(' ')
    const finalThirdStr = combinedStr.splice(38, 31).join(' ')

    //Both strings are rejoined and reps value is edited if neeeded
    const finishedStr = firstThirdStr + ' and ' + secondThirdStr + ' and ' + finalThirdStr.replace('x10', 'x' + reps.value)

    //Weights text to appear with exercise text if weights are added
    if (weights.value >= 1) {
        let weightsText = retText.replace('#', weights.value + '#')
        therExText.textContent = finishedStr + weightsText
    } else {
        //Only exercise text appears
        therExText.textContent = finishedStr

    }

}

therActCreateBtn.addEventListener('click', () => {
    //User must select an AD option as well to generate transfers text
    if (transfers.checked && ad.value) {
        createTransfersText(transfersText)
        document.getElementById('ad-choice').style.display = 'none'
        //Otherwise an error message appears
    } else {
        document.getElementById('ad-choice').style.display = 'block'
    }
})

//Function that generates transfer text with users choice of AD
const createTransfersText = (str) => {
    //String is split and then rejoined with AD selection
    const firstHalfStr = str.split(' ').splice(0, 5).join(' ')
    const secondHalfStr = str.split(' ').splice(5, 23).join(' ')
    const combinedStr = firstHalfStr + ' ' + ad.value + ' ' + secondHalfStr
    therActText.textContent = combinedStr
}