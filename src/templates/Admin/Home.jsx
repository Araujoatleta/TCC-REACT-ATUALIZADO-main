import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/home.png'
import './Home.css';
import backgroundImage from '../../assets/images/background1.png';
import Image1 from '../../assets/images/imagem.svg';
import Logo from '../../assets/images/1.svg'
import Imagem from '../../assets/images/footer.png'
const Home = () => {

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

              <a href="#">
                  <li>Editar Perfil</li>
              </a>
              <Link to={'/relatorio'}>
                <li>Relatórios</li>
            </Link>

          </ul>
      </div>
  </aside>
    </header>

  
  <section className="s-hero"  style={{ backgroundImage: `url(${backgroundImage})` }}>
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
    <section className="s-villain"  style={{ backgroundImage: `url(${Image1})` }}>

      <div className="container">
        <img src="../img/i" alt=""/>
      </div>

    </section>
    
    <footer>

        <h2 className="Depoimento">DEPOIMENTOS</h2>
        <div className="text-section">
            <p className="testimonial-text">"Desde que comecei a parceria com a BC (Barber's Club) nunca mais tive problemas com horários e agendamentos"</p>
            <p className="author">"R10"</p>
            <img src= {Imagem} id="imagem-footer" alt="aspas"/>
          </div>
      
    </footer>
</>
    )
}

export default Home