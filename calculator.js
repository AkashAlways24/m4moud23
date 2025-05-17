

function sum(num1, num2){
  const sum = num1+num2;
  return sum;
}
function subtract(num1,num2){
  const subtract= num1-num2;
  return subtract;
}
function miltiply(num1,num2){
  const miltiply= num1*num2;
  return miltiply;
}
function divide(num1,num2){
  const divide= num1/num2;
  return divide;
}

function calculator (a,b,operation){
  if(operation === 'sum'){
    const result = sum(a,b);
  return result;
  }

  else if(operation == 'subtract'){
    const result = subtract(a,b);
    return result;
  }

  else if(operation === 'miltiply'){
    const result =miltiply (a,b)
    return result;
  }

  else if(operation === 'divide'){
    const result = divide(a,b)
    return result
  }

  else{
    const result='aikhane kono formula use hoi nai sorry';
    return result
  }
};




const results = calculator(5, 5, 'miltiply');
console.log(results);