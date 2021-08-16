<template>
    <div>
        <Tabela :produtos="produtos" @atualizarTabela="atualizarTabela"/>     

    </div>
</template>
<script>
import controller from "../controllers/produtos";
import Tabela from "../components/Tabela.vue"

export default {
    components: {
        Tabela,
    },
  async mounted() {
    this.produtos = await controller.buscarProdutos();
  },
  methods: {
      atualizarTabela: async function (){
        this.produtos = await controller.buscarProdutos();
      }
  },
  data() {
    return {
      produtos: [],
    };
  },
};
</script>

