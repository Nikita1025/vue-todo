<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <v-container class="d-flex flex-column align-center">
      <v-row >
        <v-row class="ma-10">
          <div>
            <v-btn
                class="ma-1"
                color="blue"
                dark
            >
              <v-icon
                  dark
                  left
              >
                mdi-arrow-left
              </v-icon>
              <router-link class="text-decoration-none" style="color: white" to="/">Back</router-link>
            </v-btn>
          </div>
          <TaskForm />
        </v-row>
        <v-row class="ma-0 justify-center">
          <Task v-for="task in $store.getters.getTasks" :title="task.title" :content="task.content" :id="task.id" :key="task.id"/>
        </v-row>


      </v-row>
    </v-container>
</template>

<script>
import Task from "@/pages/tasks/task/Task";
import TaskForm from "@/pages/tasks/task/TaskForm";
export default {
  components: {TaskForm, Task},
}
</script>

<style scoped>

</style>
