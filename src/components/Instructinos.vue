<template>
  <div>
    <h3>Dependencies</h3>
    <ul>
      <li>Vue 2</li>
      <li>PDFKit</li>
      <li>Blob Stream</li>
      <li>Browser File Downloader</li>
    </ul>
    <h3>Setup</h3>
    <p class="instructions text-justify">
      First of all, we'll need to change some
      <span>webpack</span> configurations. As we are using
      <span>Vue CLI 3</span> for scaffolding your project, we have to create the
      <span>vue.config.js</span> file on the project's root folder:
    </p>
    <vue-config-snippet></vue-config-snippet>
  </div>
</template>

<script>
import VueConfigSnippet from '@/components/snippets/VueConfigSnippet'
export default {
  components: {
    VueConfigSnippet
  }
}
</script>

<style scoped>
.instructions {
  line-height: 2;
}
span {
  font-weight: bold;
  color: #42b983;
}
</style>
