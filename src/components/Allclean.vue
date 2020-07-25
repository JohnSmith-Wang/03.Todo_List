<template>
  <div>

      <button class="btn btn-dark" @click="destoryHandler">清除所有已完成項目</button>


  </div>
</template>

<script>
export default {
    data(){
        return{
            data:""
        }
    },
    methods:{
        destoryHandler(){
            const temp = this.$store.state.todos;
            const result = [];

            temp.forEach(item => {
                if(!item.complete){
                    result.push(item)
                }
            });

            this.$store.commit('SET_TODO',result)
        }
    }
}
</script>