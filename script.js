// zadanie 1

// let day = new Date()
// let newYear = new Date('01/01/2024')
// let daysCounterMiliSeconds = newYear - day
// let daysCounter = Math.floor(daysCounterMiliSeconds / (1000 * 60 * 60 * 24))
// for (let i = daysCounter; i > 0; i--) {
//     console.log(i)
//     if (i == 1) {
//         console.log("Happy New Year!")
//     }
// }
/*
while (daysCounter > 0) {
    console.log(daysCounter)
    if (daysCounter == 1) {
        console.log("Happy New Year!")
    }
    daysCounter--
}
*/

// zadanie 2

const btn = document.querySelector('.main-button')
btn.addEventListener('click', () => {
    let firstNum = parseInt(document.querySelector('.inp1').value)
    let secondNum = parseInt(document.querySelector('.inp2').value)
    let p = document.querySelector('.main-p')
    if (typeof(firstNum) == 'number' && typeof(firstNum) == 'number') {
        p.innerHTML = "NWD(" + firstNum + ", " + secondNum + ") = " + NWD(firstNum, secondNum)
    } else {
        p.innerHTML = "Błąd!"
    }
})
/*
function NWD(a, b) {
    if (a == 0 && b == 0) {
        return 0
    } else if (a == b) {
        return a
    } else if (a < b) {
        return NWD(b, a)
    } else if (b == 0 && a != 0) {
        return a
    } else {
        return NWD(b, a % b)
    }
}
*/
function NWD(a, b) {
    let min, max
    if (a >= b) {
        max = a
        min = b
    } else {
        max = b
        min = a
    }
    for (let i = min; i > 0; i--) {
        if (max % i == 0 && min % i == 0) {
            return i
        }
    }
}

// zadanie 3

const inpt = document.querySelector('#main-display')
const multp = document.querySelector('.multiply')
const divd = document.querySelector('.divide')
const del = document.querySelector('.delete')
const delAll = document.querySelector('.delete-all')
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const power = document.querySelector('.power')
const numbers = document.querySelectorAll('.number')
const equeal = document.querySelector('.equeal')
const dot = document.querySelector('.point')
const actions = [multp, divd, plus, minus, power, dot]
let inptData = ''
numbers.forEach( elem => {
    elem.addEventListener('click', function() {
        inptData += elem.textContent.toString()
        inpt.value = inptData
    })
})
del.addEventListener('click', function() {
    inptData = inptData.slice(0, -1)
    if (inptData.length == 0) {
        inptData = ''
        inpt.value = 0
    } else {
        inpt.value = inptData
    }
})
delAll.addEventListener('click', function() {
    inptData = ''
    inpt.value = 0
})
actions.forEach(elem => {
    elem.addEventListener('click', function() {
        if (inpt.value == '0') {
            inptData += '0' + elem.textContent.toString()
            inpt.value = inptData
        } else {
            inptData = inptData + elem.textContent.toString()
            inpt.value = inptData
        }
    })
})

equeal.addEventListener('click', function() {
    if (inptData.includes('^')) {
        while (inptData.includes('^')) {
            let numberAfter, numberBefore, indexStart, indexEnd, resultOfExp
            let indx = inptData.indexOf('^')
            for (let i = indx; i > 0; i--) {
                if (inptData[i - 1] != '0' && '1' && '2' && '3' && '4' && '5' && '6' && '7' && '8' && '9' && '.') {
                    numberBefore = inptData.slice(i - 1, indx)
                    indexStart = i - 1
                    break
                }
            }
            for (let i = indx + 1; i < inptData.length - 1; i++) {
                if (inptData[i] != '0' && '1' && '2' && '3' && '4' && '5' && '6' && '7' && '8' && '9' && '.') {
                    numberAfter = inptData.slice(indx + 1, i + 1)
                    indexEnd = i
                    break
                }
            }
            resultOfExp = Math.pow(numberBefore, numberAfter)
            let inptData1 = inptData.slice(0, indexStart)
            let inptData2 = inptData.slice(indexEnd + 1, inptData.length)
            inptData = inptData1.toString() + resultOfExp.toString() + inptData2.toString()
        }
    }
    let result = inptData.replace(/[^-()\d/*+.]/g, '');
    inpt.value = eval(result)
    inptData = eval(result)
})
// zadanie 4

const dayP = document.getElementById('day')
const hourP = document.getElementById('hour')
const minutesP = document.getElementById('minutes')
const secondsP = document.getElementById('seconds')

function Day() {
    let time = new Date()
    let day = time.getDay()
    console.log(day)
    if (day == 1) {
        dayP.innerHTML = 'Mn'
    }
    if (day == 2) {
        dayP.innerHTML = 'Tu'
    }
    if (day == 3) {
        dayP.innerHTML = 'We'
    }
    if (day == 4) {
        dayP.innerHTML = 'Th'
    }
    if (day == 5) {
        dayP.innerHTML = 'Fr'
    }
    if (day == 6) {
        dayP.innerHTML = 'Sa'
    }
    if (day == 7) {
        dayP.innerHTML = 'Su'
    }
}
function twoNumbers(t) {
    if (t.toString().length == 1) {
        return '0' + t.toString()
    } else {
        return t
    }
}
function Clock() {
    let time = new Date()
    hourP.innerHTML = twoNumbers(time.getHours())
    minutesP.innerHTML = twoNumbers(time.getMinutes())
    secondsP.innerHTML = twoNumbers(time.getSeconds())
}

setInterval(Clock, 1000)
window.onload(Day(), Clock()) // nie wiem dlaczego tutaj jest błąd w konsoli, bez window.onload pod czas uruchamiania strony, elementy p są puste