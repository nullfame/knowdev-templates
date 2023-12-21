<script setup>
import { mdiHeadphonesBox } from "@mdi/js";
</script>

<template>
  <v-app-bar color="primary">
    <v-app-bar-title>
      <v-icon class="mr-1" style="position: relative; top: -2px">
        {{ mdiHeadphonesBox }}
      </v-icon>
      <span>Unknown Studio</span>
    </v-app-bar-title>
  </v-app-bar>
</template>
