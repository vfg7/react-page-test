import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './product.css';

const productList = [
  { id: 1, name: 'Produto A', price: 100 },
  { id: 2, name: 'Produto B', price: 150 },
  { id: 3, name: 'Produto C', price: 200 },
];

function Product() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  useEffect(() => {
    console.log('Carrinho de Compras:', cart);
  }, [cart]);

  const totalItems = cart.length;
  const totalPrice = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    // <div>
    //   <h1>Produtos</h1>
    //   <ul>
    //     {productList.map((product) => (
    //       <li key={product.id}>
    //         {product.name} - R${product.price}
    //         <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
    //       </li>
    //     ))}
    //   </ul>

    //   <Link to={{ pathname: '/checkout', state: { cart } }}>
    //     <button>Ir para Checkout</button>
    //   </Link>
    // </div>
    <div className="container">
      <h1>Produtos</h1>
      <ul className="product-list">
        {productList.map((product) => (
          <li key={product.id} className="product-item">
            <span>
              <span className="product-name">{product.name}</span> -{' '}
              <span className="product-price">R${product.price}</span>
            </span>
            <button
              className="add-to-cart-btn"
              onClick={() => addToCart(product)}
            >
              Adicionar ao Carrinho
            </button>
          </li>
        ))}
      </ul>
      <div className="cart-preview">
        <h2>Carrinho</h2>
        {cart.length === 0 ? (
          <p>Carrinho vazio</p>
        ) : (
          <div>
          <ul>
            {cart.map((product, index) => (
              <li key={index}>
                {product.name} - R${product.price}
              </li>
            ))}
          </ul>
          <p>Total de itens: {totalItems}</p>
        <p>Total: R${totalPrice}</p>
          </div>
        )}
      </div>
      <Link to={{ pathname: '/checkout', state: { cart } }}>
        <button className="checkout-btn">Ir para Checkout</button>
      </Link>
    </div>
  );
}

export default Product;
