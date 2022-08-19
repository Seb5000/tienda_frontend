<template>
	<div>
		<h1>Producto</h1>
		<button @click="nuevoProducto">Nuevo</button>
		<DataTable 
            :columns="columns" 
            :api="api"
            ref="datatable" 
        >
            <template #Acciones="{fila}">
                <button class="boton boton-azul" @click="ver(fila.id)">Ver</button>
            </template>
        </DataTable>

		<Modal v-show="modalProducto" @close="cerrarModal">
			<template v-slot:header>Agregar Producto</template>
			<template v-slot:body>
				<div class="formulario">
					<div class="entrada_formulario w50">
						<input
							class="input_formulario"
							placeholder="Codigo del producto"
							type="text"
							v-model="producto.Codigo"
						/>
						<label>Codigo del producto</label>
					</div>
					<div class="entrada_formulario w50">
						<input
							class="input_formulario"
							placeholder="Nombre del producto"
							type="text"
                            v-model="producto.Nombre"
						/>
						<label>Nombre del producto</label>
					</div>
					<div class="entrada_formulario w50">
						<input
							class="input_formulario"
							placeholder="Precio de compra"
							type="number"
                            v-model="producto.PrecioCompra"
						/>
						<label>Precio de compra</label>
					</div>
					<div class="entrada_formulario w50">
						<input
							class="input_formulario"
							placeholder="Precio de venta"
							type="number"
                            v-model="producto.PrecioVenta"
						/>
						<label>Precio de venta</label>
					</div>
					<div class="entrada_formulario w100">
						<textarea
							class="input_formulario"
							placeholder="Precio de venta"
							rows="3"
							cols="50"
                            v-model="producto.Descripcion"
						></textarea>
						<label>Descripcion</label>
					</div>
				</div>
			</template>
			<template v-slot:footer>
				<div class="contenedor_botones">
					<button class="boton boton-peligro">Cancelar</button>
					<button v-if="!editar" class="boton boton-exito" @click="guardar">Guardar</button>
                    <button v-if="editar" class="boton boton-azul" @click="actualizar">Actualizar</button>
				</div>
			</template>
		</Modal>

        <Modal v-show="modalDetalle" @close="modalDetalle = false">
			<template v-slot:header>Detalle Producto</template>
			<template v-slot:body>
				<div class="formulario-basico">
                    <div>
                        <label>Nombre</label>
                        <h3>{{producto.Nombre}}</h3>
                    </div>
                    <div>
                        <label>Codigo</label>
                        <h3>{{producto.Codigo}}</h3>
                    </div>
                    <div class="fila-completa">
                        <label>Descripcion</label>
                        <h3>{{producto.Descripcion}}</h3>
                    </div>
                    <div>
                        <label>Precio compra</label>
                        <h3>{{producto.PrecioCompra}}</h3>
                    </div>
                    <div>
                        <label>Precio venta</label>
                        <h3>{{producto.PrecioVenta}}</h3>
                    </div>
                </div>
			</template>
			<template v-slot:footer>
				<div class="contenedor_botones">
					<button class="boton boton-peligro" @click="borrarProducto(producto.id)">Borrar</button>
					<button class="boton boton-exito" @click="editarProducto">Editar</button>
				</div>
			</template>
		</Modal>
	</div>
</template>

<script src="./Producto.js"></script>

<style scoped>
</style>