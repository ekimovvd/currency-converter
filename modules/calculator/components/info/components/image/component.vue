<template>
  <li class="calculator-info__image">
    <img :src="getSrcImg" :alt="image.name" :class="getImageClass" />
  </li>
</template>

<script>
export default {
  name: "calculator-info-image",
  props: {
    image: {
      type: Object,
      required: true,
    },
  },
  computed: {
    getSrcImg() {
      return require(`@/assets/images/${this.image.name}`);
    },

    getImageClass() {
      switch (this.image.id) {
        case 1:
          return "calculator-info__image--view-one";
        case 2:
          return "calculator-info__image--view-two";
        default:
          return "";
      }
    },
  },
};
</script>

<style lang="scss">
.calculator-info__image {
  &--view-one {
    border-radius: 0 50px 0 0;
  }

  &--view-two {
    border-radius: 0 0 0 50px;
  }
}
</style>
