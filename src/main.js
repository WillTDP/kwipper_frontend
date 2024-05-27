import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import login from './components/User/login.vue'
import signup from './components/User/signup.vue'
import landingspage from './components/landingspage.vue'
import materiaaldetail from './components/Materiaal/MateriaalDetail.vue'
import materiaalpagina from './components/Materiaal/ProductsPage.vue'
import profilepagina from './components/ProfilePage.vue'
import verhuurder from './components/VerhuurPage.vue'
import zoekertjespage from './components/PlaatsZoekertje.vue'
import ProductDetailPageVue from './components/Materiaal/ProductDetailPage.vue'
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
        { path: '/', component: landingspage },
        { path: '/materiaal', name: 'materiaal',component: materiaalpagina },
        { path: '/products/:id', component: materiaaldetail },
        { path: '/user', component: profilepagina },
        { path: '/zoekertje', component: zoekertjespage },
        { path: '/verhuurder', component: verhuurder },
        { path: '/winkelmand', component: winkelmand },
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

createApp(App).use(router).mount('#app')