//find items on page
const buttonsArray = document.querySelectorAll(".button");
const results = document.getElementById("results");
const running = document.getElementById("running")





const userValues = {
  input: [],
  evaluation() {return eval(this.input.join(""))}, 
}

for (let i = 0; i < buttonsArray.length; i++) {
  if (buttonsArray[i].value === "backspace") {
    buttonsArray[i].addEventListener("click", ()=>{
      if (userValues.input.length > 0) {
        userValues.input.pop();
        printOut(i)
      } else {
        results.textContent = "nom nom nom"
      }
    })
    } else if (buttonsArray[i].value === "clear") {
      buttonsArray[i].addEventListener("click", ()=> {
        userValues.input = []
        userValues.previous = 0
        printOut(i)
      })
    } else {

    buttonsArray[i].addEventListener("click", ()=>{
      userValues.input.push(buttonsArray[i].value);
      printOut(i)
    })
  }
}


const printOut = (i) => {
  results.textContent = userValues.input.join("")
  if (!["+", "-", "*", "/", "%", "(", "clear"].includes(buttonsArray[i].value)) {
    running.textContent = userValues.evaluation()
  }

  
  
}