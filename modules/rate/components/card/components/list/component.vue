<template>
  <ul class="rate-card-list text-[#1C1C1C] text-[16px] font-medium">
    <rateCardItem v-for="item in list" :key="item.id" :item="item" />
  </ul>
</template>

<script>
import rateCardItem from "~/modules/rate/components/card/components/item/component.vue";

export default {
  name: "rate-card-list",
  components: {
    rateCardItem,
  },
  props: {
    list: {
      type: Array,
      default: [],
    },
  },
};
</script>
