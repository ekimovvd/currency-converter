<template>
  <p
    class="calculator-result-text text-[#0F4471] text-[24px] font-bold xl:text-[20px] md:text-[16px] xs:text-[14px]"
  >
    Итого: {{ result }}
  </p>
</template>

<script>
export default {
  name: "calculator-result-text",
  props: {
    result: {
      type: String,
      default: "...",
    },
  },
};
</script>
