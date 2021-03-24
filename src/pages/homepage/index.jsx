import React from 'react';

import TeknisaCard from '../../components/TeknisaCard';

const Homepage = ( props ) => {
    return (
        <div>

            <h1>Essa é uma página que vai renderizar { props.quantidade.length } cards</h1>
            { props.quantidade.map( (element, index) => {
                return <TeknisaCard number={element} key={index} />
            }) }
            <a href="/table">Ir para tables</a>
        </div>

    );
}

Homepage.propTypes = {
    quantidade: Array
}

Homepage.defaultProps = {
    quantidade: []
}

export default Homepage;