const numInput = document.getElementById('number')
const convertButton = document.getElementById('convert-btn')
const output = document.getElementById('output')

const displayRoman = ()=>{
  const num = parseInt(numInput.value)
  if (isNaN(num)) {
    output.textContent = 'Please enter a valid number'
    output.classList.remove('hidden')
    return
  }
  if (num < 1) {
    output.textContent = 'Please enter a number greater than or equal to 1'
    output.classList.remove('hidden')
    return
  }
  if (num > 3999) {
    output.textContent = 'Please enter a number less than or equal to 3999'
    output.classList.remove('hidden')
    return
  }
  output.textContent = convertToRoman(num)
  output.classList.remove('hidden')
}

convertButton.addEventListener('click',displayRoman)
numInput.addEventListener('keydown',(e)=>{
    if (e.key==="Enter") {
        displayRoman()
        return
    }
} )

function convertToRoman(num) {
  let roman = ""
  while (num > 0) {
    if (num >=1000){
      roman += "M"
      num -= 1000
    } else if (num >= 900) {
      roman += "CM"
      num -= 900
    }else if (num >= 500) {
      roman += "D"
      num -= 500
    }else if (num >= 400) {
      roman += "CD"
      num -= 400
    }else if (num >= 100) {
      roman += "C"
      num -= 100
    }else if (num >= 90) {
      roman += "XC"
      num -= 90
    }else if (num >= 50) {
      roman += "L"
      num -= 50
    }else if (num >= 40) {
      roman += "XL"
      num -= 40
    }else if (num >= 10) {
      roman += "X"
      num -= 10
    }else if (num >= 9) {
      roman += "IX"
      num -= 9
    }else if (num >= 5) {
      roman += "V"
      num -= 5
    }else if (num >= 4) {
      roman += "IV"
      num -= 4
    }else {
      roman += "I"
      num -= 1
    }
  }
  return roman
}