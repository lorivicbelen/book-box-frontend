<template>
  <div>
    <section id="author" class="author-section section-m-y">
        <div class="section-wrapper p-x">
            <div class="section-content">
                <p class="section-ttl">Author Details</p>
                <div class="detail-box">
                    <p class="author">{{ authorData.name }}</p>
                    <p class="bio">{{ authorData.bio }}</p>
                </div>
                <NuxtLink class="link" to="">View {{ authorData.name }}'s books</NuxtLink>
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
      authorId: null,
      authorData: [],
    };
  },
  created() {
    this.authorId = this.$route.params.id;
    this.fetchAuthor();
  },
  methods: {
    async fetchAuthor() {
      const resp = await axios.get(
        `http://127.0.0.1:8000/api/authors/${this.authorId}`
      );
      this.authorData = resp.data.author;
    },
  },
};
</script>

<style scoped>
.detail-box {
    border: 1px solid #000;
    padding: 10px;
    margin-bottom: 20px;
}

.detail-box .author {
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 8px;
}
</style>
