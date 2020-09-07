<template>

  <div id="todoPage" class="container">
    <div id="switchArea"  class="col-12 col-xl-12">
      <router-link to="/todo/all">全部</router-link> |
      <router-link to="/todo/active">未完成</router-link> |
      <router-link to="/todo/complete">已完成</router-link>
    </div>

    <div id="inputArea" class="col-12 col-xl-8">
      <Todoinput/>
    </div>
      
    <div id="listArea" class="col-12 col-xl-8">
      <Todocontent v-for="index in todoIndex" :key="index" :index="index"></Todocontent> 
    </div>

    <div id="btnArea" class="col-12 col-xl-4">
      <Allclean/>
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
#todoPage{
  padding: 30px;
  margin: 0px auto;
}

#switchArea{
  margin: 25px auto;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  a{
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    text-decoration: none;
  }
  a:hover{
    background-color: gray;
    padding: 5px 10px;
    transition: 0.3s;
  }
  .router-link-exact-active{
    background-color: white;
    color:black
  }
  .router-link-exact-active:hover{
    background-color: white;
    color:black
  }
}

#inputArea{
  margin: 25px auto;
}

#listArea{
  margin: 25px auto;
}

#btnArea{
  text-align: center;
  margin: 0px auto;
}

</style>