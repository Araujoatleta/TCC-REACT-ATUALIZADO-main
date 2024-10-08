import { useEffect, useRef, useState } from 'react';  
import { Link } from "react-router-dom";  
import 'bootstrap/dist/css/bootstrap.css';  
import backgroundImage from '../../assets/images/background1.png';  
import Acessibilidade from '../../assets/images/4.svg';  
import degrade from '../../assets/images/5.svg';  
import tranca from '../../assets/images/6.svg';  
import bebidas from '../../assets/images/7.svg';
import jogos from '../../assets/images/8.svg';
import sinuca from '../../assets/images/9.svg';
import wifi from '../../assets/images/10.svg';
import './desktop.css';  

const Desktop = () => {  
  const [data, setData] = useState([]);  
  const carousel = useRef(null);  
  const servicesCarousel = useRef(null);  

  useEffect(() => {  
    fetch('http://localhost:5173/static/shoes.json')  
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();  
      })  
      .then(setData)  
      .catch((error) => console.error('Fetch error:', error));  
  }, []);  

  const handleLeftClick = (e) => {  
    e.preventDefault();  
    carousel.current.scrollLeft -= carousel.current.offsetWidth;  
  };  

  const handleRightClick = (e) => {  
    e.preventDefault();  
    carousel.current.scrollLeft += carousel.current.offsetWidth;  
  };  

  const itemWidth = 283 + 19; // largura do item + margem direita

  const handleServicesLeftClick = (e) => {  
    e.preventDefault();  
    servicesCarousel.current.scrollLeft -= itemWidth;  
  };  

  const handleServicesRightClick = (e) => {  
    e.preventDefault();  
    servicesCarousel.current.scrollLeft += itemWidth;  
  };  

  const servicesData = [ 
    { name: "Acessibilidade", image: Acessibilidade }, 
    { name: "degrade", image: degrade }, 
    { name: "tranca", image: tranca }, 
    { name: "bebidas", image: bebidas }, 
    { name: "jogos", image: jogos }, 
    { name: "sinuca", image: sinuca },
    { name: "wifi", image: wifi },
  ]; 
   
  const Relatorio = () => { 
    const [relatorioTexto, setRelatorioTexto] = useState(""); 
    const [historico, setHistorico] = useState([]); 

    const enviarRelatorio = () => { 
      if (relatorioTexto.trim() !== "") { 
        setHistorico([...historico, relatorioTexto]); 
        setRelatorioTexto(""); 
      } else { 
        alert("Por favor, adicione um texto no relatório."); 
      } 
    }; 

    return (  
      <>  
        <header>  
          <aside>  
            <div id="menuToggle">  
              <input type="checkbox" />  
              <span></span>  
              <span></span>  
              <span></span>  
              <ul className="menu" data-theme='t-orange'>  
                <Link to={'/'}>  
                  <li>Home</li>  
                </Link>  
                <Link to={'/home'}>  
                  <li>Barber Area</li>  
                </Link>  
                <Link to={'/desktop'}>  
                  <li>Desktop</li>  
                </Link>  
                <Link to={'/perfil'}>  
                  <li>Editar Perfil</li>  
                </Link>
                <Link to={'/relatorio'}>  
                  <li>Relatórios</li>  
                </Link>  
                <Link to={'/agenda'}>  
                  <li>Agenda</li>
                </Link>  
              </ul>  
            </div>  
          </aside>  
        </header>  

        <section className="s-hero" style={{ backgroundImage: `url(${backgroundImage}) `}}>  
          <div className="container">  
            <div className="left-area">  
              <h1>Desktop</h1>  
              <p>Aqui está sua área de trabalho onde você tem possibilidade de modificar e mapunilar conceitos que não julgar adequados na barbearia.</p>  
            </div>  
          </div>  
        </section>  

        <section className="carousel1"> 
          <div className="button1s left">  
            <button className='btt' onClick={handleLeftClick}>  
              <img src="/static/images/setaleft.svg" alt="Scroll Left" />  
            </button>  
          </div>  
          <div className="carousel1" ref={carousel}>  
            {data.map((item) => {  
              const { id, image } = item;  
              return (  
                <div className="item" key={id}>  
                  <div className="image">  
                    <img src={image} alt={`item-${id}`} />  
                  </div>  
                </div>  
              );  
            })}  
          </div>  
          <div className="button2s right">  
            <button className='btt2' onClick={handleRightClick}>  
              <img src="/static/images/seta.png" alt="Scroll Right" />  
            </button>  
          </div>  
        </section>  

        <section className="services-section">  
          <h2>Serviços da Barbearia</h2>  
          <div className="services-carousel" ref={servicesCarousel}>  
            {servicesData.map((service, index) => (  
              <div className="service-item" key={index}>  
                <img src={service.image} alt={service.name} /> 
              </div>  
            ))}  
          </div>  
          <div className="services-buttons">  
            <div className="left-button-container">  
              <button className='btt' onClick={handleServicesLeftClick}>  
                <img src="/static/images/setaleft.svg" alt="Scroll Left" />  
              </button>  
            </div>  
            <div className="right-button-container">  
              <button className='btt2' onClick={handleServicesRightClick}>  
                <img src="/static/images/seta.png" alt="Scroll Right" />  
              </button>  
            </div>  
          </div>  
        </section>  
        
        <section className="relatorios"> 
          <div id="h2-relatorio"> 
            <h2>Adicionar relatório/atualizações:</h2> 
          </div> 
          <textarea 
            id="relatorio-texto" 
            placeholder="Adicionar relatório/atualizações" 
            value={relatorioTexto} 
            onChange={(e) => setRelatorioTexto(e.target.value)} 
          /> 
          <button id="enviar" onClick={enviarRelatorio}> 
            Enviar 
          </button> 
        </section>       
      </>  
    );  
  }; 

  return <Relatorio />; 
};  

export default Desktop;
