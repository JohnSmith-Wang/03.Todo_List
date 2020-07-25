<template>
  <div>

    <div id="todoPage" class="container">

      <div id="todonav"  class="d-flex justify-content-center">
        <router-link to="/todo/all">全部</router-link> |
        <router-link to="/todo/active">未完成</router-link> |
        <router-link to="/todo/complete">已完成</router-link>
      </div>

      <div>
        <Todoinput/>
      </div>
    
      <div id="list">
        <Todocontent v-for="index in todoIndex" :key="index" :index="index"></Todocontent> 
        <!--用index來印，代表todoIndex有幾個，就印幾個-->
      </div>

      <div>
        <Allclean/>
      </div>

    </div>

  </div>
</template>

<script>
import Todocontent from '@/components/Todocontent.vue'
import Todoinput from '@/components/Todoinput.vue'
import Allclean from '@/components/Allclean.vue'

export default {
  components: {
     Todocontent,
     Todoinput,
     Allclean
  },
  computed:{
    todoIndex(){
      return this.$store.getters['todoIndex'];
    }
  },
  mounted(){
    const vm = this;
    vm.$store.dispatch('INIT_TODO')
  }
}
</script>

<style lang="scss" scoped>
#todoPage {
  text-align: center;
}

</style>