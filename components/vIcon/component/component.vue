<template>
  <div
    class="v-icon flex items-center justify-center w-[50px] h-[50px] border-[3px] rounded-tr-[15px] rounded-bl-[15px] xl:w-[45px] xl:h-[45px] md:w-[40px] md:h-[40px] xs:w-[42px] xs:h-[42px]"
    :class="getBorderColorClass"
  >
    <component :is="getIcon"></component>
  </div>
</template>

<script>
import vIconInfoDanger from "~/components/vIcon/components/info-danger/component.vue";
import vIconInfoPrimary from "~/components/vIcon/components/info-primary/component.vue";

const ICONS = {
  "info-danger": "info-danger",
  "info-primary": "info-primary",
};

export default {
  name: "v-icon",
  components: {
    "info-danger": vIconInfoDanger,
    "info-primary": vIconInfoPrimary,
  },
  props: {
    icon: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    getBorderColorClass() {
      return `v-icon--view-${this.type}`;
    },

    getIcon() {
      switch (this.icon) {
        case ICONS["info-danger"]:
          return ICONS["info-danger"];
        case ICONS["info-primary"]:
          return ICONS["info-primary"];
        default:
          return "";
      }
    },
  },
};
</script>

<style lang="scss">
.v-icon {
  &--view-danger {
    border-color: #e02025;
  }

  &--view-primary {
    border-color: #0f4471;
  }
}
</style>
