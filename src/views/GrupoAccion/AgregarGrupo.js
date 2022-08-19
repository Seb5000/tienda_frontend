import BuscadorBasico from "@/components/BuscadorBasico.vue";
import EventService from "@/services/EventService.js";

export default {
    name: "AgregarGrupo",
    components:{
        BuscadorBasico
    },
    data(){
        return {
            tiposAcciones: [],
            listaAccion: [],
            grupoAccion: {},
            existeGrupoAccion: false,
            editarGrupoAccion: true,
        }
    },
    methods:{
        listTipoAccion(){
            EventService.listTipoAccion()
				.then((response) => {
                    const resultado = response.data
                    this.tiposAcciones = resultado.data;
				})
				.catch((error) => {
					console.log("Este es el error del con compras:" + error.response);
				});
        },
        agregar(){
            console.log("Se hizo click en el boton agregar");
            this.$refs.buscador.buscar();
        },
        registrarAccion(producto){
            let HMonto = 0;
            if(this.grupoAccion.TipoAccion == 1){
                HMonto = producto.PrecioCompra;
            }else{
                HMonto = producto.PrecioVenta;
            }

            const accion = {
                Producto: producto.id,
                Cantidad: 1,
                HMonto: HMonto,
                FechaAccion: this.grupoAccion.FechaAccion,
                Nombre: producto.Nombre,
                Codigo: producto.Codigo,
                Descripcion: producto.Descripcion,
                PrecioCompra: producto.PrecioCompra,
                PrecioVenta: producto.PrecioVenta,
                Foto: producto.Foto,
            }
            this.listaAccion.push(accion);
        },
        mostrarGrupoAccion(id){
            EventService.mostrarGrupoAccion(id)
				.then((response) => {
					console.log("Este es el resultado del store con compras", response.data);
                    const resultado = response.data
                    this.grupoAccion = resultado.data;
                    //this.listaAccion = this.grupoAccion.acciones;
                    return resultado.data;
				})
				.catch((error) => {
					console.log("Este es el error del con compras:" + error.response);
				});
        },
        listarAcciones(id){
            EventService.listaAcciones({GrupoAccion: id})
                .then((response) => {
                    console.log("Este es el resultado del store con compras", response.data);
                    const resultado = response.data
                    this.listaAccion = resultado.data;
                })
                .catch((error) => {
                    console.log("Este es el error del con compras:" + error.response);
                });
        },
        habilitarEdicion(){
            this.editarGrupoAccion = true;
        },
        guardarGrupoAccion(){
            console.log("Se va guardar el grupo accion", this.grupoAccion);
            delete this.grupoAccion.id;
            EventService.guardarGrupoAccion(this.grupoAccion)
				.then((response) => {
                    let resp = response.data;
                    this.grupoAccion = resp.data;
                    this.existeGrupoAccion = true;
                    this.editarGrupoAccion = false;
					console.log("Este es el resultado de grupo accion", resp.data);
				})
				.catch((error) => {
					console.log("Este es el error del con compras:" + error.response);
				});

        },
        guradarGrupo(){
            console.log("Guardar grupo")
            this.grupoAccion.Acciones = this.listaAccion;
            EventService.guardarGrupo(this.grupoAccion)
				.then((response) => {
                    let resp = response.data;
                    this.$router.push({ name: 'GrupoAccion' })
					console.log("Este es el resultado de grupo accion", resp.data);
				})
				.catch((error) => {
					console.log("Este es el error del con compras:" + error.response);
				});
        },
        actualizarGrupoAccion(){
            EventService.actualizarGrupoAccion(this.grupoAccion)
				.then((response) => {
                    let resp = response.data;
                    this.grupoAccion = resp.data;
                    this.existeGrupoAccion = true;
                    this.editarGrupoAccion = false;
					console.log("Este test es el resultado de grupo accion", resp.data);
				})
				.catch((error) => {
					console.log("Este es el error del con compras:" + error.response);
				});
        },
        borrarElemento(item){
            console.log(item);
            if(item.id){
                item.borrar = true;
            }else{
                var idx = this.listaAccion.indexOf(item);
                if (idx > -1) {
                    this.listaAccion.splice(idx, 1); // 2nd parameter means remove one item only
                }
            }
        }
    },
    computed:{
        precioTotal(){
            let precioTotal = 0;
            this.listaAccion.forEach(item => {
                let precioItem = parseFloat(item.HMonto).toFixed(2);
                if(item.borrar || item.Cantidad == "" || item.Cantidad == null){
                    return;
                }
                precioTotal += precioItem*item.Cantidad;
            });
            return precioTotal;
            // return this.listaAccion.reduce(
            //     (previousValue, currentItem) => {
            //         let precioItem = parseFloat(currentItem.PrecioCompra).toFixed(2);
            //         if(precioItem <= 0 || currentItem.Cantidad == "" || currentItem.Cantidad == null || currentItem.borrar){
            //             return 0
            //         }
            //         return previousValue + precioItem*currentItem.Cantidad;
            //     }, 0
            // )
        },
        listaAccionFiltrada(){
            return this.listaAccion.filter(item => {
                return !item.borrar;
            })
        }
    },
    created(){
        this.listTipoAccion();
        
        if(this.$route.params.id){
            this.grupoAccion.id = this.$route.params.id;
            this.editarGrupoAccion = false;
            this.existeGrupoAccion = true;
            console.log("Tiene id", this.grupoAccion.id)
            this.mostrarGrupoAccion(this.grupoAccion.id)
            this.listarAcciones(this.grupoAccion.id)
            
        }
    }
};