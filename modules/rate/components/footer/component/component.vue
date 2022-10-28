<template>
  <div
    class="rate-footer bg-[#F8F8F8] py-[37px] px-[31px] rounded-[16px] flex items-center"
  >
    <vIcon />
    <rateFooterContacts class="rate-footer__contacts ml-[30px]" />
  </div>
</template>

<script>
import vIcon from "~/components/vIcon/component/component.vue";
import rateFooterContacts from "~/modules/rate/components/footer/components/contacts/component.vue";

export default {
  name: "rate-footer",
  components: {
    vIcon,
    rateFooterContacts,
  },
};
</script>
