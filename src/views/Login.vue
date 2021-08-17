<template>
    <div class="container">

        <div class="formulario">
            <h1>Cadastro de Usuário</h1>
            <v-form class="form">
                <v-text-field v-model="usuarioCadastro.login" type="email" label="Login"/>
                <v-text-field v-model="usuarioCadastro.password" type="password" label="Password"/>
                <v-row justify="center">
                    <v-btn @click="cadastrarUsuario">Cadastrar Usuário</v-btn>
                </v-row>
            </v-form>
        </div>

        <div class="formulario">
            <h1>Login de Usuário</h1>
            <v-form class="form">
                <v-text-field v-model="usuarioLogin.login" label="Login"/>
                <v-text-field v-model="usuarioLogin.password" label="Password"/>
                <v-row justify="center">
                    <v-btn @click="efetuarLogin">Efetuar login</v-btn>
                </v-row>
            </v-form>
        </div>   

    </div>
</template>

<script>

import controller from "../controllers/usuarios"

export default {

    updated(){
        if(this.logged) return this.$router.push('/estoque')
    },

    methods: {
        async cadastrarUsuario(){
            if(this.usuarioCadastro.login == "") return alert('Preencha o login')
            if(this.usuarioCadastro.password == "") return alert('Preencha a senha')

            await controller.criarUsuario(this.usuarioCadastro)

            this.usuarioCadastro.login = ""
            this.usuarioCadastro.password = ""

            this.logged = true
            this.$router.push('/estoque')
        },

        async efetuarLogin(){
            this.logged = await controller.logando(this.usuarioLogin)
            if(this.logged.data) return this.$router.push('/estoque')
            if(!this.logged.data) return alert("Usuario ou senha incorretos")
 
        }
    },
    data(){
        return{
            usuarioLogin: {
                login: "",
                password: ""
            },
            usuarioCadastro: {
                login: "",
                password: ""
            },
            logged: false
        }
    } 
    
}
</script>

<style scoped>

    .container{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin-top: 32px;
    }

    .formulario{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 16px;
    }

    .form{
        width: 100%;
    }

</style>