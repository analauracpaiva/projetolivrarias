import axios from "axios";
export default class CategoriaApi {
  async buscarTodasAsCategorias() {
    const response = await axios.get(
      "https://livraria-a.herokuapp.com/categories"
    );
    return response.data;
  }

  async buscarCategoria(id) {
    const response = await axios.get(
      `https://livraria-a.herokuapp.com/categories/${id}`
    );
    return response.data;
  }

  async adicionarCategoria(category) {
    const response = await axios.post(
      "https://livraria-a.herokuapp.com/categories/",
      category
    );
    return response.data;
  }

  async excluirCategoria(id) {
    const response = await axios.delete(
      `https://livraria-a.herokuapp.com/categories/${id}`
    );
    return response.data;
  }

  async atualizarCategoria(category) {
    const response = await axios.put(
      `https://livraria-a.herokuapp.com/categories/${category.id}`,
      category
    );
    return response.data;
  }
}
