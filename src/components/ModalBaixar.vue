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
              disabled
              required
            >
            </v-text-field>
            <v-text-field
              v-model="produtoAtualizado.descricao"
              label="Descrição"
              disabled
              required
            >
            </v-text-field>
            <v-text-field
              v-model="produtoAtualizado.categoria"
              label="Categoria"
              disabled
              required
            >
            </v-text-field>
            <v-text-field
              v-model="produtoAtualizado.quantidade"
              label="Quantidade atual"
              disabled
              required
            >
            </v-text-field>
            <v-text-field
              v-model="produtosEnviados"
              label="Quantidade enviada"              
              required
            >
            </v-text-field>
          </v-container>
        </v-form>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="atualizarProduto(produtoAtualizado)"> Confirmar </v-btn>

          <v-btn color="error" text @click="fecharModal"> Close </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>

export default {
  props: ["dialog", "produtoAtual"],
  data(){
      return {
          produtosEnviados: 0
      }
  },methods: {
    fecharModal() {
      this.$emit("controle");
    },
    }
};
</script>