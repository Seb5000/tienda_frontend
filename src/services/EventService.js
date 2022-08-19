import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default{
    showProducto(id){
        return apiClient.get('Producto/show/'+id)
    },
    newProducto(item){
        return apiClient.post('/Producto/store', item)
    },
    updateProducto(item){
        return apiClient.put('/Producto/update/'+item.id, item)
    },
    deleteProducto(id){
        return apiClient.delete('/Producto/destroy/'+id)
    },
    // TIPO ACCION
    listTipoAccion(){
        return apiClient.get('TipoAccion/list')
    },
    buscarProducto(item){
        return apiClient.post('/Producto/buscar', item)
    },

    // ACCION
    guardarGrupo(item){
        return apiClient.post('/Accion/guardarGrupo', item)
    },
    listaAcciones(params){
        return apiClient.get('/Accion/listaAcciones', {params: params})
    },

    // GRUPO ACCION
    mostrarGrupoAccion(id){
        return apiClient.get('/GrupoAccion/show/'+id)
    },
    guardarGrupoAccion(item){
        return apiClient.post('/GrupoAccion/store', item)
    },
    actualizarGrupoAccion(item){
        return apiClient.put('/GrupoAccion/update/'+item.id, item)
    },
    borrarGrupoAccion(id){
        return apiClient.delete('/GrupoAccion/destroy/'+id)
    },
}