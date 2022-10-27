<template>
  <li
    class="rate-cards__card bg-[#F8F8F8] drop-shadow-[0_2x_10px_rgba(0,0,0,0.15)] rounded-[16px]"
  >
    <button
      class="rate-cards__button py-[39px] px-[30px] text-left w-full h-full"
    >
      <vIcon icon="cash-payment" />
      <h5
        class="rate-cards__title text-[#0F4471] text-[20px] font-bold mt-[37px] mb-[30px]"
      >
        {{ card.CharCode }}
      </h5>
      <p class="rate-cards__name text-[#111111] text-[16px] mb-[40px]">
        {{ card.Name }}
      </p>
      <ul class="rate-cards__list text-[#1C1C1C] text-[16px] font-medium">
        <li
          class="rate-cards__item pl-[20px] relative after:absolute after:w-[10px] after:h-[10px] after:border-[2px] after:border-[#E02025] after:rounded-[100%] after:left-0 after:top-[50%] after:translate-y-[-40%]"
        >
          Номинал: {{ card.Nominal }}
        </li>
        <li
          class="rate-cards__item pl-[20px] relative after:absolute after:w-[10px] after:h-[10px] after:border-[2px] after:border-[#E02025] after:rounded-[100%] after:left-0 after:top-[50%] after:translate-y-[-40%]"
        >
          Курс: {{ card.Value }}
        </li>
      </ul>
    </button>
  </li>
</template>

<script>
import vIcon from "~/components/vIcon/component/component.vue";

export default {
  name: "rate-cards-card",
  components: {
    vIcon,
  },
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
};
</script>
