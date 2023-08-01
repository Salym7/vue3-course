<template>
  <div class="container">
    <h1>Page with post</h1>
    <MyButton @click="showDialog" style="margin: 15px 0">Create post</MyButton>
    <MyDialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </MyDialog>
    <PostList v-if="!isPostsLoading" :posts="posts" @remove="removePost" />
    <div v-else>Loading ....</div>
  </div>
</template>

<script>
import axios from "axios"
import PostForm from "@/components/PostForm.vue"
import PostList from "@/components/PostList.vue"

export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [
        { id: 1, title: "JavaScript", body: "js description" },
        { id: 2, title: "Laravel", body: "php description" },
        { id: 3, title: "Vue", body: "es6 description" },
      ],
      dialogVisible: false,
      isPostsLoading: false,
    }
  },

  methods: {
    createPost(post) {
      this.posts.push(post)
      this.dialogVisible = false
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id)
    },
    showDialog() {
      this.dialogVisible = true
    },
    async fetchPosts() {
      try {
        this.isPostsLoading = true
        setTimeout(async () => {
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts?_limit=10"
          )
          this.posts = response.data
          this.isPostsLoading = false
        }, 1000)
      } catch (e) {
        alert(e)
      }
    },
  },
  mounted() {
    this.fetchPosts()
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 15px;
}
</style>
