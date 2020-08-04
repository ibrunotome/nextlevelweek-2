import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/4256471?s=460&u=3a65d8fde5c1b29bf9d2d3a0a8faad84afcf0179&v=4" alt="Bruno Tomé"/>
        <div>
          <strong>Bruno Tomé</strong>
          <strong>Seller</strong>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de venda avançada.
        <br/><br/>
        Apaixonado por vender enquanto dorme.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button>
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;