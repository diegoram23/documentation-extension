import { supineExText, seatedExText, standingExText, retText, bedMobilityText, transfersText, gaitText } from "/data.js"

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
const bedMobility = document.getElementById('bed-mobility')
const transfers = document.getElementById('transfers')
const therActText = document.getElementById('ther-act-box')
const adTransfers = document.getElementById('ad-transfers')
const transferAdError = document.getElementById('transfer-ad-error')

/*----------------------------- Gait Training variables ---------------------------------- */
const gaitCreateBtn = document.getElementById('gait-create-btn')
const gaitAd = document.getElementById('ad-gait')
const gaitTextBox = document.getElementById('gait-box')
const gait = document.getElementById('gait-training')
const stairs = document.getElementById('stair-training')
const distance = document.getElementById('distance')
const assistance = document.getElementById('assistance')
const gaitDistanceError = document.getElementById('gait-distance-error')

//Depending what exercise options user chooses, a specific function will be called
therExCreatBtn.addEventListener('click', () => {

    if (supineEx.checked && seatedEx.checked && standingEx.checked) {
        combinedStr = supineExText + ' ' + seatedExText + ' ' + standingExText
        renderMultiExText(combinedStr)
    }

    else if (seatedEx.checked && supineEx.checked) {
        combinedStr = supineExText + ' ' + seatedExText
        renderDualExText(combinedStr)
    }

    else if (seatedEx.checked && standingEx.checked) {
        combinedStr = standingExText + ' ' + seatedExText
        renderDualExText(combinedStr)
    }

    else if (supineEx.checked && standingEx.checked) {
        combinedStr = supineExText + ' ' + standingExText
        renderDualExText(combinedStr)
    }

    else if (supineEx.checked) {
        renderSingleExText(supineExText)
    }

    else if (seatedEx.checked) {
        renderSingleExText(seatedExText)
    }

    else if (standingEx.checked) {
        renderSingleExText(standingExText)
    }


})

//Function called if user chooses only one exercise option
function renderSingleExText(str) {
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
function renderDualExText(str) {

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
function renderMultiExText(str) {
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

    if (bedMobility.checked && transfers.checked && adTransfers.value !== '') {
        therActText.textContent = bedMobilityText + generateTransfersText(transfersText)
    }

    //User must select an AD option as well to generate transfers text
    else if (transfers.checked && adTransfers.value) {
        createTransfersText(transfersText)
        transferAdError.style.display = 'none'

    }

    //Otherwise an error message appears
    else if (transfers.checked && adTransfers.value === '') {
        therActText.textContent = ''
        transferAdError.style.display = 'block'
    }

    //Text generated if only bed mobility is checked
    else if (bedMobility.checked) {
        therActText.textContent = bedMobilityText
    }

})

//Function that generates transfer text with users choice of AD
const generateTransfersText = (str) => {
    //String is split and then rejoined with AD selection
    const firstHalfStr = str.split(' ').splice(0, 5).join(' ')
    const secondHalfStr = str.split(' ').splice(5, 23).join(' ')
    const combinedStr = firstHalfStr + ' ' + adTransfers.value + ' ' + secondHalfStr
    therActText.textContent = combinedStr
    return combinedStr
}


gaitCreateBtn.addEventListener('click', () => {
    //Will run if all requirements are met
    if (gait.checked && gaitAd.value >= 1) {
        gaitDistanceError.style.display = 'none'
        renderGaitText(gaitText)
    }
    //Otherwise an error message appears1````````````````````````````
    else {
        gaitDistanceError.style.display = 'block'
    }
})

//Function that generates gait text with users selection
const renderGaitText = (str) => {
    let gaitStr = str.replace('FWW', gaitAd.value).replace('150', distance.value).replace('CGA', assistance.value)
    gaitTextBox.textContent = gaitStr
}
