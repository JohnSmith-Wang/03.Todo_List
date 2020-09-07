<template>

  <button id="cleanBtn" class="btn btn-lg btn-dark" @click="destoryHandler">清除所有已完成項目</button>

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
            if(confirm('確定要刪除所有已經完成的項目嗎? 這個動作將無法回復!')){
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
}
</script>