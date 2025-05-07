/**
 * Shirt price --> 500
 * pant price --> 300
 * shoe price --> 900
 * 
*/

function price(shirtPices, pantPices, shoePices){
  const shirtPrice = 500;
  const pantPrice = 300;
  const shoePrice = 900;

  const shirtTotalPrice = shirtPrice * shirtPices;
  const pantTotalPrice = pantPrice * pantPices;
  const shoeTotalPrice = shoePrice * shoePices;

  const totalPrice = shirtTotalPrice + pantTotalPrice + shoeTotalPrice;
  return totalPrice;
}

const buyAmount =price(2,1,1);
console.log(buyAmount);