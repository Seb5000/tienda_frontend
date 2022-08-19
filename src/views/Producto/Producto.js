import DataTable from '@/components/DataTable.vue';
import Modal from "@/components/Modal.vue";
import EventService from "@/services/EventService.js";
import Buscador from "@/components/Buscador.vue";


export default {
    name: "Producto",
    components:{
        DataTable,
        Modal,
        Buscador
    },
    data() {
        return {
            columns: [
                { name: 'indexFila', text: '#' },
                { name: 'Codigo', text: 'Codigo' },
                { name: 'Nombre', text: 'Nombre' },
                { name: 'PrecioCompra', text: 'Compra' },
                { name: 'PrecioVenta', text: 'Venta' },
                { name: 'Acciones', text: 'Acciones' },
            ],
            api: {
                Url:'http://localhost:8000/api/Producto/index'
            },
            modalProducto: false,
            modalDetalle: false,
            editar: false,
            producto:{},
        };
    },
    methods: {
        cerrarModal() {
			this.modalProducto = false;
		},
        nuevoProducto(){
            this.producto = {};
            this.editar = false;
            this.modalProducto = true;
        },
        editarProducto(){
            this.editar = true;
            this.modalDetalle = false;
            this.modalProducto = true;
        },
        ver(id){
            console.log("ver "+id);
            EventService.showProducto(id)
				.then((response) => {
					let resp = response.data;
                    this.modalDetalle = true;
                    this.producto = resp.data;
				})
				.catch((error) => {
					console.log("Este es el error:" + error.response);
				});
        },
        guardar(){
            console.log("Se va guardar");
            EventService.newProducto(this.producto)
				.then((response) => {
					console.log("Se creo el producto", response.data);
                    this.$refs['datatable'].actualizarTabla();
					this.cerrarModal();
				})
				.catch((error) => {
					console.log("Este es el error:" + error.response);
				});
        },
        actualizar(){
            console.log("Se va actualizar");
            EventService.updateProducto(this.producto)
				.then((response) => {
					console.log("Se actualizo el producto", response.data);
                    this.$refs['datatable'].actualizarTabla();
                    this.cerrarModal();
				})
				.catch((error) => {
					console.log("Este es el error:" + error.response);
				});
        },
        
        borrarProducto(id){
            EventService.deleteProducto(id)
				.then((response) => {
					console.log("Se borro el producto", response.data);
                    this.$refs['datatable'].actualizarTabla();
                    this.modalDetalle = false;
				})
				.catch((error) => {
					console.log("Este es el error:" + error.response);
				});
        }
        
    },

};