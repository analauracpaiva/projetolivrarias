<script>
import CategoriasApi from "@/api/categorias.js";
const categoriasApi = new CategoriasApi();
export default {
  data() {
    return {
      categoria: {},
      categorias: [],
    };
  },
  async created() {
    this.categorias = await categoriasApi.buscarTodasAsCategorias();
  },
  methods: {
    async salvar() {
      if (this.categoria.id) {
        await categoriasApi.atualizarCategoria(this.categoria);
      } else {
        await categoriasApi.adicionarCategoria(this.categoria);
      }
      this.categorias = await categoriasApi.buscarTodasAsCategorias();
      this.categoria = {};
    },
    async excluir(categoria) {
      await categoriasApi.excluirCategoria(categoria.id);
      this.categorias = await categoriasApi.buscarTodasAsCategorias();
    },
    editar(categoria) {
      Object.assign(this.categoria, categoria);
    },
  },
};
</script>

<template>
  <main>
    <div class="container">
      <div class="title">
        <h2>Gerenciamento de Categorias</h2>
      </div>
      <div class="form-input">
        <input
          id="cat"
          type="text"
          v-model="categoria.description"
          placeholder="Categoria..."
        />
        <button id="button-29" role="button" @click="salvar">SALVAR</button>
      </div>
      <div class="list-categorias">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Categoria</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="categoria in categorias" :key="categoria.id">
              <td class="ide">{{ categoria.id }}</td>
              <td>{{ categoria.description }}</td>
              <td class="acao">
                <button @click="editar(categoria)">Editar</button>
                <button @click="excluir(categoria)">Excluir</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>

<style>
#cat {
  width: 40%;
  margin-left: 2px;
  margin-bottom: 20px;
}
.list-categorias {
  display: flex;
  justify-content: center;
}
.list-categorias table {
  width: 80%;
  margin: 0 auto;
  border-collapse: collapse;
}
table tr td {
  border: 1px solid rgb(211, 211, 211);
  padding: 10px;
}
</style>
