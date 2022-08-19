<template>
	<div class="contenedor_principal">
		<menu-lateral v-show="mostrarMenuLateral"/>
        <div class="contenedor">
            <barra-login @cambiarMenu="toggleMenu" />
            <router-view/>
        </div>
		
	</div>
</template>

<script>
import MenuLateral from './components/MenuLateral.vue'
import BarraLogin from './components/BarraLogin.vue'


export default {
	name: 'App',
	components: {
		MenuLateral,
		BarraLogin,
	},
    data() {
		return {
			mostrarMenuLateral: true
		};
	},
    methods: {
        toggleMenu({menu}){
            this.mostrarMenuLateral = menu;
        }
    }
}
</script>

<style scoped>

.contenedor_principal{
	display: flex;
	flex-direction: row;
	min-height: 100vh;
}

.contenedor {
    width: 100%;
}
</style>


