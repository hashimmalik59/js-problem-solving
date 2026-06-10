const cart = {
  customerName: "Hashim Malik",
  itemsCount: 3,
  totalAmount: 1200, // PKR
  hasCoupon: true,
  couponCode: "DISCOUNT10",
  shippingAddress: "", // Note: Yeh khali hai, logic test karne ke liye perfect hai!
};

function checkout() {
  const { shippingAddress, hasCoupon, itemsCount, totalAmount, customerName } =
    cart;

  return {
    deliveryAddress: shippingAddress || "Store Pickup",
    discountedAmount: hasCoupon ? totalAmount - totalAmount * 0.1 : totalAmount,
    orderStatus: itemsCount > 0 && `Processing order for ${customerName}`,
  };
}

console.log(checkout());
