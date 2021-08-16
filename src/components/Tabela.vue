<template>
      <v-simple-table fixed-header height="200px">
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
        <td>{{ produto.createdAt }}</td>
        <td>{{ produto.updatedAt }}</td>
        <td>
          <div class="opcoes">
            <v-btn icon ><v-icon color="green">mdi-plus</v-icon></v-btn>
            <v-btn icon><v-icon medium color="primary">mdi-pen</v-icon></v-btn>
            <v-btn icon ><v-icon color="red">mdi-delete</v-icon></v-btn>            
            
          </div>
        </td>
      </tr>
    </tbody>
  </v-simple-table>
</template>

<script>
export default {
    props: {
        produtos: {
            type: Array || String,
        }
    }
}
</script>

<style scoped>

    

    .opcoes{
        
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

</style>