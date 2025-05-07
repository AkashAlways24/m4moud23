const Age = [15,25,30,20,55,60,11,13,12];

function minAge(age){
  let min = age[0];
  for (const num of age) {
    if(num < min){
      min = num;
    }
  }
return min;
}

const res = minAge(Age);
console.log(res);

