<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <v-card class="ma-5 d-flex flex-column" style="width: 400px">
      <CreateTaskModal :id="id"/>
        <v-card-title>{{title}}</v-card-title>
        <v-card-text>{{content}}</v-card-text>
      <v-row class="justify-end ma-2">
        <v-icon @click="openModal(id)">{{ icons.mdiPencil }}</v-icon>
        <v-icon class="ma-1"  @click="deleteTask(id)">
          {{ icons.mdiDelete }}
        </v-icon>
      </v-row>
    </v-card>
</template>

<script>
import { mdiDelete, mdiPencil} from "@mdi/js";
import CreateTaskModal from "@/modal/CreateTaskModal";

export default {
  components: {CreateTaskModal},
  props:{
      title:String,
      content:String,
      id:String

  },
  methods:{
    deleteTask(id){
      this.$store.commit('deleteTask', id)
    },
    openModal(){
      this.$store.commit('openModal')
      this.$store.commit('setCurrentTask', {id: this.id, title: this.title, content: this.content})
    }
  },
  data: () => ({
    icons: {
      mdiPencil,
      mdiDelete,
    },
  }),
}
</script>

<style scoped>

</style>
