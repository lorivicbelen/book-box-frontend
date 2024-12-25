<template>
  <div>
    <v-app>
      <section id="new-book" class="new-book-section">
        <div class="section-wrapper">
          <div class="section-content">
            <p class="section-ttl">Add new book</p>
            <form @submit.prevent="addBook">
              <div>
                <label for="title">Title:</label>
                <input type="text" id="title" v-model="book.title" />
              </div>
              <div>
                <label for="author">Author:</label>
                <v-select
                  v-model="book.author_id"
                  :items="authors"
                  item-text="name"
                  item-value="id"
                ></v-select>
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
                <v-select
                  v-model="book.category_id"
                  :items="categories"
                  item-text="name"
                  item-value="id"
                ></v-select>
              </div>
              <div>
                <label for="genre">Genre:</label>
                <v-select
                  v-model="book.genres"
                  :items="genres"
                  item-text="name"
                  item-value="id"
                  chips
                  multiple
                ></v-select>
              </div>
              <!-- Cover Photo Upload -->
              <div>
                <label for="coverPhoto">Cover Photo:</label>
                <input type="file" ref="coverPhoto" accept="image/*" />
              </div>
              <div class="btn-wrapper">
                <button @click.prevent="$router.go(-1)" class="btn btn-red">
                  Cancel
                </button>
                <button class="btn btn-blue">Add</button>
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
      categories: [],
      genres: [],
      authors: [],
      book: {
        title: "",
        description: "",
        author_id: null,
        category_id: null,
        genres: [],
      },
      coverPhoto: null,
    };
  },
  created() {
    this.fetchCategories();
    this.fetchGenres();
    this.fetchAuthors();
  },
  methods: {
    async fetchCategories() {
      try {
        const resp = await axios.get(`http://127.0.0.1:8000/api/categories`);
        this.categories = resp.data.categories;
        console.log(this.categories);
      } catch (error) {
        console.log("ERROR", error);
      }
    },
    async fetchGenres() {
      try {
        const resp = await axios.get(`http://127.0.0.1:8000/api/genres`);
        this.genres = resp.data.genres;
        console.log(this.genres);
      } catch (error) {
        console.log("ERROR", error);
      }
    },
    async fetchAuthors() {
      try {
        const resp = await axios.get(`http://127.0.0.1:8000/api/authors`);
        this.authors = resp.data.authors;
        console.log(this.authors);
      } catch (error) {
        console.log("ERROR", error);
      }
    },
    async addBook() {
      const formData = new FormData();

      formData.append("title", this.book.title);
      formData.append("description", this.book.description);
      formData.append("author_id", this.book.author_id);
      formData.append("category_id", this.book.category_id);
      formData.append("genres", this.book.genres);

        // Make sure genres is an array
        if (Array.isArray(this.book.genres)) {
          this.book.genres.forEach(genreId => {
            formData.append('genres[]', genreId);  // Append each genre as an individual array element
          });
        }
      // Check if there's a cover photo and append it
      if (this.$refs.coverPhoto.files.length > 0) {
        formData.append("cover_photo", this.$refs.coverPhoto.files[0]);
      }

      try {
        const resp = await axios.post(
          "http://127.0.0.1:8000/api/books",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (resp.status === 200) {
          this.$router.push("/books");
        }
      } catch (error) {
        console.log("ERROR", error);
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
  margin-bottom: 40px;
}

form input,
form textarea {
  border-bottom: 1px solid #d4d4d4;
  padding: 10px;
}

form input:focus-visible,
form textarea:focus-visible {
  outline: none;
  border-bottom: 2px solid #000;
}
</style>
