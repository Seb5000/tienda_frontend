<template>
	<div>
		<h1>Compra</h1>
        <DataTable :columns="columns" :api="api"/>
	</div>
</template>

<script>
import DataTable from '../components/DataTable.vue'
export default {
    name: "Compra",
    components:{
        DataTable
    },
    data() {
        return {
            api: {
                Url:'http://localhost:8000/api/compra'
            },
            columns: [
                { name: 'Producto', text: 'Producto' },
                { name: 'Cantidad', text: 'Cantidad' },
                { name: 'HPrecio', text: 'Precio Compra' },
                { name: 'FechaCompra', text: 'Fecha compra' },
            ],
        }
    }
}
</script>