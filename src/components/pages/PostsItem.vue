<template>
    <div>
        <h3>Post Details</h3>
        <div>
            <div>ID: {{ id }}</div>
            <div>Title: {{ post.title }}</div>
            <div>Description: {{ post.description }}</div>
        </div>
        <div>
            <router-link to="/posts"  class="btn btn-warning">Back to Posts</router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'PostItem',
    data(){
        return{
            post: '',
            id: '',
        }
    },
    created(){
        this.getPostDetails()
    },
    methds:{
        getPostDetails(){
            this.id = this.$route.params.id;
            axios
                .get(`https://vue-project-5235d-default-rtdb.firebaseio.com/posts.json?id=${this.id}`)
                .then((response) => {
                    this.post = response.data[this.id];
                })
        }
    }
}
</script>

<style scoped>

</style>