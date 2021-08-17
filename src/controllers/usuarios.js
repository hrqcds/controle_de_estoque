import api from "../services/api"

export default {

    criarUsuario: async(usuario)=>{
        await api.post('usuarios/create', usuario)
    },

    logando: async (usuario)=>{
        return await api.post('usuarios/login', usuario)
    } 
    

}