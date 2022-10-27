<template>
  <ul class="calculator-info__images grid grid-cols-2 gap-x-[15px] gap-y-[9px]">
    <calculatorInfoImage
      v-for="image in getImages"
      :key="image.id"
      :image="image"
    />
  </ul>
</template>

<script>
import calculatorInfoImage from "~/modules/calculator/components/info/components/image/component.vue";

export default {
  name: "calculator-info-images",
  components: {
    calculatorInfoImage,
  },
  computed: {
    getImages() {
      return [
        {
          id: 0,
          name: "1.png",
        },
        {
          id: 1,
          name: "2.png",
        },
        {
          id: 2,
          name: "3.png",
        },
        {
          id: 3,
          name: "4.png",
        },
      ];
    },
  },
};
</script>
