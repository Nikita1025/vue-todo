import {uuid} from "vue-uuid";

export default {
    state:{
        tasks:[
            {id:uuid.v1(), title:'Name task', content:'dasdkajdnfn dnf nd ffds jfd fdsfj nd dsfj sdf'},
            {id:uuid.v1(), title:'Name task2', content:'dasdkajdnfn dnf nd ffds jfd fdsfj nd dsfj sdf'},
            {id:uuid.v1(), title:'Name task3', content:'dasdkajdnfn dnf nd ffds jfd fdsfj nd dsfj sdf'},
            {id:uuid.v1(), title:'Name task4', content:'dasdkajdnfn dnf nd ffds jfd fdsfj nd dsfj sdf'}
        ],
        modalVisible: false,
        currentTask:{
            title:'dasdasdasd'
        }
    },
    mutations:{
        addTask(state,payload){
            state.tasks.unshift(payload)
        },
        deleteTask(state, id){
            state.tasks.splice(id, 1)
        },
        createTask(state, payload){
            state.tasks.map(el=> el.id === payload.id ? payload.task :el)
        },
        openModal(state){
            state.modalVisible = true
        },
        closeModal(state){
            state.modalVisible = false
        },
        setCurrentTask(state,payload){
            state.currentTask= payload
        }
    },
    getters:{
        getTasks(state){
            return state.tasks
        },
        getModalVisible(state){
            return state.modalVisible
        },
        getCurrentTask(state){
            return state.currentTask
        }
    },

}

