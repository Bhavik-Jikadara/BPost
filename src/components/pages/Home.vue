<template>
    <div>
        <div class="mt-3">
            <button @click.prevent="onPostsClick()" class="btn btn-primary">Click to CreatePost</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    methods:{
        onPostsClick(){
            this.$router.push({
                path: '/createpost',
                query: {id: 'createpost'}
            });
        }
    }
}
</script>

<style scoped>

</style>