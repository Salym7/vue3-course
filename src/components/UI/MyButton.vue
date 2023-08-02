<template>
  <button class="btn"><slot></slot></button>
</template>

<script>
export default {
  name: "MyButton",
}
</script>

<style scoped>
.btn {
  width: 100%;
  border: 1px solid teal;
  padding: 10px;
  border-radius: 5px;
  background: teal;
}
.btn-delete {
  background: rgb(112, 2, 2);
  color: #fff;
}
</style>
