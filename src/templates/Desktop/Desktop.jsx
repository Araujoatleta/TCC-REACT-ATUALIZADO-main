
import { useEffect, useRef, useState } from 'react';  
import { Link } from "react-router-dom";  
import 'bootstrap/dist/css/bootstrap.css';  
import backgroundImage from '../../assets/images/background1.png';  
import gradImage from '../../assets/images/4.svg';  
import braidsImage from '../../assets/images/5.svg';  
import drinksImage from '../../assets/images/6.svg';  
import  meudeusbag from '../../assets/images/7.svg'
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

  const handleServicesLeftClick = (e) => {  
    e.preventDefault();  
    servicesCarousel.current.scrollLeft -= servicesCarousel.current.offsetWidth / 2;  
  };  

  const handleServicesRightClick = (e) => {  
    e.preventDefault();  
    servicesCarousel.current.scrollLeft += servicesCarousel.current.offsetWidth / 2;  
  };  

  const handleDragScroll = (ref) => {  
    let isDown = false;  
    let startX;  
    let scrollLeft;  

    ref.current.addEventListener('mousedown', (e) => {  
      isDown = true;  
      ref.current.classList.add('active');  
      startX = e.pageX - ref.current.offsetLeft;  
      scrollLeft = ref.current.scrollLeft;  
    });  

    ref.current.addEventListener('mouseleave', () => {  
      isDown = false;  
      ref.current.classList.remove('active');  
    });  

    ref.current.addEventListener('mouseup', () => {  
      isDown = false;  
      ref.current.classList.remove('active');  
    });  

    ref.current.addEventListener('mousemove', (e) => {  
      if (!isDown) return;  
      e.preventDefault();  
      const x = e.pageX - ref.current.offsetLeft;  
      const walk = (x - startX) * 2;  
      ref.current.scrollLeft = scrollLeft - walk;  
    });  
  };  

  useEffect(() => {  
    if (servicesCarousel.current) {  
      handleDragScroll(servicesCarousel);  
    }  
  }, [servicesCarousel]);  

  if (!data || !data.length) return null;  

  // Array de serviços com imagens 
  const servicesData = [ 
    { name: "Degradê", image: gradImage }, 
    { name: "Tranças", image: braidsImage }, 
    { name: "Bebidas", image: drinksImage } ,
    { name: "MEUDEUSBAG", image: meudeusbag }, 
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
              <img src="/static/images/216151_right_chevron_icon.png" alt="Scroll Left" />  
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
              <img src="/static/images/216151_right_chevron_icon.png" alt="Scroll Right" />  
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
            <button className='btt' onClick={handleServicesLeftClick}>  
              <img src="/static/images/setaleft.svg" alt="Scroll Left" />  
            </button>  
            <button className='btt2' onClick={handleServicesRightClick}>  
              <img src="/static/images/seta.png" alt="Scroll Right" />  
            </button>  
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

  return <Relatorio />; // Certifique-se de retornar o componente Relatorio no Desktop
};  

export default Desktop;
