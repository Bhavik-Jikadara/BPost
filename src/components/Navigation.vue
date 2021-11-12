<template>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">BPost</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link" @click.prevent="onHomeClick()">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/posts" class="nav-link" @click.prevent="onPostsClick()">Posts</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/createpost" class="nav-link" @click.prevent="onCreatePostClick()">CreatePost</router-link>
                    </li>
                </ul>
            </div>
        </nav>
</template>

<script>
export default {
    name: 'Navigation',
    methods:{
        onPostsClick(){
            this.$router.push({
                path: '/posts',
                query: {id: 'posts'}
            });
        },
        onCreatePostClick(){
            this.$router.push({
                path: '/createpost',
                query: {id: 'createpost'}
            });
        }
    }
}
</script>

<style scoped>
a.active{
    background: rgb(218, 218, 218);
    border-radius: 10px;
}
</style>