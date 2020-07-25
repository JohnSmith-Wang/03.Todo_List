<template>
  <div id="app">
    <div>
      <Navbar/>
    </div>

    <div>
      <router-view/>
    </div>
    
  </div>
</template>

<style lang="scss">
@import "./assets/all";
</style>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
     Navbar
  }
}
</script>
