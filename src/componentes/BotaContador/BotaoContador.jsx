import "./BotaoContador.css"
import React from "react";

const BotaoContador = () => {

    
    const [numero, setNumero] = React.useState(0);

    const incrementar = () => {

        setNumero(numero + 1);
        if (numero >= 10){ setNumero (0)}
    };

    

    return <button onClick={incrementar} className="botao">{numero}</button>
   
}
export default BotaoContador;