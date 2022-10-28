<template>
  <li class="v-navbar-link">
    <nuxt-link
      class="v-navbar-link__text text-[#666666] text-[12px] font-medium font-roboto flex items-center justify-center"
      :to="link.to"
    >
      {{ link.name }}
    </nuxt-link>
  </li>
</template>

<script>
export default {
  name: "v-navbar-link",
  props: {
    link: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.v-navbar-link {
  &__text {
    &.nuxt-link-exact-active {
      color: #343434;
    }
  }
}
</style>
