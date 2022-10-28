<template>
  <div
    class="calculator-result bg-[#EEF5FF] rounded-[16px] py-[37px] px-[31px] flex items-center gap-x-[33px] xl:py-[29px] xl:gap-x-[38px] md:py-[34px] md:px-[27px] md:gap-x-[21px] xs:py-[19px] xs:px-[26px] xs:gap-x-[19px]"
  >
    <vIcon icon="info-danger" type="danger" />
    <calculatorResultText :result="getResult" />
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
  props: {
    valutes: {
      type: Array,
      default: () => [],
    },
    valute1: {
      type: String,
      default: "",
    },
    valute2: {
      type: String,
      default: "",
    },
    count: {
      type: [Number, String],
      default: "",
    },
  },
  computed: {
    getResult() {
      const valutes = this.valutes;
      const findValute1 = valutes.find(
        (valute) =>
          valute.CharCode.toString().toLowerCase() ===
            this.valute1.toString().toLowerCase() ||
          valute.NumCode.toString().toLowerCase() ===
            this.valute1.toString().toLowerCase()
      );

      return this.count.toString().length && findValute1
        ? (parseInt(this.count) * parseInt(findValute1.Value)).toString()
        : "...";
    },
  },
};
</script>
