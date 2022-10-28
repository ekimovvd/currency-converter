<template>
  <li
    class="rate-card-item pl-[20px] relative after:absolute after:w-[10px] after:h-[10px] after:border-[2px] after:border-[#E02025] after:rounded-[100%] after:left-0 after:top-[50%] after:translate-y-[-40%]"
  >
    {{ item.name }}: {{ item.value }}
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
