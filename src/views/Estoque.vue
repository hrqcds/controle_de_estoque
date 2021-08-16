<template>
    <div>
        <Tabela :produtos="produtos"/>     

    </div>
</template>
<script>
import controller from "../controllers/produtos";
import Tabela from "../components/Tabela.vue"

export default {
    components: {
        Tabela,
    },
  async created() {
    this.produtos = await controller.buscarProdutos();
    console.log(this.produtos)
  },
  data() {
    return {
      produtos: [],
    };
  },
};
</script>

