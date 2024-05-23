export function handleAddToCart(cart, setCart, itemIndex, setItemIndex){
  console.log("clicked")
  setCart([...cart, `item ${itemIndex}`]);
  setItemIndex(itemIndex + 1);
}
