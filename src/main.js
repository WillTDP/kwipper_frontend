import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import login from './components/User/login.vue
import signup from './components/User/signup.vue'
import landingspage from './components/landingspage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
        { path: '/', component: landingspage },
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