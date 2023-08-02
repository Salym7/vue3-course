<template>
  <select class="select" :value="modelValue" @change="changeOption">
    <option disabled value="">choose from list</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "MySelect",
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOption(event) {
      this.$emit("update:modelValue", event.target.value)
    },
  },
}
</script>

<style scoped>
.select {
  width: 200px;
  height: 37px;
  border: 1px solid teal;
  padding: 10px;
  border-radius: 5px;
  background: rgb(97, 123, 163);
}
</style>
