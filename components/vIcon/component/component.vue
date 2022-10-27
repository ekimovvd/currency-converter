<template>
  <div
    class="v-icon flex items-center justify-center border-[3px] rounded-tr-[15px] rounded-bl-[15px]"
    :class="getIconViewClass"
  >
    <component :is="getIcon"></component>
  </div>
</template>

<script>
import vIconInfo from "~/components/vIcon/components/info/component.vue";
import vIconCashPayment from "~/components/vIcon/components/cash-payment/component.vue";

const ICONS = {
  info: "info",
  "cash-payment": "cash-payment",
};

export default {
  name: "v-icon",
  components: {
    info: vIconInfo,
    "cash-payment": vIconCashPayment,
  },
  props: {
    icon: {
      type: String,
      default: "info",
    },
  },
  computed: {
    getIconViewClass() {
      return `v-icon--view-${this.icon}`;
    },

    getIcon() {
      switch (this.icon) {
        case ICONS.info:
          return ICONS.info;
        case ICONS["cash-payment"]:
          return ICONS["cash-payment"];
        default:
          return "";
      }
    },
  },
};
</script>

<style lang="scss">
.v-icon {
  &--view-info {
    width: 50px;
    height: 50px;
    border-color: #e02025;
  }

  &--view-cash-payment {
    width: 70px;
    height: 70px;
    border-color: #0f4471;
  }
}
</style>
