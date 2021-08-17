<template>
  <div>
    <v-simple-table fixed-header height="200px" >
      <thead>
        <tr>
          <th>Codigo</th>
          <th>Descricao</th>
          <th>Categoria</th>
          <th>Quantidade</th>
          <th>Data de criação</th>
          <th>Ultima atualização</th>
          <th>Opções</th>
        </tr>
      </thead>
      <tbody v-if="produtos.length > 0">
        <tr v-for="produto of produtos" :key="produto.id">
          <td>{{ produto.codigo }}</td>
          <td>{{ produto.descricao }}</td>
          <td>{{ produto.categoria }}</td>
          <td>{{ produto.quantidade }}</td>
          <td>{{ formatarData(produto.createdAt) }}</td>
          <td>{{ formatarData(produto.updatedAt) }}</td>
          <td>
            <div class="opcoes">
              <v-btn @click="controleModalBaixar(produto.id)" icon
                ><v-icon color="green">mdi-plus</v-icon></v-btn
              >
              <v-btn @click="controleModal(produto.id)" icon
                ><v-icon medium color="primary">mdi-pen</v-icon></v-btn
              >
              <v-btn @click="deletarProduto(produto.id)" icon
                ><v-icon color="red">mdi-delete</v-icon></v-btn
              >
            </div>
          </td>
        </tr>
      </tbody>
    </v-simple-table>

    <ModalAtualizar
      v-if="produtoAtualizar[0] != null"
      :dialog="dialog"
      :produtoAtualizado="produtoAtualizar[0]"
      @controle="controleModal"
    />

    <ModalBaixar
      v-if="produtoAtualizar[0] != null"
      :dialog="dialog_baixar"
      :produtoAtual="produtoAtualizar[0]"
      @controle="controleModalBaixar"
    />
  </div>
</template>

<script>
import moment from "moment";
import controller from "../controllers/produtos";
import ModalAtualizar from "./ModalEditarCadastro.vue";
import ModalBaixar from "./ModalBaixar.vue";

export default {
  components: {
    ModalAtualizar,
    ModalBaixar,
  },
  props: {
    produtos: {
      type: Array || String,
    },
  },
  data() {
    return {
      dialog: false,
      dialog_baixar: false,
      produtoAtualizar: [],
    };
  },
  methods: {
    async deletarProduto(id) {
      if(confirm()){
          await controller.delProduto(id);
          this.$emit("atualizarTabela");
      }
      
    },

    async controleModal(id) {
      if (id) {
        this.produtoAtualizar = await controller.buscarProduto(id);
      }

      this.$emit("atualizarTabela");

      this.dialog = !this.dialog;
    },
    async controleModalBaixar(id) {
      if (id) {
        this.produtoAtualizar = await controller.buscarProduto(id);
      }

      this.$emit("atualizarTabela");

      this.dialog_baixar = !this.dialog_baixar;
    },
    formatarData(data) {
      return moment(String(data)).format("DD/MM/YYYY");
    },
  },
};
</script>

<style scoped>
.opcoes {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
</style>