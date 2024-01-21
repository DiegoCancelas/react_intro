import React, {Component} from 'react';
import Componente from './componentes/Componentes'; //importação do componente
import './App.css';

class App extends Component {     // inserção do componente na função 'App' 
  
      state = {
        comentarios: [
      
          {
            nome: 'adalberto nunes da fonseca',
            email:'adalbertoNunes@gmail.com',
            data: new Date(2024, 1, 21),
            mensagem: 'olá, como vai, você me ouve?'
          },

          {
            nome: 'elizangela gomes da nobrega',
            email: 'eli@gmail.com',
            data: new Date(2024, 1, 21),
            mensagem:'Olá, tudo bem! Sim, ouço você!'
          }

        ] // comentarios

      } // fim implementação state

  render() {
    return (
          <div className="App">
            <header className="App-header">
              <p>testando componentes</p>
              {this.state.comentarios.map( (comentario, indice) => (
                   <Componente 
                               key= {indice}
                               nome= {comentario.nome} 
                               email= {comentario.email} 
                               data = {comentario.data}> 
                                      {comentario.mensagem}
                   </Componente>  
                    
               ) //map() parâmetros
                ) //map() corpo
                 } 
            </header>
          </div>
    ) // return

  }//render()

} //fim implementação classe App


export default App; // exportação do componente
