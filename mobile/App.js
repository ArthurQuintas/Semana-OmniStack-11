import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';

import Routes from './src/routes';

/*
  HTML - <div> <header> <footer>

  ReactNative - Container -> View
              - Texto -> Text
              - Tudo display flex por padrão
              - Não existe herança para estilização. Cada componente deve ser estilizado separadamente
*/


export default function App() {
  return (
    <Routes />
  );
}


