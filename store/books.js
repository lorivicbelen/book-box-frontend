export const state = () => ({
  books: [],
  selectedBook: null,
});

export const mutations = {
  setBooks(state, books) {
    state.books = books; // update the state with fetched books
  },
  setSelectedBook(state, book) {
    state.selectedBook = book;
  }
};

export const actions = {
  async fetchBooks({ commit }) {
    try {
      const resp = await fetch("http://127.0.0.1:8000/api/books");
      const data = await resp.json();
      const books = data.books;
      console.log("TEST");
      commit("setBooks", books);
    } catch (error) {
      console.log("Error fetching books:", error);
    }
  },
  async fetchBookById({ commit }, id) {
    try {
      const resp = await fetch(`http://127.0.0.1:8000/api/books/${id}`);
      const data = await resp.json();
      const book = data.book;
      console.log(book);
      commit("setSelectedBook", book);
    } catch (error) {
      console.log("Error fetching book", error);
    }
  },
};

export const getters = {
  allBooks(state) {
    return state.books;
  },
  selectedBook(state){
    return state.selectedBook || { title: "Loading..." };
  }
};
