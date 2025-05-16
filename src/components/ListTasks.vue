<template>
  <div>
    
    <v-list
      lines="three"
      select-strategy="leaf"
    >
      <v-list-subheader>General</v-list-subheader>
      <v-list-item
        v-for="(item, index) in taskStore.tasks"
        :key="index"
        :subtitle="item.description"
        :title="item.title"
        @click="taskStore.toggleDoneTask(index)"
      >
        <template v-slot:prepend="{ }">
          <v-list-item-action start>
            <v-checkbox-btn
              :model-value="item.done"
            ></v-checkbox-btn>
          </v-list-item-action>
        </template>
        <template v-slot:append>
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn
                color="grey-lighten-1"
                icon="mdi-dots-vertical"
                variant="text"
                v-bind="props"
              ></v-btn>
            </template>
            <v-list>
              <v-list-item value="edit">
                <v-list-item-title @click="taskStore.toggleEdit(index)">Editar</v-list-item-title>
              </v-list-item>
              <v-list-item value="delete">
                <v-list-item-title @click="taskStore.toggleDialogDelete(index)">Delete</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </v-list-item>
    </v-list>
    <DialogTaskFields :task="taskStore.tasks[taskStore.indexTaskSelected]"/>
    <DialogDelete />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import DialogTaskFields from './dialogs/DialogTaskFields.vue';
import DialogDelete from './dialogs/DialogDelete.vue';
import { useTaskStore } from '@/stores/task';

const taskStore = useTaskStore();

</script>

