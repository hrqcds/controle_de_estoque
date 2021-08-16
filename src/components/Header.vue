<template>
    
    <div>
        <h1>Controle de estoque</h1>

        <nav>
            <ul>
                <li><router-link to="/">Relatórios</router-link></li>
                <li><router-link to="/cadastro">Cadastro</router-link></li>                
            </ul>
        </nav>
    </div>

</template>
<script>
export default {
    
}
</script>
<style scoped>
    div{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 16px;
    }

    ul{
        display: flex;
        list-style: none;
        gap: 8px;
    }

    li{
        display: block;
        padding: 8px;
        background: #fff;
        border-radius: 8px;
        box-shadow: 1px 1px 3px rgba(0,0,0,0.8);
        transition: filter 2s;
    }

    li:hover{
        filter: brightness(0.9);
        cursor: pointer;
    }

    a{
        padding: 8px;
        text-decoration: none;
    }
</style>