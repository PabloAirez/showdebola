import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import '../styles/botaoWhatsapp.css';

const BotaoWhatsapp = () => {
  const numeroWhatsapp = "5551980184007"; // Substitua pelo número real da empresa
  const mensagem = "Olá! Gostaria de agendar um horário.";
  
  const abrirWhatsapp = () => {
    const url = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  };

  return (
    <button className="botao-whatsapp" onClick={abrirWhatsapp}>
      <FaWhatsapp className="whatsapp-icon" />
    </button>
  );
};

export default BotaoWhatsapp;
