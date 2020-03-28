import React from 'react';

import './global.css';

//import React, { useState } from 'react';

import Routes from './routes';

//JSX - JavaScript XML

//Um componente no React é uma função que retorna HTML

//Estado - Informação mantida por um componente

//Imutabilidade - Variáveis que armazenam informações de Estado, não podem ser manipuladas diretamente, por este motivo se torna necessário a utilização de uma função


function App() {
  /*
  const [counter, setCounter] = useState(0);

  //Array [valor, funçãoDeAtualização]

  function increment(){
    setCounter(counter + 1);
  }
  */

  return (
    <Routes />
    /*
    <div>
      <Header>
        Contador: {counter}
      </Header>
      <button onClick={increment}>Incrementar</button>
    </div>
    */
  );
}

export default App;
