import { Link} from "react-router-dom";
import './Cadastro4.css';
const Cadastro4 = () => {

    return (
<div className="wrapper">
<section>
  <div className="form-box">
    <div className="form-value">

      <form action="">
        <h2>Seu Acesso</h2>
        <div className="inputbox">
          <ion-icon name="email"></ion-icon>
          <input type="email" required/>
          <label htmlFor="">Email:</label>
        </div>

        <div class="inputbox">
          <ion-icon name="password"></ion-icon>
          <input type="password" required/>
          <label htmlFor="">Senha:</label>
        </div>

        <Link to={'/home'}
          className='btn btn-sm btn-warning'>
          Acessar
        </Link>
        <div className="forget">
          <label>
            <input type="checkbox"/> Aceito e concordo com as Políticas e termos de uso
          </label>
        </div>
           
        <div className="register">
          <p>If have a account ? <a href="../Login/index.html">logue</a></p>
        </div>

      </form>

    </div>
  </div>

  <div className="form-box1">
    <div className="form-value1">
    </div>
   
  </div>
</section>
</div>

 )
}

export default Cadastro4