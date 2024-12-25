<template>
  <div>
    <section id="authors" class="authors-section section-m-y">
      <div class="section-wrapper p-x">
        <div class="section-content">
            <p class="section-ttl">Authors</p>
            <ul class="author_list">
                <li class="author_item" v-for="author in authors" :key="author.id">
                    <NuxtLink :to="`authors/${author.id}`">{{ author.name }}</NuxtLink>
                </li>
            </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      authors: [],
    };
  },
  created() {
    this.fetchAuthors();
  },
  methods: {
    async fetchAuthors() {
      try {
        const resp = await axios.get("http://127.0.0.1:8000/api/authors");
        this.authors = await resp.data.authors;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.author_item {
    margin: 20px 0;
    border: 1px solid #000;
    padding: 10px;
}
</style>
