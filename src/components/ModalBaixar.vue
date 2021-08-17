<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500" persistent>
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Baixa de produtos
        </v-card-title>

        <v-form>
          <v-container>
            <v-text-field
              v-model="produtoAtual.codigo"
              label="Codigo"
              disabled
              required
            >
            </v-text-field>
            <v-text-field
              v-model="produtoAtual.descricao"
              label="Descrição"
              disabled
              required
            >
            </v-text-field>
            <v-text-field
              v-model="produtoAtual.categoria"
              label="Categoria"
              disabled
              required
            >
            </v-text-field>
            <v-text-field
              v-model="produtoAtual.quantidade"
              label="Quantidade atual"
              disabled
              required
            >
            </v-text-field>
            <v-text-field
              v-model="produtosEnviados"
              label="Quantidade para enviar"
              required
            >
            </v-text-field>
          </v-container>
        </v-form>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="baixarQuantidade(produtoAtual)">
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
  props: ["dialog", "produtoAtual"],
  data() {
    return {
      produtosEnviados: 0,
    };
  },
  methods: {
    fecharModal() {
      this.$emit("controle");
    },
    async baixarQuantidade(produto) {
      if (this.produtosEnviados == 0) return alert('você não está enviando nada');
      produto.quantidade = produto.quantidade - this.produtosEnviados;
      await controller.editProduto(produto);
      this.$emit("controle");
    },
  },
};
</script>