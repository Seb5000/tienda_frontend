<template>
    <div class="sugerenciaInput">
        <input 
            type="text" 
            v-model="codigo" 
            v-on:keyup.enter="buscar" 
            class="inputBuscador" 
            placeholder="Codigo Producto"
        >
    </div>
</template>

<script>
import EventService from "@/services/EventService.js";

export default {
    name: "BuscadorBasico",
    data(){
        return {
            codigo: null,
            productos: []
        }
    },
    methods:{
        buscar(){
            console.log(this.codigo)
            EventService.buscarProducto({"Codigo" : this.codigo})
				.then((response) => {
					console.log("Este es el resultado del buscador", response.data);
                    let resp = response.data;
                    console.log(resp);
                    this.productos = resp.data;
                    console.log(this.productos.length);
                    if(this.productos.length == 1){
                        this.enviarProducto();
                        this.codigo = null;
                    }
				})
				.catch((error) => {
					console.log("Este es el error del buscador:" + error.response);
				});
        },

        enviarProducto(){
            this.$emit("enviarProducto", this.productos[0])
        },
    }
};
</script>

<style scoped>
.sugerenciaInput{
    display: inline-block;
    position: relative;
    padding: 10px;
    background-color: white;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    width: 100%;
}

.sugerenciaInput:focus-within{
    color: #212529;
    background-color: #fff;
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
}

.sugerenciaInput:not(:focus-within) .listaSugerencias{
    /* display: none; */
}



.inputBuscador{
    border: none;
    outline: none;
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    width: 100%;
    font-size: 16px;
}

.listaSugerencias{
    position: absolute;
    top: 100%;
    left: 0px;
    width: 100%;
    margin: 0px;
    padding: 0px;
    background: white;
    list-style: none;
    /* border-bottom: 1px solid rgba(122, 122, 122, 0.3);
    border-left: 1px solid rgba(122, 122, 122, 0.3);
    border-right: 1px solid rgba(122, 122, 122, 0.3); */
}

.listaSugerencias li{
    padding: 10px;
    color: black;
    border-bottom: 1px solid rgba(122, 122, 122, 0.3);
    border-left: 1px solid rgba(122, 122, 122, 0.3);
    border-right: 1px solid rgba(122, 122, 122, 0.3);
}

.listaSugerencias li:first-child{
    border-top: 1px solid rgba(122, 122, 122, 0.3);
}

.listaSugerencias li:last-child{
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
}


.listaSugerencias li:hover{
    cursor: pointer;

    background-color: rgba(219, 219, 219, 0.5);
}

.ocultar{
    display: none;
}
</style>