fetch('products.json')
  .then(res => res.json())
  .then(products => {
    const product = products[0];
    const c = document.getElementById('product-container');
    c.innerHTML = `
      <h2>${product.name}</h2>
      <div class="product-imgs">
        ${product.images.map(i=>`<img src="${i}" alt="${product.name}">`).join('')}
      </div>
      <p class="price">₹${product.price}</p>
      <p>${product.description}</p>
    `;
  })
  .catch(err => console.error('Failed to load product:', err));
