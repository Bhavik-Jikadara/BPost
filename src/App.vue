<template>
   <div class="container">
        <div class="row">
            <div class="col-md-15">
              <Navigation/>
              <router-view />
            </div>
        </div>
   </div>
</template>

<script>
import Navigation from './components/Navigation.vue'

export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>

<style scoped>

</style>
