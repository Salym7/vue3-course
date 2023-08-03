<template>
  <h1>Page with post</h1>
  <MyInput v-model="searchQuery" placeholder="Search..." />
  <div class="app__btns">
    <MySelect v-model="selectedSort" :options="sortOptions"></MySelect>
  </div>
  <MyDialog v-model:show="dialogVisible"> </MyDialog>
  <PostList v-if="!isPostsLoading" :posts="sortedAndSearchedPosts" />
  <div v-else>Loading ....</div>
</template>

<script>
import PostForm from "@/components/PostForm.vue"
import PostList from "@/components/PostList.vue"
import { ref } from "vue"
import usePosts from "@/hooks/usePosts"
import useSortedPosts from "@/hooks/useSortedPosts"
import useSortedPostsAndSearch from "@/hooks/useSortedPostsAndSearch"

export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      dialogVisible: false,
      sortOptions: [
        { value: "title", name: "For title" },
        { value: "body", name: "For body" },
      ],
    }
  },

  methods: {},

  setup(props) {
    const { posts, totalPages, isPostsLoading } = usePosts(10)
    const { sortedPosts, selectedSort } = useSortedPosts(posts)
    const { searchQuery, sortedAndSearchedPosts } =
      useSortedPostsAndSearch(sortedPosts)

    return {
      posts,
      totalPages,
      isPostsLoading,
      sortedPosts,
      selectedSort,
      searchQuery,
      sortedAndSearchedPosts,
    }
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
