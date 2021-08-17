<template>
  <div>
    <v-row justify="center"><h1>Cadastro de Produto</h1></v-row>
    <v-form>
      <v-container>
        <v-text-field
          v-model="produto.codigo"
          label="Codigo"
          required
        ></v-text-field>
        <v-text-field
          v-model="produto.descricao"
          label="Descricao"
          required
        ></v-text-field>
        <v-text-field
          v-model="produto.categoria"
          label="Categoria"
          required
        ></v-text-field>
        <v-text-field
          v-model="produto.quantidade"
          label="Quantidade"
          required
        ></v-text-field>
      </v-container>

      <v-row justify="end">
        <v-btn @click="submit" color="success" class="mr-4">Cadastrar</v-btn>

        <v-btn @click="resetInputs" color="error" class="mr-4">
          Reset Form
        </v-btn>
      </v-row>
    </v-form>
  </div>
</template>

<script>
import controller from "../controllers/produtos";

export default {
  methods: {
    async submit() {

      const erros = [];

      if (this.produto.codigo == "") erros.push("Codigo está vazio") 
      if (this.produto.descricao == "") erros.push("Descrição está vazia") 
      if (this.produto.categoria == "") erros.push("Categoria está vazia") 
      if (this.produto.quantidade == 0) erros.push("Quantidade está zerada")       

      if(erros.length > 0) return (erros.map(erro => alert(erro)))

      this.produto.codigo = this.produto.codigo.toUpperCase()
      this.produto.descricao = this.produto.descricao.toUpperCase()
      this.produto.categoria = this.produto.categoria.toUpperCase()

      await controller.addProduto(this.produto)

      this.produto.codigo = "";
      this.produto.descricao = "";
      this.produto.categoria = "";
      this.produto.quantidade = 0;

      
    },

    resetInputs() {
      this.produto.codigo = "";
      this.produto.descricao = "";
      this.produto.categoria = "";
      this.produto.quantidade = 0;
    },
    
  },
  data() {
    return {
      produto: {
        codigo: "",
        descricao: "",
        categoria: "",
        quantidade: 0,
      },
    };
  },
};
</script>

<style scoped>
h1 {
  margin-top: 30px;
}
</style>