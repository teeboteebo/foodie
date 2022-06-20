<template>
  <v-hover v-slot="{ isHovering, props }">
    <div
      v-bind="props"
      class="wrapper border d-flex flex-column justify-center align-center"
      :class="{
        isHovering,
        'text-success': food.eats === 'yes',
        'text-warning': food.eats === 'maybe',
        'text-error': food.eats === 'no',
        'text-grey': food.eats === '?',
      }"
    >
      <div class="icon">
        <v-icon large v-if="food.eats === 'yes'">mdi-emoticon-excited</v-icon>
        <v-icon large v-if="food.eats === 'maybe'">mdi-emoticon-neutral</v-icon>
        <v-icon large v-if="food.eats === 'no'">mdi-emoticon-poop</v-icon>
        <v-icon largs v-if="food.eats === '?'">mdi-robot-confused</v-icon>
      </div>
      <div>{{ food.name }}</div>
      <div class="hoverInfo" v-if="isHovering">
        <p v-if="food.comment">
          {{ food.comment }}
        </p>
        <v-divider v-if="food.comment && food.exploring" class="my-4" />
        <p v-if="food.exploring">Utforskar</p>
      </div>
      <span
        v-if="food.comment"
        style="
          position: absolute;
          bottom: 0.5rem;
          left: 0.5rem;
          font-size: 10px;
        "
        class="text-white info-icon text-center"
      >
        <v-icon>mdi-information</v-icon>
      </span>
      <div
        v-if="food.exploring"
        style="
          position: absolute;
          bottom: 0.5rem;
          right: 0.5rem;
          font-size: 14px;
        "
        class="text-white info-icon"
      >
        <v-icon size="">mdi-head-dots-horizontal-outline</v-icon>
      </div>
    </div>
  </v-hover>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "FoodItem",
  props: ["food"],
  data() {
    return {};
  },
  mounted() {
    console.log(this.$vuetify.theme.dark);
  },
});
</script>
<style lang="scss" scoped>
.wrapper {
  position: relative;
  aspect-ratio: 1/1;
  height: 100%;
  min-height: 100px;
  .icon {
    font-size: 22px;
  }

  .hoverInfo {
    color: white;
    background: rgba(0, 0, 0, 0.6);
    padding: 12px;
    text-align: center;
    position: absolute;
    top: 100%;
    left: -40px;
    right: -40px;
    border-radius: 4px;
  }
}
</style>