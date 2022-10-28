<template>
  <ul
    class="rate-cards grid grid-cols-3 gap-[30px] md:grid-cols-2 md:gap-x-[20px] md:gap-y-[19px] xs:grid-cols-1 xs:gap-y-[20px]"
  >
    <rateCard v-for="card in getCards" :key="card.ID" :card="card" />
  </ul>
</template>

<script>
import rateCard from "~/modules/rate/components/card/component/component.vue";

export default {
  name: "rate-cards",
  components: {
    rateCard,
  },
  computed: {
    getCards() {
      return [
        {
          ID: "R01010",
          NumCode: "036",
          CharCode: "AUD",
          Nominal: 1,
          Name: "Австралийский доллар",
          Value: 39.3322,
          Previous: 38.7929,
        },
        {
          ID: "R01020A",
          NumCode: "944",
          CharCode: "AZN",
          Nominal: 1,
          Name: "Азербайджанский манат",
          Value: 36.1339,
          Previous: 36.078,
        },
        {
          ID: "R01035",
          NumCode: "826",
          CharCode: "GBP",
          Nominal: 1,
          Name: "Фунт стерлингов Соединенного королевства",
          Value: 70.3839,
          Previous: 69.3917,
        },
        {
          ID: "R01060",
          NumCode: "051",
          CharCode: "AMD",
          Nominal: 100,
          Name: "Армянских драмов",
          Value: 15.3808,
          Previous: 15.2983,
        },
        {
          ID: "R01090B",
          NumCode: "933",
          CharCode: "BYN",
          Nominal: 1,
          Name: "Белорусский рубль",
          Value: 24.8042,
          Previous: 24.7628,
        },
      ];
    },
  },
};
</script>
