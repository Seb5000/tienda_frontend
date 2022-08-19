import DataTable from '@/components/DataTable.vue';
import Modal from "@/components/Modal.vue";
import EventService from "@/services/EventService.js";

export default {
    name: "GrupoAccion",
    components:{
        DataTable,
        Modal
    },
    data() {
        return {
            columns: [
                { name: 'indexFila', text: '#' },
                { name: 'Usuario', text: 'Usuario' },
                { name: 'TipoAccion', text: 'Tipo' },
                
                { name: 'FechaAccion', text: 'Fecha' },
                { name: 'Monto', text: 'Monto' },
                { name: 'CantidadProductos', text: 'Cantidad de productos' },
                { name: 'Acciones', text: 'Acciones' },
            ],
            api: {
                Url:'http://localhost:8000/api/GrupoAccion/index'
            },
            grupoCompra:{},
        };
    },
    methods: {
        ver(id){
            console.log("ver "+id);
            this.$router.push({name:'AgregarGrupo', params:{id:id}})
        },
        borrar(id){
            EventService.borrarGrupoAccion(id)
                .then((response) => {
                    console.log("Se borro el grupo accion", response.data);
                    this.$refs['DT_GrupoAccion'].actualizarTabla();
                })
                .catch((error) => {
                    console.log("Este es el error:" + error.response);
                });
        }
    },
    

};