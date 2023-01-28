<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'MyButton',
}
</script>

<style scoped>
.btn {
  align-self: flex-end;
  /* margin-top: 15px; */
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
  width: 150px;
  height: 50px;
  flex: 1 1 auto;
  margin: 15px 0 10px 4px;
}
.btn:hover {
  background-color: rgb(221, 253, 221);
}
</style>