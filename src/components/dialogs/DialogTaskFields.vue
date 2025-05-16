<template>
  <div class="text-center pa-4">
    <v-dialog
      v-model="taskStore.showDialogTaskFields"
      min-width="400"
      max-width="600"
      persistent
    >
      <v-card>
        <v-card-title>
          <span class="text-h5">Edit Task</span>
          <v-spacer></v-spacer>
        </v-card-title>
        <v-card-text>
          <v-text-field v-model="props.task.title" label="Title"></v-text-field>
          <v-text-field v-model="props.task.description" label="Description"></v-text-field>
        </v-card-text>
        <template v-slot:actions>
          <v-spacer></v-spacer>
          <v-btn @click="taskStore.updateTask()" variant="elevated" color="primary-darken-1">
            OK
          </v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { useTaskStore } from '@/stores/task';
const taskStore = useTaskStore();

  const props = defineProps({
    task: {
      type: Object,
      default: () => ({
        title: '',
        description: '',
      }),
    },
  })

</script>