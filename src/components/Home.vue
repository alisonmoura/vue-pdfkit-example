<template>
  <div class="hello">
    <h1 class="text-center">{{ title }}</h1>
    <p class="text-center">
      An example for generating build generate and download a PDF file full
      client-side using
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">Vue</a> and
      <a href="https://pdfkit.org" target="_blank" rel="noopener">PDFKit</a>.
    </p>
    <instructions></instructions>
  </div>
</template>

<script>
import Instructions from './Instructinos'

export default {
  name: 'Home',
  components: {
    Instructions
  },
  data() {
    return {
      title: 'Vue + PDFKit Example'
    }
  }
}
</script>
