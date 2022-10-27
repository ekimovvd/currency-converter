<template>
  <div
    class="rate-footer bg-[#F8F8F8] py-[37px] px-[31px] rounded-[16px] flex items-center"
  >
    <vIcon />
    <div class="rate-footer__contacts ml-[30px]">
      <span class="rate-footer__text text-[#0F4471] text-[20px] font-bold">
        Телефон: <a href="tel:8(800)8889028">8 (800) 888-90-28</a>, email:
        <a href="mailto:info@example.ru">info@example.ru</a>.
      </span>
    </div>
  </div>
</template>

<script>
import vIcon from "~/components/vIcon/component/component.vue";

export default {
  name: "rate-footer",
  components: {
    vIcon,
  },
};
</script>
