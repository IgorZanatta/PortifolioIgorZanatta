import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* Força a barra a ser sobreposta */
  html, body {
    overflow-y: overlay !important;
    background-color: #1b4965 !important;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    padding-top: 64px; /* Adiciona espaço abaixo do NavBar */
  }

  /* Scrollbar translúcida */
  ::-webkit-scrollbar {
    width: 6px; /* Mantém a barra fina */
  }

  ::-webkit-scrollbar-track {
    background: transparent !important; /* Remove qualquer fundo branco */
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.15); /* MAIS TRANSLÚCIDA */
    border-radius: 10px;
    backdrop-filter: blur(8px); /* Maior desfoque para integração melhor */
    transition: background 0.3s ease-in-out, backdrop-filter 0.3s ease-in-out;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.4); /* Aumenta a visibilidade ao passar o mouse */
    backdrop-filter: blur(12px); /* Intensifica o efeito de vidro ao interagir */
  }

  /* Para Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.15) transparent !important;
  }
`;

export default GlobalStyles;
