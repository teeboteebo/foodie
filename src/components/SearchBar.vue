<template>
  <div class="search-bar">
    <v-text-field
      :prependIcon="icons[iconIndex]"
      @click:prepend="changeIcon"
      variant="solo"
      v-model="searchInput"
      @input="updateURL"
      label="Sök mat..."
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import foods from "@/assets/foods";

export default defineComponent({
  name: "SearchBar",
  data() {
    return {
      searchInput: this.$route.query.q ?? "",
      iconIndex: Math.round(Math.random() * (foods.length - 1)),
      icons: [
        "mdi-food-drumstick",
        "mdi-fruit-cherries",
        "mdi-noodles",
        "mdi-hamburger",
        "mdi-cheese",
      ],
    };
  },
  mounted() {},
  methods: {
    updateURL() {
      if (!this.$data.searchInput) {
        this.$router.replace({
          query: { ...this.$route.query, q: undefined },
        });
        return;
      }
      this.$router.replace({
        query: { ...this.$route.query, q: this.$data.searchInput },
      });
    },
    changeIcon() {
      this.$data.iconIndex === this.$data.icons.length - 1
        ? (this.$data.iconIndex = 0)
        : this.$data.iconIndex++;
    },
  },
});
</script>
<style lang="scss" scoped>
.search-bar {
  margin: 0 auto;
  margin-top: 30vh;
  width: 100%;
  max-width: 540px;
}
</style>