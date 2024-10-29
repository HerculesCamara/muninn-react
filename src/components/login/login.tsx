// src/components/Login.tsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importando useNavigate para redirecionamento
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import corvoImg from '../../assets/corvo.png';
import { Eye, EyeSlash } from 'phosphor-react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate(); // Instancia o hook de navegação

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Lógica de validação simples (ajuste conforme necessário)
    if (email === 'usuario@example.com' && password === '123456') {
      navigate('/home'); // Redireciona para a rota "Home"
    } else {
      alert('Email ou senha incorretos.');
    }
  };

  return (
    <div className="login-container d-flex align-items-center justify-content-center min-vh-100">
      <img src={corvoImg} alt="Logo" className="corvo-img" />
      <div className="login-card card text-center">
        <div className="card-body">
          <h2 className="card-title mb-3">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-3 text-start">
              <label htmlFor="email" className="form-label">Email</label>
              <input 
                type="email" 
                className="form-control" 
                id="email" 
                placeholder="Coloque seu email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3 text-start position-relative">
              <label htmlFor="password" className="form-label">Senha</label>
              <div className="input-group">
                <input 
                  type={passwordVisible ? 'text' : 'password'} 
                  className="form-control" 
                  id="password" 
                  placeholder="Coloque sua senha" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  aria-label="Password" 
                />
                <span 
                  className="input-group-text password-icon" 
                  onClick={togglePasswordVisibility} 
                  style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                >
                  {passwordVisible ? <EyeSlash size={20} /> : <Eye size={20} />}
                </span>
              </div>
            </div>

            <div className="d-flex justify-content-between mt-2">
              <Link to="/forgetPassword" style={{ color: 'gray' }}>Esqueceu Sua Senha?</Link>
              <Link to="/createAccount" style={{ color: 'blue' }}>Criar conta</Link>
            </div>

            <button type="submit" className="btn btn-primary w-100 mt-3">Entrar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
