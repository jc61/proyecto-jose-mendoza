import './App.css';
import { Login } from './components/Login';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
    <>
          {/* Cabezera del sitio */}
          <header className="header">
            <div className='layout'>
              {/* <div className="logo">
                  <div className="play"></div>
              </div> */}

              ¡Envíos a toda Colombia por solo $5.000 pesos!
            </div>
          </header>

          {/* Barra de navegación */}
          <nav className="nav">
            <div className="logo">
              <img src='classicjeans.png' />
            </div>
            <ul>
              <li><a href='/#'>Inicio</a></li>
              <li><a href='/#'>Blog</a></li>
              <li><a href='/#'>Contacto</a></li>
            </ul>
          </nav>
        
          <Login />

          {/* Pie de pagina */}
          <footer className="footer">
              &copy; Desarrollado por Julio Iglesias - <a href='https://github.com/jc61'>GitHub</a>
          </footer>
    </>
  );
}

export default App;
