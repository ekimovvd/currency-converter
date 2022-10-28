<template>
  <div
    class="calculator-info bg-[#EEF5FF] border border-[#DFE1F0] rounded-[16px] py-[40px] px-[30px] xl:py-[33px] xl:px-[24px] md:py-[22px] md:px-[15px] xs:py-[26px] xs:px-[15px]"
  >
    <h5
      class="calculator-info__title text-[#0F4471] text-[18px] font-medium uppercase mb-[50px] xl:text-[15px] xl:mb-[40px] md:text-[13px] md:mb-[25px] xs:text-[13px] xs:mb-[30px]"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor:
    </h5>
    <div
      class="calculator-info__content flex items-center justify-between gap-x-[30px] md:gap-x-[20px] xs:gap-x-[0px] xs:gap-y-[31px] xs:flex-col xs:items-start"
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
