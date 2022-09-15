import axios from "axios";
export default class AutoresApi {
  async buscarTodosOsAutores() {
    const response = await axios.get("https://livraria-a.herokuapp.com/publishers");
    return response.data;
  }

  async buscarAutor(id) {
    const response = await axios.get(`https://livraria-a.herokuapp.com/publishers/${id}`);
    return response.data;
  }

  async adicionarAutor(publishers) {
    const response = await axios.post('https://livraria-a.herokuapp.com/publishers');
    return response.data;
  }

  async excluirAutor(id) {
    const response = await axios.delete(`https://livraria-a.herokuapp.com/publishers/${id}`);
    return response.data;
  }

  async atualizarAutor(publishers) {
    const response = await axios.put(
        'https://livraria-a.herokuapp.com/publishers`/${publishers.id}`,
      ,publishers
    );
    return response.data;
  }
}