import React, { useState } from 'react';
import './style.scss';

const TeknisaCard = (props) => {

    const [texto, setTexto] = useState('');
    
    const mostrar = () => {
        alert(texto);
    }

    const onChangeText = (event) => {
        setTexto(event.target.value);
    };

    return (
        <div className="card-container">
        <h1>Teknisa - { props.number }</h1>
        <div className="card-content">
          <input className="text-input" type="text" placeholder='input test' value={texto} onChange={onChangeText} />
          <button className="mostrar-button" onClick={mostrar}>Mostrar</button>
        </div>
      </div>
      
    );
}

TeknisaCard.propTypes = {
  quantidade: Number
}

TeknisaCard.defaultProps = {
  quantidade: 0
}

export default TeknisaCard;

