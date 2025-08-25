const fs = require("fs").promises;
const path = require("path");

class DataServico {
  constructor() {
    this.dataPath = path.join(__dirname, "../data/categorias.json");
  }

  /**
   * Le o arquivo de categorias e retorna os dados.
   * @returns {Promise<Array>} Retorna uma promessa que resolve com os dados das categorias.
   */

  async lerCategorias() {
    try {
      const arquivoPayload = await fs.readFile(this.dataPath, "utf-8");
      return JSON.parse(arquivoPayload);
    } catch (error) {
      console.error("Ocorreu um erro ao ler o arquivo de categorias.", error);
      return [];
    }
  }

  /*
   * Escreve os dados das categorias no arquivo.
   * @param {Array} categorias - Array de categorias a serem escritas no arquivo.
   * @returns {Promise<void>} Retorna uma promessa que resolve quando a escrita for concluída.
   */

  async escreveCategorias(categorias) {
    try{
        const arquivoPayload = JSON.stringify(categorias, null, 2);
        await fs.writeFile(this.dataPath, arquivoPayload, "utf-8");
    }catch (error) {
        console.error("Houve um erro ao tentar persistir os dados na categoria.", error);
        return false;
    }
  }
}

module.exports = new DataServico();