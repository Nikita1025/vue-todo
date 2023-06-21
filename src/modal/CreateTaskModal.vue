<template>
  <v-row justify="center">
    <v-dialog
        v-model="$store.getters.getModalVisible"
        persistent
        max-width="600px"
    >
      <v-card>
        <v-card-title>
          <span class="text-h5">Create task</span>
        </v-card-title>
        <v-card-text>
                <v-text-field
                    label="Task title"
                    type="text"
                    style="width: 100%"
                    v-model="title"
                />
          <v-text-field
                    label="Content"
                    style="width: 100%"
                    v-model="content"
                />
        </v-card-text>
          <v-btn
              color="blue darken-1"
              text
              @click="closeModal"
          >
            Close
          </v-btn>
          <v-btn
              text
              color="blue darken-1"
              @click="createTask"
          >
            Save
          </v-btn>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>

export default {
  data:()=>({
    title: '',
    content: ''
  }),
  props:{
    id:String

  },
  methods:{
    closeModal() {
      this.$store.commit('closeModal')
    },
    createTask(){
      let changeTask={
        title: this.title,
        content: this.content
      }
      this.$store.commit('createTask', {id: this.id, task: changeTask})
      this.$store.commit('closeModal')
    }

  }
}
</script>

<style scoped>

</style>
