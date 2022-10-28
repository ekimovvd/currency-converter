<template>
  <div class="v-navbar bg-[#F8F8F8] py-[16px]">
    <div class="v-navbar__container container mx-auto">
      <vNavbarLinks />
    </div>
  </div>
</template>

<script>
import vNavbarLinks from "~/components/vNavbar/components/links/component.vue";

export default {
  name: "vNavbar",
  components: {
    vNavbarLinks,
  },
};
</script>
