<template>
  <ul class="v-navbar__links flex items-center gap-x-[31px]">
    <vNavbarLink v-for="link in getLinks" :key="link.to" :link="link" />
  </ul>
</template>

<script>
import vNavbarLink from "~/components/vNavbar/components/link/component.vue";

export default {
  name: "vNavbarLinks",
  components: {
    vNavbarLink,
  },
  computed: {
    getLinks() {
      return [
        {
          to: "/",
          name: "Калькулятор",
        },
        {
          to: "/rate",
          name: "Курс рубля",
        },
      ];
    },
  },
};
</script>
