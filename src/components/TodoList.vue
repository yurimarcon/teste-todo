<template>
  <v-text-field
    clearable
    @keyup.enter="taskStore.addTask"
    v-model="taskStore.titleTaskCreating"
    label="Add Task"
    :rules="rules"
  ></v-text-field>
  <ListTasks/>
</template>

<script setup>
import ListTasks from './ListTasks.vue';
import { useTaskStore } from '@/stores/task';
import { onMounted } from 'vue';

onMounted(() => {
  taskStore.getTasks();
});

const taskStore = useTaskStore();

const rules = [
  value => {
    if (!value || value.length >= 5) return true;
    return 'Informe o título da tarefa'
  }
]

</script>

<script>
export default {};
</script>

<style>
</style>