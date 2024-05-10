import { createRouter, createWebHistory } from 'vue-router'
import PaginaHome from '../views/Home.vue'
import PaginaLogin from '../views/LoginOptions.vue'
import PaginaLogout from '../views/Logout.vue'
import PaginaDashboard from '../views/PaginaDashboard.vue'
import Login from '../views/Login.vue'
import Horario from '../views/Horario.vue'
import datospersonales from '../views/DatosPersonales.vue'
import GestorCitas from '../views/GestorCitas.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: PaginaHome
  },
  {
    path: '/login',
    name: 'login',
    component: PaginaLogin,
  },
  {
    path: '/login/:tipoUsuario', // Ruta para login personalizado con props
    name: 'loginPersonalizado',
    component: Login,
    props: true // Permitimos pasar props a PaginaLogin
  },
  {
    path: '/logout',
    name: 'logout',
    component: PaginaLogout,
  },

  {
    path: '/horario',
    name: 'horario',
    component: Horario,
  },
  {
    path: '/citas',
    name: 'citas',
    component: GestorCitas,
  },
  
  {
    path : '/datospersonales',
    name : 'datospersonales',
    component : datospersonales,
  },
  /*****************************
   * Dashboard 
   *****************************/
  {
    path: '/dashboard',
    name: 'dashboard',
    component: PaginaDashboard, 
    meta: { authOnly: true }
  },
]

function isLoggedIn() {
  return localStorage.getItem("authOnly")
}

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authOnly)) {
    if (!isLoggedIn()) {
      next({
        path: "/login",
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.guestOnly)) {
    if (isLoggedIn()) {
      next({
        path: "/dashboard",
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router