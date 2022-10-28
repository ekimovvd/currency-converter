<template>
  <div class="calculator-form flex flex-col gap-y-[30px] xs:gap-y-[21px]">
    <div class="calculator-group flex flex-col">
      <calculatorFormLabel
        class="text-[#2C3A4B] text-[16px] font-medium"
        id="valute1"
      >
        Валюта 1
      </calculatorFormLabel>
      <vInput
        class="mt-[10px]"
        placeholder="Введите название или код"
        id="valute1"
        :value="valute1"
        @change="onChangeValute1"
      />
    </div>
    <div class="calculator-group flex flex-col">
      <calculatorFormLabel
        class="text-[#2C3A4B] text-[16px] font-medium"
        id="valute2"
      >
        Валюта 2
      </calculatorFormLabel>
      <vInput
        class="mt-[10px]"
        placeholder="Введите название или код"
        id="valute2"
        :value="valute2"
        :disabled="true"
      />
    </div>
    <div class="calculator-group flex flex-col">
      <calculatorFormLabel
        class="text-[#2C3A4B] text-[16px] font-medium"
        id="count"
      >
        Количество
      </calculatorFormLabel>
      <vInput
        class="mt-[10px]"
        type="number"
        placeholder="Введите число"
        id="count"
        :value="count"
        @change="onChangeCount"
      />
    </div>
  </div>
</template>

<script>
import calculatorFormLabel from "~/modules/calculator/components/form/components/label/component.vue";
import vInput from "~/components/vInput/component/component.vue";

export default {
  name: "calculator-form",
  components: {
    calculatorFormLabel,
    vInput,
  },
  props: {
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
  methods: {
    onChangeValute1(value) {
      this.$emit("changeValute1", value);
    },

    onChangeCount(value) {
      this.$emit("changeCount", value);
    },
  },
};
</script>
