import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store';
import login from './components/User/login.vue'
import signup from './components/User/signup.vue'
import landingspage from './components/landingspage.vue'
import materiaaldetail from './components/Materiaal/MateriaalDetail/MateriaalDetail.vue'
import materiaalpagina from './components/Materiaal/ProductPage/ProductsPage.vue'
import profilepagina from './components/ProfilePage.vue'
import verhuurder from './components/VerhuurPage.vue'
import zoekertjespage from './components/PlaatsZoekertje.vue'
import winkelmand from './components/Rent/Winkelmandje.vue'
import { createRouter, createWebHistory } from 'vue-router';
import { setupCalendar, Calendar, DatePicker } from 'v-calendar';
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';

// Use plugin defaults (optional)
const app = createApp(setupCalendar, Calendar, DatePicker)
app.use(setupCalendar, {})

// Use the components
app.component('VCalendar', Calendar)
app.component('VDatePicker', DatePicker)


const routes = [
        { path: '/', component: landingspage, name: 'login', meta: { requiresAuth: false } },
        { path: '/materiaal', name: 'materiaal',component: materiaalpagina, meta: { requiresAuth: false } },
        { path: '/products/:id', component: materiaaldetail, meta: { requiresAuth: false } },
        { path: '/user/:id', component: profilepagina, name: 'User', meta: { requiresAuth: true } },
        { path: '/zoekertje', component: zoekertjespage, meta: { requiresAuth: false } },
        { path: '/verhuurder', component: verhuurder, meta: { requiresAuth: true } },
        { path: '/winkelmand', component: winkelmand, meta: { requiresAuth: true } },
        { path: '/login', component: login },
        { path: '/signup', component: signup },
]

const router = createRouter({
        history: createWebHistory(),
        routes,
        scrollBehavior(to, from, savedPosition) {
            if (savedPosition) {
                // If a saved position is available, use it
                return savedPosition;
            } else {
                // Otherwise, scroll to the top of the page
                return { top: 0 };
            }
        },
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (!store.getters.isAuthenticated) {
        next({ path: '/login' });
      } else {
        next();
      }
    } else {
      next();
    }
  });
  


createApp(App).use(store).use(router).mount('#app')