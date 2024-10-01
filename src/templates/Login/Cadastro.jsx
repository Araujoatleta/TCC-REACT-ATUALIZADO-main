import { Link} from "react-router-dom";
import './Cadastro.css';
const Cadastro = () => {

    return (
     <div className="wrapper">
    <section>
      <div className="form-box">
        <div className="form-value">
          <form action="">
            <h2>Cadastre-se</h2>
            <div className="inputbox">
              <ion-icon name="mail-outline"></ion-icon>
              <input type="email" required  />
              <label htmlFor="">Email</label>
            </div>
            <div className="inputbox">
              <ion-icon name="name"></ion-icon>
              <input type="nome" required />
              <label htmlFor="">Nome e Sobrenome</label>
            </div>
            <div className="inputbox">
              <input type="number" required />
              <label htmlFor="">CNPJ</label>
            </div>
            <div className="inputbox">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input type="password" required />
              <label htmlFor="">Password</label>
            </div>
            <div className="forget">
              <label>
                <input type="checkbox" /> Remember me
              </label>
            </div>
            <Link to={'/cadastro2'}
          className='btn btn-sm btn-warning'>
          Proximo
        </Link>
            <div className="register">
              if have a account ? <Link to="/Login">Login</Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
 )
}

export default Cadastro