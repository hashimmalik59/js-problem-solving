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

## 02-array-transformation

### Problem

Product catalog ke liye tax calculation aur budget-friendly items ko filter karne ka logic implement karna.

### Requirements

1. **Tax Calculation:** `map()` ka use kar ke har item ki price mein 20% tax add karein.
2. **Immutability:** Spread operator (`...`) ka use kar ke original data ko mutate kiye bina naya object banayein.
3. **Filtering:** `filter()` ka use kar ke sirf 150 se kam price wale items ko return karein.

### Algorithm

1. **Transform Data:** `map()` ko call kar ke har element par function apply karein.
2. **Apply Spread:** Object mein `...item` spread karein aur `price` ko nayi calculated value se overwrite karein.
3. **Filter Data:** `filter()` mein condition `item.price < 150` pass kar ke relevant items extract karein.

### Technologies

- JavaScript (ES6+)
- Node.js
