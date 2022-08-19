<template>
	<div>
		<h1>Venta</h1>
        <DataTable :columns="columns" :api="api"/>
	</div>
</template>

<script>
import DataTable from '../components/DataTable.vue'
export default {
    name: "Venta",
    components:{
        DataTable
    },
    data() {
        return {
            api: {
                Url:'http://localhost:8000/api/venta'
            },
            columns: [
                { name: 'indexFila', text: '#' },
                { name: 'Producto', text: 'Producto' },
                { name: 'Cantidad', text: 'Cantidad' },
                { name: 'HPrecio', text: 'Precio Compra' },
                { name: 'FechaVenta', text: 'Fecha venta' },
            ],
        }
    }
}
</script>