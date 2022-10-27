<template>
  <div class="rate">
    <div class="rate__container container">
      <rateCards />
    </div>
  </div>
</template>

<script>
import rateCards from "~/modules/rate/components/cards/component/component.vue";

export default {
  name: "rate",
  components: {
    rateCards,
  },
};
</script>
