<template>
  <div>
    <vNavbar />
    <nuxt />
  </div>
</template>

<script>
import vNavbar from "~/components/vNavbar/component/component.vue";

export default {
  components: {
    vNavbar,
  },
  data() {
    return {
      valutes: [],
    };
  },
  async mounted() {
    try {
      this.valutes = await this.$axios.get("/daily_json.js").then((res) => {
        console.log(res);
        return res.data.Valute;
      });
    } catch (e) {
      console.log(e);
    }
  },
};
</script>
