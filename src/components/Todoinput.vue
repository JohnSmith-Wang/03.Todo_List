<template>
  <div>

    <div class="todoInput">
      <input 
        type="text" 
        v-model="input"
        placeholder="輸入代辦事項"
       @keyup.enter="submitHandler">
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