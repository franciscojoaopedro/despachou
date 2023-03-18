import "./casa.css"

export const Casa=(props)=>{
    return(
        <div className="casa" key={props.key} >
         <img  src={props.imagem} alt=""/>
        <p className="nome-casa">{props.nome}</p>
        <p className="local">🌍 {props.local}</p>
        <p className="preco">🤑  {props.preco} KZ <span>/ por mês</span></p>
        <p className="status">📇 Estado: {props.status}</p>
        </div>
    )
}