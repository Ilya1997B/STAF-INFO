<template>
  <select class="dropbtn" :value="modelValue" @change="changeOptions">
    <option disabled value="">Выбери из списка</option>
    <option 
    v-for="option in options" 
    :key="option.value"
    :value="option.value"
    >
    {{ option.name }}
  </option>
  </select>
</template>

<script>
export default {
  name: 'MySelect',
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    }
  },
  methods: {
    changeOptions(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
.dropbtn {
    /* background-color: white; */
    color: teal;
    padding: 5px;
    font-size: 16px;
    border-radius: 1px solid teal;
    cursor: pointer;
    /* border: teal; */
    height: 40px;
    margin-top: 14px;
}
</style>