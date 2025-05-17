/**
 * first100 --> 100
 * 101To200 --> 90
 * above200 --> 70
*/
const buy = 300;

const buyTotal = layeredDiscounted(buy);
console.log(buyTotal);


function layeredDiscounted (quantity){
  const fast100price = 100;
  const sec101_200price = 90;
  const above201price = 70;

  if(quantity <=100 ){
    const total = quantity * fast100price;
    return total;
  }

  else if(quantity <= 200){
    const fast100Total =100* fast100price;
    const remainingQuantity = quantity - 100;
    const remainingTotal = remainingQuantity * sec101_200price;
    const total = fast100Total + remainingTotal;
    return total
  }

  else{
    const fast100Total = 100 * fast100price;
    const sec100Total = 100* sec101_200price;
    const remainingQuantity =quantity - 200;
    const remainingTotal = remainingQuantity * above201price;
    const total = fast100Total+sec100Total+remainingTotal;
    return total
  }
}