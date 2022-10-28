<template>
  <div class="calculator">
    <div class="calculator__container container py-[30px] mx-auto">
      <h2
        class="calculator__title text-[#0F4471] text-[34px] font-roboto font-medium mb-[40px] xl:mb-[30px] xl:text-[26px] md:text-[26px] md:mb-[20px] xs:mb-[24px] xs:text-[20px]"
      >
        Валютный калькулятор
      </h2>
      <div
        class="calculator__content grid grid-cols-2 gap-x-[36px] mb-[40px] xl:gap-x-[39px] xl:mb-[24px] md:gap-x-[27px] md:mb-[21px] xs:grid-cols-1 xs:gap-x-[0px] xs:mb-[22px]"
      >
        <div class="calculator__form xs:mb-[17px]">
          <calculatorForm
            :valute1="valute1"
            :valute2="valute2"
            :count="count"
            @changeValute1="onChangeValute1"
            @changeCount="onChangeCount"
          />
          <calculatorResult
            class="calculator__result mt-[31px] xl:mt-[20px] md:mt-[23px] xs:mt-[19px]"
            :valutes="getValutes"
            :valute1="valute1"
            :count="count"
          />
        </div>
        <div>
          <calculatorInfo />
        </div>
      </div>
      <calculatorFooter />
    </div>
  </div>
</template>

<script>
import calculatorForm from "~/modules/calculator/components/form/component/component.vue";
import calculatorResult from "~/modules/calculator/components/result/component/component.vue";
import calculatorInfo from "~/modules/calculator/components/info/component/component.vue";
import calculatorFooter from "~/modules/calculator/components/footer/component/component.vue";

export default {
  name: "calculator",
  components: {
    calculatorForm,
    calculatorResult,
    calculatorInfo,
    calculatorFooter,
  },
  data() {
    return {
      valute1: "",
      valute2: "RUB",
      count: "",
    };
  },
  computed: {
    getValutes() {
      return [
        {
          ID: "R01010",
          NumCode: "036",
          CharCode: "AUD",
          Nominal: 1,
          Name: "Австралийский доллар",
          Value: 39.3322,
          Previous: 38.7929,
        },
        {
          ID: "R01020A",
          NumCode: "944",
          CharCode: "AZN",
          Nominal: 1,
          Name: "Азербайджанский манат",
          Value: 36.1339,
          Previous: 36.078,
        },
        {
          ID: "R01035",
          NumCode: "826",
          CharCode: "GBP",
          Nominal: 1,
          Name: "Фунт стерлингов Соединенного королевства",
          Value: 70.3839,
          Previous: 69.3917,
        },
        {
          ID: "R01060",
          NumCode: "051",
          CharCode: "AMD",
          Nominal: 100,
          Name: "Армянских драмов",
          Value: 15.3808,
          Previous: 15.2983,
        },
        {
          ID: "R01090B",
          NumCode: "933",
          CharCode: "BYN",
          Nominal: 1,
          Name: "Белорусский рубль",
          Value: 24.8042,
          Previous: 24.7628,
        },
      ];
    },
  },
  methods: {
    onChangeValute1(value) {
      this.valute1 = value;
    },

    onChangeCount(value) {
      this.count = value;
    },
  },
};
</script>
