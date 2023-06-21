<template>
  <v-container class="d-flex justify-center" style="width: 50%">
    <v-row class="d-flex flex-column " >
      <v-text-field label="Enter the name" v-model="title"/>
      <v-text-field label="Enter the content"  v-model="content"/>
      <v-btn @click="addTask">
        Add
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
import {uuid} from  "vue-uuid";

export default {
  data:()=>({
    title:'',
    content:''
  }),
  methods:{
    addTask(){
      let task={
        id:uuid.v1(),
        title: this.title,
        content: this.content
      }
      this.$store.commit('addTask', task)
      this.title=''
      this.content=''
    }
  }
}
</script>

<style scoped>

</style>
