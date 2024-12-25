<template>
  <div>
    <header class="p-x">
      <p class="brand">BookBox</p>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Books</li>
        </ul>
      </nav>
    </header>
    <Nuxt />
    <footer>
      <section>
        <div class="section-wrapper p-x p-y">
          <div class="section-content">
            <p>BookBox 2024</p>
          </div>
        </div>
      </section>
    </footer>
  </div>
</template>

<script></script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap");

:root {
  --main-color: #000;
  --main-sub-color: #000;
}

*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html,
body {
  min-height: 100vh;
}

body {
  font-family: "Quicksand", serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  background: #f5eded;
  position: relative;
  padding-bottom: 80px;
}

header {
  display: flex;
  align-content: center;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
}

nav ul {
  display: flex;
  align-content: center;
  gap: 20px;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
  display: block;
}

.max-w-600 {
  max-width: 600px;
}

.p-x {
  padding-left: 3%;
  padding-right: 3%;
}

.p-y {
  padding-top: 60px;
  padding-bottom: 60px;
}

.m-x-auto {
  margin-left: auto;
  margin-right: auto;
}

.section-m-y {
  margin-top: 60px;
  margin-bottom: 60px;
}

.section-wrapper {
  max-width: 1000px;
  margin: 0 auto;
}

.text-left {
  text-align: left;
}

.text-center {
  text-align: center;
}

.text-right {
  text-align: right;
}

.link {
  padding-bottom: 2px;
  border-bottom: 1px solid #000;
  width: fit-content;
}

.btn {
  display: block;
  width: 100%;
  max-width: 300px;
  margin: 20px auto;
  text-align: center;
  padding: 10px;
}

.btn.btn-black {
  background: #000;
  color: #fff;
}

.btn.btn-red {
  background: #fd1044;
  color: #fff;
}

.btn.btn-blue {
  background: #295f98;
  color: #fff;
}

.btn.outline-blue {
  border: 1px solid #295f98;
  background: #fff;
}

.section-ttl {
  text-align: center;
  font-size: 26px;
  margin-bottom: 20px;
}

.p-0 {
  padding: 0;
}

footer {
  background: #2c2c2c;
  color: #c5c5c5;
  text-align: center;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
}

footer .p-y {
  padding-top: 30px;
  padding-bottom: 30px;
}

form > div {
  display: flex;
  flex-direction: column;
}

form > div:not(:last-child) {
  margin-bottom: 30px;
}

.btn-wrapper,
form > .btn-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 20px;
}

.btn-wrapper .btn,
form > .btn-wrapper .btn {
  display: inline-block;
  width: 50%;
  margin: 0;
}
</style>
