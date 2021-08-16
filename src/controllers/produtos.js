import api from "../services/api"

export default {
    
    // buscando todos os produtos
    buscarProdutos: async () => {
        let produtos = []
        produtos = (await api.get('baixar-produtos')).data        
        return produtos
    },

    // adicionar produto
    addProduto: async (produto) => {
        await api.post('adicionar-produtos', produto)
    }


}