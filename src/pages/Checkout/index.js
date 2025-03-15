import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './checkout.css';


function Checkout() {
  const location = useLocation();
  const [cart, setCart] = useState([]);
  const [isPaid, setIsPaid] = useState(false);

  // useEffect(() => {
  //   if (location.state && location.state.cart) {
  //     setCart(location.state.cart);
  //   }
  // }, [location.state]);
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const totalItems = cart.length;
  const totalPrice = cart.reduce((sum, product) => sum + product.price, 0);

  useEffect(() => {
    console.log('Carrinho de Compras no Checkout:', cart, cart.length, cart.reduce((sum, product) => sum + product.price, 0));
  }, [cart]);

  const handlePayment = () => {
    setIsPaid(true);
    localStorage.setItem('purchasedCart', JSON.stringify(cart));
    localStorage.removeItem('cart');
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      {cart.length === 0 ? (
        <p>Carrinho vazio</p>
      ) : (
        <div>
        <ul className='cart-item'>
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
      {!isPaid ? (
        <button className="payment-button" onClick={handlePayment}>Pagar</button>
      ) : (
        <div>
          <p>Pagamento realizado com sucesso!</p>
          <p>
          <Link to="/product">
            <button className="payment-button">Voltar aos Produtos</button>
          </Link>
          </p>
          <p>
          <Link to="/profile">
            <button className="payment-button">Ir para o Perfil</button>
          </Link>
          </p>
        </div>
      )}
    </div>
  );
}

export default Checkout;
