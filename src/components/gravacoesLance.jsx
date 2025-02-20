import React from 'react';
import '../styles/gravacoesLance.css';

const GravacoesLance = () => {
  return (
    <div className="gravacoes-container">
      <div className="gravacoes-card">
        <div className="imagem-container">
          <img 
            src="/celular.gif" 
            alt="Câmera de gravação"
            className="gravacao-imagem"
          />
        </div>
        <div className="conteudo-container">
          <h2>Grave a sua jogada!</h2>
          <p className="descricao">
            Transforme seus momentos em campo em memórias inesquecíveis! 
            Siga estes passos simples para gravar sua performance:
          </p>
          <ol className="passos-lista">
            <li>Após o seu lance, pressione o botão de gravação próximo das goleiras para salvar os 30 segundos antes do lance</li>
            <li>Acesse o site <a href="https://ixpiameulance.com.br/" target='_blank'>https://ixpiameulance.com.br/</a></li>
            <li>Crie sua conta gratuita no site e baixe o seu lance</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default GravacoesLance;