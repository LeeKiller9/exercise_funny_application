let noBtn = document.getElementById('noBtn')

function yesAnswer() {
    alert('Ohh thank you so much!!')
}

function noAnswer() {
    let posX = Math.floor(Math.random() * 1501 - 200)
    let posY = Math.floor(Math.random() * 651 - 150)
    noBtn.style.left = posX + 'px' //-200 -> 1300
    noBtn.style.top = posY + 'px' //-150 ->  500
}


function init() {
    noBtn.style.position = 'relative'
    noBtn.style.left = '10px' //-200 -> 1300
    noBtn.style.top = '0px' //-150 ->  500
}

window.onload = init;