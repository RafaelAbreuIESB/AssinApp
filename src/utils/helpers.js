// utils/helpers.js

export function formatarData(timestamp) {
    const data = new Date(timestamp.seconds * 1000);
    return data.toLocaleDateString('pt-BR');
  }
  
  export function formatarValor(valor) {
    return `R$ ${Number(valor).toFixed(2)}`;
  }
  