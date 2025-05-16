// Utilities
import { defineStore } from 'pinia'

export const useAlertStore = defineStore('alert', {
  state: () => ({
    showAlert: false,
    type: "",
    text: ""
  }),
  actions: {
    notifyAlert() {
        this.showAlert = true;
        setTimeout(() => {
            this.showAlert = false;
        }, 2000)
    },
    notifyAlertTaskCreated() {
        this.type = "success";
        this.text = "Task created successfully!";
        this.notifyAlert();
    },
    notifyAlertTaskDeleted() {
        this.type = "warning";
        this.text = "Task deleted successfully!";
        this.notifyAlert();
    },
    notifyAlertTaskUpdated() {
        this.type = "info";
        this.text = "Task updated successfully!";
        this.notifyAlert();
    }
  }
})
