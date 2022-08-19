<template>
    <div class="barraLogin">
        <div class="menuHamburgesa" @click="alternarMenu()">
            <div class="linea1" :class="{'rotar' : !menu}"></div>
            <div class="linea2" :class="{'rotar' : !menu}"></div>
            <div class="linea3" :class="{'rotar' : !menu}"></div>
        </div>
        <p class="nombreUsuario">sebastian villarpando</p>
        <form action="compartido/logout.inc.php" method="POST">
        <button class="linkCerrarSesion" type="submit" name="logout-submit">Cerrar Sesion</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "BarraLogin",
    setup() {
        
    },
    data() {
		return {
			menu: true
		};
	},
    methods: {
		cerrarMenu() {
			//this.$emit("close");
		},
        alternarMenu(){
            this.menu = !this.menu;
            this.$emit('cambiarMenu', {
                menu: this.menu,
            })
        }
	},
}
</script>

<style scoped>
.barraLogin{
    background-color: aliceblue;
    height: 3rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid lightblue;
    justify-content: flex-end;
}

.menuHamburgesa{
    display: block;
    margin: 3px;
    cursor: pointer;
    z-index: 10;
    height: 25px;
}

.menuHamburgesa div{
    width: 25px;
	height: 3px;
	background-color: black;
	margin: 4px;
	border-radius: 1px;
	transition: all 0.3s ease;
}

.linea1.rotar{
	transform: rotate(-45deg) translate(-6px, 4px);
}
.linea2.rotar{
	opacity: 0;
}
.linea3.rotar {
	transform: rotate(45deg) translate(-6px, -4px);
}

.nombreUsuario{
    font-size: 1.5em;
    margin-left: 20px;
    margin-right: auto;
}

.linkCerrarSesion{
    border: none;
    cursor: pointer;
    margin: 15px;
    font-size: 1rem;
    background-color: transparent;
}
</style>