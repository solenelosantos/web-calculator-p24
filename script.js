// NOTE: 
// This is the starter file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-1

// # START EDITING YOUR JAVASCRIPT HERE
// ===============

// Solène Losantos

const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')
const display = document.querySelector('.calculator__display')

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent
    const previousKeyType = calculator.dataset.previousKeyType
    
    const calculate = (n1, operator, n2) => {
            let result = ''
          
            if (operator === 'add') {
                result = parseFloat(n1) + parseFloat(n2)
              } else if (operator === 'subtract') {
                result = parseFloat(n1) - parseFloat(n2)
              } else if (operator === 'multiply') {
                result = parseFloat(n1) * parseFloat(n2)
              } else if (operator === 'divide') {
                result = parseFloat(n1) / parseFloat(n2)
              }
          
            return result
          }

    if (!action) {
    console.log('number key!')

    if (displayedNum === '0'|| previousKeyType === 'operator'|| previousKeyType=='result') {
        display.textContent = keyContent
        calculator.dataset.previousKeyType='number'
        }
    else {
            display.textContent = displayedNum + keyContent
            calculator.dataset.previousKeyType='number'}
      }
    
    
    if (
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide'
      ){
        console.log('action!')
        


        const firstValue = calculator.dataset.firstValue
        const operator = calculator.dataset.operator
        const secondValue = displayedNum

        

        if (firstValue && operator && previousKeyType !== 'operator') {
            const calcValue = calculate(firstValue, operator, secondValue)
            display.textContent = calcValue
            calculator.dataset.firstValue = calcValue 
        } 
        else {
            calculator.dataset.firstValue = displayedNum
        }
        calculator.dataset.previousKeyType= 'operator'
        calculator.dataset.operator = action
      }
      
      if (action === 'decimal') {
        console.log('decimal!')
        display.textContent = displayedNum + '.'
      }
      
      if (action === 'clear') {
        console.log('clear key!')
        display.textContent='0'
      }
      
      if (action === 'calculate') {
        console.log('result!')
        const firstValue = calculator.dataset.firstValue
        const operator = calculator.dataset.operator
        const secondValue = displayedNum
        
        display.textContent = calculate(firstValue, operator, secondValue)
        calculator.dataset.previousKeyType='result'
        calculator.dataset.firstValue=''
        calculator.dataset.operator=''

      }
    
  }
})



