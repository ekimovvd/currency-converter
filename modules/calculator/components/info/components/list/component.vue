<template>
  <ul class="calculator-info__list grid grid-cols-1 gap-y-[15px]">
    <calculatorInfoItem v-for="item in getItems" :key="item.id" :item="item" />
  </ul>
</template>

<script>
import calculatorInfoItem from "~/modules/calculator/components/info/components/item/component.vue";

export default {
  name: "calculator-info-list",
  components: {
    calculatorInfoItem,
  },
  computed: {
    getItems() {
      return [
        {
          id: 0,
          name: "incididunt ut labore et dolore magna aliqua",
        },
        {
          id: 1,
          name: "incididunt ut labore et",
        },
        {
          id: 2,
          name: "incididunt ut labore et dolore",
        },
        {
          id: 3,
          name: "labore et dolore",
        },
        {
          id: 4,
          name: "incididunt ut",
        },
        {
          id: 5,
          name: "incididunt ut labore et dolore",
        },
        {
          id: 6,
          name: "incididunt ut labore",
        },
      ];
    },
  },
};
</script>
