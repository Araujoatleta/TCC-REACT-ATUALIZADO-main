import { useEffect, useState, useRef } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './perfil.css';
import backgroundImage from '../../assets/images/background1.png';
import Image1 from '../../assets/images/imagem.svg';
import Imagem from '../../assets/images/footer.png';
const Agenda = () => {
    const [data, setData] = useState([]); // Dados do carrossel
    const [servicos, setServicos] = useState([]); // Dados dos serviços
    const [horarios, setHorarios] = useState([]); // Dados dos horários
    const [showServicos, setShowServicos] = useState(true); // Estado para mostrar serviços ou horários
    const carousel = useRef(null);

    // Carregar dados ao montar o componente
    useEffect(() => {
        fetch('http://localhost:5173/static/shoes.json')
            .then((response) => response.json())
            .then(setData);
    }, []);

    return (
        <>
            {/* Header and Sidebar */}
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

            {/* Background Section */}
            <section className="s-hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="container">
                    <div className="left-area">
                        <h1>Editar perfil</h1>

                        <p> 
                        Nesta área você anotará pendências e coisas que acontecem  no  horário de trabalho, explicar com as inatividades  de funcionários
                        dando justificativas/explicações para ausentes de funcionários.
                        </p>
                    </div>
                </div>
            </section>
    <div className="barbearia-section">
        <div className="barbearia-info">
            <img src="https://via.placeholder.com/80" alt="Imagem da barbearia"/>
            <h3>Batista Barbearia</h3>
            <p>Média (1239 avaliações)</p>
            <div className="rating">
                <span>4.3/5</span>
                <div className="stars">
                    <input type="radio" name="star" id="star1"/><label htmlFor="star1">★</label>
                    <input type="radio" name="star" id="star2"/><label htmlFor="star2">★</label>
                    <input type="radio" name="star" id="star3"/><label htmlFor="star3">★</label>
                    <input type="radio" name="star" id="star4"/><label htmlFor="star4">★</label>
                    <input type="radio" name="star" id="star5"/><label htmlFor="star5">★</label>
              </div>
              </div>           
        </div>
        <div className="perfil-form">
        <h3>Sobre a barbearia</h3>
          <form>
            <input className='number' type="number" required />
              <label>Quantidade de funcionarios</label>

                <label htmlFor="file">Anexados:</label>
                <input type="file" id="file" name="file"/>

                <label htmlFor="foto">Foto/documento:</label>
                <input type="radio" id="novo" name="foto" value="novo"/> Novo
                <input type="radio" id="anexo" name="foto" value="anexo"/> Anexo

                <button className='button2' type="submit">Alterar</button>
            </form>
</div>

    </div>
            {/* Villain Section */}
            <section className="s-villain" style={{ backgroundImage: `url(${Image1})` }}>
                {/* Your existing content */}
                {/* ... */}
            </section>

     
</>
    )
}
export default Agenda;