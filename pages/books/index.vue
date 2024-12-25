<template>
  <div>
    <section id="all-books" class="all-book-section section-m-y">
      <div class="section-wrapper">
        <div class="section-content">
          <div class="cards" v-if="books.length > 0">
            <div class="card" v-for="book in books" :key="book.id">
              <NuxtLink :to="`/books/${book.id}`">
                <p class="ttl">{{ book.title }}</p>
                <p class="author">{{ book.author }}</p>
                <p class="description">{{ book.description }}</p>
              </NuxtLink>
            </div>
          </div>
          <p v-else class="text-center">No books yet...</p>
          <NuxtLink to="/books/new" class="btn btn-blue">Add Book</NuxtLink>
        </div>
      </div>
    </section>
    <pre>
      test
    </pre>
  </div>
</template>

<script>
// export default {
//   data () {
//     return {
//       allBooks: []
//     }
//   },
//   created () {
//     this.fetchBooks()
//   },
//   methods: {
//     async fetchBooks () {
//       try {
//         const resp = await fetch('http://127.0.0.1:8000/api/books')
//         const data = await resp.json()
//         this.allBooks = data.books
//         console.log('BOOKS', this.allBooks)
//       } catch (error) {
//         console.log(error)
//       }
//     }
//   }
// }

export default {
  computed: {
    books() {
      // return this.$store.state.books.books;
      return this.$store.getters["books/allBooks"];
    },
  },
  created() {
    this.$store.dispatch("books/fetchBooks");
  },
};
</script>

<style scoped>
.all-book-section .cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.all-book-section .cards .card {
  width: calc(calc(100% / 3) - 40px);
  padding: 10px;
  border: 1px solid #000;
}
</style>
