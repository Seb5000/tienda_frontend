<template>
    <div class="contenedor-principal">
        <form action="compartido/login.inc.php" method="post">
            <div class="contenedor-titulo">
                <h2>Login <br> Casa de Arte</h2>
            </div>
            <div class="mensaje">
                <p class="mensaje-texto">mensaje</p>
            </div>
            <div class="contenedor-campo">
                <input type="text" name="usuario" autocomplete="off" required>
                <label for="usuario" class="etiqueta">
                    <span class="contenido-label">Usuario</span>
                </label>
            </div>
            <div class="contenedor-campo">
                <input type="password" name="clave" autocomplete="off" required>
                <label for="clave" class="etiqueta">
                    <span class="contenido-label">Contrase&ntilde;a</span>
                </label>
            </div>
            <button type="submit" name="login-submit" class="boton">Ingresar</button>
            
        </form>
    </div>
</template>

<script src="./Login.js"></script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Merienda', cursive;
}

body{
    height: 100vh;

}
.contenedor-principal{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: auto;
    margin-top: 100px;
    background-color: white;
    width: 350px;
    height: 500px;
    border-radius: 25px;
    border: 1px solid;
    box-shadow: 0px 9px 27px -6px rgba(206, 0, 0, 0.75);
}

form{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
}

.contenedor-titulo{
    height: 140px;
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    font-size: 25px;
    text-align: center;
}

.mensaje-texto{
    color: red;
}
.contenedor-campo{
    width: 80%;
    height: 80px;
    position: relative;
    /*background-color: rgba(253, 165, 165, 0.4);*/
    overflow: hidden;
    border-radius: 10px;
    border: 1px solid black;
    box-shadow: 0px 2px 13px -6px rgba(206, 0, 0, 0.75);
}

.contenedor-campo input{
    width: 100%;
    height: 100%;
    color: black;
    padding-top: 40px;
    padding-left: 15px;
    font-size: 22px;
    border: none;
    background-color: transparent;
    outline: none;
}

.contenedor-campo label{
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0px;
    left: 0px;
    pointer-events: none;
    border-bottom: 2px solid white;
}

.contenedor-campo label::after{
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    border-bottom: 2px solid black;
    left: 0px;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
}

.contenido-label{
    color: black;
    position: absolute;
    bottom: 5px;
    left: 5px;
    font-size: 22px;
    transition: all 0.3s ease;
}

.contenedor-campo input:focus + label .contenido-label,
.contenedor-campo input:valid + label .contenido-label{
    transform: translateY(-180%);
    font-size: 16px;
    color: black;
}

.contenedor-campo input:focus + label::after,
.contenedor-campo input:valid + label::after{
    transform: translateX(0%);
    
}

.boton{
    font-size: 20px;
    padding: 15px;
    border-radius: 15px;
    border: 1px solid black;
    background-color: rgb(255, 235, 235);
    margin-bottom: 20px;
    margin-right: 10px;
    margin-top: 20px;
    cursor: pointer;
    box-shadow: 0px 2px 13px -6px rgba(206, 0, 0, 0.75);
}

.boton:hover{
    background-color: rgb(255, 73, 73);
}

@media (max-width: 600px) {
    .contenedor-principal{
        margin-top: 50px;
    }
}

</style>