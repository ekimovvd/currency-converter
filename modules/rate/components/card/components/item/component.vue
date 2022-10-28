<template>
  <li
    class="rate-card-item pl-[20px] relative after:absolute after:w-[10px] after:h-[10px] after:border-[2px] after:border-[#E02025] after:rounded-[100%] after:left-0 after:top-[50%] after:translate-y-[-40%]"
  >
    <p
      class="rate-card-item__text text-[#1C1C1C] text-[16px] font-roboto font-medium xl:text-[15px] md:text-[14px]"
    >
      {{ item.name }}: {{ item.value }}
    </p>
  </li>
</template>

<script>
export default {
  name: "rate-card-item",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>
