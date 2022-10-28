<template>
  <div class="rate-card-header font-roboto">
    <h5
      class="rate-card-header__title text-[#0F4471] text-[20px] font-bold mb-[30px] md:text-[18px] xs:mb-[23px] xs:text-[17px]"
    >
      {{ header.CharCode }}
    </h5>
    <p
      class="rate-card-header__name text-[#111111] text-[16px] xl:text-[15px] md:text-[14px]"
    >
      {{ header.Name }}
    </p>
  </div>
</template>

<script>
export default {
  name: "rate-card-header",
  props: {
    header: {
      type: Object,
      required: true,
    },
  },
};
</script>
