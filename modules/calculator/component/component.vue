<template>
  <div class="calculator">
    <div class="calculator__container container px-[80px] py-[30px]">
      <h2
        class="calculator__title text-[#0F4471] text-[34px] font-medium mb-[40px]"
      >
        Валютный калькулятор
      </h2>
      <div class="calculator__content grid grid-cols-2 gap-x-[36px] mb-[40px]">
        <div>
          <div>form</div>
          <calculatorResult class="calculator__result mt-[31px]" />
        </div>
        <div>content</div>
      </div>
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
