<template>
  <div v-if="posts.length > 0">
    <h3>Posts list</h3>
    <transition-group name="post-list">
      <PostItem
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @remove="$emit('remove', post)"
      />
    </transition-group>
  </div>
  <h2 v-else style="color: red">Here is empty</h2>
</template>

<script>
import PostItem from "@/components/PostItem.vue"

export default {
  components: {
    PostItem,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.post-list-enter-active,
.post-list-leave-active,
.post-list-move {
  transition: all 0.5s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(50px);
}
</style>
