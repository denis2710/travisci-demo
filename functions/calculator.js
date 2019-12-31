class Calculator { 
  
  sum (a, b) { 
    return this.calcule("+", a, b);
  }

  substract (a, b){ 
    return this.calcule("-", a, b);
  }

  multiple (a, b) {
    return this.calcule("*", a, b);
  }

  divide (a, b) {
    return this.calcule("/", a, b)
  }

  calcule(sing, firstNum, seccondNum) {

    switch (sing) {
      case "+":
        return firstNum + seccondNum;
        break;

      case "-":
        return firstNum - seccondNum;
        break;

      case "*":
        return firstNum * seccondNum;
        break;

      case "/":
        if(seccondNum === 0) { 
          throw new Error("Impossible to divid by zero")
        }
        return firstNum / seccondNum;
        break;
    
      default:
        throw new Error("Sing not valid")
        break;
    }
  }
}

module.exports = Calculator