import React from 'react';
import Componente from './componentes/Componentes'; //importação do componente
import './App.css';

function App() {     // inserção do componente na função 'App' 
  return (
    <div className="App">
      <header className="App-header">
        <p>testando componentes</p>
        <Componente />   
        <Componente />   
      </header>
    </div>
  );
}

export default App; // exportação do componente
