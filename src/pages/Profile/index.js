import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Profile() {
  const [user, setUser] = useState({
    username: 'juao',
    name: 'João Silva',
    email: 'joao.silva@mail.com',
    password: 'senha123',
  });
  const [purchasedCart, setPurchasedCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('purchasedCart');
    if (storedCart) {
      setPurchasedCart(JSON.parse(storedCart));
    }
  }, []);

  const togglePasswordVisibility = () => {
    const passwordField = document.getElementById('password');
    const type = passwordField.type === 'password' ? 'text' : 'password';
    passwordField.type = type;
  };

  return (
    <div>
      <h1>Perfil de {user.name}</h1>
      <p><strong>Email:</strong> {user.email}</p>
      <p>
        <strong>Senha:</strong>
        <input
          id="password"
          type="password"
          value={user.password}
          readOnly
        />
        <button onClick={togglePasswordVisibility}>Mostrar/Ocultar</button>
      </p>
      <h2>Produtos Comprados</h2>
      {purchasedCart.length === 0 ? (
        <p>Nenhum produto comprado ainda.</p>
      ) : (
        <ul>
          {purchasedCart.map((product, index) => (
            <li key={index}>
              {product.name} - R${product.price}
            </li>
          ))}
        </ul>
      )}
      <Link to="/product">
        <button>Voltar aos Produtos</button>
      </Link>
    </div>
  );
}

export default Profile;
