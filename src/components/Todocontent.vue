<template>
  <div>

  <div id="listItem">
    <div id="content">
      <input id="edit" type="text" v-if="edit !== null" v-model.trim="edit" v-focus
        @keypress.enter="submitHandler"
        @keyup.esc="cancelHandler"
        @blur="cancelHandler">

      <template v-else>
        <div>
            <input id="toggle" class="" type="checkbox" v-model="completeHander">
            <label @dblclick="editHandler">{{todo.content}}</label>
            <button id="destory" @click="destoryHandler"></button>
        </div>

      </template>
    </div>
  </div>

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

<style lang="scss" scoped>
#listItem{
  margin: 10px auto;
  font-size: 25px;
  background-color: white;
  border-radius: 5px;
}

#listItem #edit{
  display: block;
  width: calc(100% - 40px);
  margin: 0px auto;
}

#listItem #content{
  padding: 10px;
  position: relative;
}

#listItem #toggle{
  width: 40px;
  height: 40px;
  margin: auto 10px;
  position: absolute;
  top:0;
  bottom:0;
  left:0;
}

#listItem label{
  padding-left: 50px;
  padding-right: 30px;
  padding-top: 10px;
}

#listItem #destory{
  position: absolute;
  top:0;
  right:0;
  bottom:0;
  background: none;
  outline: none;
  border: none;
  color:red;
  font-size: 30px;
  margin: auto 10px;
  cursor: pointer;
}

#listItem #destory:after {
  content: 'x';
}

#listItem #toggle:checked + label {
  color: #d9d9d9;
  text-decoration: line-through;
}

</style>
