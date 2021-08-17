<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500" persistent>
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Editar Produto
        </v-card-title>

        <v-form>
          <v-container>
            <v-text-field
              v-model="produtoAtualizado.codigo"
              label="Codigo"
              required
            >
            </v-text-field>
            <v-text-field
              v-model="produtoAtualizado.descricao"
              label="Descrição"
              required
            >
            </v-text-field>
            <v-text-field
              v-model="produtoAtualizado.categoria"
              label="Categoria"
              required
            >
            </v-text-field>
            <v-text-field
              v-model="produtoAtualizado.quantidade"
              label="Quantidade"
              required
            >
            </v-text-field>
          </v-container>
        </v-form>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="atualizarProduto(produtoAtualizado)"
          >
            Confirmar
          </v-btn>

          <v-btn color="error" text @click="fecharModal"> Close </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import controller from "../controllers/produtos";

export default {
  props: ["dialog", "produtoAtualizado"],
  data() {
    return {
      produto: {},
      id: "",
    };
  },
  methods: {
    fecharModal() {
      this.$emit("controle");
    },
    async atualizarProduto(produto) {
      await controller.editProduto(produto);
      this.$emit("controle");
      alert("atualizado com sucesso")
    },
  },
};
</script>