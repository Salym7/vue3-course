<template>
  <form class="form" @submit.prevent>
    <h4>Create post</h4>
    <MyInput v-model="post.title" placeholder="title" />
    <MyInput v-model="post.body" placeholder="body" />

    <MyButton @click="createPost">Create</MyButton>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now()
      this.$emit("create", this.post)
      this.post = {
        title: "",
        body: "",
      }
    },
  },
}
</script>

<style scoped>
.form {
  padding: 25px;
}
</style>
