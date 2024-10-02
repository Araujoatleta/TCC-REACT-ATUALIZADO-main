import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom'
import './App.css'
import Logo from '../../assets/images/1.svg'
import backgroundImage from '../App/bg-hero.png';
import Image from '../../assets/images/imagem_background.svg';
import js from ''
function App() {
  const [data, setData] = useState([]);
  const carousel = useRef(null);

  useEffect(() => {
    fetch('http://localhost:5173/static/shoes.json')
      .then((response) => response.json())
      .then(setData);
  }, []);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  if (!data || !data.length) return null;

  return (
    <>
<header>
      <div className="container">
        <a href="./img/1.svg">
          <img src={Logo} alt="Logo barbearia"/>
        </a>
            <Link to={'/login'} className='btn desktop'>Admin</Link>
            <a href="#" className="btn mobile">Comprar</a>
      </div>
    </header>
    <section className="s-hero"  style={{ backgroundImage: `url(${backgroundImage})` }}>
    <div className="container">
        <div className="left-area">
          <h1>BARBA DO MÊS</h1>
          <p>A barba do mês seria uma votação dos melhores serviços de cada barbearia avaliada, 
            sendo uma forma de mostrar os cortes em destaque de barbearias em geral.</p>
          <div className="value">
            <h3>Clique Abaixo</h3>
            <div className="btns">
              <a href="#" className="btn">Instale o nosso APP</a>
            </div>
  </div>
          </div>
    </div>
</section>
<section className='carousel1'>
<div className="carousel1" ref={carousel}>
        {data.map((item) => {
          const { id, image } = item;
          return (
            <div className="item" key={id}>
              <div className="image">
                <img src={image} />
              </div>
            </div>
          );
        })}
      </div>
      <div className="button1s">
        <button className='btt' onClick={handleLeftClick}>
          <img src="/static/images/216151_right_chevron_icon.png" alt="Scroll Left" />
        </button>
        </div>
        <div className="button2s">
        <button className='btt2' onClick={handleRightClick}>
          <img src="/static/images/216151_right_chevron_icon.png" alt="Scroll Right" />
        </button>
      </div>
      
      </section>
    <>
     <section className="s-villain"  style={{ backgroundImage: `url(${Image})` }}></section>
     <div class="tabs">
        <button id="servicos-tab" class="active" onclick="mostrarServicos()">Serviços</button>
        <button id="horarios-tab" onclick="mostrarHorarios()">Horários</button>
    </div>

  
    <table id="tabela-servicos">
        <thead>
            <tr>
                <th>Tipo</th>
                <th>ID</th>
                <th>Nome do Cliente</th>
                <th>Horário</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
  
        </tbody>
    </table>
    <table id="tabela-horarios" style="display:none;">
        <thead>
            <tr>
                <th>Horário</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>


  <footer>
          <div className="container">
            <div className="left-area">
              <h3>©Barbearia</h3>
              <p>Com a nossa Empresa de Intermediação de Serviços de Barbearia, tanto as barbearias quanto os
                clientes podem desfrutar de uma experiência mais eficiente
                e satisfatória no mundo dos serviços de corte de cabelo e barbearia.</p>
            </div>

            <div className="right-area">
              <a href="https://designboost.com.br/" target="_blank">
                <img src="img/1.svg" alt="" />
              </a>
            </div>
          </div>
        </footer></>
  </>
      )
      }
export default App;
