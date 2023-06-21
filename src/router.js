import Vue from 'vue'
import VueRouter from "vue-router"
import MainPage from './pages/main/MainPage'
import Tasks from "./pages/tasks/Tasks";
Vue.use(VueRouter)

const routes =[
    {
        path: '/',
        component: MainPage,
    },
    {
        path: '/tasks',
        component: Tasks
    }

]

export default new VueRouter({
    mode: 'history',
    routes
})
