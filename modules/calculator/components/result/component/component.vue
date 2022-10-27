<template>
  <div
    class="calculator-result bg-[#EEF5FF] rounded-[16px] py-[37px] px-[31px] flex items-center gap-x-[33px]"
  >
    <vIcon />
    <calculatorResultText />
  </div>
</template>

<script>
import vIcon from "~/components/vIcon/component/component.vue";
import calculatorResultText from "~/modules/calculator/components/result/components/text/component.vue";

export default {
  name: "calculator-result",
  components: {
    vIcon,
    calculatorResultText,
  },
};
</script>
