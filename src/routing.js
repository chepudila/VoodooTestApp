import VueRouter from 'vue-router';
import Home from './components/Home/Home';
import Posts from './components/Posts/Posts';
import NotFound from './components/NotFound/NotFound';

export default new VueRouter({
    routes: [
        {path: '/', component: Home},
        {path: '/posts', component: Posts},
        {path: '*', component: NotFound},
    ],
    mode: 'history'
});