<template>
    <div style="height: 100%">
        <router-link class="nav-link" :to="{ name: 'GrupoAccion'}">
            <button>
                Volver
            </button>
        </router-link>
        <div class="contenedor">
            <div class="contenedorDescripcion">
                <div class="row">
                    <div class="col-12 mb-3">
                        <label class="form-label">Referencia compra</label>
                        <input type="text" class="form-control" v-model="grupoAccion.Nombre" :disabled="!editarGrupoAccion">
                    </div>
                </div>
                <div class="row">
                    <!-- <div class="col-6 mb-3">
                        <label class="form-label">Nombre del usuario</label>
                        <h5>Nombre del usuario</h5>
                    </div> -->
                    <div class="col-6 mb-3">
                        <label class="form-label">Fecha</label>
                        <input class="form-control" type="date" v-model="grupoAccion.FechaAccion" :disabled="!editarGrupoAccion">
                    </div>
                    <div class="col-6 mb-3">
                        <label class="form-label">Tipo</label>
                        <select class="form-control" v-model="grupoAccion.TipoAccion" :disabled="!editarGrupoAccion">
                            <option v-for="ta in tiposAcciones" :value="ta.id" :key="ta.id">{{ta.Nombre}}</option>
                        </select>
                    </div>
                    <div class="col-12">
                        <a class="btn btn-success" v-show="!existeGrupoAccion" @click="guardarGrupoAccion">Guardar</a>
                        <a class="btn btn-warning" v-show="existeGrupoAccion&&!editarGrupoAccion" @click="habilitarEdicion">Editar</a>
                        <a class="btn btn-primary" v-show="existeGrupoAccion&&editarGrupoAccion" @click="actualizarGrupoAccion">Actualizar</a>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-12">
                        <!-- <Buscador @enviarObjeto="registrarProducto">
                            <template #sugerencia="{item}">
                                <div>
                                <div>Codigo: {{item.Codigo}}</div>
                                <div>Nombre: {{item.Nombre}}</div>

                                </div>
                            </template>
                        </Buscador> -->
                        <buscador-basico @enviarProducto="registrarAccion" ref="buscador"/>

                    </div>
                    <div class="col-12 mt-3">
                        <button class="btn btn-primary" @click="agregar">
                            Agregar
                        </button>
                    </div>
                    <div class="col-12 mt-3">
                        <button class="btn btn-success" @click="guradarGrupo">
                            Gruardar grupo
                        </button>
                    </div>
                </div>
            </div>
            <div class="contenedorLista">
                <ul class="list-group list-group-numbered">
                    <li v-for="item in listaAccionFiltrada" :key="item"
                        class="list-group-item d-flex justify-content-between align-items-start"
                    >
                        <div class="ms-2 me-auto">
                            <div class="fw-bold">
                                {{item.Nombre}}
                            </div>
                            <div>
                                Marca: marca 1
                            </div>
                            <div>
                                Precio unitario: {{item.HMonto}}
                            </div>
                            <div>
                                <input class="form-control" type="number" placeholder="Cantidad" v-model="item.Cantidad">
                            </div>
                        </div>
                        <div class="float-end">
                            <a class="btn btn-danger" @click="borrarElemento(item)">Borrar</a>
                        </div>
                    </li>
                </ul>
                <div>
                    <h3>Precio total: {{precioTotal}}</h3>
                </div>
            </div>

        </div>
    </div>
</template>

<script src="./AgregarGrupo.js"></script>

<style scoped>
    .contenedor{
        width: 100%;
        height: 100%;
        /* background-color: aquamarine; */
        /* border: 1px solid green; */
        display: flex;
        box-sizing: border-box;
        padding: 10px;
    }

    .contenedorDescripcion{
        min-width: 400px;
        /* border: 1px solid red; */
        height: 100%;
        /* background-color: brown; */
        padding: 10px;
    }

    .contenedorLista{
        min-width: 400px;
        /* background-color: cornflowerblue; */
        height: 100%;
        /* border: 1px solid yellow; */
        padding: 10px;
    }
</style>