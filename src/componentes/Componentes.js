import React from 'react' // importação da biblioteca
import './Componente.css'

const Componente = props => ( //definição do componente
   
       <div className='Componente'>
          <h3>{props.nome}</h3> 
          <p>{props.email}</p>
          <p>{props.children}</p>
          <p>{props.data.toString()}</p>
       </div> 
     );

export default Componente;  // exportação do componente
