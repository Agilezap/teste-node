/**
 * helper para formatar retornos dos resultados do banco de dados
 * Autor: Allan Gleison Santos
 */

function getOffset(paginaAtual = 1, listaPorPagina) {
    return (paginaAtual - 1) * [listaPorPagina];
  }
  
  function emptyOrRows(rows) {
    if (!rows) {
      return [];
    }
    return rows;
  }
  
  module.exports = { getOffset, emptyOrRows }