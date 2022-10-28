<template>
  <li class="calculator-info-image">
    <img
      class="calculator-info-image__img xl:w-[116px] xl:h-[116px] md:w-[86px] md:h-[58px] xs:w-full xs:h-[47px]"
      :src="getSrcImg"
      :alt="image.name"
      :class="getImageClass"
    />
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
        case 0:
          return "calculator-info__image--view-zero";
        case 1:
          return "calculator-info__image--view-one";
        case 2:
          return "calculator-info__image--view-two";
        case 3:
          return "calculator-info__image--view-three";
        default:
          return "";
      }
    },
  },
};
</script>

<style lang="scss">
.calculator-info__image {
  &--view-zero {
    @media (min-width: 360px) and (max-width: 768px) {
      border-radius: 0 16px 0 16px;
    }
  }

  &--view-one {
    border-radius: 0 50px 0 0;

    @media (min-width: 360px) and (max-width: 768px) {
      border-radius: 16px 0 16px 0;
    }
  }

  &--view-two {
    border-radius: 0 0 0 50px;

    @media (min-width: 360px) and (max-width: 768px) {
      border-radius: 0 16px 0 16px;
    }
  }

  &--view-three {
    @media (min-width: 360px) and (max-width: 768px) {
      border-radius: 16px 0 16px 0;
    }
  }
}
</style>
