import React from 'react';
import { MagnifyingGlass } from 'phosphor-react'; // Importando o ícone de lupa do Phosphor
import { Dropdown } from 'react-bootstrap'; // Importando o Dropdown do Bootstrap
import './styles.css';
import muninnImg from '../../assets/munnin.png';
import laisImg from '../../assets/lais.png';
import anatomiaImg from '../../assets/anatomia.png';
import medicinaImg from '../../assets/medicina.png';
import dermaImg from '../../assets/derma.png';
import novaImg from '../../assets/nova.png';
import plantsImg from '../../assets/plants.png';
import guiaPraticoImg from '../../assets/guia_pratico.jpg';
import backImg from '../../assets/back.jpeg';
import frank from '../../assets/frank.png';

const Home: React.FC = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${backImg})` }}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top px-3">
        {/* Logo do Corvo */}
        <a className="navbar-brand" href="#">
          <img src={muninnImg} alt="Corvo" className="logo" />
        </a>

        {/* Campo de Pesquisa */}
        <form className="form-inline mx-3 my-2 my-lg-0 search-bar">
          <div className="position-relative">
            <MagnifyingGlass size={20} color="#666" className="search-icon" />
            <input
              className="form-control pl-4 ml-3" // Adicionando margin-left ao input
              type="search"
              placeholder="Pesquisar títulos, gêneros, autores"
              aria-label="Pesquisar"
            />
          </div>
        </form>

        {/* Opções de Navegação */}
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Explorar</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Eventos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Comunidade</a>
            </li>
          </ul>
        </div>

        {/* Ícone e nome da Laís alinhados à direita com dropdown */}
        <div className="d-flex align-items-center gap-2 user-info">
          <Dropdown>
            <Dropdown.Toggle variant="link" id="dropdown-basic" style={{ padding: 0 }}>
              <img src={laisImg} alt="Laís" className="rounded-circle" style={{ width: '40px', height: '40px' }} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/minha-conta">Minha Conta</Dropdown.Item>
              <Dropdown.Item href="#/sair">Sair</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <span className="text-white ml-2 mb-3">Laís</span>
        </div>
      </nav>

      {/* Espaçamento para compensar a navbar fixa */}
      <div className="container mt-5 pt-5 black-box">
        <div className="box">
          <h1>Achamos que você vai curtir:</h1>
          <div className="content">
            <img src={anatomiaImg} alt="Anatomia Geral" className="float-left mr-3" />
            <div className="text">
              <h3>Anatomia Geral</h3>
              <p>Reconhecer os órgãos do corpo humano, e como estes se comportam para a formação dos sistemas...</p>
              <div className="additional-content">
                <img src={frank} alt="Circle" className="rounded-circle mr-4" />
                <span>Frank H. Netter</span>
              </div>
            </div>
            <h4 className="continue-reading-sub mt-4 ml-2">Continuar lendo</h4>
            <div id="carouselExampleControls" className="carousel slide mt-2" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-md-2">
                      <img src={medicinaImg} className="d-block w-100" alt="Medicina" />
                    </div>
                    <div className="col-md-2">
                      <img src={dermaImg} className="d-block w-100" alt="Derma" />
                    </div>
                    <div className="col-md-2">
                      <img src={novaImg} className="d-block w-100" alt="Nova" />
                    </div>
                    <div className="col-md-2">
                      <img src={plantsImg} className="d-block w-100" alt="Plants" />
                    </div>
                    <div className="col-md-2">
                      <img src={guiaPraticoImg} className="d-block w-100" alt="Guia Prático" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
