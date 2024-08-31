// script.js
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItems = [];

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const product = button.parentElement;
    const productInfo = {
      name: product.querySelector('h3').textContent,
      price: parseFloat(product.querySelector('p').textContent.slice(1))
    };
    cartItems.push(productInfo);
    console.log('Added to cart:', productInfo);
  });
});
