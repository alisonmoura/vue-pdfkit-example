<template>
  <div class="row justify-center button-group">
    <button @click="increaseFont">A+</button>
    <button @click="decreaseFont">A-</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fontSize: 100
    }
  },
  methods: {
    increaseFont() {
      this.fontSize += 10
      document.body.style.fontSize = `${this.fontSize}%`
    },
    decreaseFont() {
      this.fontSize -= 10
      document.body.style.fontSize = `${this.fontSize}%`
    }
  }
}
</script>

<style></style>
