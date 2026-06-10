# js-problem-solving

JavaScript logic aur core concepts (Destructuring, Short-circuiting, Ternary) ko improve karne ke liye mini-projects ki series.

## 01-checkout-logic

### Problem

E-commerce checkout system ke liye dynamic data processing logic likhna.

### Requirements

1. **Address:** `shippingAddress` empty hone par default `"Store Pickup"` set karein.
2. **Discount:** `hasCoupon` true hone par 10% discount apply karein.
3. **Status:** `itemsCount > 0` hone par order processing message print karein.

### Algorithm

1. **Destructure:** Input object se fields extract karein.
2. **Handle Address:** `||` operator ka use kar ke default value set karein.
3. **Calculate Amount:** Ternary operator (`? :`) se discount logic apply karein.
4. **Log Status:** `&&` short-circuiting ka use kar ke conditional message print karein.

### Technologies

- JavaScript (ES6+)
- Node.js
