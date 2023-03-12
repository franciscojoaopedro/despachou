import { useState,useEffect } from "react";
import { Casa } from "../Casa/Casa";
import { listOfCasa } from "../../helpers/casa";
import "./main.css"

export const  Main =()=>{

    const [casa,setCasas]=useState([])
    
   useEffect(()=>{
        if(casa.length<=0) setCasas(()=>listOfCasa);
   },[casa])

   console.log("hei")
   console.log(casa)

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
                        
                    {
                        casa.map((item,index)=>(
                            <Casa
                            key={index}
                            nome={item.nomecasa}
                            local={item.local}
                            imagem={item.imagem}
                            preco={item.preço}
                            status={item.status}
                            />
                        ))
                    }
                  
                </div>
            </div>
        </section>
        </>
    );
}