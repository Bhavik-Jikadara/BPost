<template>
    <div class="mt-3">
        <h2>Post Details Show</h2>
        <br><br>
        <table class="table table-borderd table-striped">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Show Details</th>
                </tr>
            </thead> 
            <tbody>
                <tr v-for="post in postDetails" :key="post.id">
                    <td>{{ post.id }}</td>
                    <td>{{ post.title }}</td>
                    <td>{{ post.description }}</td>
                    <td>
                        <router-link :to="`/posts/${post.id}`" class="btn btn-primary">Show Details</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios'

export default{
    name: 'Posts',
    data(){
        return{
            postDetails: [],
        }
    },
    mounted(){
        axios
            .get(`https://vue-project-5235d-default-rtdb.firebaseio.com/posts.json`)
            .then((response) =>{
                this.formatPosts(response.data);
            })
    },
    methods:{
        formatPosts(postsData){
            for (let key in postsData){
                this.postDetails.push({...postsData[key], id:key});
            }
        }
    }
}
</script>

<style scoped>

</style>