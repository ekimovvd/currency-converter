<template>
  <div class="calculator">
    <div class="calculator__container container py-[30px] mx-auto">
      <h2
        class="calculator__title text-[#0F4471] text-[34px] font-medium mb-[40px] xl:mb-[30px] xl:text-[26px] md:text-[26px] md:mb-[20px] xs:mb-[24px] xs:text-[20px]"
      >
        Валютный калькулятор
      </h2>
      <div
        class="calculator__content grid grid-cols-2 gap-x-[36px] mb-[40px] xl:gap-x-[39px] xl:mb-[24px] md:gap-x-[27px] md:mb-[21px] xs:grid-cols-1 xs:gap-x-[0px] xs:mb-[22px]"
      >
        <div class="calculator__form xs:mb-[17px]">
          <div>form</div>
          <calculatorResult
            class="calculator__result mt-[31px] xl:mt-[20px] md:mt-[23px] xs:mt-[19px]"
          />
        </div>
        <calculatorInfo />
      </div>
      <calculatorFooter />
    </div>
  </div>
</template>

<script>
import calculatorResult from "~/modules/calculator/components/result/component/component.vue";
import calculatorInfo from "~/modules/calculator/components/info/component/component.vue";
import calculatorFooter from "~/modules/calculator/components/footer/component/component.vue";

export default {
  name: "calculator",
  components: {
    calculatorResult,
    calculatorInfo,
    calculatorFooter,
  },
};
</script>
