<template>
  <div
    class="calculator-info bg-[#EEF5FF] border border-[#DFE1F0] rounded-[16px] py-[40px] px-[30px]"
  >
    <h5
      class="calculator-info__title text-[#0F4471] text-[18px] font-medium uppercase mb-[50px]"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor:
    </h5>
    <div
      class="calculator-info__content flex items-center justify-between gap-x-[30px]"
    >
      <calculatorInfoList />
      <calculatorInfoImages />
    </div>
  </div>
</template>

<script>
import calculatorInfoList from "~/modules/calculator/components/info/components/list/component.vue";
import calculatorInfoImages from "~/modules/calculator/components/info/components/images/component.vue";

export default {
  name: "calculator-info",
  components: {
    calculatorInfoList,
    calculatorInfoImages,
  },
};
</script>
