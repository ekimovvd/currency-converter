<template>
  <li
    class="calculator-info-item pl-[20px] text-[#404456] text-[18px] font-roboto relative after:absolute after:w-[10px] after:h-[10px] after:border-[2px] after:border-[#E02025] after:rounded-[100%] after:left-0 after:top-[50%] after:translate-y-[-40%] xl:text-[14px] md:text-[13px] xs:text-[14px]"
  >
    {{ item.name }}
  </li>
</template>

<script>
export default {
  name: "calculator-info-item",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>
