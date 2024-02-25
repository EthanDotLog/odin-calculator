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
    buttonsArray[i].addEventListener("click", (e)=>{
      if (userValues.input.length > 0) {
        userValues.input.pop();
        printOut(e)
      } else {
        results.textContent = "nom nom nom"
      }
    })
    } else if (buttonsArray[i].value === "clear") {
      buttonsArray[i].addEventListener("click", (e)=> {
        userValues.input = []
        printOut(e)
      })
    } else if (buttonsArray[i].value === "=") {
      buttonsArray[i].addEventListener("click", (e)=> {
        printOut(e)
        userValues.input = []
      })
    } else {
    buttonsArray[i].addEventListener("click", (e)=>{
      userValues.input.push(buttonsArray[i].value);
      printOut(e)
    })
  }
}


const printOut = (i) => {
  const callButton = i.target.value
  console.log(callButton, callButton.value)
  if (callButton === "clear") {
    results.textContent = "";
    running.textContent = "";
  } else if (callButton === "backspace") {
    results.textContent = userValues.input.join("");
    running.textContent = userValues.evaluation();
  } else if (callButton === "=" ) {
    results.textContent = userValues.evaluation();
    running.textContent = ""
  } else if (!["+", "-", "*", "/", "%", "("].includes(callButton) && userValues.input.length > 3) {
    results.textContent = userValues.input.join("")
    running.textContent =  userValues.evaluation()
  } else {
    results.textContent = userValues.input.join("")
  }

  
  
}