import {createWebHashHistory,createRouter} from 'vue-router';
import HomePage from './components/HomePage.vue';
import AboutPage from './components/AboutPage.vue';
import ContactPage from './components/ContactPage.vue';
import ProfilePage from './components/ProfilePage.vue';
import PageNotFoundPage from './components/PageNotFoundPage.vue';

const routes = [
    {
        name: 'HomePage',
        path: '/',
        component: HomePage
    },
    {
        name: 'AboutPage',
        path: '/about-us',
        component: AboutPage
    },
    {
        name: 'ContactPage',
        path: '/contact-us',
        component: ContactPage
    },
    {
        name: 'ProfilePage',
        path: '/profile/:name',
        component: ProfilePage
    },
    {
        name: 'PageNotFoundPage',
        path: '/:pathMatch(.*)*',
        component: PageNotFoundPage
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;