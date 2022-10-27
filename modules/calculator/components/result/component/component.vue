<template>
  <div
    class="calculator-result bg-[#EEF5FF] rounded-[16px] py-[37px] px-[31px] flex items-center gap-x-[33px]"
  >
    <calculatorResultIcon />
    <calculatorResultText />
  </div>
</template>

<script>
import calculatorResultIcon from "~/modules/calculator/components/result/components/icon/component.vue";
import calculatorResultText from "~/modules/calculator/components/result/components/text/component.vue";

export default {
  name: "calculator-result",
  components: {
    calculatorResultIcon,
    calculatorResultText,
  },
};
</script>
