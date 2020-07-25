<template>
  <div  class="todoListItem">

  <input class="edit" type="text" v-if="edit !== null" v-model.trim="edit" v-focus
    @keypress.enter="submitHandler"
    @keyup.esc="cancelHandler"
    @blur="cancelHandler">

  <template v-else>
    <div>
        <input class="toggle" type="checkbox" v-model="completeHander">
        <label @dblclick="editHandler">{{todo.content}}</label>
        <button class="destory" @click="destoryHandler"></button>
    </div>

  </template>


  </div>
</template>

<script>
export default {
  data(){
      return{
          edit:null
      }
  },
  props:{
    index:{
      type:Number,
      required:true
    },
  },
  computed:{
    todo(){
      return this.$store.state.todos[this.index]
    },
    completeHander:{
      get(){
        return this.todo.complete
      },
      set(val){
        this.$store.commit('UPDATE_TODO',{
          index: this.index,
          data:{
            content: this.todo.content,
            complete: val
          }
        })
      }
    },
  },
  methods:{
    destoryHandler(){
      if(confirm(`確定要刪除 ${this.todo.content} 嗎?`)){
        return this.$store.commit('DEL_TODO',this.index)}
    },
    editHandler(){
      this.edit = this.todo.content
    },
    submitHandler(){
      if(!this.edit) return

      this.$store.commit('UPDATE_TODO',{
        index: this.index,
        data:{
          content: this.edit,
          complete: false
        }
      });

      this.cancelHandler();
    },
    cancelHandler(){
      this.edit = null;
    }
  }

}
</script>
