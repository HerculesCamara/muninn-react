// src/components/ForgetPassword.tsx
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const ForgetPassword: React.FC = () => {
  const navigate = useNavigate(); 
  const [email, setEmail] = useState('');
  const [codeSent, setCodeSent] = useState(false);
  const [verificationCode, setVerificationCode] = useState(Array(6).fill(''));
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleEmailSubmit = () => {
    if (email.includes('@')) {
      setCodeSent(true);
      setError('');
    } else {
      setError('Por favor, insira um e-mail válido.');
    }
  };

  const handleCodeChange = (index: number, value: string) => {
    if (/^\d?$/.test(value)) {
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);

      if (value) {
        if (index < 5) {
          inputRefs.current[index + 1]?.focus();
        }
      } else {
        if (index > 0) {
          inputRefs.current[index - 1]?.focus();
        }
      }
    }
  };

  const handlePasswordChange = () => {
    setError(''); 
    setSuccessMessage('');


    if (verificationCode.includes('')) {
      setError('Preencha o código.');
    } else if (newPassword !== confirmPassword) {
      setError('As senhas não correspondem.');
    } else if (!newPassword || !confirmPassword) {
      setError('As senhas devem ser preenchidas.');
    } else {
      setSuccessMessage('Senha alterada com sucesso!');
      setError('');

     
      setTimeout(() => {
        navigate('/'); 
      }, 1300); 
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-background">
      <div className="p-4 bg-light rounded shadow text-verification">
        
        {!codeSent && (
          <>
            <p className="text-center mb-4">Vamos enviar um código de verificação para seu e-mail</p>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu e-mail"
              />
              {error && <div className="text-danger mt-2">{error}</div>}
            </div>
            <button 
              className="btn btn-primary w-100"
              onClick={handleEmailSubmit}
            >
              Solicitar Código
            </button>
          </>
        )}
        
        {codeSent && (
          <>
            <h4 className="text-center mb-4">Código de Verificação</h4>
            
            <div className="d-flex justify-content-center mb-3 text-verification-code">
              {verificationCode.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleCodeChange(index, e.target.value)}
                  className="form-control text-center box-code"
                />
              ))}
            </div>
            
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Nova senha"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Confirmar nova senha"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {error && <div className="text-danger mt-2">{error}</div>}
            </div>

            {successMessage && (
              <div className="text-success text-center mt-2">
                {successMessage}
                <div>Aguarde um instante</div>
              </div>
            )}

            <button 
              className="btn btn-primary w-100"
              onClick={handlePasswordChange}
            >
              Alterar Senha
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ForgetPassword;
