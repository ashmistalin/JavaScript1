const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

console.log("Initial Shopping Cart: " + shoppingCart);

if (!shoppingCart.includes('Meat')) 
{
  shoppingCart.unshift('Meat');
  console.log("Add meat at start : "+shoppingCart);
}

if (!shoppingCart.includes('Sugar')) 
{
  shoppingCart.push('Sugar');
  console.log("Add Sugar at end  : " + shoppingCart);
}

const allergicToHoney = true;
if (allergicToHoney) 
{
    const index = shoppingCart.indexOf('Honey');
  if (index !== -1) 
  {
    shoppingCart.splice(index, 1);
    console.log("Remove Honey if allergic : " + shoppingCart);
  }
}

const index = shoppingCart.indexOf('Tea');
if (index !== -1) 
{
  shoppingCart[index] = 'Green Tea';
  console.log("Modify Tea to Green Tea: " + shoppingCart);
}

console.log("Final Shopping Cart: " + shoppingCart);