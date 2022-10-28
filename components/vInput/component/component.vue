<template>
  <input
    class="v-input border border-[#DFDFDF] rounded-[5px] outline-none px-[20px] py-[10px]"
    :type="type"
    :placeholder="placeholder"
    :id="id"
    :value="value"
    :disabled="disabled"
    @input="onChangeValue"
  />
</template>

<script>
export default {
  name: "v-input",
  props: {
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
    value: {
      type: [String, Number],
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onChangeValue(event) {
      this.$emit(
        "change",
        this.type === "number"
          ? !isNaN(parseInt(event.target.value))
            ? parseInt(event.target.value)
            : ""
          : event.target.value
      );
    },
  },
};
</script>

<style lang="scss">
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
