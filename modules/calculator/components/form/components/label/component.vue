<template>
  <label
    class="calculator-form-label text-[#2C3A4B] text-[16px] font-roboto font-medium xl:text-[14px] md:text-[14px] xs:text-[14px]"
    :for="id"
  >
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: "calculator-form-label",
  props: {
    id: {
      type: String,
      default: "",
    },
  },
};
</script>
