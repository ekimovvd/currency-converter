<template>
  <div class="calculator">
    <div class="calculator__container container">
      <calculatorResult />
      <calculatorFooter />
    </div>
  </div>
</template>

<script>
import calculatorResult from "~/modules/calculator/components/result/component/component.vue";
import calculatorFooter from "~/modules/calculator/components/footer/component/component.vue";

export default {
  name: "calculator",
  components: {
    calculatorResult,
    calculatorFooter,
  },
};
</script>
