import api from "../services/api"

export default {
    
    // buscando todos os produtos
    buscarProdutos: async () => {
        let produtos = []
        produtos = (await api.get('baixar-produtos')).data        
        return produtos
    },

    // buscar um unico produto
    buscarProduto: async (id) => {
        let produto = {}
        produto = (await api.get(`baixar-produto/${id}`)).data
        return produto
    },

    // adicionar produto
    addProduto: async (produto) => {
        await api.post('adicionar-produtos', produto)
    },

    // editar produto
    editProduto: async (produto) => {
        await api.put('editar-produto', produto)
    },

    // deletar produto
    delProduto: async (id) => {
        await api.delete(`deletar-produto/${id}`)
    }


}