import { createApp } from 'vue';
import App from './App.vue';
import Home from './components/pages/Home.vue';
import Posts from './components/pages/Posts.vue';
import CreatePost from './components/pages/CreatePost.vue';
import PostsItem from './components/pages/PostsItem.vue'
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {   
        path: '/',
        component: Home,
        query: {id: 'home'}
    },
    {
        path: '/posts',
        component: Posts,
        query: {id: 'posts'}
    },
    {
        path: '/posts/:id',
        component: PostsItem,
    },
    {
        path: '/createpost',
        component: CreatePost,
        query: {id: 'createpost'}
    }
]  


const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    linkActiveClass: 'active'
})

const app = createApp(App);
app.use(router);
app.mount('#app');
