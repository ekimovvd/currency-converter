<template>
  <div
    class="calculator-footer flex items-center justify-between bg-[#EEF5FF] rounded-[16px] py-[65px] pl-[51px] pr-[138px] xl:py-[55px] xl:px-[33px] md:py-[33px] md:px-[20px] xs:py-[26px] xs:px-[14px] xs:flex-col xs:gap-y-[29px]"
  >
    <calculatorFooterInfo />
    <calculatorFooterContacts />
  </div>
</template>

<script>
import calculatorFooterInfo from "~/modules/calculator/components/footer/components/info/component.vue";
import calculatorFooterContacts from "~/modules/calculator/components/footer/components/contacts/component.vue";

export default {
  name: "calculator-footer",
  components: {
    calculatorFooterInfo,
    calculatorFooterContacts,
  },
};
</script>
