import React from 'react';

//Função recebe uma pripriedade. Propriedade é uma atributo de uma tag HTML

//Children - Filha na árvore hierárquica do HTML. Recebe tudo que está dentro da função Header

function Header({ children }){
    return(
        <header>
            <h1>{children}</h1>
        </header>
    );
}

export default Header;