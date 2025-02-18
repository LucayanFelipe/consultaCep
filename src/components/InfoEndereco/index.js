import React from 'react';
import './infoendereco.css';

const InfoEndereco = ({ address }) => {
    if (!address) return null;

    return (
        <div className="address-info">
            <strong>Logradouro: <span>{address.logradouro}</span></strong> 
            <strong>Bairro: <span>{address.bairro}</span></strong>
            <strong>Cidade: <span>{address.localidade}</span></strong>
            <strong>Estado: <span>{address.uf}</span></strong>
        </div>
    );
};

export default InfoEndereco;