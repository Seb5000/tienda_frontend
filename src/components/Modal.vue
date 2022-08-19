<template>
    <div class="contenedorModal">
        <div class="modal-backdrop" @click="close" >
        </div>
        <div class="modal">
            <header class="modal-header">
                <slot name="header"> Titulo por defecto </slot>
                <button type="button" class="btn-close" @click="close">
                    x
                </button>
            </header>

            <section class="modal-body">
                <slot name="body"> Cuerpo del modal </slot>
            </section>

            <footer class="modal-footer">
                <slot name="footer"> Footer </slot>
                <!-- <button type="button" class="btn-green" @click="close">
                    Close Modal
                </button> -->
            </footer>
        </div>
        
    </div>
</template>

<script>
export default {
	name: "Modal",
	methods: {
		close() {
			this.$emit("close");
		},
	},
};
</script>

<style scoped>
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

.contenedorModal{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    /* z-index: 22; */

}
.modal-backdrop {
	/* display: flex;
	justify-content: center;
	align-items: center; */

    background-color: rgba(0, 0, 0, 0.3);
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    -webkit-backdrop-filter: blur(12px);
    backdrop-filter: blur(12px);
    z-index: 11;
}

.modal {
    position: relative;
	background: #ffffff;
	display: flex;
	flex-direction: column;
    width: 80%;
    height: fit-content;
    z-index: 15;
    border-radius: 15px;
    padding: 15px;
    margin-top: 30px;
    margin-bottom: 30px;
}

.modal-header,
.modal-footer {
	padding: 15px;
	display: flex;
}

.modal-header {
	position: relative;
	border-bottom: 1px solid #eeeeee;
	color: #4aae9b;
    font-size: 1.5rem;
	justify-content: space-between;
}

.modal-footer {
	border-top: 1px solid #eeeeee;
	flex-direction: column;
	justify-content: flex-end;
}

.modal-body {
	position: relative;
	padding: 0px 10px 10px 10px
}

.btn-close {
	position: absolute;
	top: 0;
	right: 0;
	border: none;
	font-size: 20px;
	padding: 10px;
	cursor: pointer;
	font-weight: bold;
	color: #4aae9b;
	background: transparent;
}

.btn-green {
	color: white;
	background: #4aae9b;
	border: 1px solid #4aae9b;
	border-radius: 2px;
}
</style>