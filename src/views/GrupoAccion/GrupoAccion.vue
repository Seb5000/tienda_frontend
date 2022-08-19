<template>
	<div>
		<h1>Grupo Accion</h1>
		<router-link class="nav-link" :to="{ name: 'AgregarGrupo'}">
            <button>
                Agregar grupo
            </button>
        </router-link>
		<DataTable 
            :columns="columns" 
            :api="api"
            ref="DT_GrupoAccion" 
        >
            <template #Acciones="{fila}">
                <button class="btn btn-success" @click="ver(fila.id)">Ver</button>
                <button class="btn btn-danger" @click="borrar(fila.id)">Borrar</button>
            </template>
        </DataTable>
	</div>
</template>

<script src="./GrupoAccion.js"></script>

<style scoped>
</style>