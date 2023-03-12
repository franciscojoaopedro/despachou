import "./header.css";

const Header=()=>{
    return(
        <header>
            <nav>
                <div className="logo" >
                    <p>Despa<span>chou</span></p>
                </div>

              <div className="lado-esquerdo" >
              <ul>
                    <li>Home</li>
                    <li>Serviços</li>
                    <li>Agentes</li>
                    <li>Sobre</li>
                </ul>
                <div className="btn">
                    <button type="button" className="btn-entrar" >Entrar</button>
                </div>
              </div>
            </nav>
        </header>
    )
}

export default Header;