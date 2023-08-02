<template>
  <h1>Page with post</h1>
  <MyInput v-model="searchQuery" placeholder="Search..." />
  <div class="app__btns">
    <MyButton @click="showDialog" style="width: 300px">Create post</MyButton>
    <MySelect v-model="selectedSort" :options="sortOptions"></MySelect>
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
  <!-- <div ref="observer" class="observer"></div> -->
  <div v-intersection="loadMorePosts" class="observer"></div>
  <!-- <MyPagination v-model="page" :totalPages="totalPages" :page="page" /> -->
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
      posts: [],
      dialogVisible: false,
      isPostsLoading: false,
      selectedSort: "",
      searchQuery: "",
      page: 1,
      limit: 10,
      totalPages: 0,
      sortOptions: [
        // { value: "id", name: "For id" },
        { value: "title", name: "For title" },
        { value: "body", name: "For body" },
      ],
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
    // changePage(pageNumber) {
    //   console.log(pageNumber)
    //   this.page = pageNumber
    // },
    async fetchPosts() {
      try {
        this.isPostsLoading = true
        setTimeout(async () => {
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts",
            {
              params: {
                _page: 1,
                _limit: this.limit,
              },
            }
          )
          this.totalPages = Math.ceil(
            response.headers["x-total-count"] / this.limit
          )
          this.posts = response.data
          this.isPostsLoading = false
        }, 1000)
      } catch (e) {
        alert(e)
      }
    },
    async loadMorePosts() {
      try {
        this.page += 1

        setTimeout(async () => {
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts",
            {
              params: {
                _page: this.page,
                _limit: this.limit,
              },
            }
          )
          this.totalPages = Math.ceil(
            response.headers["x-total-count"] / this.limit
          )
          this.posts = [...this.posts, ...response.data]
        }, 1000)
      } catch (e) {
        alert(e)
      }
    },
  },
  mounted() {
    this.fetchPosts()

    // const options = {
    //   rootMargin: "0px",
    //   threshold: 1.0,
    // }
    // const callback = (entries, observer) => {
    //   if (entries[0].isIntersecting && this.page < this.totalPages) {
    //     this.loadMorePosts()
    //   }
    // }
    // const observer = new IntersectionObserver(callback, options)
    // observer.observe(this.$refs.observer)
  },

  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => {
        return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      })
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    },
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
