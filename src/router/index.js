import { createWebHistory, createRouter } from "vue-router";
import Inicio from "@/views/Inicio.vue";
import Producto from "@/views/Producto/Producto.vue";
import GrupoAccion from "@/views/GrupoAccion/GrupoAccion.vue";
import AgregarGrupo from "@/views/GrupoAccion/AgregarGrupo.vue";
import Compra from "@/views/Compra.vue";
import Venta from "@/views/Venta.vue";
import Login from "@/views/Login/Login.vue";

const routes = [
    {
        path: "/",
        name: "Inicio",
        component: Inicio,
    },
    {
        path: "/Login",
        name: "Login",
        component: Login,
    },
    {
        path: "/Producto",
        name: "Producto",
        component: Producto,
    },
    {
        path: "/Compra",
        name: "Compra",
        component: Compra,
    },
    {
        path: "/Venta",
        name: "Venta",
        component: Venta,
    },
    {
        path: "/GrupoAccion",
        name: "GrupoAccion",
        component: GrupoAccion,
    },
    {
        path: "/AgregarGrupo/:id?",
        name: "AgregarGrupo",
        component: AgregarGrupo,
    },
    
];

const router = createRouter(
    {
        history: createWebHistory(),
        routes,
    }
);

export default router;