<template>
  <v-row
    class="wrapper d-flex justify-center"
    v-if="filtered.length > 0"
    max-width="50px"
  >
    <v-col
      cols="6"
      sm="3"
      md="2"
      xl="1"
      v-for="food in filtered"
      :key="food.name"
    >
      <food-item :food="food" />
    </v-col>
  </v-row>
  <p v-else class="text-center">Inga resultat</p>
</template>
<script>
import foods from "@/assets/foods";
import { defineComponent } from "vue";
import FoodItem from "./FoodItem.vue";

export default defineComponent({
  components: { FoodItem },
  name: "FoodList",
  data() {
    return {};
  },
  computed: {
    search() {
      try {
        return this.$route.query.q;
      } catch {
        return null;
      }
    },
    filtered() {
      return foods
        .filter((f) => {
          if (this.search) {
            const regex = new RegExp(this.search, "i");
            return f.name.match(regex);
          }
          return true;
        })
        .sort((a, b) => a.name.localeCompare(b.name));
    },
  },
});
</script>