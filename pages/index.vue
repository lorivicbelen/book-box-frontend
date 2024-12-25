<template>
  <div>
    <section id="lead" class="lead-section section-m-y">
      <div class="section-wrapper p-x">
        <div class="section-content">
          <p class="ttl">
            Welcome to BookBox!<br />Your go-to space for sharing thoughts and
            ratings on your favorite books.
          </p>
          <p class="desc">
            Join our community to explore, like, comment, and connect over the
            stories that inspire you.
          </p>
        </div>
      </div>
    </section>
    <section id="interaction" class="interaction-section section-m-y">
      <div class="section-wrapper p-x p-y">
        <div class="section-content">
          <ul class="list">
            <li class="item">
              <p class="ttl">Engage</p>
            </li>
            <li class="item">
              <p class="ttl">Explore</p>
            </li>
            <li class="item">
              <p class="ttl">Discover</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section id="featured" class="featured-section section-m-y">
      <div class="section-wrapper p-x">
        <div class="section-content">
          <p class="section-ttl">Books of the day!</p>
          <div class="cards">
            <div class="card">
              <p class="title">Atomic Habits</p>
              <p class="author">Someone</p>
              <p class="desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tempore ut labore facere quis illo odio accusamus nihil at ullam
                dolorem!
              </p>
            </div>
            <div class="card">
              <p class="title">Atomic Habits</p>
              <p class="author">Someone</p>
              <p class="desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tempore ut labore facere quis illo odio accusamus nihil at ullam
                dolorem!
              </p>
            </div>
            <div class="card">
              <p class="title">Atomic Habits</p>
              <p class="author">Someone</p>
              <p class="desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tempore ut labore facere quis illo odio accusamus nihil at ullam
                dolorem!
              </p>
            </div>
          </div>
          <NuxtLink to="/books"
          class="text-center btn btn-black"
            >See all books</NuxtLink
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
/* lead */
.lead-section .ttl {
  font-size: 40px;
  text-align: center;
  margin-bottom: 8px;
  color: var(--main-color);
}

.lead-section .desc {
  text-align: center;
}

/* interaction */
.interaction-section {
  background: var(--main-sub-color);
  color: #fff;
}

.interaction-section .list {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

/* featured */
.featured-section .cards {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 8px;
}

.featured-section .cards .card {
  width: 300px;
  padding: 10px;
  border: 1px solid #000;
}
</style>
