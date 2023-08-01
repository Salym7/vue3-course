<template>
  <div class="container">
    <form class="form">
      <h4>Create post</h4>
      <input class="input" type="text" placeholder="title" />
      <input class="input" type="text" placeholder="body" />
      <button class="button">Create</button>
    </form>

    <div class="post" v-for="post in posts">
      <div><strong>Title:</strong> {{ post.title }}</div>
      <div><strong>Description:</strong>{{ post.body }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        { id: 1, title: "JavaScript", body: "js description" },
        { id: 2, title: "Laravel", body: "php description" },
        { id: 3, title: "Vue", body: "es6 description" },
      ],
    }
  },

  methods: {},
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
.post {
  margin-top: 15px;
  padding: 15px;
  border: 3px solid teal;
}
.form {
  width: 50%;
  padding: 25px 0;
}
.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
}
.button {
  width: 50%;
  border: 1px solid teal;
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
  margin-left: 50%;
  background: teal;
}
</style>
