<template>
  <div class="rate py-[30px]">
    <div class="rate__container container mx-auto">
      <h2 class="rate__title text-[#0F4471] text-[36px] font-bold mb-[40px]">
        Курс рубля
      </h2>
      <rateCards class="rate__cards mb-[30px]" />
      <rateFooter />
    </div>
  </div>
</template>

<script>
import rateCards from "~/modules/rate/components/cards/component/component.vue";
import rateFooter from "~/modules/rate/components/footer/component/component.vue";

export default {
  name: "rate",
  components: {
    rateCards,
    rateFooter,
  },
};
</script>
