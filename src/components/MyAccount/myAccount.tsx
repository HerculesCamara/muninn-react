// src/components/MyAccount.tsx
import React from 'react';
import { Card, Form } from 'react-bootstrap';
import userProfilePic from '../../assets/lais.png';
import './styles.css';

const MyAccount: React.FC = () => {
  const userData = {
    name: 'Laís Oliveira',
    email: 'lais.oliveira@example.com',
    street: 'Rua das Flores, 123',
    cep: '12345-678'
  };

  const colors = [
    ['#3B2A24', '#C4B6A6'],
    ['#2C3E50', '#ECF0F1'],
    ['#34495E', '#BDC3C7'],
    ['#4B3C32', '#E6B89C'],
    ['#2E2A26', '#D6D6D6'],
    ['#3E2723', '#BCAAA4'],
    ['#1F3A3D', '#A2C2C2'],
    ['#3F3D37', '#E6E5E2'],
    ['#2A2D34', '#B4B7B9'],
    ['#212F3C', '#AAB8C2'],
    ['#4A4E69', '#C9CBA3'],
    ['#343B3F', '#F0E5C2'],
    ['#4B4F54', '#E7C6B8'],
    ['#383838', '#D6D6D6'],
    ['#232E31', '#B7D3B3'],
    ['#2B2D42', '#8D99AE']
  ];

  const getRandomColorPair = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const [color1, color2] = getRandomColorPair();

  const backgroundStyle = {
    background: `linear-gradient(to bottom, ${color1}, ${color2})`,
    minHeight: '100vh', 
  };

  return (
    <div style={backgroundStyle} className="d-flex justify-content-center align-items-center">
      <Card className="account-card p-4 w-75" style={{ backgroundColor: 'white', borderRadius: '10px' }}>
        <div className="text-center mb-4">
          <img
            src={userProfilePic}
            alt="Foto de Perfil"
            className="rounded-circle"
            style={{ width: '7rem', height: '7rem', objectFit: 'cover' }}
          />
        </div>

        <Form>
          <Form.Group controlId="formName" className="mb-3">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" readOnly defaultValue={userData.name} />
          </Form.Group>

          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" readOnly defaultValue={userData.email} />
          </Form.Group>

          <Form.Group controlId="formStreet" className="mb-3">
            <Form.Label>Rua</Form.Label>
            <Form.Control type="text" readOnly defaultValue={userData.street} />
          </Form.Group>

          <Form.Group controlId="formCep" className="mb-3">
            <Form.Label>CEP</Form.Label>
            <Form.Control type="text" readOnly defaultValue={userData.cep} />
          </Form.Group>
        </Form>
      </Card>
    </div>
  );
};

export default MyAccount;
