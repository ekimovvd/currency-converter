<template>
  <li
    class="rate-card bg-[#F8F8F8] drop-shadow-[0_2x_10px_rgba(0,0,0,0.15)] rounded-[16px]"
  >
    <button
      class="rate-card__button py-[39px] px-[30px] text-left w-full h-full"
    >
      <vIcon icon="cash-payment" />
      <rateCardHeader
        class="rate-card__header mt-[37px] mb-[40px]"
        :header="card"
      />
      <rateCardList :list="getList" />
    </button>
  </li>
</template>

<script>
import vIcon from "~/components/vIcon/component/component.vue";
import rateCardHeader from "~/modules/rate/components/card/components/header/component.vue";
import rateCardList from "~/modules/rate/components/card/components/list/component.vue";

export default {
  name: "rate-card",
  components: {
    vIcon,
    rateCardHeader,
    rateCardList,
  },
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  computed: {
    getList() {
      return Object.keys(this.card)
        .map((key) => {
          return key === "Nominal" || key === "Value"
            ? {
                id: key,
                value: this.card[key],
                name: key === "Nominal" ? "Номинал" : "Курс",
              }
            : {};
        })
        .filter((element) => Object.keys(element).length);
    },
  },
};
</script>
