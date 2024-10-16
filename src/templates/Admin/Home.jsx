import { useEffect, useState, useRef } from 'react'; 
import { Link } from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.css'; 
import Header from "../../components/Header/Header"; 
import Sidebar from '../../components/Menu/Sidebar'; 
import logo from '../../assets/images/home.png'; 
import './Home.css'; 
import backgroundImage from '../../assets/images/background1.png'; 
import Image1 from '../../assets/images/imagem.svg'; 
import Imagem from '../../assets/images/footer.png'; 
import api from '../../services/api';  // Importando a configuração do axios

const Home = () => { 
  const [data, setData] = useState([]); 
  const carousel = useRef(null); 

  useEffect(() => { 
    // Fazendo requisição ao backend para buscar os dados
    api.get('/admin')  // Supondo que o backend tem um endpoint /admin
      .then((response) => {
        setData(response.data);  // Armazena os dados da API no estado
      })
      .catch((error) => {
        console.error('Erro ao buscar dados do backend', error);
      });
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

      <section className="s-hero" style={{ backgroundImage: url`(${backgroundImage})` }}> 
        <div className="container"> 
          <div className="left-area"> 
            <h1>Admin Area</h1> 
            <p>  
              Olá! Esta é a área administrativa do nosso site, aqui você pode gerir sua(s) barbearia(s), 
              membros da sua equipe, ver avaliações e etc.  
              Clique em nossa logo presente no canto superior esquerdo para abrir o menu de opções.  
            </p> 
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
                  <img src={image} alt="admin" /> 
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

      <section className="s-villain" style={{ backgroundImage: url`(${Image1})` }}> 
        <div className="container"> 
          <img src="../img/i" alt="villain" /> 
        </div> 
      </section> 

      <footer> 
        <h2 className="Depoimento">DEPOIMENTOS</h2> 
        <div className="text-section">
<p className="testimonial-text">"Desde que comecei a parceria com a BC (Barber's Club) nunca mais tive problemas com horários e agendamentos"</p> 
          <p className="author">"R10"</p> 
          <img src={Imagem} id="imagem-footer" alt="footer" /> 
        </div> 
      </footer> 
    </> 
  ); 
}; 

export default Home;