import React from 'react';
import Componente from './componentes/Componentes'; //importação do componente
import './App.css';

function App() {     // inserção do componente na função 'App' 
  return (
    <div className="App">
      <header className="App-header">
        <p>testando componentes</p>
        <Componente nome='maria eduarda' email='mEduarda@gmail.com' data = { new Date (2024,4,12) } >   
        </Componente >   
        <Componente nome ='ana luiza mendes' email='anaLu@gmail.com' data= {new Date (2024, 6, 10)}>
        </Componente>
      </header>
    </div>
  );
}

export default App; // exportação do componente
