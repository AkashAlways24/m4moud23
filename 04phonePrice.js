const phones = [
  { name: 'Samsung', price: 120000, camera: '12mp', color: 'black' },
  { name: 'xoami', price: 18000, camera: '12mp', color: 'black' },
  { name: 'Oppo', price: 30000, camera: '12mp', color: 'black' },
  { name: 'Iphone', price: 100000, camera: '12mp', color: 'black' },
  { name: 'Walton', price: 31000, camera: '12mp', color: 'black' },
  { name: 'HTC', price: 27000, camera: '12mp', color: 'black' },
]

function getChepestPhone(phones){
  let chepest=phones[0];
  for(const phone of phones){
    if(phone.price < chepest.price){
      chepest = phone
    }
  }
  return chepest
}

const res = getChepestPhone(phones);
console.log(res);

// function minAge(age){
//   let min = age[0];
//   for (const num of age) {
//     if(num < min){
//       min = num;
//     }
//   }
// return min;
// }