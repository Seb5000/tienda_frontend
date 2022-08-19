<template>
    <div>
        <table class="tabla">
            <thead>
                <tr>
                    <th class="cabecera" v-for="th in tableHeader" :key="th">
                        <div>
                            <span>{{ th.text }}</span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filter none:event" viewBox="0 0 16 16">
                                    <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                                </svg>
                            </span>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="fila" :class="{ 'activa': td.filaActiva}" v-for="td in tableData" :key="td.id" @click="marcarFila(td.id)">
                    <td class="casilla" v-for="llave in llavesData" :key="llave">
                        <!-- <slot :name="llave">{{ td[llave] }}</slot> -->
                        <slot :name="llave" v-bind:fila="td">{{ td[llave] }}</slot>
                        <!-- {{ td[llave] }} -->
                        <!-- <slot v-bind:Acciones="td"></slot> -->
                        <!-- <slot :name="llave"></slot> -->
                    </td>
                </tr>
            </tbody>
            
        </table>
        <div class="contenedorPaginacion">
            <div>
                <span> mostrando {{ paginacion.desde}} al {{ paginacion.hasta }} 
                    de {{ paginacion.total }} registros
                </span>
            </div>
            <div class="paginacion">
                <a class="pagina" @click="cambiarPagina(paginacion.pagina_actual-1)"> &#5130; </a>
                <a class="pagina" :class="n == paginacion.pagina_actual ? 'activo' : ''" 
                    v-for="n in paginacion.ultima_pagina" :key="n"
                    @click="cambiarPagina(n)"
                >
                    {{n}}
                </a>
                <a class="pagina" @click="cambiarPagina(paginacion.pagina_actual+1)"> &#5125; </a>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "DataTable",
    data(){
        return {
            data: [],
            data2: [],
            paginacion: {
                pagina_actual: 1,
                ultima_pagina: 1,
                por_pagina: 10,
                desde: 1,
                hasta: 10,
                total: 10
            },
            params: {
                page:1
            },
        }
    },
    created() {
        this.actualizarTabla();
    },
    methods: {
        async getData() {
            const apiClient = axios.create({
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            const response = await apiClient.get(this.api.Url, {params:this.params});
            
            // Fin datos para la paginacion
            return response.data;
            // const response = await fetch(this.api.Url)
            // return response.json()
        },
        actualizarTabla(){
            this.getData().then(res => {
                console.log(res);
                // Results.map(obj=> ({ ...obj, Active: 'false' }))
                // this.data = res.data
                
                // Inicio datos para la paginacion
                if(res.meta){
                    console.log("Entro al meta");
                    this.paginacion.pagina_actual = res.meta.current_page;
                    this.paginacion.ultima_pagina = res.meta.last_page;
                    this.paginacion.por_pagina = res.meta.per_page;
                    this.paginacion.desde = res.meta.from;
                    this.paginacion.hasta = res.meta.to;
                    this.paginacion.total = res.meta.total;
                }

                let desde = res.meta.from;

                this.data = res.data.map((obj, index)=> ({ ...obj, indexFila: desde+index, filaActiva: false }))
                // Fin datos para la paginacion
            })
        },
        cambiarPagina(num){
            this.params.page = num;
            this.actualizarTabla();
        },
        marcarFila(id){
            this.data = this.data.map( elem => {
                if(elem.id === id){
                    return { ...elem, filaActiva: true}
                }
                return { ...elem, filaActiva: false}
            })
        }
    },
    computed: {
        tableHeader() {
            return this.columns
        },
        tableData() {
            return this.data
        },
        llavesData() {
            // const llaves = []
            // for(let fila in this.columns){
            //     llaves.push(fila.name)
            // }
            var keyArray = this.columns.map(function(item) { return item["name"]; });
            return keyArray;
        }
    },
    props:{
        columns: { type: Array },
        api: { default: "" },
    }
}
</script>

<style scoped>
@font-face {
    font-family: "Raleway";
    src: url('~@/assets/fonts/Raleway/Raleway-Italic-VariableFont_wght.ttf') format('truetype');
    src: url('~@/assets/fonts/Raleway/Raleway-VariableFont_wght.ttf') format('truetype');
    font-weight: 100 900;
    font-style: italic;
}

@font-face {
    font-family: "Exo 2";
    src: url('~@/assets/fonts/Exo_2/Exo2-Italic-VariableFont_wght.ttf') format('truetype');
    src: url('~@/assets/fonts/Exo_2/Exo2-VariableFont_wght.ttf') format('truetype');
    font-weight: 100 900;
    font-style: italic;
}

* {
    font-size: 100%;
    font-family: 'Exo 2', sans-serif;

}

.tabla{
    width: 100%;
    box-shadow: 0 0 14px 0 rgb(53 64 82 / 5%);

}
.cabecera{
    box-shadow: -1px -1px 0 0 #f1f1f1, 0 -1px 0 0 #f1f1f1 inset;
    height: 50px;
    padding: 0 15px;
    text-overflow: ellipsis;

}
.fila{
    box-shadow: 0 -1px 0 0 #f1f1f1 inset;
}

.fila.activa{
    box-shadow: 0px 0px 2px 1px #5e5e5ee3 inset;
    background-color: beige !important;
    outline: auto;
}

.fila:hover{
    background-color: #acacac3d;
}

.fila:focus, .fila:active, .fila:focus-within, .fila:target, .fila:visited{
    background-color: #5e5e5e3d;
    box-shadow: 0px 0px 4px 0px #0000008a inset;
}

.casilla{
    padding: 0 15px;
    line-height: 42px;
    height: 42px;
    box-shadow: -1px 0 0 #f1f1f1;
}

.contenedorPaginacion{
    display: flex;
    justify-content: space-evenly;
    margin: 20px;
}

.paginacion{
    margin-left: auto;
    display: flex;
    flex-wrap: wrap;
}

.pagina{
    color: #23232e;
    padding: 8px 16px;
    text-decoration: none;
    background-color: white;
    transition: background-color .3s;
    border: 1px solid #ddd;
    margin: 0 2px;
    border-radius: 5px;
    cursor: pointer;
}

.pagina.activo{
    color: white;
    background-color: #56d674;
    border: 1px solid rgb(63, 164, 87);
}
</style>