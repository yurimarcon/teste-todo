import { defineStore } from 'pinia';
import { useAlertStore } from './alert';

const alertStore = useAlertStore();

export const useTaskStore = defineStore('task', {
  state: () => ({
     tasks: [],
     titleTaskCreating: "", 
     indexTaskSelected: 0,
     showDialogTaskFields: false,
     showDialogDelete: false,
    }),
    actions: {
        addTask() {
            if (this.titleTaskCreating.length >= 5)
            {
                this.tasks.push({ title: this.titleTaskCreating, description: "", done: false });
                this.titleTaskCreating = "";
                this.saveLocalData();
                alertStore.notifyAlertTaskCreated();
            }
        },
        toggleDialogDelete(index) {
            this.showDialogDelete = !this.showDialogDelete;

            if (index != null) {
                this.indexTaskSelected = index;
            }
        },
        deleteTask() {
            this.tasks.splice(this.indexTaskSelected, 1);
            this.toggleDialogDelete();
            this.saveLocalData();
            alertStore.notifyAlertTaskDeleted();
        },
        toggleEdit(index) {
            this.showDialogTaskFields = !this.showDialogTaskFields;

            if (index != undefined) {
                this.indexTaskSelected = index;
            }
        },
        updateTask() {
            this.saveLocalData();
            this.toggleEdit();
            alertStore.notifyAlertTaskUpdated();
        },
        saveLocalData() {
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        },
        getTasks() {
            const tasks = localStorage.getItem('tasks');
            if (tasks) {
                this.tasks = JSON.parse(tasks);
            }
        },
        toggleDoneTask(index) {
            this.tasks[index].done = !this.tasks[index].done;
            this.saveLocalData();
        }
    },
})
