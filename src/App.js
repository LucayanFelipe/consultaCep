import React, { useState } from 'react';
import axios from 'axios';
import FormCep from './components/FormCep';
import InfoEndereco from './components/InfoEndereco';
import mapgirl from './assets/mapgirl.png';

import './App.css';

function App() {
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchAddress = async (cep) => {
      setLoading(true);
      setError(null);
      try {
          const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
          if (response.data.erro) {
              setError('CEP não encontrado.');
          } else {
              setAddress(response.data);
          }
      } catch (err) {
          setError('Erro ao consultar o CEP. Tente novamente.');
      } finally {
          setLoading(false);
      }
  };

  return (
      <div className="App">
        <img src={mapgirl}></img>
          <h1>Consulta de CEP</h1>
          <FormCep onSearch={fetchAddress} />
        
          {error && <p className="error">{error}</p>}
          {address && <InfoEndereco address={address} />}
      </div>
  );
}

export default App;
