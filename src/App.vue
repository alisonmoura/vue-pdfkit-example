<template>
  <div id="app">
    <theme-changer></theme-changer>
    <div class="text-center">
      <img alt="Vue logo" src="./assets/logo.png" />
    </div>
    <font-sizer></font-sizer>
    <home></home>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import FontSizer from './components/FontSizer.vue'
import ThemeChanger from './components/ThemeChanger.vue'

export default {
  name: 'App',
  components: {
    Home,
    FontSizer,
    ThemeChanger
  }
}
</script>

<style>
#app {
  width: 65%;
  margin: auto;
  margin-top: 60px;
}

* {
  outline: none;
}
body {
  font-size: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body.dark {
  background-color: #2c3e50;
  color: white;
}
h1 {
  font-size: 2rem;
}
h3 {
  font-size: 1.2rem;
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  line-height: 2.5;
  margin: 0 10px;
}
a {
  color: #42b983;
}
button {
  padding: 10px 30px;
  border: none;
  background-color: #42b983;
  color: white;
  font-size: 0.8rem;
  border-radius: 10px;
  font-weight: bold;
  transition: 0.2s;
  cursor: pointer;
}
button:active {
  background-color: #2c3e50;
}
.button-group button:first-child {
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}
.button-group button:last-child {
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}
.row {
  display: flex;
}
.row.justify-center {
  justify-content: center;
}
.row.justify-end {
  justify-content: flex-end;
}
.text-center {
  text-align: center;
}
.text-justify {
  text-align: justify;
}
[markdown] {
  background-color: rgb(31, 31, 31);
  padding: 30px;
  border-radius: 10px;
  color: white;
}
</style>
