<template>
  <div class="post">
    <div>
      <div>{{ post.id }}</div>
      <div><strong>Title:</strong> {{ post.title }}</div>
      <div><strong>Description:</strong>{{ post.body }}</div>
    </div>
    <div class="post__btns">
      <MyButton class="btn-delete" @click.prevent="$emit('remove', post)"
        >Delete</MyButton
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },

  methods: {
    deletePost() {},
  },
}
</script>

<style scoped>
.post {
  margin-top: 15px;
  padding: 15px;
  border: 3px solid teal;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
