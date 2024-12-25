<template>
  <div>
    <v-app>
      <pre>
      {{ selectedGenres }}
    </pre
      >
      <section id="update-book" class="updatebook-section">
        <div class="section-wrapper">
          <div class="section-content">
            <p class="section-ttl">Update book</p>
            <form @submit.prevent="updateBook">
              <div>
                <label for="title">Title:</label>
                <input type="text" id="title" v-model="book.title" />
              </div>
              <div>
                <label for="author">Author:</label>
                <select v-model="book.author_id" id="author">
                  <option
                    v-for="author in authors"
                    :key="author.id"
                    :value="author.id"
                  >
                    {{ author.name }}
                  </option>
                </select>
              </div>
              <div>
                <label for="description">Description:</label>
                <textarea
                  name="description"
                  id="description"
                  v-model="book.description"
                ></textarea>
              </div>
              <div>
                <label for="category">Category:</label>
                <select v-model="book.category_id" id="category">
                  <option
                    v-for="category in categories"
                    :key="category.id"
                    :value="category.id"
                  >
                    {{ category.name }}
                  </option>
                </select>
              </div>
              <div>
                <label for="genre">Genre:</label>
                <v-select
                  v-model="selectedGenres"
                  :items="genres"
                  item-text="name"
                  item-value="id"
                  chips
                  multiple
                  class="p-0"
                  hide-details=""
                />
              </div>
              <div class="btn-wrapper">
                <button @click.prevent="$router.go(-1)" class="btn btn-red">Cancel</button>
                <button class="btn btn-blue">Update</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </v-app>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      bookId: null,
      book: {
        title: "",
        description: "",
        category_id: null,
        author_id: null,
        genres: [], // Ensure genres are part of the book object
      },
      categories: [],
      authors: [],
      genres: [], // This holds all genres fetched from the API
      selectedGenres: [], // This holds selected genre IDs
    };
  },
  created() {
    this.bookId = this.$route.params.id
  },
  async mounted() {
    try {
      // Fetch book details
      const bookResponse = await axios.get(
        `http://127.0.0.1:8000/api/books/${this.bookId}`
      );
      this.book = bookResponse.data.book;

      // Fetch categories, authors, and genres
      const [categoriesResponse, authorsResponse, genresResponse] =
        await Promise.all([
          axios.get("http://127.0.0.1:8000/api/categories"),
          axios.get("http://127.0.0.1:8000/api/authors"),
          axios.get("http://127.0.0.1:8000/api/genres"),
        ]);

      // Log genres to debug
      console.log("Genres:", genresResponse.data.genres)

      this.categories = categoriesResponse.data.categories
      this.authors = authorsResponse.data.authors
      this.genres = genresResponse.data.genres

      // Set the selected category and author based on the fetched book data
      this.book.category_id = this.book.category.id
      this.book.author_id = this.book.author.id

      // Set selected genres based on the book's genres
      // Ensure the book's genres are mapped to their IDs
      this.selectedGenres = this.book.genres.map((genre) => genre.id)
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  },
  methods: {
    async updateBook() {
      try {
        // Include selected genres in the book data for update
        const updatedBook = {
          ...this.book,
          genres: this.selectedGenres, // Add the selected genres to the book data
        };

        // Send PUT request to update the book
        await axios.put(
          `http://127.0.0.1:8000/api/books/${this.bookId}`,
          updatedBook
        );
        alert("Book updated successfully!");
      } catch (error) {
        console.error("Error updating book:", error);
        alert("Failed to update book.");
      }
    },
  },
};
</script>

<style scoped>
form {
  border: 1px solid #d4d4d4;
  padding: 30px;
  max-width: 600px;
  margin: 0 auto;
}

form > div:not(:last-child) {
  margin-bottom: 30px;
}

form input,
form select {
  border-bottom: 1px solid rgb(0, 0, 0, 0.87);
  padding: 10px;
}

form textarea {
  border: 1px solid #000;
  padding: 10px;
  vertical-align: bottom;
  margin: 10px 0 0 0;
}

form input:focus-visible,
form textarea:focus-visible .v-input__control {
  outline: none;
  border-bottom: 2px solid #000;
}

</style>
