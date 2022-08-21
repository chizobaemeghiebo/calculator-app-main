const numbers = document.querySelectorAll('.num')
const showResult = document.querySelector('.result')
const history = document.querySelector('.history')
const calcOutput = document.querySelector('.showCalc')
const operators = document.querySelectorAll('.operator')
const dell = document.querySelector('.del')
const reset = document.querySelector('.reset')
const equals = document.querySelector('.equals')
const theme1 = document.querySelector('.theme1')
const theme2 = document.querySelector('.theme2')
const theme3 = document.querySelector('.theme3')
document.querySelector('.calculator')

// themes
theme1.addEventListener('click', () => {
  document.querySelector('.calculator').classList.toggle('theme1')
  document.querySelector('.toggleSwitch').classList.toggle('theme1')
  document.querySelector('.showCalc').classList.toggle('theme1')
  document.querySelector('body').classList.toggle('theme1')

  document.querySelector('.calculator').classList.remove('theme2')
  document.querySelector('.toggleSwitch').classList.remove('theme2')
  document.querySelector('.showCalc').classList.remove('theme2')
  document.querySelector('body').classList.remove('theme2')

  document.querySelector('.calculator').classList.remove('theme3')
  document.querySelector('.toggleSwitch').classList.remove('theme3')
  document.querySelector('.showCalc').classList.remove('theme3')
  document.querySelector('body').classList.remove('theme3')
})

theme2.addEventListener('click', () => {
  document.querySelector('.calculator').classList.toggle('theme2')
  document.querySelector('.toggleSwitch').classList.toggle('theme2')
  document.querySelector('.showCalc').classList.toggle('theme2')
  document.querySelector('body').classList.toggle('theme2')

  document.querySelector('.calculator').classList.remove('theme3')
  document.querySelector('.toggleSwitch').classList.remove('theme3')
  document.querySelector('.showCalc').classList.remove('theme3')
  document.querySelector('body').classList.remove('theme3')

  document.querySelector('.calculator').classList.remove('theme1')
  document.querySelector('.toggleSwitch').classList.remove('theme1')
  document.querySelector('.showCalc').classList.remove('theme1')
  document.querySelector('body').classList.remove('theme1')
})

theme3.addEventListener('click', () => {
  document.querySelector('.calculator').classList.toggle('theme3')
  document.querySelector('.toggleSwitch').classList.toggle('theme3')
  document.querySelector('.showCalc').classList.toggle('theme3')
  document.querySelector('body').classList.toggle('theme3')

  document.querySelector('.calculator').classList.remove('theme2')
  document.querySelector('.toggleSwitch').classList.remove('theme2')
  document.querySelector('.showCalc').classList.remove('theme2')
  document.querySelector('body').classList.remove('theme2')

  document.querySelector('.calculator').classList.remove('theme1')
  document.querySelector('.toggleSwitch').classList.remove('theme1')
  document.querySelector('.showCalc').classList.remove('theme1')
  document.querySelector('body').classList.remove('theme1')
})

numbers.forEach((number) => {
  // add click event to each number
  number.addEventListener('click', showNum)
  showResult.innerText = '0'.substring(1)
})
function showNum(e) {
  let value = e.target.innerText
  value = +value
  showResult.innerText += value
}

operators.forEach((operator) => {
  // add click event to each number
  operator.addEventListener('click', operation)
  history.innerText = '0'.substring(1)
})
let haveDot = false

// operators
function operation(e) {
  let ops = e.target.innerText
  showResult.innerText += ops
}

// equals
equals.addEventListener('click', getTotal)

function getTotal() {
  let total = ''
  history.innerText += showResult.innerText
  total = eval(history.innerText)
  showResult.innerText = total
}

// reset
reset.addEventListener('click', resetAll)

function resetAll() {
  history.innerText = ''
  showResult.innerText = ''
}

// del
dell.addEventListener('click', rundel)

function rundel() {
  let delVal = showResult.innerText
  delVal = delVal.substring(0, delVal.length - 1)
  showResult.innerText = delVal
}
