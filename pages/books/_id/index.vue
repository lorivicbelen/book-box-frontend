<template>
  <div>
    <v-app>
      <section id="book-detail">
        <div class="section-wrapper">
          <div class="section-content">
            <div class="text-center">
              <v-progress-circular
                v-if="!book"
                indeterminate
                color="blue"
                class="mx-auto"
              ></v-progress-circular>
            </div>
            <div v-if="book" class="book-box">
              <dl>
                <dt>Title:</dt>
                <dd>{{ book.title }}</dd>
              </dl>
              <dl>
                <dt>Description:</dt>
                <dd>{{ book.description }}</dd>
              </dl>
              <dl>
                <dt>Author:</dt>
                <dd>{{ book.author?.name }}</dd>
              </dl>
              <dl>
                <dt>Category:</dt>
                <dd>{{ book.category?.name }}</dd>
              </dl>
              <dl>
                <dt class="m-0">Genres:</dt>
                <dd class="genres">
                  <v-chip v-for="genre in book.genres" :key="genre.id">
                    {{ genre.name }}
                  </v-chip>
                </dd>
              </dl>
              <div class="btn-wrapper">
                <NuxtLink :to="`${bookId}/edit`" class="btn btn-blue"
                  >Edit</NuxtLink
                >
                <button @click="deleteBook()" class="btn btn-red">
                  Delete
                </button>
              </div>
            </div>
            <v-divider class="section-m-y"></v-divider>
            <p class="text-right">
              <v-icon>mdi-heart</v-icon>==number of likes==
            </p>
            <div class="comments">
              <p>Comments ==number of comments==</p>
              <ul>
                <li>
                  <div>
                    <p>User</p>
                    <p>Its a great book!</p>
                  </div>
                </li>
                <li>
                  <div>
                    <p>Dennis</p>
                    <p>Nice</p>
                  </div>
                </li>
                <li>
                  <div>
                    <p>Jen</p>
                    <p>This book is really a good read, I recommend it!</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </v-app>
  </div>
</template>

<script>
export default {
  computed: {
    book() {
      return this.$store.getters["books/selectedBook"];
    },
  },
  created() {
    this.bookId = this.$route.params.id;
    this.$store.dispatch("books/fetchBookById", this.bookId);
  },
};
</script>

<style scoped>
.book-box {
  border: 1px solid #d4d4d4;
  padding: 30px;
  max-width: 600px;
  margin: 0 auto;
}

.book-box > p:not(:last-child) {
  margin-bottom: 30px;
}

.comments ul li {
  padding: 10px;
  margin-left: 10px;
}

.comments ul li div {
  border-left: 2px solid grey;
  padding: 4px 10px;
}

.genres {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px 0;
}

dl {
  margin-bottom: 20px;
}

dl dd {
  border-bottom: 1px solid #dadada;
  padding: 4px;
}

.m-0 {
  margin: 0;
}
</style>
