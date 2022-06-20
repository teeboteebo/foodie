<template>
  <v-container>
    <v-row>
      <v-col>
        <search-bar />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <food-list />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import SearchBar from "@/components/SearchBar.vue";
import FoodList from "@/components/FoodList.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { SearchBar, FoodList },
  name: "Home",
});
</script>
