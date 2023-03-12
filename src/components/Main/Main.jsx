import { Casa } from "../Casa/Casa";
import "./main.css"

export const  Main =()=>{
    return(
        <>
        <section className="s-primeira">
            <div className="box-section cols cols-2">
                <div className="s-lado-esquerdo">
                    <p>Encontra a</p>
                    <p>A casa dos sonhos no despacha</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                </div>
                <div className="s-lado-direito">
                    <img src="https://images.pexels.com/photos/3665354/pexels-photo-3665354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                </div>
            </div>
        </section>

        <section className="s-melhores-casa">
            <div className="s-casas">
                <div className="titulo-melhor-casa">
                    <h3>Melhores casas comprar</h3>
                </div>
                <div className="melhores-casas cols cols-3">
                        <Casa/>
                    <div className="casa-1">
                        <img src="https://images.pexels.com/photos/5563473/pexels-photo-5563473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                        <p>Pink Villa</p>
                        <p>Talatona</p>
                        <p>5000 KZ/ por mêS</p>
                    </div>
                    <div className="casa-1">
                        <img src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                        <p>Pink Villa</p>
                        <p>Talatona</p>
                        <p>5000 KZ/ por mêS</p>
                    </div>
                    <div className="casa-1">
                        <img src="https://images.pexels.com/photos/7031407/pexels-photo-7031407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                        <p>Pink Villa</p>
                        <p>Talatona</p>
                        <p>5000 KZ/ por mêS</p>
                    </div>
                    <div className="casa-1">
                        <img src="https://images.pexels.com/photos/5563473/pexels-photo-5563473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                        <p>Pink Villa</p>
                        <p>Talatona</p>
                        <p>5000 KZ/ por mêS</p>
                    </div>
                    <div className="casa-1">
                        <img src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                        <p>Pink Villa</p>
                        <p>Talatona</p>
                        <p>5000 KZ/ por mêS</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}