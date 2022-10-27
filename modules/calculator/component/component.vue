<template>
  <div class="calculator">
    <div class="calculator__container container">
      <calculatorResult />
    </div>
  </div>
</template>

<script>
import calculatorResult from "~/modules/calculator/components/result/component/component.vue";

export default {
  name: "calculator",
  components: {
    calculatorResult,
  },
};
</script>
