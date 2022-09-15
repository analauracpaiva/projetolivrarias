import axios from "axios";
export default class LivrosApi {
  async buscarTodosOsLivros() {
    const response = await axios.get("https://livraria-a.herokuapp.com/books");
    return response.data;
  }

  async buscarlivro(id) {
    const response = await axios.get(`https://livraria-a.herokuapp.com/books/${id}`);
    return response.data;
  }

  async adicionarlivro(books) {
    const response = await axios.post('https://livraria-a.herokuapp.com/books');
    return response.data;
  }

  async excluirlivro(id) {
    const response = await axios.delete(`https://livraria-a.herokuapp.com/books/${id}`);
    return response.data;
  }

  async atualizarlivro(books) {
    const response = await axios.put(
        'https://livraria-a.herokuapp.com/books`/${publishers.id}`,
      ,books
    );
    return response.data;
  }
}