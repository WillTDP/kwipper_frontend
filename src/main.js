import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import footer from './components/footer.vue'
import header from './components/header.vue'
import landingspage from './components/landingspage.vue'
import materiaaldetail from './components/MateriaalDetail.vue'
import materiaalpagina from './components/ProductsPage.vue'
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
        { path: '/', component: landingspage },
        { path: '/footer', component: footer },
        { path: '/header', component: header },
        { path: '/materiaal', component: materiaalpagina },
        { path: '/materiaaldetail', component: materiaaldetail }
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