<template>
  <li class="v-navbar__link">
    <nuxt-link
      class="v-navbar__text text-[#666666] text-[12px] font-medium font-['Roboto'] flex items-center justify-center"
      :to="link.to"
      active-class="text-[#343434]"
    >
      {{ link.name }}
    </nuxt-link>
  </li>
</template>

<script>
export default {
  name: "vNavbarLink",
  props: {
    link: {
      type: Object,
      required: true,
    },
  },
};
</script>
