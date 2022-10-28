<template>
  <div
    class="rate-footer bg-[#F8F8F8] py-[37px] px-[31px] rounded-[16px] flex items-center xl:px-[25px] xl:py-[40px] md:px-[25px] md:py-[30px] xs:px-[28px] xs:py-[32px] xs:flex-col xs:items-start"
  >
    <vIcon icon="info-primary" type="primary" />
    <rateFooterContacts
      class="rate-footer__contacts ml-[30px] xl:ml-[20px] md:ml-[25px] xs:ml-[0px] xs:mt-[30px]"
    />
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
