<template>
  <h1>Page with post</h1>
  <MyInput
    :model-value="searchQuery"
    @update:model-value="setSearchQuery"
    placeholder="Search..."
  />
  <div class="app__btns">
    <MyButton @click="showDialog" style="width: 300px">Create post</MyButton>
    <MySelect
      :model-value="selectedSort"
      @update:model-value="setSelectedSort"
      :options="sortOptions"
    ></MySelect>
  </div>
  <MyDialog v-model:show="dialogVisible">
    <post-form @create="createPost" />
  </MyDialog>
  <PostList
    v-if="!isPostsLoading"
    :posts="sortedAndSearchedPosts"
    @remove="removePost"
  />
  <div v-else>Loading ....</div>
  <div v-intersection="loadMorePosts" class="observer"></div>
</template>

<script>
import axios from "axios"
import PostForm from "@/components/PostForm.vue"
import PostList from "@/components/PostList.vue"
import { mapState, mapGetters, mapActions, mapMutations } from "vuex"

export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      dialogVisible: false,
    }
  },

  methods: {
    ...mapMutations({
      setPage: "post/setPage",
      setSearchQuery: "post/setSearchQuery",
      setSelectedSort: "post/setSelectedSort",
    }),
    ...mapActions({
      loadMorePosts: "post/loadMorePosts",
      fetchPosts: "post/fetchPosts",
    }),

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
  },
  mounted() {
    this.fetchPosts()
  },

  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      isPostsLoading: (state) => state.post.isPostsLoading,
      selectedSort: (state) => state.post.selectedSort,
      searchQuery: (state) => state.post.searchQuery,
      page: (state) => state.post.page,
      limit: (state) => state.post.limit,
      totalPages: (state) => state.post.totalPages,
      sortOptions: (state) => state.post.sortOptions,
    }),

    ...mapGetters({
      sortedPosts: "post/sortedPosts",
      sortedAndSearchedPosts: "post/sortedAndSearchedPosts",
    }),
  },

  watch: {
    // page() {
    //   this.fetchPosts()
    // },
    // selectedSort(newValue) {
    //   this.posts.sort((post1, post2) => {
    //     return post1[newValue]?.localeCompare(post2[newValue])
    //   })
    // },
  },
}
</script>

<style>
.app__btns {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}
.observer {
  height: 30px;
}
</style>
