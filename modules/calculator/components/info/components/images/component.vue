<template>
  <ul
    class="calculator-info-images grid grid-cols-2 gap-x-[15px] gap-y-[9px] xl:gap-y-[8px] xl:gap-x-[12px] md:grid-cols-1 md:gap-y-[5px] md:gap-x-[0px] xs:grid-cols-4 xs:gap-y-[0px] xs:gap-x-[7px] xs:w-full"
  >
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
