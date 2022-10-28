<template>
  <p class="calculator-result-text text-[#0F4471] text-[24px] font-bold">
    Итого: {{ getResult }}
  </p>
</template>

<script>
export default {
  name: "calculator-result-text",
  computed: {
    getResult() {
      return "...";
    },
  },
};
</script>
