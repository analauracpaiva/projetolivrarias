<script>
  import livrosApi from "@/api/livros.js";
  const livrosApi = new livrosApi();
  export default {
    data() {
      return {
        livro: {},
        livros: [],
      };
    },
    async created() {
      this.livros = await timesApi.buscarTodosOslivros();
    },
    methods: {
      async salvar() {
        if (this.livro.id) {
          await livrosApi.atualizarlivro(this.livro);
        } else {
          await livrosApi.adicionarlivro(this.livro);
        }
        this.livros = await livrosApi.buscarTodosOslivros();
        this.livro = {};
      },
      async excluir(livro) {
        await livrosApi.excluirlivro(livro.id);
        this.livros = await livrosApi.buscarTodosOslivros();
      },
      editar(livro) {
        Object.assign(this.livro, livro);
      },
    },
  };
  </script>
  <template>
    <div class="container">
      <div class="title">
        <h2>Gerenciamento de livros</h2>
      </div>
      <div class="form-input">
        <input type="text" v-model="livro.nome" @keyup.enter="salvar" />
        <button @click="salvar">Adicionar</button>
      </div>
      <div class="list-items">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="livro in livros" :key="livro.id">
              <td>{{ livro.id }}</td>
              <td>{{ livro.nome }}</td>
              <td>
                <button @click="editar(livro)">Editar</button>
                <button @click="excluir(livro)">Excluir</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <style></style>