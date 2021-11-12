<template>
    <div>
    <h2>Create Post</h2>
    <hr />
    <div class="alert alert-success" v-if="isSuccess">Post Created Successfully</div>
    <form @submit.prevent="onCreatePost">
      <div class="form-group">
        <label for="">Title</label>
        <input type="text" class="form-control" v-model="title" />
      </div>
      <div class="form-group">
        <label for="">Description</label>
        <textarea
          class="form-control"
          cols="30"
          rows="5"
          v-model="description"
        ></textarea>
      </div>

      <div class="mt-3">
        <button class="btn btn-success" type="submit">Create Post</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name:'CreatePost',
    data() {
        return {
            title: "",
            description: "",
            isSuccess: false 
        };
    },
    methods: {
    onCreatePost() {
      axios.post(`https://vue-project-5235d-default-rtdb.firebaseio.com/posts.json`,
      {title: this.title, description: this.description})
      .then(response=>{
          console.log(response);
          this.isSuccess = true,
          this.title= "", 
          this.description = ""
          this.$router.push('/posts');
      })
    },
  }
}
</script>

<style scoped>

</style>