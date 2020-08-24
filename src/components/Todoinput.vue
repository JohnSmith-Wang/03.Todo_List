<template>
  <div>

    <div id="todoInput">
      <input 
        type="text" 
        v-model="input"
        placeholder="輸入代辦事項"
       @keypress.enter="submitHandler">
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return{
      input: ""
    }
  },
  methods:{
    submitHandler(){
      if(!this.input) return
      this.$store.commit('ADD_TODO',{
        content:this.input,
        complete:false
      });
      this.input = "";
    }
  }
}
</script>

<style lang="scss" scoped>

#todoInput{
  margin: 10px auto;
}

#todoInput input {
  width:100%;
  height: 50px;
  padding: 5px 10px;
  font-weight: 600;
  font-size: 20px;
  border-radius: 5px;
  outline: none;
  border: none;
}


</style>